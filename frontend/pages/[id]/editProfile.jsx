import React from "react";
import Canvas from "../../components/canvas";
import { Formik,Field, Form} from "formik";


function edit() {
  return (
    <Canvas>
        <h1 className="text-white text-3xl font-semibold text-center pt-8">Edit Profile</h1>
        <div className="w-100 h-80 py-2 px-8 bg-black bg-opacity-40 backdrop-blur-lg shadow-lg rounded-tl-lg rounded-tr-3xl rounded-br-lg rounded-bl-3xl text-white my-10 mx-2">
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
            className="text-white mx-5 mt-5 flex flex-col gap-1"
          >
            <label className="font-light text-sm">Name</label>
            <Field
              type="text"
              name="name"
              placeholder="Name"
              className="border-2 border-transparent bg-stone-800 opacity-75 h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none placeholder-white w-full"
            />
            <label className="font-light mt-3 text-sm">Phone Number</label>
            <Field
              type="text"
              name="phone"
              placeholder="Phone Number"
              className="border-2 border-transparent bg-stone-800 opacity-75 h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none placeholder-white w-full"
            />
            <button
              type="submit"
              className="h-10 w-full mt-16 text-sm bg-gradient-to-r from-grad4 to-grad1 rounded-md text-white hover:opacity-80 transition duration-300 flex justify-center items-center"
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
