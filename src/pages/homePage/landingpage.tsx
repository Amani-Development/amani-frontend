import React, {useState, useEffect} from 'react'
import SearchBar from "../../components/SearchBar/SearchBar";
import LandStyle from './LandingPage.module.css'
import ApartmentCard from "../../components/cards/ApartmentCard";
import Footer from "../../components/footer/footer";

import { useDispatch, useSelector } from "react-redux";
import { getAllPropertiesData } from "store/landingPage/actions";
function Landingpage() {

    const [activeRow1, setActiveRow1] = useState("All");
    const [activeRow2, setActiveRow2] = useState("Houses");

    const handleRow1Click = (label: string) => {
        setActiveRow1(label);
    };

    const handleRow2Click = (label: string) => {
        setActiveRow2(label);
    };

    const card = Array.from({ length: 35 }, (_, index) => ({
        id: index + 1, // Unique identifier
        name: `Item ${index + 1}`, // Example property
    }));
    const dispatch = useDispatch();

     const fetchProperties = () => {
       const params = {
   
       };

    //    dispatch(
    //      getAllPropertiesData(params, (err: any, response: any) => {
    //        if (err) {
    //          console.error("Error fetching properties:", err);
    //        } else {
    //          console.log("Properties fetched successfully:", response);
    //        }
    //      })
    //    );
     };

     useEffect(() => {
       fetchProperties();
     }, []);

     return (
         <>
             <div className={LandStyle.mainContainer}>
                 <div className={LandStyle.HeroCtn}>
                     <div className={LandStyle.HeroText}>
                         Trusted stays, peaceful
                         moments: <br/>your perfect
                         Home awaits
                     </div>
                     <div className="w-[90%] mx-auto mt-8 ">
                         <SearchBar/>
                     </div>
                 </div>

                 <div className={LandStyle.FilterCtn}>
                     <div className={LandStyle.row}>
                         {["All", "Luxury", "Standard"].map((label) => (
                             <button
                                 key={label}
                                 className={`${LandStyle.button} ${activeRow1 === label ? LandStyle.active : ""}`}
                                 onClick={() => handleRow1Click(label)}
                             >
                                 {label}
                             </button>
                         ))}
                     </div>
                     <div className={LandStyle.row}>
                         {["Houses", "Apartments", "Hotels", "Shortlets", "Events Centre", "Coorprate"].map((label) => (
                             <button
                                 key={label}
                                 className={`${LandStyle.button} ${activeRow2 === label ? LandStyle.active : ""}`}
                                 onClick={() => handleRow2Click(label)}
                             >
                                 {label}
                             </button>
                         ))}
                     </div>

                 </div>

                 <div className={LandStyle.CardCtn}>
                     {card.map((item) => (
                         <div key={item.id}>
                             <ApartmentCard/>
                         </div>
                     ))}
                 </div>



             </div>
             <Footer/>
         </>
     )
}

export default Landingpage;
