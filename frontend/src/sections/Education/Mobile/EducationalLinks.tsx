import { Link } from "react-router-dom";
import SolarPanelsImg1 from "../../../assets/icons/Education/SolarPanelsLinks1.png";
import SolarPanelsImg2 from "../../../assets/icons/Education/SolarPanelsLinks2.png";
import SolarPanelsImg3 from "../../../assets/icons/Education/SolarPanelsLinks3.png";
import { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface EducationLinksProps {
  title: string;
  link: string;
  image: string;
}

const links: EducationLinksProps[] = [
  { title: "What is Green investing?", link: "/soon", image: SolarPanelsImg1 },
  {
    title: "Green vs. Traditional Investing",
    link: "/soon",
    image: SolarPanelsImg2,
  },
  { title: "Carbon Credits Explained", link: "/soon", image: SolarPanelsImg3 },
  {
    title: "Building a Green Portfolio",
    link: "/soon",
    image: SolarPanelsImg1,
  },
  { title: "How Returns Work", link: "/soon", image: SolarPanelsImg2 },
  { title: "Types of green projects", link: "/soon", image: SolarPanelsImg3 },
];

export default function EducationalLinks() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollByPanel = (direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const first = track.children[0] as HTMLElement | undefined;
    const second = track.children[1] as HTMLElement | undefined;
    if (!first) return;
    // distance from one card's start to the next = card width + gap
    const step = second
      ? second.offsetLeft - first.offsetLeft
      : first.offsetWidth;
    track.scrollBy({ left: direction * step, behavior: "smooth" });
  };

  return (
    <section className="pt-9">
      <div className="flex flex-col px-5.5 gap-3.5">
        <h2 className="text-[#063B27] text-2xl font-['DM_Sans'] font-bold">
          Education
        </h2>
        <p className="text-sm font-inter">
          We connect people and institutions with verified green projects
          worldwide, making it easy to invest where the planet needs it most.
        </p>

        <div className="flex items-center justify-center gap-1.5">
          <button
            onClick={() => scrollByPanel(-1)}
            aria-label="Previous"
            className="size-4 rounded-full bg-[#063B27] text-white flex items-center justify-center"
          >
            <ArrowLeft size={10} />
          </button>
          <button
            onClick={() => scrollByPanel(1)}
            aria-label="Next"
            className="size-4 rounded-full bg-[#063B27] text-white flex items-center justify-center"
          >
            <ArrowRight size={10} />
          </button>
        </div>
      </div>

      <div
        ref={trackRef}
        className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory px-5.5 py-4 scroll-pl-5.5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {links.map((link, index) => (
          <Link
            key={index}
            to={link.link}
            className="snap-start shrink-0 basis-1/2 aspect-3/5 relative rounded-sm overflow-hidden group"
          >
            <img
              src={link.image}
              alt={link.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute left-2 right-2 bottom-2 bg-white/95 backdrop-blur rounded-xl px-3 py-2 flex items-center justify-between gap-4">
              <h3 className="text- font-bold font-inter text-zinc-900">
                {link.title}
              </h3>
              <div className="w-8 h-8 rounded-full border border-zinc-900 flex items-center justify-center shrink-0">
                <span className="text-sm">↗</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
