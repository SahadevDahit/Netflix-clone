"use client";
import React, { useState } from "react";

interface Answer {
  paragraphs: string[];
}

interface Question {
  question: string;
  show: boolean;
  answers: Answer[];
}

const AskedQuestion = () => {
  const [questions, setQuestions] = useState<Question[]>([
    {
      question: "What is Netflix?",
      show: false,
      answers: [
        {
          paragraphs: [
            "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more – on thousands of internet-connected devices.",
            "You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There is always something new to discover, and new TV shows and movies are added every week!",
          ],
        },
      ],
    },
    {
      question: "How much does Netflix cost?",
      show: false,
      answers: [
        {
          paragraphs: [
            "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from USD3.99 to USD11.99 a month. No extra costs, no contracts.",
          ],
        },
      ],
    },
    {
      question: "Where can I watch?",
      show: false,
      answers: [
        {
          paragraphs: [
            "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.",
            "You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.",
          ],
        },
      ],
    },
    {
      question: "How do I cancel?",
      show: false,
      answers: [
        {
          paragraphs: [
            "Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.",
          ],
        },
      ],
    },
    {
      question: "What can I watch on Netflix?",
      show: false,
      answers: [
        {
          paragraphs: [
            "Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.",
          ],
        },
      ],
    },
    {
      question: "Is Netflix good for kids?",
      show: false,
      answers: [
        {
          paragraphs: [
            "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.",
            "Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see",
          ],
        },
      ],
    },

    // Add more questions here if needed
  ]);

  const toggleAnswer = (index: number) => {
    const updatedQuestions = questions.map((question, i) => ({
      ...question,
      show: i === index ? !question.show : false,
    }));
    setQuestions(updatedQuestions);
  };

  return (
    <>
      <div className=" bg-black text-white w-full py-5">
        <h1 className="w-full pt-[5rem] pb-5 text-5xl font-bold text-center">
          Frequently Asked Questions
        </h1>
        <div className="px-[15px] w-[80%] mx-auto">
          {questions.map((question, index) => (
            <div key={index} className="bg-[#2d2d2d] mb-[15px]">
              <div
                className={`relative duration-300  p-[20px] text-[30px] border-b-[2px] border-black cursor-pointer hover:bg-[rgb(78,78,78)]`}
                onClick={() => toggleAnswer(index)}
              >
                <h3>{question.question}</h3>
                <span
                  className={`absolute right-[20px] top-[15px] ${
                    question.show ? "rotate-45" : "rotate-0"
                  }`}
                >
                  +
                </span>
              </div>
              <div
                className={`px-5 text-2xl   origin-top duration-300 ${
                  question.show ? "scale-y-100 h-[auto]" : "scale-y-0 h-[0px]"
                }`}
              >
                {question.answers.map((answer, answerIndex) => (
                  <div key={answerIndex}>
                    {answer.paragraphs.map((paragraph, pIndex) => (
                      <p key={pIndex} className="py-2">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <h1 className="text-center w-full pt-5 text-2xl">
          Ready to watch? Enter your email to create or restart your membership.
        </h1>
        <div className="w-[50%] mx-auto flex items-center justify-center gap-1 py-5">
          <input
            className="rounded round-5 px-5 h-[3.5rem] sm:w-full border border-white"
            type="text"
            placeholder="Email address"
            style={{ backgroundColor: "rgba(0,0,0,0.3)" }}
          />
          <button className="p-5 flex items-center justify-center text-2xl font-bold bg-red-600 rounded h-[3.5rem] whitespace-nowrap">
            Get Started &gt;
          </button>
        </div>
      </div>
      <div
        className="w-full h-[8px]"
        style={{ background: "rgb(35,35,35)" }}
      ></div>
    </>
  );
};
export default AskedQuestion;
