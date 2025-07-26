"use client";
import AutoScroll from "embla-carousel-auto-scroll";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";

export default function SkillsSet() {
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      align: "start", // Align from start
      slidesToScroll: 1, // Scroll 1 at a time
    },
    [
      AutoScroll({
        stopOnMouseEnter: false,
        stopOnInteraction: false,
        speed: 0.85,
        startDelay: 50,
      }),
    ]
  );

  const skills = [
    { name: "Bootstrap", img: "/images/skills/Bootstrap.png" },
    { name: "Chrome", img: "/images/skills/Chrome.png" },
    { name: "CSS3", img: "/images/skills/CSS3.png" },
    { name: "D3.js", img: "/images/skills/D3.js.png" },
    { name: "Express", img: "/images/skills/Express.png" },
    { name: "Figma", img: "/images/skills/Figma.png" },
    { name: "Firebase", img: "/images/skills/Firebase.png" },
    { name: "Git", img: "/images/skills/Git.png" },
    { name: "GitHub", img: "/images/skills/GitHub.png" },
    { name: "HTML5", img: "/images/skills/HTML5.png" },
    { name: "JavaScript", img: "/images/skills/JavaScript.png" },
    { name: "Laravel", img: "/images/skills/Laravel.png" },
    { name: "MongoDB", img: "/images/skills/MongoDB.png" },
    { name: "Next.js", img: "/images/skills/Next.js.png" },
    { name: "NPM", img: "/images/skills/NPM.png" },
    { name: "React", img: "/images/skills/React.png" },
    { name: "TailwindCSS", img: "/images/skills/TailwindCSS.png" },
    { name: "Trello", img: "/images/skills/Trello.png" },
    { name: "Vercel", img: "/images/skills/Vercel.png" },
    { name: "VSCode", img: "/images/skills/VSCode.png" },
    { name: "WooCommerce", img: "/images/skills/WooCommerce.png" },
    { name: "WordPress", img: "/images/skills/WordPress.png" },
  ];

  return (
    <div className="mt-20 mb-10 bg-[#1c1d20]">
      <section className="py-8 text-white skills-box">
        <div className="overflow-hidden embla" ref={emblaRef}>
          <div className="flex embla__container">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="embla__slide flex-[0_0_10%] px-4 flex items-center justify-center"
              >
                <Image
                  src={skill.img}
                  alt={skill.name}
                  width={60}
                  height={60}
                  className="block object-contain transition-transform duration-300 border hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
