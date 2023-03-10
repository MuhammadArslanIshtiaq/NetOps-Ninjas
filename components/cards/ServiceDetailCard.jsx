import Link from "next/link";
import React from "react";
import Image from "next/image";
import { useState } from "react";

// icons
import { ArrowRightIcon } from "@heroicons/react/20/solid";

const ContactCard = ({ items }) => {
  const [hover, setHover] = useState(false);
  return (
    <div
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
      className="service-card relative h-full transition-all duration-500 group hover:bg-black/50 border-2 border-gray-600 hover:border-l-secondary hover:border-t-secondary hover:border-r-pink-500 hover:border-b-pink-500 rounded-xl"
    >
      <Link href={items.link}>
        <div className="p-6 flex flex-col items-start">
          <div>
            <span className="block h-12 min-w-[2.5rem] relative">
              <img
                width="70%"
                alt="services icons"
                src={hover ? items.iconUrl2 : items.iconUrl}
              />
            </span>
          </div>
          <h5 className="text-white group-hover:text-secondary capitalize text-2xl line-clamp-2 font-bold mb-3">
            {items.title}
          </h5>
          <p className="text-lg font-medium text-gray-400 group-hover:text-white line-clamp-3 mb-4">
            {items.description}
          </p>
          <Link
            href={items.link}
            className="flex items-center gap-2 text-lg font-semibold text-gray-400 mt-auto pt-5"
          >
            <span className="group-hover:text-gradient">Learn More</span>
            <span className="group-hover:text-secondary">
              <ArrowRightIcon className="block h-7" />
            </span>
          </Link>
        </div>
      </Link>
    </div>
  );
};

export default ContactCard;
