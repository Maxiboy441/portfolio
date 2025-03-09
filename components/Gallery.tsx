"use client";
import { ParallaxScroll } from "./ui/parallax-scroll";

export function Gallery() {
  return (
    <div className="flex justify-center items-center min-h-screen pt-20">
        <div className="text-center text-red-50">
          <h2 className="text-4xl font-bold">Gallery</h2>
          <ParallaxScroll images={images} />
        </div>
    </div>
  );
}


const images = [
  "/assets/Gallery-1.jpeg",
  "/assets/Gallery-2.jpeg",
  "/assets/Gallery-3.jpeg",
  "/assets/Gallery-4.jpg",
  "/assets/Gallery-5.jpg",
  "/assets/Gallery-6.jpg",
  "/assets/Gallery-7.jpg",
  "/assets/Gallery-8.jpg",
  "/assets/Gallery-9.jpg",
  "/assets/Gallery-10.jpg",
  "/assets/Gallery-11.jpg",
  "/assets/Gallery-12.jpeg",
  "/assets/Gallery-13.jpg",
  "/assets/Gallery-14.jpg",
  "/assets/Gallery-15.jpeg",
  "/assets/Gallery-16.jpeg",
  "/assets/Gallery-17.jpeg",
  "/assets/Gallery-18.jpeg",
];

