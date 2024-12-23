
import styles from "./AllChat.module.css";
import profile from "../../assets/icons/profile.svg";
import { useNavigate } from "react-router-dom";
const AllChat = () => {
const navigate = useNavigate();

  const feedData = [
    {
      id: 1,
      user: "Kemi Noah",
      message: "Ok i will definitely reach out if anything, thank you.",
      time: "Yesterday",
      unReadMessages: 2,
    },
    {
      id: 2,
      user: "Duke Chidi",
      message: "I just booked the Apartment, you are the landlord right?.",
      time: "Yesterday",
      unReadMessages: 0,
    },
    {
      id: 3,
      user: "Kemi Noah",
      message: "Ok i will definitely reach out if anything, thank you.",
      time: "Yesterday",
      unReadMessages: 0,
    },
    {
      id: 4,
      user: "Kemi Noah",
      message: "Ok i will definitely reach out if anything, thank you.",
      time: "Yesterday",
      unReadMessages: 2,
    },
    {
      id: 1,
      user: "Kemi Noah",
      message: "Ok i will definitely reach out if anything, thank you.",
      time: "Yesterday",
      unReadMessages: 2,
    },
    {
      id: 2,
      user: "Duke Chidi",
      message: "I just booked the Apartment, you are the landlord right?.",
      time: "Yesterday",
      unReadMessages: 0,
    },
    {
      id: 3,
      user: "Kemi Noah",
      message: "Ok i will definitely reach out if anything, thank you.",
      time: "Yesterday",
      unReadMessages: 0,
    },
    {
      id: 4,
      user: "Kemi Noah",
      message: "Ok i will definitely reach out if anything, thank you.",
      time: "Yesterday",
      unReadMessages: 2,
    },
    {
      id: 3,
      user: "Kemi Noah",
      message: "Ok i will definitely reach out if anything, thank you.",
      time: "Yesterday",
      unReadMessages: 0,
    },
    {
      id: 4,
      user: "Kemi Noah",
      message: "Ok i will definitely reach out if anything, thank you.",
      time: "Yesterday",
      unReadMessages: 2,
    },
  ];
  const handleChatClick = (userId: number, userName: string) => {
    navigate(`${userId}`, { state: { userName } });
  };


  return (
    <div className={styles.container}>
      <h1>Chats</h1>
      <div className={styles.feed}>
        {feedData.map((item) => (
          <div
            key={item.id}
            className={styles.feedItem}
            onClick={() => handleChatClick(item.id, item.user)}
          >
            <div className={styles.userInfo}>
              <img
                src={profile}
                alt={`${item.user} profile`}
                className={styles.profileImage}
              />
              <div className={styles.userDetails}>
                <div>
                  <p className={styles.userName}>{item.user}</p>
                  <p className={styles.subText}>{item.message}</p>
                </div>
                <div className={styles.remain}>
                  <p className={styles.duration}>{item.time}</p>
                  {item.unReadMessages > 0 && (
                    <div className={styles.unreadMessages}>
                      {item.unReadMessages}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllChat;
