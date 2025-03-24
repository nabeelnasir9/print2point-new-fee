import { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, PaymentElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";
import { toast } from "react-toastify";

// Stripe publishable key
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);

const PaymentForm = ({ setPaymentModal, setCodeSendSuccessfullyModal, clientSecret }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [paymentMethods, setPaymentMethods] = useState([]);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);
  const [useNewCard, setUseNewCard] = useState(false); // Flag to determine if the user wants to use a new card

  // Fetch saved payment methods on component load
  useEffect(() => {
    const fetchPaymentMethods = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/printjob/customer-payment-methods`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("use_access_token")}`, // Ensure token is passed correctly
          },
        });
        setPaymentMethods(response.data.paymentMethods); // Save the payment methods to state
      } catch (err) {
        console.error("Error fetching saved payment methods:", err);
        toast.error("Failed to fetch saved payment methods.");
      }
    };

    fetchPaymentMethods();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || (!elements && useNewCard)) {
      return;
    }

    setLoading(true);
    setError(null);

    try {
      if (useNewCard) {
        // Confirm payment using PaymentElement
        const paymentElement = elements.getElement(PaymentElement);
        if (!paymentElement) {
          throw new Error("Payment form is not fully loaded.");
        }

        const { error, paymentIntent } = await stripe.confirmPayment({
          elements,
          confirmParams: {
            return_url: document.location.origin, // Replace with your actual success URL
          },
          redirect: "if_required",
        });

        if (error) {
          throw new Error(error.message);
        }

        if (paymentIntent && paymentIntent.status === "succeeded") {
          toast.success("Payment successful! Confirmation Code");
          setPaymentModal(false);
          setCodeSendSuccessfullyModal(true); // Show the confirmation code modal
        } else {
          throw new Error("Payment failed or requires additional steps.");
        }
      } else if (selectedPaymentMethod) {
        // Confirm payment using saved card
        const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
          payment_method: selectedPaymentMethod,
        });

        if (error) {
          throw new Error(error.message);
        }

        if (paymentIntent && paymentIntent.status === "succeeded") {
          toast.success("Payment successful! Confirmation Code");
          setPaymentModal(false);
          setCodeSendSuccessfullyModal(true); // Show the confirmation code modal
        } else {
          throw new Error("Payment failed or requires additional steps.");
        }
      } else {
        throw new Error("Please select a payment method.");
      }
    } catch (err) {
      setError(err.message);
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 style={{ marginBottom: "10px", textTransform: "uppercase", color: "#606060" }}>Payment:</h2>
      
      {/* Option to use saved cards */}
      <div style={{ marginBottom: "10px" }}>
        <h3>Select Payment Method</h3>
        {paymentMethods.length > 0 ? (
          <div>
            {paymentMethods.map((paymentMethod) => (
              <div key={paymentMethod.id}>
                <input
                  type="radio"
                  id={paymentMethod.id}
                  name="payment-method"
                  value={paymentMethod.id}
                  onChange={() => {
                    setSelectedPaymentMethod(paymentMethod.id);
                    setUseNewCard(false); // If a saved card is selected, don't show the PaymentElement
                  }}
                />
                <label htmlFor={paymentMethod.id}>
                  {paymentMethod.card.brand} ending in {paymentMethod.card.last4}
                </label>
              </div>
            ))}
          </div>
        ) : (
          <p>No saved payment methods found.</p>
        )}
      </div>

      {/* Option to use a new card */}
      <div>
        <label>
          <input
            type="radio"
            name="payment-method"
            onChange={() => {
              setUseNewCard(true);
              setSelectedPaymentMethod(null); // Deselect any saved cards
            }}
          />
          Use a new card
        </label>
      </div>

      {/* Only show PaymentElement if user selects "Use a new card" */}
      {useNewCard && (
        <div style={{ marginBottom: "10px" }}>
          <PaymentElement />
        </div>
      )}

      {error && <div style={{ color: "red" }}>{error}</div>}

      <button
        type="submit"
        className="modal-footer-next-btn"
        disabled={!stripe || loading || !(selectedPaymentMethod || useNewCard)}
      >
        {loading ? "Processing..." : "Next"}
      </button>
    </form>
  );
};

const App = ({ id, setPaymentModal, setCodeSendSuccessfullyModal }) => {
  const [clientSecret, setClientSecret] = useState(null);
  const [loading, setLoading] = useState(true);
  const agent_token = localStorage.getItem("use_access_token");

  useEffect(() => {
    const fetchClientSecret = async () => {
      try {
        if (!agent_token) {
          toast.error("Please login to your account and try again");
          return;
        }

        const response = await axios.post(
          `${process.env.REACT_APP_API_URL}/printjob/initiate-payment/`,
          { job_id: id },
          {
            headers: {
              Authorization: `Bearer ${agent_token}`,
            },
          }
        );

        const { clientSecret } = response.data;
        setClientSecret(clientSecret);
      } catch (err) {
        toast.error("Failed to initialize payment");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchClientSecret();
  }, [id, agent_token]);

  if (loading) {
    return <div>Loading payment details...</div>;
  }

  if (!clientSecret) {
    return <div>Failed to initialize payment. Please try again.</div>;
  }

  return (
    <Elements stripe={stripePromise} options={{
      clientSecret,
      appearance: {
        theme: "stripe",
      },
      paymentMethodOrder: ["card"], // Order of payment methods
      locale: "auto", // Ensures region-specific methods show up
      terms: {card:'never'}, // Hide terms
    }}>
      <PaymentForm
        setPaymentModal={setPaymentModal}
        setCodeSendSuccessfullyModal={setCodeSendSuccessfullyModal}
        clientSecret={clientSecret}
      />
    </Elements>
  );
};

export default App;
