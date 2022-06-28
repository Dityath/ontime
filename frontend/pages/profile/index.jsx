import React, { useEffect, useState } from "react";
import Canvas from "../../components/canvas";
import Footer from "../../components/footer";
import Header from "../../components/header";
import Image from "next/image";
import api from "../../client/api";

function Profile() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    if ("userId" in localStorage) {
      console.log("masukk");
      const userId = localStorage.getItem("userId");
      api.get(`/profile?userId=${userId}`).then((res) => {
        setProfile(res.data);
      });
    }
    console.log("lewat");
  }, []);

  console.log(profile);

  return (
    <Canvas>
      <Header page="Profile" />
      <div className="w-46 h-72 py-4 px-8 bg-black bg-opacity-50 rounded-tl-lg rounded-tr-3xl rounded-br-lg rounded-bl-3xl text-white my-32 mx-7">
        <div className="flex justify-center md:justify-end -mt-16 rounded-full">
          <Image
            src="/images/Saly-22.png"
            width="100"
            height="100"
            alt="Main Illustration"
          />
        </div>
        <div className="text-white">
          <h1 className="text-xl font-semibold">{profile?.name}</h1>
          <h2 className="text-sm mt-4">{profile?.username}</h2>
          <p className="text-sm mt-2">{profile?.phone}</p>
          <p className="text-sm mt-2">{profile?.email}</p>
          <p className="text-sm mt-2">{profile?.occupation}</p>
        </div>
      </div>
      <Footer page="profile" />
    </Canvas>
  );
}

export default Profile;
