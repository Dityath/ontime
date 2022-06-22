import React, { useEffect, useState } from "react";
import api from "../client/api";
import Canvas from "../components/canvas";
import Footer from "../components/footer";
import Header from "../components/header";
import Task from "../components/task";

function Appointment() {
  const [event, setEvent] = useState(null);

  useEffect(() => {
    if ("userId" in localStorage) {
      const userId = localStorage.getItem("userId");
      api.get(`/event?userId=${userId}`).then((res) => {
        setEvent(res.data);
      });
    }
  }, []);

  return (
    <Canvas>
      <Header page="Schedules" />
      <div className="mt-20 mx-5 text-white">
        {event &&
          event.map((res) => {
            return (
              <Task
                type={res.eventType}
                title={res.eventName}
                date={res.dateTime}
                color={"violet"}
                reminder={res.reminder}
              />
            );
          })}
      </div>
      <Footer page="Schedules" />
    </Canvas>
  );
}

export default Appointment;
