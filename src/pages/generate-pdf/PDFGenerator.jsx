import { useState, useRef } from "react";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import { marked } from "marked";
import { Navbar } from "../../components";
import "./index.css";

const MarkdownEditor = () => {
  const [value, setValue] = useState("");
  const previewRef = useRef(null);

  const handleDownloadPdf = async () => {
    const element = previewRef.current;

    if (!element) {
      console.error("Preview not found.");
      return;
    }

    try {
      const canvas = await html2canvas(element, {
        scale: 3,
      });

      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();

      const imgWidth = pageWidth;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      const xOffset = 0;
      const yOffset = (pageHeight - imgHeight) / 2;

      pdf.addImage(imgData, "PNG", xOffset, yOffset, imgWidth, imgHeight);
      pdf.save("markdown.pdf");
    } catch (error) {
      console.error("Error generating PDF:", error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="home">
        <div
          data-color-mode="light"
          style={{
            padding: "20px",
            maxWidth: "1200px",
            width: "100%",
            margin: "0 auto",
            background: "#fff",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Adds a subtle shadow
            borderRadius: "20px", // Rounded corners for a better look
          }}
        >
          <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
            Markdown to PDF Converter
          </h1>
          <div
            style={{
              display: "flex",
              gap: "20px",
              alignItems: "flex-start",
            }}
          >
            <div style={{ flex: 1 }}>
              <label
                htmlFor="markdown-input"
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "10px",
                  fontWeight: "bold",
                  fontSize: "16px",
                }}
              >
                Markdown Input{" "}
                <a
                  href="https://www.markdownguide.org/basic-syntax/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    marginLeft: "8px",
                    color: "#007BFF",
                    textDecoration: "none",
                    fontSize: "14px",
                    cursor: "pointer",
                  }}
                  title="Markdown Syntax Help"
                >
                  &#x2753; {}
                </a>
              </label>
              <textarea
                id="markdown-input"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder="Write your markdown here..."
                style={{
                  width: "100%",
                  height: "400px",
                  fontSize: "16px",
                  padding: "10px",
                  border: "1px solid #ccc",
                  borderRadius: "20px",
                  fontFamily: "monospace",
                  boxSizing: "border-box",
                  resize: "none",
                }}
              />
            </div>

            <div style={{ flex: 1 }}>
              <label
                htmlFor="markdown-preview"
                style={{
                  display: "block",
                  marginBottom: "10px",
                  fontWeight: "bold",
                  fontSize: "16px",
                }}
              >
                Preview
              </label>
              <div
                ref={previewRef}
                id="markdown-preview"
                style={{
                  background: "#fff",
                  padding: "10px",
                  border: "1px solid #ddd",
                  borderRadius: "4px",
                  height: "400px",
                  lineHeight: "1.9",
                  overflow: "scroll",
                }}
                dangerouslySetInnerHTML={{ __html: marked(value) }}
              />
            </div>
          </div>
          <button
            onClick={handleDownloadPdf}
            style={{
              display: "block",
              width: "100%",
              padding: "10px 20px",
              fontSize: "16px",
              backgroundColor: "#f7801a",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              marginTop: "20px",
            }}
          >
            Download PDF
          </button>
        </div>
      </div>
    </>
  );
};

export default MarkdownEditor;
