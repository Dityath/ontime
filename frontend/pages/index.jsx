import Head from "next/head";
import Image from "next/image";
import CanvasLanding from "../components/canvasLanding";
import Link from "next/link";

export default function Home() {
  return (
    <CanvasLanding>
      <div className="w-full h-96 -mt-10 bg-gradient-to-br from-grad1 to-grad2 rounded-2xl opacity-60 skew-y-12"></div>
      <div className="absolute top-5">
        <Image
          src="/images/Saly-22.png"
          width="341"
          height="341"
          alt="Main Illustration"
        />
      </div>
      <div className="text-white text-2xl pt-2 pl-5">
        <h1 className="font-black">On Time</h1>
        <h2>Alarm, Task,</h2>
        <h2>And Calendar</h2>
      </div>
      <p className="mt-2 text-xs font-light text-white pl-5">
        Manage your lecture, class, task,
        <br /> or everything in one place
      </p>
      <div className="mt-10 w-wmobile flex justify-center">
        <h3 className="text-white text-sm">Get Started</h3>
      </div>
      <div className="flex justify-evenly mt-5">
        <button className="h-8 w-32 bg-gradient-to-r from-grad4 to-grad1 rounded-md text-white hover:opacity-80 transition duration-300 flex justify-center items-center">
          <Link href={"https://accounts.google.com/o/oauth2/v2/auth/oauthchooseaccount?client_id=123417142529-d49mm61estsh33e9rkff09doo7mmgs4l.apps.googleusercontent.com&scope=openid%20email%20profile&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fapi%2Fauth%2Fcallback%2Fgoogle&state=QHjR7alnBH0myilAon30yWRcKrnCasY4aCMUpeiZr20&code_challenge=MEWtWSAxVmST9GEcVjnJ0YrH5Yrobffp80F4LafmxLU&code_challenge_method=S256&flowName=GeneralOAuthFlow"}>
          <Image
            src="/images/logo/google.png"
            width="68"
            height="22.9"
            alt="Google Button"
          />
          </Link>
        </button>
        <button className="h-8 w-32 bg-gradient-to-r from-grad4 to-grad1 rounded-md text-white hover:opacity-80 transition duration-300 flex justify-center items-center">
          <h1>
            <Link href={"/login"}>
              <a className="text-lg">Login</a>
            </Link>
          </h1>
        </button>
      </div>
    </CanvasLanding>
  );
}
