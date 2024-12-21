import React,{useState} from 'react'
import ReactPaginate from "react-paginate";
import styles from './Amani.module.css'
import shortlet from '../../assets/logos/shortlet.png';
import trash from '../../assets/icons/Delete.svg'
import edit from '../../assets/icons/edit.svg'
import { NavLink } from 'react-router-dom';

const Amani = () => {
const rowsPerPage = 10;

const tableData = [
  {
    image: "path-to-image-1.jpg",
    name: "This is where Armani name goes",
    spaceType: "Shortlet",
    guests: 3,
    discount: "10%",
    landmark: "Yaba",
    date: "1/1/24",
    status: "Published",
    price: "₦234,902/Month",
  },
  {
    image: "path-to-image-2.jpg",
    name: "This is where Armani name goes",
    spaceType: "Hostel",
    guests: 1,
    discount: "15%",
    landmark: "Ikeja",
    date: "1/1/24",
    status: "Pending",
    price: "₦234,902/Month",
  },
  {
    image: "path-to-image-3.jpg",
    name: "This is where Armani name goes",
    spaceType: "Apartment",
    guests: 4,
    discount: "5%",
    landmark: "Victoria Island",
    date: "1/1/24",
    status: "Pending",
    price: "₦234,902/Month",
  },
  {
    image: "path-to-image-4.jpg",
    name: "This is where Armani name goes",
    spaceType: "Shortlet",
    guests: 2,
    discount: "0%",
    landmark: "Lagos",
    date: "1/1/24",
    status: "Published",
    price: "₦234,902/Month",
  },
  {
    image: "path-to-image-5.jpg",
    name: "This is where Armani name goes",
    spaceType: "Apartment",
    guests: 4,
    discount: "10%",
    landmark: "Lagos",
    date: "1/1/24",
    status: "Reserved",
    price: "₦234,902/Month",
  },
  {
    image: "path-to-image-6.jpg",
    name: "This is where Armani name goes",
    spaceType: "Apartment",
    guests: 4,
    discount: "10%",
    landmark: "Lagos",
    date: "1/1/24",
    status: "In use",
    price: "₦234,902/Month",
  },
  {
    image: "path-to-image-1.jpg",
    name: "This is where Armani name goes",
    spaceType: "Shortlet",
    guests: 3,
    discount: "10%",
    landmark: "Yaba",
    date: "1/1/24",
    status: "Published",
    price: "₦234,902/Month",
  },
  {
    image: "path-to-image-2.jpg",
    name: "This is where Armani name goes",
    spaceType: "Hostel",
    guests: 1,
    discount: "15%",
    landmark: "Ikeja",
    date: "1/1/24",
    status: "Pending",
    price: "₦234,902/Month",
  },
  {
    image: "path-to-image-3.jpg",
    name: "This is where Armani name goes",
    spaceType: "Apartment",
    guests: 4,
    discount: "5%",
    landmark: "Victoria Island",
    date: "1/1/24",
    status: "Pending",
    price: "₦234,902/Month",
  },
  {
    image: "path-to-image-4.jpg",
    name: "This is where Armani name goes",
    spaceType: "Shortlet",
    guests: 2,
    discount: "0%",
    landmark: "Lagos",
    date: "1/1/24",
    status: "Published",
    price: "₦234,902/Month",
  },
  {
    image: "path-to-image-5.jpg",
    name: "This is where Armani name goes",
    spaceType: "Apartment",
    guests: 4,
    discount: "10%",
    landmark: "Lagos",
    date: "1/1/24",
    status: "Reserved",
    price: "₦234,902/Month",
  },
  {
    image: "path-to-image-6.jpg",
    name: "This is where Armani name goes",
    spaceType: "Apartment",
    guests: 4,
    discount: "10%",
    landmark: "Lagos",
    date: "1/1/24",
    status: "In use",
    price: "₦234,902/Month",
  },
];

const [currentItems, setCurrentItems] = useState(
  tableData.slice(0, rowsPerPage)
);

const renderStatus = (status) => {
  const statusColors = {
    Published: styles.textGreen,
    Pending: styles.textYellow,
    Reserved: styles.textBlue,
    "In use": styles.textGray,
  };
  return <span className={statusColors[status]}>{status}</span>;
};

const handlePageClick = (event) => {
  const startIndex = event.selected * rowsPerPage;
  setCurrentItems(tableData.slice(startIndex, startIndex + rowsPerPage));
};

return (
  <div className={styles.container}>
    <div className={styles.header}>
      <h3>Good afternoon, Paul</h3>
      <div className={styles.actions}>
        <button>Filter</button>
        <button>0 Selected</button>
        <button>Set Price</button>
        <NavLink to="/app/uploadamani">
          <button className={styles.upload}>+ Upload Armani</button>
        </NavLink>
      </div>
    </div>

    <div className={styles.tableWrapper}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>
              <input type="checkbox" />
            </th>
            <th>Image</th>
            <th>Name</th>
            <th>Space Type</th>
            <th>Guests</th>
            <th>Discount</th>
            <th>Landmark</th>
            <th>Date</th>
            <th>Status</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((row, index) => (
            <tr key={index}>
              <td>
                <input type="checkbox" />
              </td>
              <td>
                <img
                  src={shortlet}
                  alt="property"
                  className={styles.imagePreview}
                />
              </td>
              <td> {row.name}</td>
              <td>{row.spaceType}</td>
              <td>{row.guests}</td>
              <td>{row.discount}</td>
              <td>{row.landmark}</td>
              <td>{row.date}</td>
              <td>{renderStatus(row.status)}</td>
              <td>{row.price}</td>
              <td className={styles.actionsCell}>
                <button className={styles.iconButton} aria-label="Delete">
                  <img src={trash} alt="" />
                </button>
                <button className={styles.iconButton} aria-label="Edit">
                  <img src={edit} alt="" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <ReactPaginate
        previousLabel={<span>← Previous</span>}
        nextLabel={<span>Next →</span>}
        breakLabel="..."
        breakClassName={styles.breakMe}
        pageCount={Math.ceil(tableData.length / rowsPerPage)}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={handlePageClick}
        containerClassName={styles.pagination}
        activeClassName={styles.activePage}
        pageClassName={styles.pageButton}
        previousClassName={`${styles.pageButton} ${styles.previousClassName}`}
        nextClassName={`${styles.pageButton} ${styles.nextClassName}`}
        disabledClassName={styles.disabledButton}
      />
    </div>
  </div>
);
};

export default Amani