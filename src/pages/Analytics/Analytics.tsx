
import styles from "./Analytics.module.css"; // CSS Module for styling
import { defaults } from "chart.js/auto";
import { Line } from "react-chartjs-2";
import gross from "../../assets/logos/grossing.webp"


const Analytics = () => {
defaults.maintainAspectRatio = false;
defaults.responsive = true;

defaults.plugins.title.display = true;
defaults.plugins.title.align = "start";
// defaults.plugins.title.font.size = 20;
defaults.plugins.title.color = "black";
const highestPerformingAmanis = [
  {
    title: "3 bedroom flat Apartment at Ikoyi",
    reserves: 16,
    imageUrl: "/images/ikoyi-flat.jpg",
  },
  {
    title: "Miniflat apartment at Fola Agoro, Yaba",
    reserves: 12,
    imageUrl: "/images/yaba-miniflat.jpg",
  },
  {
    title: "4 Bedroom duplex at Lekki phase 2",
    reserves: 11,
    imageUrl: "/images/lekki-duplex.jpg",
  },
  {
    title: "2 Bedroom apartment at Victoria Island",
    reserves: 9,
    imageUrl: "/images/victoria-island.jpg",
  },
];
  return (
    <div className={styles.analyticsDashboard}>
      <div></div>
      {/* Top Row */}
      <div className={styles.row}>
        <div className={`${styles.card} ${styles.graphCard}`}>
          <h3>Sales</h3>
          <div className=" h-64">
            <Line
              data={{
                labels: [
                  "Jan",
                  "Feb",
                  "Mar",
                  "Apr",
                  "May",
                  "Jun",
                  "Jul",
                  "Aug",
                  "Sep",
                  "Oct",
                  "Nov",
                  "Dec",
                ],
                datasets: [
                  {
                    label: "Sales",
                    data: [
                      100000, 2000000, 15000000, 10000000, 20000000, 18000000,
                      15000000, 13000000, 17000000, 12000000, 9000000, 5000000,
                    ],
                    borderColor: "#639418",
                    borderWidth: 2,
                    tension: 0.5,
                    fill: false,
                    pointRadius: 0,
                  },
                ],
              }}
              options={{
                responsive: true,
                plugins: {
                  legend: {
                    display: false,
                    position: "top",
                  },
                },
                scales: {
                  x: {
                    border: {
                      display: true,
                    },

                    offset: false,
                  },
                  y: {
                    grid: {
                      display: false,
                    },
                    border: {
                      display: true,
                    },
                    beginAtZero: true,
                  },
                },
              }}
            />
          </div>
        </div>
        <div className={`${styles.card} ${styles.summaryCard} `}>
          <h3>Total Accumulated Revenue</h3>
          <p className={styles.amount}>₦20,000,000</p>
          <h3>Current Available Balance</h3>
          <p className={styles.amount}>₦2,000,000</p>
          <button className={styles.withdrawButton}>Withdraw</button>
        </div>
      </div>

      {/* Middle Row */}
      <div className={styles.row}>
        <div className={`${styles.card} ${styles.summaryCard}`}>
          <h3>Occupancy Rate</h3>
          <h2>25%</h2>
          <h3 className={styles.number}>+5% </h3>
          <h3 className={styles.month}>vs previous month</h3>
        </div>
        <div className={`${styles.card} ${styles.summaryCard} flex `}>
          <div>
            <h3 className={styles.cardTitle}>Total Reviews</h3>
            <div className={styles.rating}>
              <h2 className={styles.ratingScore}>
                4.5 <span className={styles.star}>★</span>
              </h2>
            </div>
            <p className={styles.reviewStats}>
              Amanis reviewed - 14 <br />
              Tenants reviewing - 26
            </p>
          </div>
          <div className={styles.ratingBreakdown}>
            <div className={styles.breakdownHeader}>
              <span>Rating</span>
              <span>Amount</span>
            </div>
            {[
              { stars: 5, count: 3 },
              { stars: 4, count: 10 },
              { stars: 3, count: 4 },
              { stars: 2, count: 5 },
              { stars: 1, count: 5 },
            ].map((item, index) => (
              <div key={index} className={styles.breakdownRow}>
                <span>
                  {item.stars} star <span className={styles.star}>★</span>
                </span>
                <span>{item.count}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={`${styles.card} ${styles.summaryCard}`}>
          <h3>Highest Performing Amanis</h3>
          <ul>
            {highestPerformingAmanis.map((amani, index) => (
              <li key={index} className={styles.amaniItem}>
                <img
                  src={gross}
                  alt={amani.title}
                  className={styles.amaniImage}
                />
                <span className={styles.armaniTitle}>{amani.title}</span>
                <span className={styles.reserveCount}>
                  {amani.reserves} reserves
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default  Analytics;
