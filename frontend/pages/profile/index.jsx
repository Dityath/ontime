import React from "react";
import Canvas from "../../components/canvas";
import Footer from "../../components/footer";
import Header from "../../components/header";
import Image from "next/image";

function Profile() {
  return (
    <Canvas>
      <Header page="Profile" />
      <div className="w-60 h-72 py-4 px-8 bg-black bg-opacity-40 backdrop-blur-lg shadow-lg rounded-tl-lg rounded-tr-3xl rounded-br-lg rounded-bl-3xl text-white my-32 mx-7">
        <div className="flex justify-center md:justify-end -mt-16 rounded-full">
          <Image
            src="/images/Saly-22.png"
            width="100"
            height="100"
            alt="Main Illustration"
          />
        </div>
        <div className="text-white">
          <h1 className="text-xl font-semibold">Ditya Athallah</h1>
          <p className="text-sm mt-2">1301194232</p>
          <p className="text-sm">IF-43-INT</p>
          <p className="text-sm">Mahasiswa</p>
        </div>
      </div>
      <Footer page="profile" />
    </Canvas>
  );
}

export default Profile;
