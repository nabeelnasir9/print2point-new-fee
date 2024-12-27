import React from "react";
import { marked } from "marked";
import { Help } from "@mui/icons-material";
import Navbar from "../../components/navbar";
import { usePdf } from "./pdf.hooks";
import "./index.css";

const MarkdownEditor = () => {
  const { handleDownloadPdf, value, setValue, previewRef, loading } = usePdf();

  return (
    <>
      <Navbar />
      <div className="editor-container">
        <div className="content-wrapper">
          <h1 className="editor-title">Markdown to PDF Converter</h1>

          <div className="editor-layout">
            <div className="editor-panel">
              <div className="panel-header">
                <label>Markdown Input</label>
                <a
                  href="https://www.markdownguide.org/basic-syntax"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Help />
                </a>
              </div>
              <textarea
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder="Write your markdown here..."
              />
            </div>

            <div className="preview-panel">
              <label>Preview</label>
              <div className="preview-scroll">
                <div
                  ref={previewRef}
                  id="markdown-preview"
                  dangerouslySetInnerHTML={{ __html: marked(value) }}
                />
              </div>
              <button
                disabled={loading}
                onClick={handleDownloadPdf}
                className="download-button"
              >
                {loading ? "Generating PDF..." : "Download PDF"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MarkdownEditor;
