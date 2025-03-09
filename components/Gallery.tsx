import { FocusCards } from "@/components/ui/focus-cards";

export function Gallery() {
  const cards = [
    {
      title: "London Breakfast",
      src: "/assets/Gallery-1.jpeg",
    },
    {
      title: "Tower Bridge",
      src: "/assets/Gallery-2.jpeg",
    },
    {
      title: "Waiting for fish and chips",
      src: "/assets/Gallery-3.jpeg",
    },
    {
      title: "Fishing as a school project",
      src: "/assets/Gallery-4.JPG",
    },
    {
      title: "Climbing in the forrest",
      src: "/assets/Gallery-5.JPG",
    },
    {
      title: "Bourtange",
      src: "/assets/Gallery-6.jpg",
    },
    {
      title: "My custom Yamaha R1",
      src: "/assets/Gallery-7.jpg",
    },
    {
      title: "Young Max wearing a grandpa hat",
      src: "/assets/Gallery-8.jpg",
    },
    {
      title: "211 b baker street",
      src: "/assets/Gallery-9.jpg",
    },
    {
      title: "Churchill interpretation",
      src: "/assets/Gallery-10.jpg",
    },
    {
      title: "A German drinking beer (what a cliché)",
      src: "/assets/Gallery-11.jpg",
    },
    {
      title: "Riding at the forrest",
      src: "/assets/Gallery-12.jpeg",
    },
    {
      title: "Lanzarote, first vacation of my worklife",
      src: "/assets/Gallery-13.jpg",
    },
    {
      title: "Lanzarote trip with a good friend",
      src: "/assets/Gallery-14.jpg",
    },
    {
      title: "Im a wizzard, at least thats what non tech people think",
      src: "/assets/Gallery-15.jpeg",
    },
    {
      title: "Chinatown in London",
      src: "/assets/Gallery-16.jpeg",
    },
    {
      title: "Spearfishing in croatia",
      src: "/assets/Gallery-17.jpeg",
    },
    {
      title: "Chinese food in London",
      src: "/assets/Gallery-18.jpeg",
    },
  ];

  return (
    <div className="text-center">
      <h2 className="text-4xl font-bold text-neutral-100 mb-8">
        Gallery
      </h2>
      <FocusCards cards={cards} />
    </div>
  );
}
