import React, { useState } from "react";
import "./index.css";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaApple,
  FaGooglePlay,
  FaPhoneAlt, // <-- ADD THIS
} from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { IoLogoYoutube } from "react-icons/io5";
import { toast } from "react-toastify";

const emailRjx =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const Footer = () => {
  const [email, setEmail] = useState("");

  const SubscribeHandler = () => {
    if (email === "") {
      toast.error("Subscribe Email is required!");
    } else if (!email.match(emailRjx)) {
      toast.error("Please enter valid email address");
    } else {
      toast.success("Successfully Subscribed");
      setEmail("");
    }
  };

  return (
    <div className="footer">
      <Grid container spacing={0}>
        <Grid item xs={1} sm={1} md={1} lg={1} xl={1} />
        <Grid item xs={10} sm={10} md={10} lg={10} xl={10}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={7} md={8} lg={5} xl={5}>
              <Grid container spacing={3}>
                <Grid item xs={6} sm={4} md={4} lg={4} xl={4}>
                  <p className="footer-heading">Locations</p>
                  <p className="footer-heading">Florida</p>
                  <Link className="footer-link">West Palm Beach</Link>
                  <Link className="footer-link">Delray Beach</Link>
                  <Link className="footer-link">Boca Raton</Link>
                  <Link className="footer-link">Fort Lauderdale</Link>
                  <Link className="footer-link">Miami</Link>
                  <p className="footer-heading">Michigan</p>
                  <Link className="footer-link">Coming Soon</Link>
                </Grid>
                <Grid item xs={6} sm={4} md={4} lg={4} xl={4}>
                  <p className="footer-heading">Prices</p>
                  <Link className="footer-link">Compare Prices</Link>
                </Grid>
                <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
                  <p className="footer-heading">Terms & Conditions</p>
                  <Link to="/terms-conditions" className="footer-link">
                    Terms of use
                  </Link>
                  <Link to="/privacy" className="footer-link">
                    Privacy Policy
                  </Link>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={5} md={4} lg={2} xl={2}>
              <p className="footer-heading">Support</p>
              <a
                href="mailto:support@printtopoint.com"
                target="_blank"
                rel="noreferrer"
                className="footer-link"
              >
                Customer Support
              </a>
              <a
                href="mailto:support@printtopoint.com"
                target="_blank"
                rel="noreferrer"
                className="footer-link"
              >
                Print Agent Support
              </a>
              <a
                href="mailto:support@printtopoint.com"
                target="_blank"
                rel="noreferrer"
                className="footer-link"
              >
                Contact Us
              </a>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={5} xl={5}>
              <div className="footer-from">
                <h1 className="footer-form-heading">
                  Subscribe to our newsletter
                </h1>
                <div className="footer-form-input">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(val) => setEmail(val.target.value)}
                  />
                  <button onClick={SubscribeHandler}>Subscribe</button>
                </div>

                {/* Social Links */}
                <div className="footer-sical-main">
                  <Link
                    to="https://m.facebook.com/PrintToPoint/"
                    target="_blank"
                    className="footer-social-btn"
                  >
                    <FaFacebookF />
                  </Link>
                  <Link
                    to="https://www.instagram.com/printtopoint?igsh=eDF3aWU3OXV5eW5u&utm_source=qr"
                    target="_blank"
                    className="footer-social-btn"
                  >
                    <RiInstagramFill />
                  </Link>
                  <Link
                    to="https://www.linkedin.com/company/print-to-point/"
                    target="_blank"
                    className="footer-social-btn"
                  >
                    <FaLinkedinIn />
                  </Link>
                  <Link
                    to="https://youtube.com/@printtopoint?si=X_hY2Nzl6IZvcX3B"
                    target="_blank"
                    className="footer-social-btn"
                  >
                    <IoLogoYoutube />
                  </Link>
                </div>

                <p className="footer-copyright">
                  Copyright ©{" "}
                  <Link
                    to="https://www.facebook.com/hishmatraik/"
                    target="_blank"
                    className="footer-copyright-link"
                  >
                    Print to Point
                  </Link>
                </p>
              </div>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={1} sm={1} md={1} lg={1} xl={1} />
      </Grid>

      {/* Bottom Text, Phone Number & Download App Icons */}
      <div
        style={{
          marginTop: "1.5rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "10px",
        }}
      >
        {/* Service Info */}
        <p className="footer-heading-1">
          Open 24 Hours | On-Demand | Printing Service
        </p>

        {/* Phone Number */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "5px",
            color: "white",
            justifyContent: "center",
          }}
        >
          <FaPhoneAlt />
          <div href="" style={{ textDecoration: "none", color: "white" }}>
            561-234-5913
          </div>
        </div>

        {/* Download App Section */}
        <div className="footer-apps" style={{ textAlign: "center" }}>
          <p
            style={{
              fontWeight: "bold",
              marginBottom: "8px",
              color: "white",
            }}
          >
            Download Our App
          </p>
          <div
            style={{
              display: "flex",
              gap: "20px",
              justifyContent: "center",
            }}
          >
            <a
              href="https://apps.apple.com/us/app/print-to-point/id1537718935"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
                textDecoration: "none",
                color: "white",
              }}
            >
              <FaApple size={24} />
              <span>App Store</span>
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.printtopoint"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
                textDecoration: "none",
                color: "white",
              }}
            >
              <FaGooglePlay size={24} />
              <span>Google Play</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
