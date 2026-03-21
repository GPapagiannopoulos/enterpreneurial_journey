import { useState } from "react";

export interface FAQProps {
  question: string;
  answer: string;
}

const FAQs: FAQProps[] = [
  {
    question: "Should we give George a raise?",
    answer:
      "Yes. Absolutely. Frankly George is a treat and is building an entire website from scratch. Where else are you going to get this kind of service?",
  },
  {
    question: "What time is it over there George?",
    answer: "My eyes are too blurry to read the clock on my laptop",
  },
  {
    question: "Wait - are you drunk?",
    answer: "I'm sone stold cober",
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
    <section>
      {FAQs.map((FAQ, index) => (
        <div
          key={index}
          className="border-gray-400 border-b-2 py-4 max-w-4xl mx-auto mb-8"
        >
          <div className="flex justify-between items-center px-14">
            <h2 className="font-bold text-lg">{FAQ.question}</h2>
            <button
              onClick={() => toggleFAQ(index)}
              className="text-3xl text-gray-500 font-light ease-in-out duration-300"
            >
              {expandedFAQ === index ? "-" : "+"}
            </button>
          </div>
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${expandedFAQ === index ? "max-h-96" : "max-h-0"} px-14`}
          >
            {FAQ.answer}
          </div>
        </div>
      ))}
    </section>
  );
}
