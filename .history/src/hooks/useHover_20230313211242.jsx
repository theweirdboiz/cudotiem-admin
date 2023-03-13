import React, { useEffect, useRef, useState } from "react";

const useHover = () => {
  const [hovered, setHovered] = useState(false);
  const nodeRef = useRef(null);
  useEffect(() => {
    const dom = nodeRef.current;
    if (dom) {
      dom.addEventListener("click", setHovered(!hovered));
    }
  }, []);
  return {
    hovered,
    nodeRef,
  };
};

export default useHover;
