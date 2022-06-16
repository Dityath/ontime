import React from "react";
import { useState } from "react";

import Link from "next/link";
import { Field, Form, Formik } from "formik";

function Footer({ page }) {
  const [menu, setMenu] = useState(false);
  return (
    <>
      {menu ? (
        <div className="bg-footerGrad/20 backdrop-filter backdrop-blur-xl w-[280px] h-[480px] fixed z-50 left-1/2 -ml-[140px] top-1/2 -mt-[245px] rounded-2xl p-5 text-white">
          <div className="flex items-center justify-between">
            <h1>Add New Event</h1>
            <button
              onClick={() => setMenu(false)}
              className="hover:opacity-80 transition"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24 2.41714L21.5829 0L12 9.58286L2.41714 0L0 2.41714L9.58286 12L0 21.5829L2.41714 24L12 14.4171L21.5829 24L24 21.5829L14.4171 12L24 2.41714Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
          <Formik
            initialValues={{
              name: "",
              event_type: "",
              date: "",
              remind_me: false,
            }}
            onSubmit={(data, { setSubmitting }) => {
              setTimeout(() => {
                console.log(data);
                setSubmitting(false);
              }, 500);
            }}
          >
            {({}) => (
              <Form className="mt-5 flex flex-col gap-2">
                <label className="font-light text-sm">Event Name</label>
                <Field
                  className="border-2 border-transparent bg-stone-800 opacity-75 h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none placeholder-white w-full"
                  type="text"
                  name="name"
                  placeholder="Name"
                />
                <label className="font-light text-sm">Event Type</label>
                <Field
                  className="border-2 border-transparent bg-stone-800 opacity-75 h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none placeholder-white w-full cursor-pointer"
                  name="event_type" as="select"
                >
                  <option value="submission">Submission</option>
                  <option value="class">Class</option>
                  <option value="meeting">Meeting</option>
                </Field>
                <label className="font-light text-sm">Date</label>
                <Field
                  className="border-2 border-transparent bg-stone-800 opacity-75 h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none placeholder-white w-full"
                  type="date"
                  name="date"
                  placeholder="Date"
                />
                <div className="flex items-center gap-2 mt-5">
                  <Field
                    className="border-2 border-transparent bg-stone-800 opacity-75 px-5 rounded-lg text-sm focus:outline-none placeholder-white"
                    type="checkbox"
                    name="remind_me"
                    value={true}
                  />
                  <label className="font-light text-sm">Remind Me</label>
                </div>
                <button
                  type="submit"
                  className="h-10 w-full mt-6 text-sm bg-gradient-to-r from-grad4 to-grad1 rounded-md text-white hover:opacity-80 transition duration-300 flex justify-center items-center"
                >
                  Add Event
                </button>
              </Form>
            )}
          </Formik>
        </div>
      ) : (
        ""
      )}
      <footer className="fixed bottom-0 w-wmobile h-20 bg-clip-padding backdrop-filter bg-footerGrad/20 backdrop-blur-xl rounded-2xl flex justify-between items-center px-5">
        <Link href="/home">
          <a onClick={() => setMenu(false)}>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 18.9323C20 19.2155 19.8829 19.4871 19.6746 19.6873C19.4662 19.8875 19.1836 20 18.8889 20H1.11111C0.816426 20 0.533811 19.8875 0.325437 19.6873C0.117063 19.4871 2.67456e-07 19.2155 2.67456e-07 18.9323V7.71132C-0.000117204 7.54863 0.0384635 7.38806 0.112796 7.24188C0.187128 7.0957 0.295245 6.96777 0.428889 6.86788L9.31778 0.224948C9.51283 0.0791549 9.75289 0 10 0C10.2471 0 10.4872 0.0791549 10.6822 0.224948L19.5711 6.86788C19.7048 6.96777 19.8129 7.0957 19.8872 7.24188C19.9615 7.38806 20.0001 7.54863 20 7.71132V18.9323ZM17.7778 17.8647V8.23234L10 2.42004L2.22222 8.23234V17.8647H17.7778Z"
                fill={page === "home" && !menu ? "#EB86FC" : "white"}
              />
            </svg>
          </a>
        </Link>
        <Link href="/search">
          <a onClick={() => setMenu(false)}>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.7832 14.3911L20 18.6069L18.6069 20L14.3911 15.7832C12.8224 17.0407 10.8713 17.7246 8.86088 17.7218C3.96968 17.7218 0 13.7521 0 8.86088C0 3.96968 3.96968 0 8.86088 0C13.7521 0 17.7218 3.96968 17.7218 8.86088C17.7246 10.8713 17.0407 12.8224 15.7832 14.3911ZM13.8082 13.6605C15.0577 12.3756 15.7555 10.6532 15.7527 8.86088C15.7527 5.05267 12.6681 1.96909 8.86088 1.96909C5.05267 1.96909 1.96909 5.05267 1.96909 8.86088C1.96909 12.6681 5.05267 15.7527 8.86088 15.7527C10.6532 15.7555 12.3756 15.0577 13.6605 13.8082L13.8082 13.6605Z"
                fill={page === "search" && !menu ? "#EB86FC" : "white"}
              />
            </svg>
          </a>
        </Link>
        <button
          onClick={() => {
            setMenu(!menu);
          }}
        >
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.5 13.5V7.5H16.5V13.5H22.5V16.5H16.5V22.5H13.5V16.5H7.5V13.5H13.5ZM15 30C6.7155 30 0 23.2845 0 15C0 6.7155 6.7155 0 15 0C23.2845 0 30 6.7155 30 15C30 23.2845 23.2845 30 15 30ZM15 27C18.1826 27 21.2348 25.7357 23.4853 23.4853C25.7357 21.2348 27 18.1826 27 15C27 11.8174 25.7357 8.76515 23.4853 6.51472C21.2348 4.26428 18.1826 3 15 3C11.8174 3 8.76515 4.26428 6.51472 6.51472C4.26428 8.76515 3 11.8174 3 15C3 18.1826 4.26428 21.2348 6.51472 23.4853C8.76515 25.7357 11.8174 27 15 27Z"
              fill={menu ? "#EB86FC" : "white"}
            />
          </svg>
        </button>
        <Link href="appointment">
          <a onClick={() => setMenu(false)}>
            <svg
              width="16"
              height="20"
              viewBox="0 0 16 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.4884 7.44186C13.4884 5.96158 12.9003 4.54193 11.8536 3.49522C10.8069 2.4485 9.38725 1.86047 7.90698 1.86047C6.4267 1.86047 5.00705 2.4485 3.96033 3.49522C2.91362 4.54193 2.32558 5.96158 2.32558 7.44186V14.8837H13.4884V7.44186ZM15.3488 15.5042L15.7209 16C15.7728 16.0691 15.8043 16.1513 15.8121 16.2373C15.8198 16.3233 15.8035 16.4098 15.7648 16.4871C15.7262 16.5643 15.6668 16.6293 15.5934 16.6747C15.5199 16.7201 15.4352 16.7442 15.3488 16.7442H0.465116C0.378739 16.7442 0.294068 16.7201 0.22059 16.6747C0.147113 16.6293 0.087733 16.5643 0.0491038 16.4871C0.0104745 16.4098 -0.00587758 16.3233 0.00187961 16.2373C0.00963681 16.1513 0.0411968 16.0691 0.0930234 16L0.465116 15.5042V7.44186C0.465116 5.46816 1.24917 3.57529 2.64479 2.17967C4.04041 0.784051 5.93327 0 7.90698 0C9.88068 0 11.7735 0.784051 13.1692 2.17967C14.5648 3.57529 15.3488 5.46816 15.3488 7.44186V15.5042ZM5.5814 17.6744H10.2326C10.2326 18.2912 9.98754 18.8827 9.55141 19.3189C9.11528 19.755 8.52376 20 7.90698 20C7.29019 20 6.69867 19.755 6.26254 19.3189C5.82641 18.8827 5.5814 18.2912 5.5814 17.6744Z"
                fill={page === "Schedules" && !menu ? "#EB86FC" : "white"}
              />
            </svg>
          </a>
        </Link>
        <Link href="/profile">
          <a onClick={() => setMenu(false)}>
            <svg
              width="16"
              height="20"
              viewBox="0 0 16 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 20C0 17.9793 0.802719 16.0414 2.23157 14.6125C3.66042 13.1837 5.59835 12.381 7.61905 12.381C9.63974 12.381 11.5777 13.1837 13.0065 14.6125C14.4354 16.0414 15.2381 17.9793 15.2381 20H13.3333C13.3333 18.4845 12.7313 17.031 11.6597 15.9594C10.588 14.8878 9.13457 14.2857 7.61905 14.2857C6.10352 14.2857 4.65007 14.8878 3.57844 15.9594C2.5068 17.031 1.90476 18.4845 1.90476 20H0ZM7.61905 11.4286C4.4619 11.4286 1.90476 8.87143 1.90476 5.71429C1.90476 2.55714 4.4619 0 7.61905 0C10.7762 0 13.3333 2.55714 13.3333 5.71429C13.3333 8.87143 10.7762 11.4286 7.61905 11.4286ZM7.61905 9.52381C9.72381 9.52381 11.4286 7.81905 11.4286 5.71429C11.4286 3.60952 9.72381 1.90476 7.61905 1.90476C5.51429 1.90476 3.80952 3.60952 3.80952 5.71429C3.80952 7.81905 5.51429 9.52381 7.61905 9.52381Z"
                fill={page === "profile" && !menu ? "#EB86FC" : "white"}
              />
            </svg>
          </a>
        </Link>
      </footer>
    </>
  );
}

export default Footer;
