import { Field, Form, Formik } from "formik";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import api from "../../client/api";
import CanvasLanding from "../../components/canvasLanding";
import Link from "next/link";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await api.post("/authentication/login", {
        username: username,
        password: password,
      });
      if (response) {
        localStorage.setItem("userId", response.data.id);
        router.push("/home");
      }
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <CanvasLanding>
      <div className="text-white text-2xl mt-10 pl-5">
        <h1 className="font-black">On Time</h1>
        <h2>Login</h2>
      </div>
      <Formik
        initialValues={{
          name: "",
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
            className="text-white mx-5 mt-14 flex flex-col gap-1"
          >
            <label className="font-light text-sm">Username</label>
            <Field
              className="border-2 border-transparent bg-stone-800 opacity-75 h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none placeholder-white w-full"
              type="text"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
            />
            <label className="font-light mt-5 text-sm">Password</label>
            <Field
              className="border-2 border-transparent bg-stone-800 opacity-75 h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none placeholder-white w-full"
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
            <button
              type="submit"
              className="h-10 w-full mt-6 text-sm bg-gradient-to-r from-grad4 to-grad1 rounded-md text-white hover:opacity-80 transition duration-300 flex justify-center items-center"
            >
              Login
            </button>
          </Form>
        )}
      </Formik>
      <div className="text-center text-xs text-white font-light mx-5 mt-28">
        <h3>Don&#32;t have account?</h3>
        <button className="h-8 w-full mt-4 text-xs bg-stone-800 opacity-75 rounded-md text-white hover:opacity-80 transition duration-300 flex justify-center items-center">
          <Link href={"https://accounts.google.com/o/oauth2/v2/auth/oauthchooseaccount?client_id=123417142529-d49mm61estsh33e9rkff09doo7mmgs4l.apps.googleusercontent.com&scope=openid%20email%20profile&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fapi%2Fauth%2Fcallback%2Fgoogle&state=QHjR7alnBH0myilAon30yWRcKrnCasY4aCMUpeiZr20&code_challenge=MEWtWSAxVmST9GEcVjnJ0YrH5Yrobffp80F4LafmxLU&code_challenge_method=S256&flowName=GeneralOAuthFlow"}>
          <Image
            src="/images/logo/google.png"
            width="45"
            height="15"
            alt="Google Button"
          />
          </Link>
        </button>
        <button
          onClick={() => router.push("/login/register")}
          className="h-8 w-full mt-2 text-xs bg-stone-800 opacity-75 rounded-md text-white hover:opacity-80 transition duration-300 flex justify-center items-center"
        >
          Register
        </button>
      </div>
    </CanvasLanding>
  );
}

export default Login;
