"use client";
import AutoScroll from "embla-carousel-auto-scroll";
import useEmblaCarousel from "embla-carousel-react";
import Link from "next/link";
import { FaHandsClapping } from "react-icons/fa6";

export default function BannerBottomSkills() {
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
      bangla_title: "Theme Or Template Design",
      category_name: "frontend",
      slug: "ready-frontend-design",
    },
    {
      bangla_title: "Website Development & Design",
      category_name: "nextjs",
      slug: "nextjs-skills",
    },
    {
      bangla_title: "Software Design & Development",
      category_name: "tailwind",
      slug: "tailwind-css-expert",
    },
    {
      bangla_title: "Wordpress Theme Customization",
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
      <section className="flex items-center py-8 mx-auto text-white gap-x-2">
        <div className="overflow-hidden embla" ref={emblaRef}>
          <div className="flex embla__container">
            {extendedBreakingItems.map((item, index) => (
              <div
                key={index}
                className="embla__slide min-w-0 flex-[0_0_auto] px-2 flex items-center gap-2"
              >
                <Link
                  href={`/details/${item.category_name}/${item.slug}`}
                  className="flex hover:underline"
                >
                  <FaHandsClapping className="text-4xl me-5 site-text" />{" "}
                  <span className="text-3xl">{item.bangla_title}</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
