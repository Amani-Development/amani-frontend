import styles from "./Support.module.css";
import React, { useState } from "react";
import headset from "../../assets/icons/headset.svg"

const Support = () => {
  // Sample FAQ data with unique ids
  const faq = [
    {
      id: 1,
      question: "What is Amani?",
      answer: "Amani is a property management platform.",
    },
    {
      id: 2,
      question: "How do I create an account?",
      answer: "You can sign up using your email or social media accounts.",
    },
    {
      id: 3,
      question: "How do I reserve a property?",
      answer:
        "Search for available properties and follow the reservation steps.",
    },
    {
      id: 4,
      question: "How do I change my password?",
      answer: "Go to the settings page to change your password.",
    },
    {
      id: 5,
      question: "How do I contact support?",
      answer: "You can contact support through our help page or via email.",
    },
    {
      id: 6,
      question: "What payment methods do you accept?",
      answer: "We accept credit card, PayPal, and bank transfer.",
    },
    {
      id: 7,
      question: "Can I cancel my reservation?",
      answer:
        "Yes, you can cancel your reservation from the 'My Reservations' page.",
    },
    {
      id: 8,
      question: "Do you offer discounts?",
      answer: "Yes, we offer seasonal discounts and promotions.",
    },
    {
      id: 9,
      question: "Is Amani available internationally?",
      answer: "Currently, Amani operates in select countries.",
    },
  ];

  const [isRevealed, setIsRevealed] = useState<number | null>(null); 
  const [isExpanded, setIsExpanded] = useState(false); 
  const [feedLimit, setFeedLimit] = useState(3); 

  const handleShowMore = () => {
    if (isExpanded) {
      setFeedLimit(3);
    } else {
      setFeedLimit(faq.length); 
    }
    setIsExpanded(!isExpanded);
  };

  const toggleAnswer = (id: number) => {
    setIsRevealed(isRevealed === id ? null : id); 
  };

  return (
    <div className={styles.container}>
      <h1>Customer Support</h1>
      <div className={styles.help}>
        <div>
          <p className={styles.hello}>hello</p>
          <p> How can we help you today?</p>
        </div>
        <button className={styles.liveChat}>
          <img src={headset} alt={headset} />
          liveChat
        </button>
      </div>
      <div className={styles.feed}>
        <h1>FAQ</h1>
        {faq.slice(0, feedLimit).map((item) => (
          <div key={item.id} className={styles.feedItem}>
            <div
              className={styles.question}
              onClick={() => toggleAnswer(item.id)}
            >
              <span className={styles.questionText}>{item.question}</span>
              <span
                className={`${styles.arrow} ${
                  isRevealed === item.id ? styles.rotated : ""
                }`}
              >
                <svg
                  width="15"
                  height="27"
                  viewBox="0 0 15 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.3125 9.125L9.6875 13.5L5.3125 17.875"
                    stroke="#38393D"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </div>
            {isRevealed === item.id && (
              <div className={styles.answer}>
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}

        {/* Only show the button if there are more FAQ items than the current feedLimit */}
        <div className={styles.showMoreContainer}>
          <button className={styles.showMore} onClick={handleShowMore}>
            {isExpanded ? "Show Less" : "Show More"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Support;
