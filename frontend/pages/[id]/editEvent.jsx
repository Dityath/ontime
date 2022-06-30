import React from "react";
import Canvas from "../../components/canvas";
import { Formik, Field, Form } from "formik";
import { useRouter } from "next/router";
import api from "../../client/api";

function edit() {
  const router = useRouter();

  const handleSubmit = async (data) => {
    try {
      await api.put(`/event?id=${router.query.id}`, {
        eventName: data.name,
        eventType: data.event_type,
        dateTime: data.date,
        reminder: data.checked[0],
      });
      router.push("/home");
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <Canvas>
      <h1 className="text-white text-3xl font-semibold text-center pt-8">
        Edit Event
      </h1>
      <div className="w-100 h-75 py-2 px-8 bg-black bg-opacity-40 backdrop-blur-lg shadow-lg rounded-tl-lg rounded-tr-3xl rounded-br-lg rounded-bl-3xl text-white my-10 mx-2">
        <Formik
          initialValues={{
            name: "",
            event_type: "Submission",
            date: "",
            checked: "0",
          }}
          onSubmit={(data, { setSubmitting }) => {
            setTimeout(() => {
              console.log({ ...data, checked: data.checked[0] });
              handleSubmit(data);
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
                name="event_type"
                as="select"
              >
                <option value="submission">Submission</option>
                <option value="class">Class</option>
                <option value="meeting">Meeting</option>
                <option value="activity">Activity</option>
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
                  name="checked"
                  value="1"
                />
                <label className="font-light text-sm">Remind Me</label>
              </div>
              <button
                type="submit"
                className="h-10 w-full mt-6 text-sm bg-gradient-to-r from-grad4 to-grad1 rounded-md text-white hover:opacity-80 transition duration-300 flex justify-center items-center"
              >
                Save
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </Canvas>
  );
}

export default edit;
