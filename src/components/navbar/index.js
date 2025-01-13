/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Logo } from "./../../svg";
import Grid from "@mui/material/Grid";
import { Link, useNavigate } from "react-router-dom";
import "./index.css";

import AvatarDemo from "../../components/Avatar/AvatarDemo";
import Tooltip from "@mui/material/Tooltip"; // <-- IMPORT TOOLTIP HERE
import { FaPhoneSquareAlt } from "react-icons/fa";


const Navbar = ({ onClickSignIn, onClickSignUp }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  
  // Tooltip state
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Listen for a "logged_user" event and set user if it exists in localStorage
    const handle_loggedin_user = () => {
      const user = JSON.parse(localStorage.getItem("loggedIn_user"));
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    };

    window.addEventListener("logged_user", handle_loggedin_user);
    return () => {
      window.removeEventListener("logged_user", handle_loggedin_user);
    };
  }, []);

  useEffect(() => {
    // On mount, check if user exists
    const user = JSON.parse(localStorage.getItem("loggedIn_user"));
    if (user) {
      setUser(user);
    }
  }, []);

  // Handler to show tooltip for 5 seconds
  const handleContactUsClick = () => {
    setShowTooltip(true);
    setTimeout(() => {
      setShowTooltip(false);
    }, 5000);
  };

  return (
    <>
      <Grid container spacing={0}>
        <Grid item xs={1} sm={1} md={1} lg={1} xl={1} />
        <Grid item xs={10} sm={10} md={10} lg={10} xl={10}>
          <div className="navbar-container">
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              {/* Logo */}
              <button onClick={() => navigate("/")} className="navbar-logo">
                <img src={Logo} alt="Print to Point Logo" />
              </button>
              
              {/* Contact Us Tooltip Button */}
             
            </div>

            {/* Right side of navbar (Support link, sign in/up or Avatar) */}
            <div>
              <Link to="/support-ticket" className="navbar-explore">
                Support Ticket
              </Link>
              {/* <Tooltip
                title="+561-234-5913" // The phone number shown in tooltip
                placement="bottom"
                arrow
                open={showTooltip}
                disableFocusListener
                disableHoverListener
                disableTouchListener
              >
                <button
                  className="navbar-contact-btn"
                  onClick={handleContactUsClick}
                  style={{
                    cursor: "pointer",
                  }}
                >
                  <FaPhoneSquareAlt color="#F7801A" size={30}/>
                </button>
              </Tooltip> */}
              {user ? (
                <AvatarDemo name={user.full_name.charAt(0)} />
              ) : (
                <>
                  <button
                    className="navbar-sign-in-btn"
                    onClick={onClickSignIn}
                  >
                    Sign in
                  </button>
                  <button
                    className="navbar-sign-up-btn"
                    onClick={onClickSignUp}
                  >
                    Sign up
                  </button>
                </>
              )}
            </div>
          </div>
        </Grid>
        <Grid item xs={1} sm={1} md={1} lg={1} xl={1} />
      </Grid>
    </>
  );
};

export default Navbar;
