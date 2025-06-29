import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function CV() {
  const data = [
    {
      title: "2010 - 2014",
      content: (
        <div className="mb-12">
          <h3 className="text-white font-bold text-3xl">Primary School</h3>
          <a
            href="https://www.horrheimer-grundschule.de"
            className="text-gray-400 text-base hover:text-[#CBACF9]"
          >
            Grundschule Horrheim
          </a>
          <p className="text-neutral-200 text-xs md:text-sm font-normal">
            I went to primary school in my home village and developed an
            interest in music and IT at an early age.
          </p>
          <div className="mt-6">
            <Image
              src="https://www.vaihingen.de/fileadmin/_processed_/d/8/csm_Horrheim_DSC7161_cbb66a81e5.jpg"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-40 w-full shadow-lg"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2014 - 2020",
      content: (
        <div className="mb-12">
          <h3 className="text-white font-bold text-3xl">Secondary School</h3>
          <a
            href="https://www.kirbach-schule.de"
            className="text-gray-400 text-base hover:text-[#CBACF9]"
          >
            Kirbachschule Hohenhasslach
          </a>
          <p className="text-neutral-200 text-xs md:text-sm font-normal mb-6">
            My interests were specifically encouraged here. I took over the half
            a year teaching handicrafts at primary school and helped with
            chemistry teaching days, due to my interest and strength in
            teaching.
          </p>
          <div className="flex flex-col md:flex-row gap-6">
            <Image
              src="https://www.kirbach-schule.de/kis/images/dsc_0097.jpg?crc=22410530"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-32 md:h-44 lg:h-60 w-full shadow-md"
            />
            <Image
              src="https://www.lkz.de/cms_media/module_img/2805/1402868_1_detailbig_668d4da435ac8.jpg"
              alt="feature template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-32 md:h-44 lg:h-60 w-full shadow-md"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2020 - 2022",
      content: (
        <div className="mb-12">
          <div className="flex justify-center mb-6">
            <Image
              src="https://www.stuttgarter-nachrichten.de/media.media.fe6e1dbc-d2de-4f68-9d21-c6515c7a5674.original1024.jpg"
              alt="feature template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-40 w-full shadow-lg"
            />
          </div>
          <h3 className="text-white font-bold text-3xl">Highschool</h3>
          <a
            href="https://www.mps-lb.de"
            className="text-gray-400 text-base hover:text-[#CBACF9]"
          >
            Mathilde Planck Gymnasium Ludwigsburg
          </a>
          <p className="text-neutral-200 text-xs md:text-sm font-normal mb-6">
            Over the course of two years, I completed the school part of my
            university entrance qualification, specialising in psychology and
            pedagogy. Due to my skills, I was allowed to repeatedly teach
            computer science, as I enjoy teaching and love computer science.
            Although I could have completed my high school diploma with one more
            year, I decided to start an apprenticeship in computer science
            because I realised that this was my career path and not psychology
            or education.
          </p>
        </div>
      ),
    },
    {
      title: "2022 - 2025",
      content: (
        <div className="flex flex-col md:flex-row items-center mb-12">
          <div className="flex-1 mb-6 md:mb-0">
            <h3 className="text-white font-bold text-3xl">Apprenticeship</h3>
            <a
              href="https://www.wongdoody.com"
              className="text-gray-400 text-base hover:text-[#CBACF9]"
            >
              wongdoody GmbH
            </a>
            <p className="text-neutral-200 text-xs md:text-sm font-normal">
              I started my apprenticeship in a web agency with a focus on
              Laravel and learnt best practices and the basics of modern web
              development. In addition to Laravel, I was able to try out various
              technologies such as Flutter, React, Astro, Threejs, C# and Python
              frameworks. Through my work, I gained a deep understanding of
              full-stack development and agile processes. I also gained
              experience in working with customers and in project management.
            </p>
          </div>
          <div className="flex-1 pl-3">
            <Image
              src="https://cdn.prod.website-files.com/63cafdabb04c4f56e65116df/65240bc68ad6737486993008_oddity_is_now_WD_background_new.webp"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-40 md:h-44 lg:h-60 w-full shadow-lg"
            />
          </div>
        </div>
      ),
    },
    {
      title: "18.08.2025",
      content: (
        <div className="flex flex-col md:flex-row items-center mb-12">
          <div className="flex-1 pr-5">
            <Image
              src="https://www.etes.de/files/etes/bilder/ETES_Au%C3%9Fengeb%C3%A4ude.png"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-40 md:h-44 lg:h-60 w-full shadow-lg"
            />
          </div>
          <div className="flex-1 mb-6 md:mb-0">
            <h3 className="text-white font-bold text-3xl">First Job</h3>
            <a
              href="https://www.etes.de"
              className="text-gray-400 text-base hover:text-[#CBACF9]"
            >
              ETES GmbH
            </a>
            <p className="text-neutral-200 text-xs md:text-sm font-normal">
              After my apprenticeship, I will continue to work as a full-stack
              developer at ETES GmbH. Contracts are already signed and I am
              looking forward to the new challenges. Im exiteted to learn more
              about the company and the projects I will be working on and to
              contribute my skills and knowledge to the team.
            </p>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div>
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <h2 className="text-lg md:text-4xl mb-4 text-white max-w-4xl font-bold">
          Ciriculum Vitae
        </h2>
      </div>
      <Timeline data={data} />
    </div>
  );
}
