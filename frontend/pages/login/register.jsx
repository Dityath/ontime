import React, { useState } from "react";
import CanvasLanding from "../../components/canvasLanding";
import Link from "next/link";
import { Field, Form, Formik } from "formik";
import { useRouter } from "next/router";
import api from "../../client/api";

function Register() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await api.post("/authentication/register", {
        name: name,
        username: username,
        phone: phone,
        email: email,
        password: password,
      });
      router.push("/login");
    } catch (error) {
      console.log(error.response);
      if (error.response) {
        console.log("Email is already taken");
      }
    }
  };

  return (
    <CanvasLanding>
      <div className="text-white text-lg mt-10 pl-5">
        <h1 className="font-black">On Time</h1>
        <h2>Register</h2>
      </div>
      <Formik
        initialValues={{
          name: "",
          username: "",
          phone: "",
          email: "",
          password: "",
        }}
        onSubmit={(data, { setSubmitting }) => {
          setTimeout(() => {
            console.log(data);
            setSubmitting(false);
          }, 500);
        }}
      >
        {({}) => (
          <Form
            onSubmit={handleSubmit}
            className="text-white mx-5 mt-5 flex flex-col gap-1"
          >
            <label className="font-light text-sm">Name</label>
            <Field
              type="text"
              name="name"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border-2 border-transparent bg-stone-800 opacity-75 h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none placeholder-white w-full"
            />
            <label className="font-light mt-3 text-sm">Username</label>
            <Field
              type="text"
              name="username"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="border-2 border-transparent bg-stone-800 opacity-75 h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none placeholder-white w-full"
            />
            <label className="font-light mt-3 text-sm">Phone Number</label>
            <Field
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={phone}
              onChange = {(e) => setPhone(e.target.value)}
              className="border-2 border-transparent bg-stone-800 opacity-75 h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none placeholder-white w-full"
            />
            <label className="font-light mt-3 text-sm">Email</label>
            <Field
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border-2 border-transparent bg-stone-800 opacity-75 h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none placeholder-white w-full"
            />
            <label className="font-light mt-3 text-sm">Password</label>
            <Field
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border-2 border-transparent bg-stone-800 opacity-75 h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none placeholder-white w-full"
            />
            <button
              type="submit"
              className="h-10 w-full mt-8 text-sm bg-gradient-to-r from-grad4 to-grad1 rounded-md text-white hover:opacity-80 transition duration-300 flex justify-center items-center"
            >
              Register
            </button>
          </Form>
        )}
      </Formik>
      <div className="text-center text-xs text-white font-light mt-8">
        <h3>
          Already Have an Account?{" "}
          <Link href={"/login"} >
            <a className="font-bold hover:opacity-80 transition">Here</a>
          </Link>
        </h3>
      </div>
    </CanvasLanding>
  );
}

export default Register;
