"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const PinContainer = ({
  children,
  title,
  href,
  className,
  containerClassName,
}: {
  children: React.ReactNode;
  title?: string;
  href?: string;
  className?: string;
  containerClassName?: string;
}) => {
  const [transform, setTransform] = useState(
    "translate(-50%,-50%) rotateX(0deg)"
  );
  const [isHovered, setIsHovered] = useState(false);

  const onMouseEnter = () => {
    setTransform("translate(-50%,-50%) rotateX(40deg) scale(0.8)");
    setIsHovered(true);
  };
  const onMouseLeave = () => {
    setTransform("translate(-50%,-50%) rotateX(0deg) scale(1)");
    setIsHovered(false);
  };

  return (
    <div
      className={cn(
        "relative group/pin z-10 cursor-pointer",
        containerClassName
      )}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {/* Main Card Content */}
      <div
        style={{
          perspective: "1000px",
          transform: "rotateX(70deg) translateZ(0deg)",
        }}
        className="absolute left-1/2 top-1/2 ml-[0.09375rem] mt-4 -translate-x-1/2 -translate-y-1/2"
      >
        <div
          style={{ transform }}
          className="absolute left-1/2 p-4 top-1/2 flex justify-start items-start rounded-2xl shadow-[0_8px_16px_rgb(0_0_0/0.4)] border border-white/[0.1] group-hover/pin:border-white/[0.2] transition duration-700 overflow-hidden"
        >
          <div className={cn("relative z-10", className)}>{children}</div>
        </div>
      </div>
      {/* Inline PinPerspective Equivalent */}
      {title && href && (
        <motion.div
          className="absolute top-0 left-1/2 -translate-x-1/2 z-20 pointer-events-none"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : -10 }}
          transition={{ duration: 0.3 }}
        >
          <a
            href={href}
            target="_blank"
            className="relative flex space-x-2 items-center rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 pointer-events-auto"
          >
            <span className="relative z-20 text-white text-xs font-bold inline-block py-0.5">
              {title}
            </span>
            <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover/pin:opacity-40"></span>
          </a>
        </motion.div>
      )}
    </div>
  );
};
