"use client";
import AutoScroll from "embla-carousel-auto-scroll";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";

export default function SkillsSet() {
  const [emblaRef] = useEmblaCarousel(
    { loop: true, containScroll: "keepSnaps" },
    [
      AutoScroll({
        stopOnMouseEnter: true,
        stopOnInteraction: false,
        speed: 0.85,
        startDelay: 50,
      }),
    ]
  );

  // Static sample skills with image and alt text
  const skills = [
    { name: "React", img: "https://ex-coders.com/wp/xiomi/wp-content/uploads/2025/05/1.svg" },
    { name: "Next.js", img: "https://ex-coders.com/wp/xiomi/wp-content/uploads/2025/05/2.svg" },
    { name: "Vercel", img: "https://ex-coders.com/wp/xiomi/wp-content/uploads/2025/05/3.svg" },
    { name: "Laravel Blade", img: "https://ex-coders.com/wp/xiomi/wp-content/uploads/2025/05/4.svg" },
    { name: "Tailwind CSS", img: "https://ex-coders.com/wp/xiomi/wp-content/uploads/2025/05/5.svg" },
    { name: "Node.js", img: "https://ex-coders.com/wp/xiomi/wp-content/uploads/2025/05/6.svg" },
    { name: "MongoDB", img: "https://ex-coders.com/wp/xiomi/wp-content/uploads/2025/05/7.svg" },
    { name: "Figma", img: "https://ex-coders.com/wp/xiomi/wp-content/uploads/2025/05/8.svg" },
  ];

  const extendedSkills = [...skills, ...skills, ...skills]; // for infinite scroll

  return (
    <div className="bg-black">
      <section className="flex items-center py-8 mx-auto text-white">
        <div className="w-full overflow-hidden embla" ref={emblaRef}>
          <div className="flex items-center embla__container">
            {extendedSkills.map((skill, index) => (
              <div
                key={index}
                className="embla__slide min-w-0 flex-[0_0_auto] px-6 flex items-center justify-center"
              >
                <Image
                  src={skill.img}
                  alt={skill.name}
                  width={60}
                  height={60}
                  className="object-contain transition-transform duration-300 hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
