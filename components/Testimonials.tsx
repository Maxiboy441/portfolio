import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function Testimonials() {
  const testimonials = [
    {
      quote:
        "With a remarkable ability to solve complex problems and a deep understanding of systems, Maximilian consistently delivers outstanding results, even in the most challenging situations.",
      name: "Stefan Heller",
      designation: "Headmaster of Mathidle Planck School",
      src: "https://www.mps-lb.de/_mps_files/bilder/heller2.jpg",
    },
    {
      quote:
        "Proactive and creative, Maximilian brings fresh perspectives and innovative solutions to every project, demonstrating impressive growth and expertise in his field.",
      name: "Stefan Heller",
      designation: "Headmaster of Mathidle Planck School",
      src: "https://www.mps-lb.de/_mps_files/bilder/heller1.jpg",
    },
    {
      quote:
        "Maximilian is not only highly skilled but also an excellent team player, always willing to assist others with clear and effective guidance. His contributions create a positive and productive environment.",
      name: "Stefan Heller",
      designation: "Headmaster of Mathidle Planck School",
      src: "https://www.mps-lb.de/_mps_files/bilder/heller2.jpg",
    },
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}
