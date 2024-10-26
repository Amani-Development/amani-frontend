import React from 'react';
import userStyle from "./UserOnboarding.module.css";
import style from "../SignUp/SignUp.module.css";
import BackBtn from "../../../components/buttons/BackBtn/backBtn";
import InputI from "../../../stories/Input I/input-I";
import ButtonII from "../../../stories/Button II/button-II";
import ButtonI from "../../../stories/Button I/button-I";
import ButtonIII from "../../../stories/Button III/button-III";

const UserOnboarding = () => {
    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files;
        console.log(file);
    }

    const [headerNav, setHeaderNav] = React.useState('Profile');

    const handleheaderNav = (value: string) => {
        setHeaderNav(value);
    }


    return (
        <div className={userStyle.Ctn}>

          <div className={userStyle.Ctn2}>
              <div className={style.HeaderBtn}>
                  <BackBtn text='Go Back'/>
              </div>
              <div className={userStyle.ProfileCtn}>
                 <div className={userStyle.ProfileImgCtn}>
                     <img src="https://res.cloudinary.com/do5wu6ikf/image/upload/v1729893182/Am/Amani/25th%20Oct/Profile_pic_pmqcdv.svg" alt="ProfileImgUpload"/>
                     <div className={userStyle.ProfileImgBtn} onClick={() => document.getElementById('file')?.click()}>
                            <img src="https://res.cloudinary.com/do5wu6ikf/image/upload/v1729893182/Am/Amani/25th%20Oct/Camera_wqhkis.svg" alt="camera"/>
                         Add Profile picture
                     </div>

                     <input type="file" accept="image/*" id="file" style={{display: 'none'}} onChange={handleImageChange}/>

                 </div>

                  <div className={userStyle.ProfileDetailsCtn}>
                    <div className={userStyle.ProfileDetailsNav1}>
                        <div className={userStyle.ProfileDetailsNav}>
                            <div className={userStyle.ProfileDetailsNavText}
                                 style={{
                                     color: headerNav === 'Profile' ? 'rgb(56, 57, 61)' : '',
                                     borderBottom: headerNav === 'Profile' ? '1px solid rgb(56, 57, 61)' : '',
                                 }} onClick={() => handleheaderNav(('Profile'))}
                            >Profile</div>
                            <div className={userStyle.ProfileDetailsNavText}
                                 style={{
                                     color: headerNav === 'Personal' ? 'rgb(56, 57, 61)' : '',
                                     borderBottom: headerNav === 'Personal' ? '1px solid rgb(56, 57, 61)' : '',
                                 }} onClick={() => handleheaderNav(('Personal'))}
                            >Personal Profile</div>
                        </div>
                    </div>
                      {headerNav === 'Profile' && (
                          <div className={userStyle.ProCtn}>
                              <div className={userStyle.ProDataCtn1}>
                                  <InputI isTextArea={false}  type='text' label='First Name' placeholder='John'/>
                                  <InputI isTextArea={false}  type='text'  label='Last Name' placeholder='Doe'/>

                              </div>
                              <div className={userStyle.ProDataCtn2}></div>
                              <div className={userStyle.ProDataCtn3}>
                                  <InputI isTextArea={true}  type='text'  label='Bio' placeholder='I am ....'/>

                              </div>
                              <ButtonI primary={true} label='Next'/>
                          </div>
                      )}

                      {headerNav === 'Personal' && (
                          <div>Personal</div>
                      )}

                  </div>
              </div>
          </div>
            
        </div>
    );
};

export default UserOnboarding;