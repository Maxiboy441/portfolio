"use client";

import React, { useMemo, useState } from 'react';
import { motion } from "framer-motion";
import Image from "next/image";

const skills = [
    { 
      category: 'Languages', 
      items: [
        { name: 'HTML5', logo: '/assets/logos/html5.png' }, 
        { name: 'CSS3', logo: '/assets/logos/css3.png' }, 
        { name: 'JavaScript', logo: '/assets/logos/javascript.png' }, 
        { name: 'PHP', logo: '/assets/logos/php.png' },
        { name: 'C#', logo: '/assets/logos/csharp.png' },
        { name: 'COBOL', logo: '/assets/logos/cobol.png' },
        { name: 'Python', logo: '/assets/logos/python.png' },
        { name: 'Winglang', logo: '/assets/logos/winglang.png' },
        { name: 'Dart', logo: 'https://cdn.worldvectorlogo.com/logos/dart.svg' },
        { name: 'Terraform', logo: '/assets/logos/terraform.png' }
      ]
    },
    { 
      category: 'Frameworks', 
      items: [
        { name: 'Laravel', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1969px-Laravel.svg.png' }, 
        { name: 'Three.js', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Three.js_Icon.svg/768px-Three.js_Icon.svg.png' },
        { name: 'React', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/862px-React-icon.svg.png' },
        { name: 'Astro', logo: 'https://upload.wikimedia.org/wikipedia/commons/e/ef/Astro_2016_logo.svg' },
        { name: 'Flutter', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Flutter_logo.svg/240px-Flutter_logo.svg.png' },
        { name: '.NET MVC', logo: 'https://upload.wikimedia.org/wikipedia/de/thumb/5/5b/Microsoft_.NET_Logo.svg/1200px-Microsoft_.NET_Logo.svg.png' },
        { name: 'Bootstrap', logo: '/assets/logos/bootstrap.png' },
        { name: 'Tailwind CSS', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1200px-Tailwind_CSS_Logo.svg.png' },
        { name: 'Next.js', logo: 'https://cdn.worldvectorlogo.com/logos/next-js.svg' }
      ]
    },
    { category: 'Databases', items: [{ name: 'MySQL', logo: '/assets/logos/mysql.png' }] },
    { 
      category: 'Operating Systems', 
      items: [
        { name: 'macOS', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Finder_Icon_macOS_Big_Sur.png/600px-Finder_Icon_macOS_Big_Sur.png' },
        { name: 'Windows', logo: '/assets/logos/windows.png' },
        { name: 'Linux', logo: '/assets/logos/linux.png' },
        { name: 'Debian', logo: '/assets/logos/debian.png' },
        { name: 'Ubuntu', logo: '/assets/logos/ubuntu.png' },
        { name: 'EndeavourOS', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/EndeavourOS_Logo.svg/1200px-EndeavourOS_Logo.svg.png' }
      ]
    },
    { 
      category: 'Tools & Technologies', 
      items: [
        { name: 'Git', logo: '/assets/logos/git.png' },
        { name: 'PHPStorm', logo: '/assets/logos/phpstorm.png' },
        { name: 'Postman', logo: 'https://www.svgrepo.com/show/354202/postman-icon.svg' },
        { name: 'VSCode', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png' },
        { name: 'Visual Studio', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Visual_Studio_Icon_2022.svg/800px-Visual_Studio_Icon_2022.svg.png' },
        { name: 'Arduino', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/ArduinoUno.svg/1024px-ArduinoUno.svg.png' },
        { name: 'Raspberry Pi', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Raspberry_Pi_B%2B_illustration.svg/2560px-Raspberry_Pi_B%2B_illustration.svg.png' },
        { name: 'Jupyter', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Jupyter_logo.svg/1200px-Jupyter_logo.svg.png' },
        { name: 'Supabase', logo: 'https://i.namu.wiki/i/GouPhhDWuWSZ3BRxBr-vF1WSD1jqAYvOJ2rSEGX1asr11zMTeHG2IIoEPdnSkLT4zXYQISIyGFXxRtBD66_PfA.svg' },
        { name: 'AWS', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/800px-Amazon_Web_Services_Logo.svg.png' },
        { name: 'K8s', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Kubernetes_logo_without_workmark.svg/617px-Kubernetes_logo_without_workmark.svg.png?20190926210707' },
        { name: 'Flux', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/17/Flux_color_logo.png' },
        { name: 'Helm', logo: 'https://palark.com/wp-content/uploads/2021/04/Making-the-most-out-of-Helm-templates.png' },

      

      ]
    }
  ];

  const TechStack: React.FC = () => {
    return (
      <section className="py-12 text-white">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.h2
            className="text-3xl sm:text-4xl font-bold text-center text-purple-400 mb-10"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Tech Stack
          </motion.h2>
          {skills.map((skill, index) => (
            <CategorySection key={index} category={skill.category} items={skill.items} />
          ))}
        </div>
      </section>
    );
  };
  
  // Memoized CategorySection to prevent unnecessary re-renders
  const CategorySection = React.memo(({ category, items }: { category: string; items: { name: string; logo: string }[] }) => {
    const [showAll, setShowAll] = useState(false);
  
    // Memoized calculation to avoid recalculating on every render
    const displayedItems = useMemo(() => (showAll ? items : items.slice(0, 4)), [showAll, items]);
  
    return (
      <div className="mb-10">
        <h3 className="text-xl sm:text-2xl font-semibold text-purple-300 mb-5">{category}</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {displayedItems.map((item, idx) => (
            <motion.div
            key={idx}
            className="relative flex flex-col items-center justify-center bg-gray-800 p-3 rounded-xl shadow-lg hover:shadow-xl transition-all"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-14 h-14 flex items-center justify-center">
              <Image
                src={item.logo}
                alt={item.name}
                width={56}
                height={56}
                className="object-contain"
                loading="lazy"
              />
            </div>
            <span className="text-xs sm:text-sm text-gray-300 group-hover:text-white transition-all text-center">
              {item.name}
            </span>
          </motion.div>
          ))}
        </div>
        {items.length > 4 && (
          <button
            onClick={() => setShowAll(!showAll)}
            className="mt-4 text-purple-400 hover:text-purple-300 transition-all text-sm sm:text-base"
          >
            {showAll ? "Show Less" : "Show More"}
          </button>
        )}
      </div>
    );
  });

  CategorySection.displayName = "TechStack";
  
  export default TechStack;