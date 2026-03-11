import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import axios from "axios";
import "./index.css";

const AnnouncementBanner = () => {
  const [banner, setBanner] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBanner = async () => {
      try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/banner`);
        setBanner(res.data.banner);
      } catch {
        setBanner(null);
      } finally {
        setLoading(false);
      }
    };
    fetchBanner();
  }, []);

  if (loading || !banner) return null;
  if (!banner.enabled) return null;
  const hasContent =
    (banner.message && banner.message.trim()) ||
    banner.showButton1 ||
    banner.showButton2;
  if (!hasContent) return null;

  const openLink = (url) => {
    if (!url || !url.trim()) return;
    if (/^https?:\/\//i.test(url)) window.open(url, "_blank", "noopener,noreferrer");
    else window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="announcement-banner-wrap">
      <Grid container spacing={0} className="announcement-banner">
        <Grid item xs={1} sm={1} md={1} lg={1} xl={1} />
        <Grid item xs={10} sm={10} md={10} lg={10} xl={10} className="announcement-banner-inner">
          <div className="announcement-banner-content">
            {banner.message && banner.message.trim() ? (
              <p className="announcement-banner-message">{banner.message}</p>
            ) : null}
            <div className="announcement-banner-buttons">
              {banner.showButton1 && banner.button1Text ? (
                <button
                  type="button"
                  className="announcement-banner-btn"
                  onClick={() => openLink(banner.button1Link)}
                >
                  {banner.button1Text}
                </button>
              ) : null}
              {banner.showButton2 && banner.button2Text ? (
                <button
                  type="button"
                  className="announcement-banner-btn announcement-banner-btn-secondary"
                  onClick={() => openLink(banner.button2Link)}
                >
                  {banner.button2Text}
                </button>
              ) : null}
            </div>
          </div>
        </Grid>
        <Grid item xs={1} sm={1} md={1} lg={1} xl={1} />
      </Grid>
    </div>
  );
};

export default AnnouncementBanner;
