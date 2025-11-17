import type { AnimationProps } from "framer-motion";

export const fadeInVariants: AnimationProps["variants"] = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

import type { MotionProps } from "framer-motion";

export const MOTION_VARIANT: MotionProps["variants"] = {
  hidden: { opacity: 0 },
  shown: { opacity: 1 },
};

export const MOTION_VARIANT_SLIDE: MotionProps["variants"] = {
  hidden: { opacity: 0, translateY: 8 },
  shown: { opacity: 1, translateY: 0 },
};

export const MOTION_STAGGER_VARIANT: MotionProps["variants"] = {
  hidden: { opacity: 0 },
  shown: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

export const getMotionCommonProps = (delay = 0): MotionProps => ({
  variants: MOTION_VARIANT,
  initial: "hidden",
  whileInView: "shown",
  transition: { duration: 0.5, type: "keyframes", delay },
  viewport: { once: true, margin: "-100px" },
});

export const MENU_ITEMS_VARIANT: MotionProps["variants"] = {
  hidden: { opacity: 0, translateY: -20 },
  shown: { opacity: 1, translateY: 0 },
};

export const getMenuItemsMotionProps = (delay = 0): MotionProps => ({
  variants: MENU_ITEMS_VARIANT,
  initial: "hidden",
  animate: "shown",
  exit: "hidden",
  transition: { duration: 0.5, type: "keyframes", delay },
  viewport: { once: true },
});
