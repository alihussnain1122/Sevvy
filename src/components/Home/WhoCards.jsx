"use client";

import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-cards";

const cards = [
  {
    title: "Creative &",
    subtitle: "Video Agencies",
    description:
      "Boost productivity: manage projects, collaborate, and deliver top-notch results faster.",
    image: "/Home/who/agency.webp",
    alt: "Creative & Video Agencies workflow",
  },
  {
    title: "Creative &",
    subtitle: "Video Agencies",
    description:
      "Boost productivity: manage projects, collaborate, and deliver top-notch results faster.",
    image: "/Home/who/agency.webp",
    alt: "Creative & Video Agencies workflow",
  },
  {
    title: "Creative &",
    subtitle: "Video Agencies",
    description:
      "Boost productivity: manage projects, collaborate, and deliver top-notch results faster.",
    image: "/Home/who/agency.webp",
    alt: "Creative & Video Agencies workflow",
  },
];

const WhoCards = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full flex justify-center"
    >
      <Swiper
        effect="cards"
        grabCursor={true}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[EffectCards, Autoplay]}
        className="w-[260px] h-[380px]"
      >
        {cards.map((card, index) => (
          <SwiperSlide key={index} className="rounded-2xl">
            <div className="bg-white rounded-2xl shadow-xl p-4 h-full flex flex-col justify-between">
              
              {/* Header */}
              <div>
                <h3 className="text-orange-500 text-xl font-bold text-center mt-3">
                  {card.title}
                  <br />
                  <span className="text-orange-500">
                    {card.subtitle}
                  </span>
                </h3>

                <p className="text-gray-600 text-sm text-center mt-3 px-2">
                  {card.description}
                </p>

                <div className="border-t border-gray-100 my-4"></div>
              </div>

              {/* Image */}
              <img
                src={card.image}
                alt={card.alt}
                className="w-full h-auto rounded-lg"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  );
};

export default WhoCards;