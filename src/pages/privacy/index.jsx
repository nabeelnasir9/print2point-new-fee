import Navbar from "../../components/navbar";

const Privacy = () => {
  const containerStyle = {
    margin: "20px auto",
    maxWidth: "800px",
    padding: "20px",
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

  const contactStyle = {
    marginTop: "20px",
    paddingTop: "10px",
    borderTop: "1px solid #ddd",
  };

  return (
    <>
      <Navbar />
      <div style={containerStyle}>
        <h1 style={headingStyle}>Privacy Policy</h1>

        <p>
          Your privacy is important to us. This Privacy Policy outlines how we
          collect, use, and protect your personal information.
        </p>

        <h2 style={sectionHeadingStyle}>1. Information Collection</h2>
        <p>
          We collect personal information necessary to provide our services,
          including your email address, telephone number, document content, and
          any additional information required to process and complete your
          printing needs, and to communicate with you concerning the same.
        </p>

        <h2 style={sectionHeadingStyle}>2. Data Retention</h2>
        <ul>
          <li>
            <strong>Document Storage:</strong> Documents emailed to us are
            stored temporarily and deleted after 72 hours to protect your
            privacy.
          </li>
          <li>
            <strong>Personal Information:</strong> Retained only as long as
            necessary to fulfill the purposes outlined in this policy.
          </li>
        </ul>

        <h2 style={sectionHeadingStyle}>3. Data Security</h2>
        <p>
          We implement reasonable security measures to protect your personal
          information from unauthorized access, use, or disclosure, in
          compliance with the Florida Information Protection Act (FIPA).
        </p>

        <h2 style={sectionHeadingStyle}>4. User Rights</h2>
        <ul>
          <li>
            <strong>Access and Correction:</strong> You have the right to access
            and correct your personal information.
          </li>
          <li>
            <strong>Deletion:</strong> You may request the deletion of your
            personal information, subject to legal and contractual obligations.
          </li>
        </ul>

        <h2 style={sectionHeadingStyle}>5. Sharing of Information</h2>
        <p>
          We do not sell or rent your personal information to third parties. We
          may share information with service providers who assist in operating
          our services, provided they adhere to confidentiality obligations.
        </p>

        <h2 style={sectionHeadingStyle}>6. Compliance with Florida Laws</h2>
        <p>
          We comply with applicable Florida privacy laws, including FIPA and the
          forthcoming Florida Digital Bill of Rights (FDBR), effective July 1,
          2024, which grants consumers rights regarding their personal data.
        </p>

        <h2 style={sectionHeadingStyle}>7. Changes to the Privacy Policy</h2>
        <p>
          We may update this Privacy Policy to reflect changes in our practices
          or legal requirements. We will notify users of significant changes
          through our website or other appropriate means.
        </p>

        <div style={contactStyle}>
          <h2 style={sectionHeadingStyle}>Contact Information</h2>
          <p>
            If you have any questions or concerns regarding this Privacy Policy,
            please contact us at:
          </p>
          <ul>
            <li>
              <strong>Email:</strong> info@printtopoint.com
            </li>
            <li>
              <strong>Phone:</strong> 561-234-5913
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Privacy;
