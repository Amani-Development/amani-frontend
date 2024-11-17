import React from 'react'
import SearchBar from "../../components/SearchBar/SearchBar";
import LandStyle from './LandingPage.module.css'


interface Props {
}

function Landingpage(props: Props) {
     return (
        <div className={LandStyle.mainContainer}>
            <div className="w-[90%] mx-auto mt-8 ">
                <SearchBar />
            </div>
        </div>
    )
}

export default Landingpage;
