import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import SolarPanelsImg1 from "../../assets/icons/SolarPanelsLinks1.png";
import SolarPanelsImg2 from "../../assets/icons/SolarPanelsLinks2.png";
import SolarPanelsImg3 from "../../assets/icons/SolarPanelsLinks3.png";

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
    const firstPanel = track.firstElementChild as HTMLElement | null;
    if (!firstPanel) return;
    const panelWidth = firstPanel.offsetWidth + 32;
    track.scrollBy({ left: direction * panelWidth, behavior: "smooth" });
  };

  return (
    <section className="py-20">
      <div className="grid grid-cols-2 mb-12 px-30">
        <div>
          <h2 className="text-6xl text-teal-950 font-bold font-['DM_Sans'] tracking-wide leading-32 lg:col-start-1 lg:row-start-1">
            Educational Links
          </h2>
          <p className="text-3xl text-black font-medium font-inter leading-10 tracking-tight lg:col-start-1">
            We connect people and institutions with verified green projects
            worldwide, making it easy to invest where the planet needs it most.
          </p>
        </div>

        <div className="lg:col-start-2 lg:row-start-1 flex items-center justify-end gap-4">
          <button
            onClick={() => scrollByPanel(-1)}
            aria-label="Previous"
            className="w-14 h-14 rounded-full bg-teal-950 text-white flex items-center justify-center hover:bg-zinc-900 hover:fond-bold transition-colors"
          >
            <ArrowLeft size={24} />
          </button>
          <button
            onClick={() => scrollByPanel(1)}
            aria-label="Next"
            className="w-14 h-14 rounded-full bg-teal-950 text-white flex items-center justify-center hover:bg-zinc-900 hover:fond-bold transition-colors"
          >
            <ArrowRight size={24} />
          </button>
        </div>
      </div>

      <div
        ref={trackRef}
        className="flex gap-8 overflow-x-auto scroll-smooth snap-x snap-mandatory px-30 py-12 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {links.map((link, index) => (
          <Link
            key={index}
            to={link.link}
            className="snap-start shrink-0 w-[400px] aspect-[4/5] relative rounded-2xl overflow-hidden group"
          >
            <img
              src={link.image}
              alt={link.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute left-4 right-4 bottom-4 bg-white/95 backdrop-blur rounded-xl px-5 py-4 flex items-center justify-between gap-4">
              <h3 className="text-base font-bold font-inter text-zinc-900">
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
