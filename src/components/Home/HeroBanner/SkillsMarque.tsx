"use client";
import AutoScroll from "embla-carousel-auto-scroll";
import useEmblaCarousel from "embla-carousel-react";
import Link from "next/link";
import { FaHandsClapping } from "react-icons/fa6";

export default function SkillsMarque() {
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

  // Static sample data
  const staticBreakingItems = [
    {
      bangla_title: "Ready Frontend Design",
      category_name: "frontend",
      slug: "ready-frontend-design",
    },
    {
      bangla_title: "Next.js Site Development",
      category_name: "nextjs",
      slug: "nextjs-skills",
    },
    {
      bangla_title: "Tailwind CSS Templates",
      category_name: "tailwind",
      slug: "tailwind-css-expert",
    },
    {
      bangla_title: "React Website Development",
      category_name: "react",
      slug: "react-hooks-practice",
    },
  ];

  // Repeat for infinite scroll effect
  const extendedBreakingItems = [
    ...staticBreakingItems,
    ...staticBreakingItems,
    ...staticBreakingItems,
  ];

  return (
    <div className="bg-black">
      <section className="mx-auto flex items-center gap-x-2 text-white py-5">
        <div className="embla overflow-hidden" ref={emblaRef}>
          <div className="embla__container flex">
            {extendedBreakingItems.map((item, index) => (
              <div
                key={index}
                className="embla__slide min-w-0 flex-[0_0_auto] px-2 flex items-center gap-2"
              >
                <Link
                  href={`/details/${item.category_name}/${item.slug}`}
                  className="hover:underline flex"
                >
                 <FaHandsClapping className="me-5 site-text text-4xl" /> <span className="text-3xl">{item.bangla_title}</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
