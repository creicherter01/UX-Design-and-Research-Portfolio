import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
};

export function Reveal({ children, delay = 0, y = 24, className }: RevealProps) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? { opacity: 0 } : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function RevealChars({
  text,
  className,
  delay = 0,
  stagger = 0.028,
}: {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
}) {
  const reduce = useReducedMotion();
  const chars = Array.from(text);
  return (
    <span className={className} aria-label={text}>
      {chars.map((ch, i) => (
        <span
          key={`${ch}-${i}`}
          className="-mb-[0.32em] -mr-[0.06em] inline-block overflow-hidden pb-[0.32em] pr-[0.06em] align-bottom"
          aria-hidden
        >
          <motion.span
            className="inline-block"
            initial={reduce ? { opacity: 0 } : { y: "115%", opacity: 0, rotate: 6 }}
            animate={{ y: "0%", opacity: 1, rotate: 0 }}
            transition={{
              duration: 1,
              delay: delay + i * stagger,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {ch === " " ? "\u00A0" : ch}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

export function RevealWords({

  text,
  className,
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) {
  const reduce = useReducedMotion();
  const words = text.split(" ");
  return (
    <span className={className}>
      {words.map((word, i) => (
        <span key={`${word}-${i}`} className="inline-block overflow-hidden align-bottom">
          <motion.span
            className="inline-block"
            initial={reduce ? { opacity: 0 } : { y: "110%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            transition={{
              duration: 0.9,
              delay: delay + i * 0.06,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {word}
            {i < words.length - 1 ? "\u00A0" : ""}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
