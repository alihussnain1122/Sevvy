import { motion } from "framer-motion";
import useFadeIn from "../hooks/useFadeIn";

const FadeInSection = ({
  children,
  delay = 0,
  duration = 0.8,
  y = 40,
  className = "",
}) => {
  const { ref, isInView } = useFadeIn({
    margin: "-120px 0px",
    amount: 0.25,
  });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: y }}
      animate={{
        opacity: isInView ? 1 : 0,
        y: isInView ? 0 : y,
      }}
      transition={{
        duration: duration,
        delay: delay,
        ease: [0.25, 0.1, 0.25, 1], // premium smooth easing
      }}
    >
      {children}
    </motion.div>
  );
};

export default FadeInSection;