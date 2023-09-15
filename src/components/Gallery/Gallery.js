import React, {useState, useEffect} from 'react';
// import {useLiveQuery} from 'dexie-react-hooks';
import getPhotoUrl from 'get-photo-url';
import {getGallery, setValues} from '../../dexie'
import './Gallery.css';

const Gallery = () => {

    const [allPhotos, setAllPhotos] = useState(['photoInfo'])

      useEffect(() => {
             const setPhotoFromLS = () => {
                 const allPhotosFromLS = getGallery("id") ;
                 allPhotosFromLS && setAllPhotos(allPhotosFromLS)
             }
             setPhotoFromLS()
              setAllPhotos(getGallery())
             
         }, [])
    
    const addPic = async () => {
      const newPhoto = {
         id: Date.now(),
        url: await getPhotoUrl("#addPhoto")
      }

       setAllPhotos([newPhoto, ...allPhotos])
      setValues("id", [newPhoto.url])
      getGallery()
    }
    return(
        <>
            <input type='file' name="photo" id="addPhoto" />
            <label htmlFor="addPhoto" onClick={addPic}>
                <i className="add-photo fas fa-plus-square"></i>
            </label>

            <div className='gallery'>
              {allPhotos?.map((photo)=>(
                <div className='gallery-list' >
                    <img src={photo.url} className='galleryImg' alt="" />
                    <button className='deleteBtn'>Delete</button>
                </div>
              ))}
                
                  
            </div>
        </>
    );
}

export default Gallery;