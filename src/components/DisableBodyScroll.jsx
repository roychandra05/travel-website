"use client";

import { useEffect } from "react";

const DisableBodyScroll = ({ isOpen }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }
    return () => (document.body.style.overflow = "");
  }, [isOpen]);

  return null;
};
export default DisableBodyScroll;
