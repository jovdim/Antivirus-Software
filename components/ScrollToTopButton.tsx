import React, { useEffect, useState } from "react";

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 600) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        backgroundColor: isHovered ? "#1450A3" : "#1679AB",
        color: "white",
        border: "none",
        height: "3rem",
        width: "3rem",
        borderRadius: "50%",
        cursor: "pointer",
        fontSize: "1.5rem",
        display: isVisible ? "block" : "none",
        transition: "background-color 0.3s",
        opacity: isHovered ? 0.9 : 1,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      ↑
    </button>
  );
}
