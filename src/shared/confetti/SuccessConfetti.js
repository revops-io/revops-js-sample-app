import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import Confetti from "react-dom-confetti";

import "./SuccessConfetti.css";

const config = {
  spread: "272",
  startVelocity: "48",
  elementCount: "140",
  dragFriction: 0.1,
  duration: "6120",
  delay: 0,
  width: "10px",
  height: "12px",
  colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"],
};

export const SuccessConfetti = ({ delay = 250 }) => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const timeOut = setTimeout(() => setActive(true), delay);
    return () => clearTimeout(timeOut);
  }, [delay]);

  return (
    <div className="confetti-overlay">
      <Confetti active={active} config={config} />
    </div>
  );
};

SuccessConfetti.propTypes = {
  delay: PropTypes.number,
};

export default SuccessConfetti;
