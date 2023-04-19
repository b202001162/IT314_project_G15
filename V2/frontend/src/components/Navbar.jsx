import React from "react";
import "../assets/CSS/style.css";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
import Dropdown from "react-bootstrap/Dropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faClipboardList,
  faHome,
  faMagnifyingGlass,
  faRightFromBracket,
  faServer,
  faTimeline,
  faUpload,
  faUser,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import { useLogout } from "../hooks/useLogout";

const Navbar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();
  const handleClick = () => {
    logout();
  };
  return (
    <>
      <nav className="nav-bar">
        {!user ? (
          <div className="icons-container" style={{ width: "auto" }}>
            <Link to="/signup">
              <button
                type="submit"
                className="nav-optional-btn"
                style={{
                  color: "var(--menu-bg-color)",
                  border: "2px solid var(--menu-bg-color)",
                  fontWeight: "bold",
                  marginRight: "10px",
                  padding: "5px 20px 5px 20px",
                }}
              >
                SignUp
              </button>
            </Link>
            <Link to="/login">
              <button
                type="submit"
                className="nav-optional-btn"
                style={{
                  color: "var(--nav-bg-color)",
                  border: "2px solid var(--nav-bg-color)",
                  fontWeight: "bold",
                  backgroundColor: "var(--menu-bg-color)",
                  padding: "5px 20px 5px 20px",
                }}
              >
                LogIn
              </button>
            </Link>
          </div>
        ) : (
          <div className="icons-container">
            <div className="search-icon-container">
              {/* <img class="search-icon" src="./assests/search.png" alt="" /> */}
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                style={{ color: "var(--nav-bg-color)" }}
              />
              {/* <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" /> */}
            </div>
            <div className="btn-group">
              <div className="user-icon-container">
                {/* <img class="user-icon" src="./assests/user.png" alt="" /> */}
                <FontAwesomeIcon
                  icon={faUser}
                  style={{ color: "var(--nav-bg-color)" }}
                />
              </div>
              <Dropdown style={{ boxSizing: "border-box" }}>
                <Dropdown.Toggle
                  id="dropdown-basic"
                  className="dropdown-btn"
                  style={{
                    background: "none",
                    color: "var(--menu-bg-color)",
                    border: "none",
                    boxShadow: "none",
                  }}
                ></Dropdown.Toggle>

                <Dropdown.Menu className="dropdown-menu dropdown-menu-right shadow p-3 mt-2 bg-body rounded">
                  <Dropdown.Item href="#/action-1">VIEW PROFILE</Dropdown.Item>
                  <Dropdown.Item className="text-danger" href="#/action-2">
                    <Link
                      onClick={handleClick}
                      style={{ cursor: "pointer" }}
                      className="text-danger"
                    >
                      LOGOUT
                    </Link>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div className="notification-icon-container">
              {/* <img class="notification-icon" src="./assests/bell.png" alt="" /> */}
              <FontAwesomeIcon
                icon={faBell}
                style={{ color: "var(--nav-bg-color)" }}
              />
            </div>
          </div>
        )}
      </nav>
      {/* -------------------------------------------------------------- */}
      <div className="left-container">
        <div className="logo-container" id="logo-ctn">
          <svg
            className="logo-icon"
            width="262.667"
            height="262.667"
            viewBox="0 0 197 197"
            preserveAspectRatio="xMidYMid meet"
            style={{ fill: "var(--nav-bg-color)" }}
          >
            <path d="M102.7 13.7c-.4.3-.7 1.9-.7 3.4 0 3.2 3.2 4.8 5.5 2.9 2-1.6 1.9-5.6-.1-6.4s-3.9-.8-4.7.1zm-17.3 1.7c-1 2.7.1 5.1 2.6 5.4 2.8.5 5-2 4.3-4.8-.6-2.4-6.1-2.8-6.9-.6zm33 2c-1.2 3.1.1 5.1 3.2 5.4 2.4.2 3.3-.1 3.6-1.6.3-1.1.1-2.7-.4-3.6-1.1-2-5.7-2.1-6.4-.2zm-48.2.8c-1.8 1.8-1.5 5.6.7 6.3 3 .9 5.1-.5 5.1-3.5 0-3.6-3.4-5.2-5.8-2.8z" />
            <use xlink:href="#B" />
            <path d="M54.7 24.7c-1.5 1.4-.7 6.1 1.2 6.6 2.7.7 5.1-1.1 5.1-3.7 0-2.9-4.4-4.9-6.3-2.9z" />
            <use xlink:href="#B" x="14" y="9" />
            <path d="M40.5 35.1c-.4.5-.4 2.1-.1 3.5.5 1.7 1.3 2.4 3.1 2.4 2.7 0 4.8-3 3.9-5.4-.7-1.8-5.9-2.2-6.9-.5z" />
            <use xlink:href="#B" x="26" y="20" />
            <use xlink:href="#B" x="-105" y="24" />
            <path d="M117.2 50c-3.3 2-7.1 8.6-7.2 12.3 0 1.3-.7 1.8-2.2 1.7-5-.4-6.9.1-10.3 3.1-9.8 8.7-25.5 46.6-27 65.1-.6 8.7 1.5 16 5.6 19 8 5.9 26.8.7 41.9-11.5 8.4-6.8 11.3-11.7 10.5-17.6-.6-5.5-2.9-9.1-5.6-9.1-4.9 0-10.9 7.1-11.1 13.3-.1 3.4-.4 3.7-5.9 5.7-12.7 4.8-19.9 1.9-19.9-7.9S95.8 83 98.9 83c1 0 1.4.8 4.7 10.4s4.8 11.6 8.5 11.6c8.4 0 12.9-14.9 12.9-42.7 0-8.8-.3-11.5-1.6-12.7-2-2-2.2-2-6.2.4zm53.3 6.6c-1.9 2-1.6 4.3.8 5.8 3.7 2.3 7.7-3.5 4.1-6.1-2.3-1.7-2.9-1.6-4.9.3z" />
            <use xlink:href="#B" x="-114" y="38" />
            <path d="M177.6 71.2c-3.1 1.7-1.3 6.8 2.5 6.8 2.3 0 4.2-2.6 3.4-4.8-.7-2.3-3.6-3.3-5.9-2zm-162.4 5c-1.8 1.8-1.5 4.6.7 5.8 3.1 1.6 5.3.2 4.9-3.4-.3-3.4-3.3-4.7-5.6-2.4z" />
            <use xlink:href="#B" x="46" y="65" />
            <path d="M12.6 92.3c-3.6 2.6.4 8.4 4.2 6.1 2.3-1.5 2.6-3.8.7-5.8-2-1.9-2.6-2-4.9-.3zM181 104.5c-1.4 1.7-.5 5.1 1.6 5.9 2.2.8 5.4-1.1 5.4-3.2 0-3.8-4.6-5.6-7-2.7z" />
            <use xlink:href="#B" x="-122" y="86" />
            <path d="M179.3 119.7c-1.9.7-1.6 6.2.3 7 3.9 1.5 7.1-4 3.8-6.4-1.9-1.4-2.2-1.4-4.1-.6zM16 125.5c-1.5 1.8-.5 5.1 1.9 5.8 2.5.6 5.1-1 5.1-3.1 0-3.8-4.6-5.6-7-2.7z" />
            <use xlink:href="#B" x="38" y="113" />
            <path d="M23.2 140.2c-1.8 1.8-1.4 4.6.7 5.8 2.5 1.3 4.8.4 5.6-2.1 1.2-3.8-3.5-6.5-6.3-3.7z" />
            <use xlink:href="#B" x="29" y="127" />
            <use xlink:href="#B" x="-102" y="131" />
            <path d="M152 162.9c-1.5 2.9-.2 5.1 3 5.1 3.4 0 4.4-1.3 3.6-4.6-.8-3-5-3.3-6.6-.5z" />
            <use xlink:href="#B" x="-90" y="142" />
            <path d="M139.6 171.2c-2.6 1.4-2 5.6.8 6.4 3.3.8 4.6-.2 4.6-3.5 0-3.2-2.5-4.5-5.4-2.9z" />
            <use xlink:href="#B" x="-76" y="151" />
            <path d="M124.3 177.7c-2.2.8-1.6 6.1.7 6.8 2.6.8 5-1.1 5-4s-2.6-4.1-5.7-2.8zm-50.6 3.2c-.7 2.9 1.5 5.4 4.4 4.9 1.9-.2 2.4-.9 2.4-3.3 0-2.6-.4-3-3.1-3.3-2.4-.2-3.3.1-3.7 1.7zm17.5 1.3c-2.1 2.1-1.4 5.7 1.2 6.4 3.3.8 4.6-.2 4.6-3.6 0-3.6-3.3-5.3-5.8-2.8zm16 .4c-1.7 3.1-.3 5.5 3.2 5.2 2.7-.3 3.1-.7 3.1-3.3 0-2.5-.4-3.1-2.7-3.3-1.7-.2-3 .3-3.6 1.4z" />
            <defs>
              <path
                id="B"
                d="M134.4 23.4c-1.2 3.1 0 5.1 3.1 5.1 2.7 0 3-.3 3-3 0-2.5-.4-3-2.8-3.3-1.7-.2-2.9.2-3.3 1.2z"
              />
            </defs>
          </svg>
          <h5 style={{ padding: "0px", margin: 0 }}>CMS</h5>
        </div>
        <div className="left-sub-container">
          <h6 style={{ marginBottom: "10px", opacity: "80%" }}>MENU</h6>
          <div
            className="menu-options-ctn"
            style={{ opacity: "100%", backgroundColor: "var(--logo-bg-color" }}
          >
            <FontAwesomeIcon
              icon={faHome}
              className="menu-icons"
              style={{ color: "var(--nav-bg-color)" }}
            />
            <p className="menu-texts">HOME</p>
          </div>
          <div className="menu-options-ctn">
            <FontAwesomeIcon
              icon={faUpload}
              className="menu-icons"
              style={{ color: "var(--nav-bg-color)" }}
            />
            <p className="menu-texts">CALL FOR PAPER</p>
          </div>
          <div className="menu-options-ctn">
            <FontAwesomeIcon
              icon={faUserGroup}
              className="menu-icons"
              style={{ color: "var(--nav-bg-color)" }}
            />
            <p className="menu-texts">ORGANIZATION</p>
          </div>
          <h6 style={{ marginBottom: "10px", opacity: "80%" }}>ARCHIVE</h6>
          <div className="menu-options-ctn">
            <FontAwesomeIcon
              icon={faServer}
              className="menu-icons"
              style={{ color: "var(--nav-bg-color)" }}
            />
            <p className="menu-texts">DATA</p>
          </div>
          <div className="menu-options-ctn">
            <FontAwesomeIcon
              icon={faClipboardList}
              className="menu-icons"
              style={{ color: "var(--nav-bg-color)" }}
            />
            <p className="menu-texts">RESOURCES</p>
          </div>
          <div className="menu-options-ctn">
            <FontAwesomeIcon
              icon={faTimeline}
              className="menu-icons"
              style={{ color: "var(--nav-bg-color)" }}
            />
            <p className="menu-texts">PAST PROCEEDING</p>
          </div>
        </div>
        {!user ? (
          <></>
        ) : (
          <Link onClick={handleClick} style={{ cursor: "pointer" }}>
            <div className="logout-container text-danger">
              <FontAwesomeIcon
                icon={faRightFromBracket}
                style={{ margin: "0 10px 0 15px" }}
              />
              <h6 style={{ padding: "0px", margin: "0px" }}>LOGOUT</h6>
            </div>
          </Link>
        )}
      </div>
    </>
  );
};

export default Navbar;