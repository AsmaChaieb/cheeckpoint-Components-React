import React from "react";
import image from "./image.jpg";

const ProfilePhoto = () => {
    return <div>

        <h1 className="photo"> Ma photo de profil  </h1>
        <img className="profil" src={image} alt="" />
    
    </div>;
};

export default ProfilePhoto;
