import React, { useState, useEffect } from 'react';
import ProfileIcon from '../Images/profileIcon.svg';
import getPhotoUrl from 'get-photo-url';
import { setValues, getValues} from '../../dexie';
import { getPhoto } from '../../dexie';
import './BioData.css';
const BioData=()=> {

        const [userData, setUserData] = useState({
            name:'Ebenezer Don',
            about: 'Building NewDev.io - Learn to code and connect with the best minds.',
        })

        const [openEditForm, setOpenEditForm] = useState(false)

        const [profilePic, setProfilePic] = useState(ProfileIcon)

        useEffect(() => {
            const setDataFromLS = () => {
                const userDataFromLS = getValues("info") ;
                const profilePicFromLS = getPhoto("photoInfo");
                userDataFromLS && setUserData(userDataFromLS)
                profilePicFromLS && setProfilePic(profilePicFromLS)
            }
            setDataFromLS()
        }, [])

        const updateUserData = (event) => {
            event.preventDefault()
            
            setUserData ({
                name: event.target.nameOfUser.value,
                about: event.target.aboutUser.value,
            }) 
            setOpenEditForm(false)
            setValues("info", {name:event.target.nameOfUser.value , about: event.target.aboutUser.value})
            getValues()
        }

         

          const updateProfilePic = async () =>{
              const newProfilePic = await getPhotoUrl('#profilePicture');
            setProfilePic(newProfilePic)
            setValues("photoInfo", newProfilePic)
            getPhoto()
          //  setValues(newProfilePic, "profilePic")
        }

    const editForm = (
        <form className='editForm' onSubmit={(e)=> updateUserData(e)}>
            <input type='text' id='' name='nameOfUser' defaultValue={userData.name} placeholder='Your Name' />
            <input type='text' id='' name='aboutUser' defaultValue={userData.about
            } placeholder='About You' />
            <div>
                <button type='button' className='cancelBtn' onClick={()=> setOpenEditForm(false)}>Cancel</button>
                <button type='submit'>Save</button>
            </div>
            
        </form>
    )

        const editBtn =  <button onClick={()=> setOpenEditForm(true)}>Edit</button>;

        return (
            <div className='bioData'>
                <input type='file' accept='image/*' name='picture' id='profilePicture'/>
                <label htmlFor='profilePicture' onClick={updateProfilePic}>
                    <div className='profilePic' role='button' title='click to edit photo'>
                        <img src={profilePic} alt=''/>
                    </div>
                </label>
              
              <div className='profileInfo'>
                  <p className='name'>{userData.name}</p>
                  <p className='about'>{userData.about}</p>
                 
                  {openEditForm ? editForm : editBtn}
              </div>
            </div>
        );
    
}
 
export default BioData;
