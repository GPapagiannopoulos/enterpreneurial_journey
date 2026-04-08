import webSearchImg from "../../assets/icons/web_search.png";

interface EducationLinksProps {
  title: string;
  link: string;
  image: string;
}

const links: EducationLinksProps[] = [
  {
    title: "What is Green investing?",
    link: "/soon",
    image: webSearchImg,
  },
  {
    title: "Green vs. Traditional Investing",
    link: "/soon",
    image: webSearchImg,
  },
  {
    title: "Carbon Credits Explained",
    link: "/soon",
    image: webSearchImg,
  },
  {
    title: "Building a Green Portfolio",
    link: "/soon",
    image: webSearchImg,
  },
  {
    title: "How Returns Work",
    link: "/soon",
    image: webSearchImg,
  },
  {
    title: "Types of green projects",
    link: "/soon",
    image: webSearchImg,
  },
];

export default function EducationalLinks() {
  return (
    <section className="py-20 border-b">
      <div className="flex justify-between items-start mb-16">
        <h2 className="text-7xl font-bold font-raleway">Educational Links</h2>
        <p className="text-neutral-500 text-sm font-inter max-w-xs pt-4">
          Our educational links are here to help you begin your green investment
          journey!
        </p>
      </div>

      <div className="grid grid-cols-2 gap-8">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.link}
            className="flex justify-between items-center p-8 bg-white rounded-[30px] outline outline-1 outline-offset-[-1px] outline-zinc-900 shadow-[0px_5px_0px_0px_rgba(25,26,35,1.00)] hover:translate-y-1 hover:shadow-none transition-all duration-200"
          >
            <div className="flex flex-col justify-between gap-12 h-full">
              <h3 className="text-xl font-bold font-inter max-w-60">
                {link.title}
              </h3>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full border border-zinc-900 flex items-center justify-center">
                  <span className="text-sm">↗</span>
                </div>
                <span className="text-sm font-medium font-inter">
                  Learn more
                </span>
              </div>
            </div>
            <img
              src={link.image}
              alt={link.title}
              className="w-32 h-32 object-contain"
            />
          </a>
        ))}
      </div>
    </section>
  );
}
