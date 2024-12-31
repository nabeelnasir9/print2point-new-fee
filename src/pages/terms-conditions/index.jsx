import Navbar from "../../components/navbar";

const TermsAndConditions = () => {
  const containerStyle = {
    margin: "20px auto",
    maxWidth: "800px",
    padding: "20px",
    // fontFamily: "Arial, sans-serif",
    lineHeight: "1.6",
    backgroundColor: "#f9f9f9",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  };

  const headingStyle = {
    color: "#333",
    textAlign: "center",
    marginBottom: "20px",
  };

  const sectionHeadingStyle = {
    color: "#444",
    margin: "20px 0 10px",
    fontWeight: "bold",
  };

  return (
    <>
      <Navbar />
      <div style={containerStyle}>
        <h1 style={headingStyle}>Terms and Conditions</h1>

        <p>
          These Terms and Conditions govern your use of our services, including
          our self-service printing kiosks. By accessing and using our services,
          you agree to comply with and be bound by the following terms.
        </p>

        <h2 style={sectionHeadingStyle}>1. Acceptance of Terms</h2>
        <p>
          By accessing and using our services, including our self-service
          printing kiosks, you agree to comply with and be bound by these Terms
          and Conditions.
        </p>

        <h2 style={sectionHeadingStyle}>2. User Responsibilities</h2>
        <ul>
          <li>
            <strong>Content Ownership:</strong> You affirm that you own or have
            obtained all necessary rights and permissions to the documents you
            print.
          </li>
          <li>
            <strong>Prohibited Content:</strong> You agree not to use our
            services to print any material that is unlawful, defamatory,
            obscene, or otherwise objectionable.
          </li>
        </ul>
        <p>
          We reserve the right to refuse the reproduction of any material that
          may infringe on copyright laws or contain prohibited content should
          the copyrighted or prohibited nature of said material or content
          become apparent at any time during your use of our services.
        </p>

        <h2 style={sectionHeadingStyle}>3. Service Availability</h2>
        <p>
          While we strive to maintain the availability of our self-service
          printing kiosks, we do not guarantee uninterrupted or unrestricted
          access. We reserve the right to suspend or terminate services without
          prior notice for maintenance or other reasons.
        </p>

        <h2 style={sectionHeadingStyle}>
          4. Document Confirmation Code Expiration
        </h2>
        <p>
          Confirmation Codes transmitted to customers for print jobs will expire
          upon use or upon 24 hours from generation, whichever comes first.
        </p>

        <h2 style={sectionHeadingStyle}>5. Limitation of Liability</h2>
        <p>
          We are not liable for any direct, indirect, incidental, or
          consequential damages arising from the use or inability to use our
          services, including but not limited to data loss or printing errors.
        </p>

        <h2 style={sectionHeadingStyle}>6. Modifications to Terms</h2>
        <p>
          We may update these Terms and Conditions periodically. Continued use
          of our services constitutes acceptance of any changes.
        </p>
      </div>
    </>
  );
};

export default TermsAndConditions;
