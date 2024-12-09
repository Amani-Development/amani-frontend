import styles from "./Referral.module.css"
import profile from "../../assets/icons/profile.svg";
import { FaRegCopy } from "react-icons/fa";
const Referral = () => {

  const referralLink:string = 'baba3636'
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
       
     ];

     const handleCopy = () => {
       navigator.clipboard.writeText(referralLink);
       alert("Copied to clipboard!");
     };
  return (
    <div className={styles.container}>
      <h1>Notifications</h1>
      <div className={styles.feed}>
        <h2>List of users referred ({feedData.length})</h2>
        {feedData.map((item) => (
          <div key={item.id} className={styles.feedItem}>
            <div className={styles.userInfo}>
              <img
                src={profile}
                alt={`${item.user} profile`}
                className={styles.profileImage}
              />
              <span>{item.user}</span>{" "}
            </div>
          </div>
        ))}

        <div className={styles.referralButton}>
          <button onClick={handleCopy} className={styles.copy}>
            <FaRegCopy color="white" size={20} />
          </button>
          <p>Copy Referral Link</p>
        </div>
      </div>
    </div>
  );
}

export default Referral