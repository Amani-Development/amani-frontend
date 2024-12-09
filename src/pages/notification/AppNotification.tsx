import React, { useState } from "react";
import styles from "./AppNotification.module.css";
import profile from "../../assets/icons/profile.svg";
const AppNotification = () => {
  const feedData: any[] = [
    {
      id: 1,
      user: "Kemi Noah",
      action: "reserved",
      property: "Miniflat Apartment at Gbagada",
      duration: "2 days ago",
      checkIn: "1/1/2024",
      checkOut: "6/1/2024",
      guests: "4 Adults, 2 kids",
      price: 200,
      nights: 5,
      serviceFee: 20,
    },
    {
      id: 2,
      user: "Duke Chidi",
      action: "saved",
      property: "Miniflat Apartment at Fola agoro, yaba",
      duration: "1 days ago",
    },
    {
      id: 3,
      user: "Kemi Noah",
      action: "left you a rating on",
      property: "3 bedroom flat Apartment at Gbagada",
      duration: "4 days ago",
    },
    {
      id: 4,
      user: "Kemi Noah",
      action: "purchased",
      property: "Hostel at Gbagada",
      duration: "5 days ago",
    },
    {
      id: 5,
      user: "Kemi Noah",
      action: "reserved",
      property: "3 bedroom flat Apartment at Gbagada",
      duration: "7 days ago",
      checkIn: "3/1/2024",
      checkOut: "8/1/2024",
      guests: "2 Adults",
      price: 300,
      nights: 5,
      serviceFee: 30,
    },
    {
      id: 6,
      user: "Duke Chidi",
      action: "saved",
      property: "3 bedroom flat Apartment at Yaba",
      duration: "3 days ago",
      checkIn: "3/1/2024",
      checkOut: "8/1/2024",
      guests: "2 Adults",
      price: 300,
      nights: 5,
      serviceFee: 30,
    },
    {
      id: 7,
      user: "Duke Chidi",
      action: "reserved",
      property: "Duplex at Lekki Phase 1",
      duration: "2 days ago",
      checkIn: "3/1/2024",
      checkOut: "8/1/2024",
      guests: "2 Adults",
      price: 300,
      nights: 5,
      serviceFee: 30,
    },
    {
      id: 8,
      user: "Kemi Noah",
      action: "reserved",
      property: "Terrace at Victoria Island",
      duration: "2 days ago",
      checkIn: "3/1/2024",
      checkOut: "8/1/2024",
      guests: "2 Adults",
      price: 300,
      nights: 5,
      serviceFee: 30,
    },
    {
      id: 9,
      user: "Kemi Noah",
      action: "reserved",
      property: "Penthouse at Ikoyi",
      duration: "2 days ago",
      checkIn: "3/1/2024",
      checkOut: "8/1/2024",
      guests: "2 Adults",
      price: 300,
      nights: 5,
      serviceFee: 30,
    },
    {
      id: 10,
      user: "Kemi Noah",
      action: "reserved",
      property: "Bungalow at Ikeja",
      duration: "2 days ago",
      checkIn: "3/1/2024",
      checkOut: "8/1/2024",
      guests: "2 Adults",
      price: 300,
      nights: 5,
      serviceFee: 30,
    },
    {
      id: 11,
      user: "Kemi Noah",
      action: "reserved",
      property: "Villa at Banana Island",
      duration: "2 days ago",
      checkIn: "3/1/2024",
      checkOut: "8/1/2024",
      guests: "2 Adults",
      price: 300,
      nights: 5,
      serviceFee: 30,
    },
  ];

  const [isExpanded, setIsExpanded] = useState(false);
  const [feedLimit, setFeedLimit] = useState(7); 
  const handleShowMore = () => {
    if (isExpanded) {
      setFeedLimit(7);
    } else {
      setFeedLimit(feedData.length);
    }
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={styles.feed}>
      <h1>Notifications</h1>
      {feedData.slice(0, feedLimit).map((item) => (
        <div key={item.id} className={styles.feedItem}>
          <div className={styles.userInfo}>
            <img
              src={profile}
              alt={`${item.user} profile`}
              className={styles.profileImage}
            />
            <div>
              <p>
                <span className={styles.userName}>{item.user}</span>{" "}
                {item.action} your armani{" "}
                <span className={styles.property}>{item.property}</span>
              </p>
              <p className={styles.duration}>{item.duration}</p>
            </div>
          </div>
        </div>
      ))}

      <div className={styles.showMoreContainer}>
    
          <button className={styles.showMore} onClick={handleShowMore}>
            {isExpanded ? "Show Less" : "Show More"}
          </button>
    
      </div>
    </div>
  );
};

export default AppNotification;
