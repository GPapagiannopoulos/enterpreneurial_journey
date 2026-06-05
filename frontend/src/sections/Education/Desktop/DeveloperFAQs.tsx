import { ChevronRight } from "lucide-react";
import { useState } from "react";
import Button from "../../../components/ui/Button";

export interface FAQProps {
  question: string;
  answer: string;
}

const FAQs: FAQProps[] = [
  {
    question: "What types of projects can I invest in?",
    answer:
      "Our platform features solar and wind energy, reforestation, ocean reservation, sustainable agriculture, and clean water initiatives - all independently verified for environmental impact.",
  },
  {
    question: "What is the minimum investment?",
    answer: "Placeholder text",
  },
  {
    question: "How are returns generated?",
    answer: "Placeholder text",
  },
  {
    question: "Is my investment protected?",
    answer: "Placeholder text",
  },
  {
    question: "Is green investing regulated?",
    answer: "Placeholder text",
  },
];

export default function DeveloperFAQs() {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const toggleFAQ = (number: number) => {
    if (expandedFAQ === number) {
      setExpandedFAQ(null);
    } else {
      setExpandedFAQ(number);
    }
  };

  return (
    <section className="pt-44 px-30 flex flex-col gap-16">
      <h2 className="text-teal-950 text-6xl font-bold font-['DM_Sans'] tracking-wide">
        FAQ
      </h2>
      <div className="flex flex-col gap-8.5">
        {FAQs.map((FAQ, index) => (
          <div
            key={index}
            className="w-full bg-[#BDDBCDA6] rounded-light flex flex-col gap-7 px-14 py-10 overflow-hidden"
          >
            <div className="flex justify-between items-center px-4 md:px-14">
              <div className="flex items-center gap-8 font-medium">
                <div className="text-6xl">
                  {index < 10 ? "0" : ""}
                  {index + 1}
                </div>
                <div className="text-4xl">{FAQ.question}</div>
              </div>
              <div>
                <Button
                  label=""
                  icon={
                    <ChevronRight
                      className={`size-12 transition-transform ${index == expandedFAQ ? "rotate-90" : ""}`}
                    />
                  }
                  variant="secondary"
                  onClick={() => toggleFAQ(index)}
                  active={location.pathname.startsWith("/projects")}
                />
              </div>
            </div>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${expandedFAQ === index ? "max-h-96" : "max-h-0"} px-4 md:px-14`}
            >
              <p className="text-teal-950 text-3xl font-normal font-inter leading-9">
                {FAQ.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
