import { useRef } from "react";
import { useInView } from "framer-motion";

const useFadeIn = (options = {}) => {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    margin: options.margin || "-100px 0px",
    amount: options.amount || 0.2,
    once: false, // IMPORTANT: enables fade out on scroll up
  });

  return { ref, isInView };
};

export default useFadeIn;