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
        <div key={index}>
          <div>
            <h2>
              {index}. {FAQ.question}
            </h2>
            <button onClick={() => toggleFAQ(index)}>
              {expandedFAQ === index ? "-" : "+"}
            </button>
          </div>
          <div>{index === expandedFAQ ? <p>{FAQ.answer}</p> : null}</div>
        </div>
      ))}
    </section>
  );
}
