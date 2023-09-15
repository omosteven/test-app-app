// import Dexie from "dexie"

//  export const db = new Dexie('instaStore') 
// db.version(1).stores({
   // bioData: "info, name, about",
//     gallery: "++id, url",
// })

// db.open().catch(function (e) {
//     console.error("Open failed: " + e);
// });

 export const setValues = (key, value) => {
 return  localStorage.setItem(key,JSON.stringify(value) );
}
 export const getValues = () => {
   return JSON.parse(localStorage.getItem("info"));
}
 export const getPhoto = () => {
   return JSON.parse(localStorage.getItem("photoInfo"));
}
 export const getGallery = () => {
   return JSON.parse(localStorage.getItem("id"));
}
