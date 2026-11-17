import React, { useState } from "react";
import { Home, Info, HelpCircle, Menu, Globe } from "react-feather";
import { Link } from 'react-router-dom';
import "./VerticalNavbar.css";

const navItems = [
  { icon: <Home size={28} />, label: "Home", to: "/" },
  { icon: <Info size={28} />, label: "About Us", to: "/about" },
  { icon: <HelpCircle size={28} />, label: "How to Use", to: "/how-to-use" },
];

export default function VerticalNavbar() {
  const [open, setOpen] = useState(false);

  // Close menu on navigation (for mobile)
  const handleNavClick = () => setOpen(false);

  return (
    <>
      {/* Hamburger button for mobile/tablet */}
      <button
        className="vertical-navbar__hamburger"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((v) => !v)}
      >
        <Menu size={32} />
      </button>
      {/* Overlay for mobile/tablet */}
      <nav
        className={`vertical-navbar${open ? " vertical-navbar--open" : ""}`}
        onClick={() => open && setOpen(false)}
      >
        <ul
          className="vertical-navbar__menu"
          onClick={e => e.stopPropagation()}
        >
          {/* Brand Logo at the top of the navbar */}
          <div style={{
            position: 'absolute',
            top: 18,
            left: 0,
            right: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 101,
          }}>
            <Link to="/" className="vertical-navbar__link" tabIndex={0} style={{ padding: 0, background: 'none' }}>
              <div style={{
                width: 36,
                height: 36,
                borderRadius: 10,
                background: 'linear-gradient(135deg, #2563eb, #38bdf8)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                boxShadow: '0 2px 8px rgba(37,99,235,0.3)'
              }}>
                <Globe size={22} />
              </div>
              <span className="vertical-navbar__tooltip">Indian Climate Analysis</span>
            </Link>
          </div>
          {navItems.map((item) => (
            <li className="vertical-navbar__item" key={item.label}>
              {item.to !== "#" ? (
                <Link to={item.to} className="vertical-navbar__link" tabIndex={0} onClick={handleNavClick}>
                  {item.icon}
                  <span className="vertical-navbar__tooltip">{item.label}</span>
                </Link>
              ) : (
                <span className="vertical-navbar__link" tabIndex={0}>
                  {item.icon}
                  <span className="vertical-navbar__tooltip">{item.label}</span>
                </span>
              )}
            </li>
          ))}
        </ul>
      </nav>
      {/* Overlay background for open menu */}
      {open && <div className="vertical-navbar__overlay" onClick={() => setOpen(false)}></div>}
    </>
  );
} 