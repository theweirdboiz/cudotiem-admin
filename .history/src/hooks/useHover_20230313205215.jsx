import React, { useEffect, useRef, useState } from "react";

const useToggleValue = (initialValue = false) => {
  const [hovered, setHovered] = useState(initialValue);
  const nodeRef = useRef(null);
  useEffect(() => {
    const handleMouseOver = () => {
      setHovered(true);
    };
    const handleMouseOut = () => {
      setHovered(false);
    };
    const dom = nodeRef.current;
    if (dom) {
      dom.addEventListener("mouseover", handleMouseOver);
      dom.addEventListener("mouseout", handleMouseOut);
    }
    return () => {
      dom && dom.removeEventListener("mouseover", handleMouseOver);
      dom && dom.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);
  return {
    hovered,
    nodeRef,
  };
};

export default useToggleValue;
