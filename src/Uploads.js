import React, { useState } from "react";
import { render } from "react-dom";
import { Redirect } from 'react-router';
import { storage } from "./firebase";
import Cards from "./comps/Cards"
function Uploads() {
    
        const [showimage,setShowImage] = useState(false)
        const [image, setImage] = useState(null);
        const [url, setUrl] = useState("");
        const [progress, setProgress] = useState(0);
      
        const handleChange = e => {                                  {/*yaha pe input le raha hai as e aur usko use kar raha hai */}
          if (e.target.files[0]) {
            setImage(e.target.files[0]);
          }
        };
      
        const handleUpload = () => {
          setShowImage(true)
          const uploadTask = storage.ref(`images/${image.name}`).put(image);
          uploadTask.on(
            "state_changed",
            snapshot => {
              const progress = Math.round(
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100
              );
              setProgress(progress);
            },
            error => {
              console.log(error);
            },
            () => {
              storage
                .ref("images")
                .child(image.name)
                .getDownloadURL()
                .then(url => {
                  setUrl(url);
                });
            }
          );
        };
      
        console.log("image: ", image);
        
      
        return (
          <div>
            <progress value={progress} max="100" />
            <br />
            <br />
            <input type="file" onChange={handleChange} />     {/*yaha pe agar file upload kiye to handlechange pe jayega*/}
            <button onClick={handleUpload}>Upload</button>
            <br />
            {url}
            <br />
            {showimage&&<Cards url={url} />}
            {/*showimage&&<Redirect to="home" />*/}
            <img src={url || "http://via.placeholder.com/300"} alt="firebase-image" />
          </div>
        );
      
}

export default Uploads;