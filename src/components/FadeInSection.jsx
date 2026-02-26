import { motion } from "framer-motion";
import useFadeIn from "../hooks/useFadeIn";

const FadeInSection = ({
  children,
  delay = 0,
  duration = 1.2, // slower & smoother
  y = 20, // less movement = more premium
  className = "",
}) => {
  const { ref, isInView } = useFadeIn({
    margin: "-100px 0px",
    amount: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0.3, y: y }} // start slightly visible (not full fade)
      animate={{
        opacity: isInView ? 1 : 0.3,
        y: isInView ? 0 : y,
      }}
      transition={{
        duration: duration,
        delay: delay,
        ease: [0.16, 1, 0.3, 1], // smoother premium easing
      }}
    >
      {children}
    </motion.div>
  );
};

export default FadeInSection;