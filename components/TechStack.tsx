// components/TechStack.tsx
import React from 'react';

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
      { name: 'Postman', logo: '/assets/logos/postman.png' },
      { name: 'VSCode', logo: '/assets/logos/vscode.png' },
      { name: 'Visual Studio', logo: '/assets/logos/visualstudio.png' },
      { name: 'Arduino', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/ArduinoUno.svg/1024px-ArduinoUno.svg.png' },
      { name: 'Raspberry Pi', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Raspberry_Pi_B%2B_illustration.svg/2560px-Raspberry_Pi_B%2B_illustration.svg.png' },
      { name: 'Jupyter', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Jupyter_logo.svg/1200px-Jupyter_logo.svg.png' },
      { name: 'Supabase', logo: 'https://i.namu.wiki/i/GouPhhDWuWSZ3BRxBr-vF1WSD1jqAYvOJ2rSEGX1asr11zMTeHG2IIoEPdnSkLT4zXYQISIyGFXxRtBD66_PfA.svg' },
      { name: 'AWS', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/800px-Amazon_Web_Services_Logo.svg.png' }
    ]
  }
];

const TechStack: React.FC = () => {
  return (
    <section className="py-16 bg-black-100 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-purple-400 mb-12 text-center">Tech Stack</h2>
        {skills.map((skill, index) => (
          <div key={index} className="mb-12">
            <h3 className="text-2xl font-semibold text-purple-300 mb-4">{skill.category}</h3>
            <div className="flex flex-wrap gap-4">
              {skill.items.map((item, idx) => (
                <div
                  key={idx}
                  className="relative group flex-1 min-w-[200px] bg-gray-700 p-4 rounded-lg shadow-lg text-center"
                >
                  <img
                    src={item.logo}
                    alt={item.name}
                    className="w-16 h-16 mx-auto mb-4"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gray-800 bg-opacity-80 text-white p-2 rounded-lg">
                    {item.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
