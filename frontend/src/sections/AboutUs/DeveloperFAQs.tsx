import { useState } from "react";

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
    <section className="pt-44 pb-54 flex flex-col gap-16">
      <h2 className="text-black text-7xl font-bold font-raleway">
        Frequently Asked Questions
      </h2>
      <div className="flex flex-col gap-8.5">
        {FAQs.map((FAQ, index) => (
          <div
            key={index}
            className="w-full bg-white rounded-[45px] shadow-[0px_5px_0px_0px_rgba(25,26,35,1.00)] outline -outline-offset-1 outline-sinc-900 flex flex-col gap-7 px-14 py-10 overflow-hidden"
          >
            <div className="flex justify-between items-center px-4 md:px-14">
              <div className="flex items-center gap-6 font-medium">
                <div className="text-6xl">
                  {index < 10 ? "0" : ""}
                  {index + 1}
                </div>
                <div className="text-3xl">{FAQ.question}</div>
              </div>
              <div>
                <button
                  className="w-14 h-14 bg-zinc-100 rounded-full border border-zinc-900 flex items-center justify-center font-extrabold text-3xl ease-in-out duration-300"
                  onClick={() => toggleFAQ(index)}
                >
                  {expandedFAQ === index ? "-" : "+"}
                </button>
              </div>
            </div>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${expandedFAQ === index ? "max-h-96" : "max-h-0"} px-4 md:px-14`}
            >
              <div className="w-full h-px bg-black"></div>
              <p className="text-lg font-normal">{FAQ.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
