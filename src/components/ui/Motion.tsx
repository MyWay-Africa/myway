"use client";

import { motion, HTMLMotionProps, Variants } from "framer-motion";
import { ReactNode } from "react";

interface MotionContainerProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  delay?: number;
  duration?: number;
  viewportMargin?: string;
  className?: string;
}

const defaultVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export const MotionContainer = ({
  children,
  delay = 0,
  duration = 0.5,
  viewportMargin = "-50px",
  className = "",
  variants = defaultVariants,
  ...props
}: MotionContainerProps) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: viewportMargin }}
      transition={{ duration, delay, ease: "easeOut" }}
      variants={variants}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export const FadeIn = ({
  children,
  delay = 0,
  duration = 0.5,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}) => (
  <MotionContainer
    variants={{
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    }}
    delay={delay}
    duration={duration}
    className={className}
  >
    {children}
  </MotionContainer>
);

export const SlideUp = ({
  children,
  delay = 0,
  duration = 0.5,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}) => (
  <MotionContainer
    variants={{
      hidden: { opacity: 0, y: 40 },
      visible: { opacity: 1, y: 0 },
    }}
    delay={delay}
    duration={duration}
    className={className}
  >
    {children}
  </MotionContainer>
);

export default MotionContainer;
