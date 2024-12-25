import { useState } from "react";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import { useRef } from "react";
export const usePdf = () => {
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);
  const previewRef = useRef(null);

  const handleDownloadPdf = async () => {
    setLoading(true);
    const element = previewRef.current;

    if (!element) {
      console.error("Preview not found.");
      return;
    }

    try {
      const canvas = await html2canvas(element, {
        scale: 2,
      });

      const pdf = new jsPDF("p", "mm", "a4");
      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();

      const imgWidth = pageWidth;

      let yOffset = 0;

      while (yOffset < canvas.height) {
        const canvasSlice = document.createElement("canvas");
        canvasSlice.width = canvas.width;
        canvasSlice.height = Math.min(
          canvas.height - yOffset,
          (canvas.width * pageHeight) / pageWidth,
        );
        const ctx = canvasSlice.getContext("2d");
        ctx.drawImage(
          canvas,
          0,
          yOffset,
          canvas.width,
          canvasSlice.height,
          0,
          0,
          canvasSlice.width,
          canvasSlice.height,
        );

        const imgSliceData = canvasSlice.toDataURL("image/jpeg", 0.7);
        pdf.addImage(
          imgSliceData,
          "JPEG",
          0,
          0,
          imgWidth,
          (imgWidth * canvasSlice.height) / canvas.width,
          undefined,
          "FAST",
        );

        yOffset += canvasSlice.height;
        if (yOffset < canvas.height) {
          pdf.addPage();
        }
      }

      pdf.save("markdown.pdf");
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error("Error generating PDF:", error);
    }
  };
  return {
    handleDownloadPdf,
    loading,
    value,
    setValue,
    previewRef,
  };
};
