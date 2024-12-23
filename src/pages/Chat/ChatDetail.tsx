import React, { useState } from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import arrow from "../../assets/icons/arrowLeft.svg";
import profile from "../../assets/icons/profile.svg";
import sendIcon from "../../assets/icons/send.svg";
import uploadIcon from "../../assets/icons/upload.svg";
import styles from "./ChatDetail.module.css";

const ChatDetail = () => {
  const { userId } = useParams();
  const location = useLocation();
  const { userName } = location.state || {};

  const navigate = useNavigate();
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "Kemi Noah",
      content:
        "Hello, you have successfully booked an apartment with MODA PROPERTIES feel free to reach out for any assistance.",
      time: "11:00 AM",
      status: "Seen",
    },
    {
      id: 2,
      sender: "You",
      content: "Yes, the apartment in Gbagada, I will reach out if anything.",
      time: "11:02 AM",
      status: "Delivered",
    },
    {
      id: 3,
      sender: "Kemi Noah",
      content: "Okay then, enjoy your stay!",
      time: "11:00 AM",
      status: "Seen",
    },
    {
      id: 2,
      sender: "You",
      content: "Yes, the apartment in Gbagada, I will reach out if anything.",
      time: "11:02 AM",
      status: "Delivered",
    },
    {
      id: 3,
      sender: "Kemi Noah",
      content: "Okay then, enjoy your stay!",
      time: "11:00 AM",
      status: "Seen",
    },
    {
      id: 2,
      sender: "You",
      content: "Yes, the apartment in Gbagada, I will reach out if anything.",
      time: "11:02 AM",
      status: "Delivered",
    },
    {
      id: 3,
      sender: "Kemi Noah",
      content: "Okay then, enjoy your stay!",
      time: "11:00 AM",
      status: "Seen",
    },
    {
      id: 2,
      sender: "You",
      content: "Yes, the apartment in Gbagada, I will reach out if anything.",
      time: "11:02 AM",
      status: "Delivered",
    },
    {
      id: 3,
      sender: "Kemi Noah",
      content: "Okay then, enjoy your stay!",
      time: "11:00 AM",
      status: "Seen",
    },
  ]);
  const [newMessage, setNewMessage] = useState("");

  const handleGoBack = () => navigate(-1);

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setMessages([
        ...messages,
        {
          id: messages.length + 1,
          sender: "You",
          content: newMessage,
          time: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
          status: "Delivered",
        },
      ]);
      setNewMessage("");
    }
  };

  return (
    <div className={styles.form}>
      {/* Header */}
      <div className={styles.header}>
        <img
          src={arrow}
          alt="Go Back"
          onClick={handleGoBack}
          className={styles.backButton}
          style={{ cursor: "pointer" }}
        />
        <img src={profile} alt="Profile" className={styles.profileImage} />
        <p>{userName || "Kemi NOAH"}</p>
      </div>

      {/* Chat Container */}
      <div className={styles.chatContainer}>
        {messages.map((message) => (
          <div key={message.id} className={styles.messageWrapper}>
            <div
              className={
                message.sender === "You"
                  ? styles.messageOutgoing
                  : styles.messageIncoming
              }
            >
              <p className={styles.messageContent}>{message.content}</p>
            </div>
            {/* Conditionally render time and status */}
            <div
              className={
                message.sender === "You"
                  ? styles.messageMetaOutgoing
                  : styles.messageMetaIncoming
              }
            >
              {message.sender === "You" ? (
                <div className={styles.metaWrapper}>
                  <span className={styles.status}>{message.status}</span>
                  <span className={styles.time}>{message.time}</span>
                </div>
              ) : (
                <span className={styles.time}>{message.time}</span> // Only show time for incoming messages
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Typing Area */}
      <div className={styles.typingArea}>
        <div className={styles.messageInputContainer}>
          <input
            type="text"
            className={styles.messageInput}
            placeholder="Type message"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          />
          <button className={styles.uploadButton}>
            <img src={uploadIcon} alt="Upload" />
          </button>
        </div>
        <button className={styles.sendButton} onClick={handleSendMessage}>
          <img src={sendIcon} alt="Send" />
        </button>
      </div>
    </div>
  );
};

export default ChatDetail;
