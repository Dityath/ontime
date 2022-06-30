import React, { useEffect, useState } from "react";
import Header from "../components/header";
import Canvas from "../components/canvas";
import Task from "../components/task";
import Footer from "../components/footer";
import api from "../client/api";
import { useRouter } from "next/router";

function Home() {
  const [event, setEvent] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    if (!userId) {
      router.push("/");
    } else {
      api.get(`/event?userId=${userId}`).then((res) => {
        setEvent(res.data);
      });
    }
  }, []);

  return (
    <Canvas>
      <Header page="Home" />
      <div className="mt-32 mx-5 text-white">
        <p className="text-xs">On Going Task</p>
        {event &&
          event.map((res) => {
            if (res.reminder == "0") {
              return (
                <Task
                  id={res.id}
                  type={res.eventType}
                  title={res.eventName}
                  date={res.dateTime}
                  color={""}
                  reminder={res.reminder}
                />
              );
            }
          })}
        <p className="text-xs">Reminder</p>
        {event &&
          event.map((res) => {
            if (res.reminder == "1") {
              return (
                <Task
                  id={res.id}
                  type={res.eventType}
                  title={res.eventName}
                  date={res.dateTime}
                  color={"violet"}
                  reminder={res.reminder}
                />
              );
            }
          })}
      </div>
      <Footer page="home" />
    </Canvas>
  );
}

export default Home;
