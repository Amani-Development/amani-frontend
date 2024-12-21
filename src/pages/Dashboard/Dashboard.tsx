import React, { useState } from "react";
import styles from "./Dashboard.module.css";
import profile from "../../assets/icons/profile.svg";
import time from "../../assets/icons/time.svg";
import people from "../../assets/icons/people.svg";
import { NavLink } from "react-router-dom";


interface FeedItem {
  id: number;
  user: string;
  action: string;
  property: string;
  duration: string;
  checkIn?: string; 
  checkOut?: string;
  guests?: string; 
  price?: number; 
  nights?: number; 
  serviceFee?: number;
}

const Dashboard = () => {
  const feedData: FeedItem[] = [
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

  const [feedLimit, setFeedLimit] = useState(7); 
  const [showReservationDetails, setShowReservationDetails] = useState(false); 
  const [selectedReservation, setSelectedReservation] =
    useState<FeedItem | null>(null);
  const [isExpanded, setIsExpanded] = useState(false); 

  const handleViewDetails = (item: FeedItem) => {
    setSelectedReservation(item);
    setShowReservationDetails(true); 
    console.log(selectedReservation)
    console.log(showReservationDetails)
  };

  const handleBackToFeed = () => {
    setShowReservationDetails(false);
  };

  const handleShowMore = () => {
    if (isExpanded) {
      setFeedLimit(7); 
    } else {
      setFeedLimit(feedData.length); 
    }
    setIsExpanded(!isExpanded); 
  };
  

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Amani Performance</h1>

        <NavLink to="/app/uploadamani">
          <button className={styles.uploadButton}>+ Upload Amani</button>
        </NavLink>
      </div>

      <div className={styles.statistics}>
        <div className={styles.statItem}>
          <div className={styles.statLine}>
            <p className={styles.statNumber}>672</p>
            <p>Total Properties</p>
          </div>
          <div className={styles.statLine}>
            <p className={styles.statChange}>+ 12</p>
            <p>In last 28 days</p>
          </div>
        </div>
        <div className={styles.statItem}>
          <div className={styles.statLine}>
            <p className={styles.statNumber}>2,839,400</p>
            <p>Amount Sold</p>
          </div>
          <div className={styles.statLine}>
            <p className={styles.statChange}>+ 300,400</p>
            <p>In last 28 days</p>
          </div>
        </div>
      </div>

      {!showReservationDetails ? (
        // Feed View
        <div className={styles.feed}>
          <h1>Feed</h1>
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
              {item.action === "reserved" && (
                <div className={styles.actionsContainer}>
                  <div className={styles.actions}>
                    <button className={styles.confirmButton}>Confirm</button>
                    <button className={styles.rejectButton}>Reject</button>
                  </div>
                  <p
                    className={styles.showMoreDetails}
                    onClick={() => handleViewDetails(item)}
                  >
                    See reservation details
                  </p>
                </div>
              )}
            </div>
          ))}

          <div className={styles.showMoreContainer}>
            <button className={styles.showMore} onClick={handleShowMore}>
              {isExpanded ? "Show Less" : "Show More"}
            </button>
          </div>
        </div>
      ) : (
        // Reservation Details View
        <div className={styles.reservationDetails}>
          <button className={styles.backButton} onClick={handleBackToFeed}>
            ← Reservation Details
          </button>

          {selectedReservation && (
            <>
              <div className={styles.detailHeader}>
                <img
                  src={profile}
                  alt={`${selectedReservation.user} profile`}
                  className={styles.detailProfileImage}
                />
                <span className={styles.user}>{selectedReservation.user}</span>
              </div>
              <div className={styles.reservationitems}>
                <img src={time} alt="" />
                {selectedReservation.checkIn || "N/A"} -{" "}
                {selectedReservation.checkOut || "N/A"}
              </div>

              <div className={styles.reservationitems}>
                <img src={people} alt="" />{" "}
                {selectedReservation.guests || "N/A"}
              </div>
              <div className={styles.pricing}>
                <p className={styles.priceheader}> Price for selected period</p>

                <p className={styles.money}>
                  <span>
                    {" "}
                    ₦{selectedReservation?.price ?? 0} x{" "}
                    {selectedReservation?.nights ?? 0} nights{" "}
                  </span>{" "}
                  <span>
                    ₦
                    {(selectedReservation?.price ?? 0) *
                      (selectedReservation?.nights ?? 0)}
                  </span>
                </p>
                <p className={styles.money}>
                  <span> Service Fee:</span>
                  <span>₦ {selectedReservation?.serviceFee ?? 0}</span>
                </p>
              </div>
              <p className={styles.money}>
                <span>Total amani fee</span> ₦
                {(selectedReservation?.price ?? 0) *
                  (selectedReservation?.nights ?? 0) +
                  (selectedReservation?.serviceFee ?? 0)}
              </p>

              <div className={styles.actions}>
                <button className={styles.confirmButton}>Confirm</button>
                <button className={styles.rejectButton}>Reject</button>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
