"use client";

import { cn } from "@/utils/cn";
import React, { useEffect, useState } from "react";
import StartRating from "../Testimonial/rating";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    quote: string;
    name: string;
    role: string;
    face: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "200s");
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20  max-w-[83rem] overflow-hidden  [mask-image:linear-gradient(to_right,transparent,blue_0%,blue_100%,transparent)] ",
        className
      )}
    >
        
      <ul
        ref={scrollerRef}
        className={cn(
          " flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap ",
          start && "animate-scroll ",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            className="w-[350px] max-w-full relative rounded-2xl border border-b-0 flex-shrink-0  px-8 py-6 md:w-[450px] bg-[#ECF9FF] text-black  border-blue-800"
            style={{
              background:
                "bg-[#ECF9FF]",
            }}
            key={item.name}
          >
            <div className="flex items-center gap-6 pb-4 ">
              <div>
                <img src={item.face} alt="display picture" className="rounded-full size-16" />
              </div>
              <div className="relative z-20 flex flex-row items-center ">
                <span className="flex flex-col gap-1">
                  <span className=" text-sm leading-[1.6] text-[#000000be] font-normal">
                    {item.name}
                  </span>
                  <span className=" text-sm leading-[1.6] text-[#00000084] font-normal">
                    {item.role}
                  </span>
                  <StartRating />
                </span>
              </div>
            </div>
            <blockquote>
              <div
                aria-hidden="true"
                className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px) "
              ></div>
              <span className=" relative z-20 text-sm leading-[1.6]  font-normal">
                {item.quote}
              </span>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};
