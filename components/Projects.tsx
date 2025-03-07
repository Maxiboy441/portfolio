import { CardContainer } from "./ui/3d-card";
import { CardBody } from "./ui/3d-card";
import { CardItem } from "./ui/3d-card";
import Image from "next/image";
import Link from "next/link";
import { AnimatedTooltip } from "../components/ui/animated-tooltip";

const project1 = [
  {
    id: 1,
    name: "C#",
    designation: "C# MVC Framework",
    image:
      "https://m.media-amazon.com/images/I/61wLTRUpyZL.png",
  },
  {
    id: 2,
    name: "HTML",
    designation: "HyperText Markup Language",
    image:
      "https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_1280.png",
  },
  {
    id: 3,
    name: "CSS",
    designation: "Cascade Style Sheets",
    image:
      "https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png",
  },
  {
    id: 4,
    name: "JS",
    designation: "JavaScript",
    image:
      "https://www.citypng.com/public/uploads/preview/js-javascript-round-logo-icon-png-7017516947717339mnyf7eumy.png",
  },
  {
    id: 5,
    name: "Docker",
    designation: "Docker + Docker-Compose",
    image:
      "https://www.opc-router.de/wp-content/uploads/2023/07/Docker_150x150px-01-01-01.png",
  },
  {
    id: 6,
    name: "Ollama",
    designation: "AI made easy",
    image:
      "https://www.bujarra.com/wp-content/uploads/2024/04/ollama-local-ia-ai-open-source-00.png?v=1714427154",
  },
];

const project2 = [
  {
    id: 1,
    name: "Three.Js",
    designation: "3D JavaScript",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhUyPLMCrdBvL7byu5KkMnOssbQigrkiRxZw&s",
  },
  {
    id: 2,
    name: "HTML",
    designation: "HyperText Markup Language",
    image:
      "https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_1280.png",
  },
  {
    id: 3,
    name: "CSS",
    designation: "Cascade Style Sheets",
    image:
      "https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png",
  },
  {
    id: 4,
    name: "JS",
    designation: "JavaScript",
    image:
      "https://www.citypng.com/public/uploads/preview/js-javascript-round-logo-icon-png-7017516947717339mnyf7eumy.png",
  },
];

const project3 = [
  {
    id: 1,
    name: "John Doe",
    designation: "Software Engineer",
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
  },
  {
    id: 2,
    name: "Robert Johnson",
    designation: "Product Manager",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 3,
    name: "Jane Smith",
    designation: "Data Scientist",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 4,
    name: "Emily Davis",
    designation: "UX Designer",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 5,
    name: "Tyler Durden",
    designation: "Soap Developer",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
  },
  {
    id: 6,
    name: "Dora",
    designation: "The Explorer",
    image:
      "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
  },
];

const project4 = [
  {
    id: 1,
    name: "John Doe",
    designation: "Software Engineer",
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
  },
  {
    id: 2,
    name: "Robert Johnson",
    designation: "Product Manager",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 3,
    name: "Jane Smith",
    designation: "Data Scientist",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 4,
    name: "Emily Davis",
    designation: "UX Designer",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 5,
    name: "Tyler Durden",
    designation: "Soap Developer",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
  },
  {
    id: 6,
    name: "Dora",
    designation: "The Explorer",
    image:
      "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
  },
];

const Projects = () => {
  return (
    <div id="projects" className="text-center">
      <h2 className="text-4xl font-bold text-neutral-100 mb-8">
        My Hobby Projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2">
        {/* Card 1 */}
        <CardContainer>
          <CardBody className="bg-transparent relative group/card w-auto sm:w-[30rem] h-auto rounded-xl p-6 border border-black-300">
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src="https://github.com/Maxiboy441/PixelPrime/blob/develop/Documentation/frontend-images/Home-content.png?raw=true"
                height="1000"
                width="1000"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
            <CardItem
              translateZ="50"
              className="text-3xl font-bold text-neutral-100 pt-7"
            >
              Pixelprime
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-m max-w-sm mt-2 text-neutral-300 text-left"
            >
              A school Project in C# to rate your favorite movies and series,
              save them as favorites and get ai-recommendations based on your
              likings.
            </CardItem>
            <div className="flex justify-between items-center mt-20">
              <CardItem
                translateZ={20}
                as={Link}
                href="https://github.com/Maxiboy441/PixelPrime"
                target="__blank"
                className="px-4 py-2 rounded-xl text-xs font-normal text-[#CBACF9] hover:text-neutral-300"
                style={{ fontSize: "20px" }}
              >
                <div className="flex flex-row items-center justify-center mb-10 w-full">
                  <AnimatedTooltip items={project1} />
                </div>
              </CardItem>
              <CardItem
                translateZ={20}
                as={Link}
                href="pixelprime.maxih.de"
                target="__blank"
                className="px-4 py-2 rounded-xl text-xs font-normal text-[#CBACF9] hover:text-neutral-300"
                style={{ fontSize: "20px" }}
              >
                Live page →
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>

        {/* Card 2 */}
        <CardContainer>
          <CardBody className="bg-transparent relative group/card w-auto sm:w-[30rem] h-auto rounded-xl p-6 border border-black-300">
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src="https://user-images.githubusercontent.com/116082321/213998775-8f4d7fb2-b7ae-44d0-9b6c-69c2284f2cf8.png"
                height="1000"
                width="1000"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
            <CardItem
              translateZ="50"
              className="text-3xl font-bold text-neutral-100 pt-7"
            >
              Interactive 3D Solar System
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-m max-w-sm mt-2 text-neutral-300 text-left"
            >
              Explore the wonders of our solar system with this captivating 3D
              simulation of the planets using Three.js.
            </CardItem>
            <div className="flex justify-between items-center mt-20">
              <CardItem
                translateZ={20}
                as={Link}
                href="https://github.com/Maxiboy441/ThreeJS-Solarsystem"
                target="__blank"
                className="px-4 py-2 rounded-xl text-xs font-normal text-[#CBACF9] hover:text-neutral-300"
                style={{ fontSize: "20px" }}
              >
                <div className="flex flex-row items-center justify-center mb-10 w-full">
                  <AnimatedTooltip items={project2} />
                </div>
              </CardItem>
              <CardItem
                translateZ={20}
                as={Link}
                href="solarsytstem.theejs.maxih.de"
                target="__blank"
                className="px-4 py-2 rounded-xl text-xs font-normal text-[#CBACF9] hover:text-neutral-300"
                style={{ fontSize: "20px" }}
              >
                Live page →
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>

        {/* Card 3 */}
        <CardContainer>
          <CardBody className="bg-transparent relative group/card w-auto sm:w-[30rem] h-auto rounded-xl p-6 border border-black-300">
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                height="1000"
                width="1000"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
            <CardItem
              translateZ="50"
              className="text-3xl font-bold text-neutral-100 pt-7"
            >
              Make things float in air
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-m max-w-sm mt-2 text-neutral-300 text-left"
            >
              Hover over this card to unleash the power of CSS perspective
            </CardItem>
            <div className="flex justify-between items-center mt-20">
            <CardItem
                translateZ={20}
                as={Link}
                href="https://github.com/Maxiboy441/ThreeJS-Solarsystem"
                target="__blank"
                className="px-4 py-2 rounded-xl text-xs font-normal text-[#CBACF9] hover:text-neutral-300"
                style={{ fontSize: "20px" }}
              >
                <div className="flex flex-row items-center justify-center mb-10 w-full">
                  <AnimatedTooltip items={project3} />
                </div>
              </CardItem>
              <CardItem
                translateZ={20}
                as={Link}
                href="https://twitter.com/mannupaaji"
                target="__blank"
                className="px-4 py-2 rounded-xl text-xs font-normal text-[#CBACF9] hover:text-neutral-300"
                style={{ fontSize: "20px" }}
              >
                Live page →
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>

        {/* Card 4 */}
        <CardContainer>
          <CardBody className="bg-transparent relative group/card w-auto sm:w-[30rem] h-auto rounded-xl p-6 border border-black-300">
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                height="1000"
                width="1000"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
            <CardItem
              translateZ="50"
              className="text-3xl font-bold text-neutral-100 pt-7"
            >
              Make things float in air
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-m max-w-sm mt-2 text-neutral-300 text-left"
            >
              Hover over this card to unleash the power of CSS perspective
            </CardItem>
            <div className="flex justify-between items-center mt-20">
              <CardItem
                translateZ={20}
                as={Link}
                href="https://github.com/Maxiboy441/ThreeJS-Solarsystem"
                target="__blank"
                className="px-4 py-2 rounded-xl text-xs font-normal text-[#CBACF9] hover:text-neutral-300"
                style={{ fontSize: "20px" }}
              >
                <div className="flex flex-row items-center justify-center mb-10 w-full">
                  <AnimatedTooltip items={project4} />
                </div>
              </CardItem>
              <CardItem
                translateZ={20}
                as={Link}
                href="https://twitter.com/mannupaaji"
                target="__blank"
                className="px-4 py-2 rounded-xl text-xs font-normal text-[#CBACF9] hover:text-neutral-300"
                style={{ fontSize: "20px" }}
              >
                Live page →
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
      </div>
    </div>
  );
};

export default Projects;
