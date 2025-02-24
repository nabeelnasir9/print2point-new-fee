import React, { useEffect } from "react";

function ElfsightGoogleReviews() {
  useEffect(() => {
    // Dynamically load Elfsight’s script
    const script = document.createElement("script");
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup: remove the script when component unmounts (optional)
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      {/* Inline <style> tag for custom classes */}
      <style>
        {`

          .my-custom-google-reviews {
            border-radius: 6px;
            padding: 20px;
          }
        `}
      </style>

      {/* Empty box with custom style */}
      <div className="" />

      {/* Elfsight Google Reviews container with a custom class */}
      <div
        className="elfsight-app-7d025688-5c11-41e9-a35f-77a27d93b7d1 my-custom-google-reviews"
        data-elfsight-app-lazy
      />
    </div>
  );
}

export default ElfsightGoogleReviews;
