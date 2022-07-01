import { useRouter } from "next/router";
import React from "react";
import api from "../../client/api";

function Task({ id, type, title, date, color, reminder }) {
  const router = useRouter();

  const handleDelete = async (event) => {
    event.preventDefault();
    try {
      await api.delete(`/event?id=${id}`);
      router.reload();
    } catch (error) {
      console.log(error.response);
    }
  };

  const handleEdit = async (event) => {
    event.preventDefault();
    router.push(`/${id}/editEvent`);
  };

  function notifyMe() {
    let n = new Notification("Reminder is already set up");
    console.log(n);

    Notification.requestPermission()
      .then(function (result) {
        console.log(result); //granted || denied
        if (Notification.permission == "granted") {
          return "Access Granted";
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div
      className={`
      backdrop-blur-lg my-4 text-white w-full h-36 rounded-tl-lg rounded-tr-3xl rounded-br-lg rounded-bl-3xl drop-shadow-xl p-3
      flex justify-between relative group overflow-hidden shadow-xl transition duration-500 backdrop-filter group-hover:bg-opacity-20 group-hover:backdrop-blur
      ${
        color === "violet" ? "bg-grad1 bg-opacity-25" : "bg-black bg-opacity-40"
      }
      `}
    >
      <div>
        <h3 className="text-sm font-medium">{type ? type : "no type"}</h3>
        <h2 className="mb-1 text-xl font-bold">{title ? title : "no title"}</h2>
        <p className="text-xs">{date ? date : "err"}</p>
        <div className="flex gap-2 justify-self-end mt-3">
          <button
            onClick={handleEdit}
            className="w-8 my-4 rounded-sm bg-transparent text-white text-sm shadow-lg hidden transition duration-200 hover:bg-gray-300 group-hover:block"
          >
            Edit
          </button>
          <button
            onClick={handleDelete}
            className="w-12 my-4 rounded-sm bg-transparent text-white text-sm shadow-lg hidden transition duration-200 hover:bg-gray-300 group-hover:block"
          >
            Delete
          </button>
        </div>
      </div>
      <div
        className={`flex flex-col items-end ${
          reminder === "1" || reminder === "0"
            ? "justify-between"
            : "justify-end"
        }`}
      >
        {reminder === "1" ? (
          <button
          onClick={()=>{
            notifyMe();
          }}>
            <svg
            className="mr-2"
            width="17"
            height="22"
            viewBox="0 0 17 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.5 8C14.5 6.4087 13.8679 4.88258 12.7426 3.75736C11.6174 2.63214 10.0913 2 8.5 2C6.9087 2 5.38258 2.63214 4.25736 3.75736C3.13214 4.88258 2.5 6.4087 2.5 8V16H14.5V8ZM16.5 16.667L16.9 17.2C16.9557 17.2743 16.9896 17.3626 16.998 17.4551C17.0063 17.5476 16.9887 17.6406 16.9472 17.7236C16.9057 17.8067 16.8419 17.8765 16.7629 17.9253C16.6839 17.9741 16.5929 18 16.5 18H0.5C0.407144 18 0.316123 17.9741 0.237135 17.9253C0.158147 17.8765 0.094313 17.8067 0.0527866 17.7236C0.0112601 17.6406 -0.0063184 17.5476 0.00202058 17.4551C0.0103596 17.3626 0.0442865 17.2743 0.1 17.2L0.5 16.667V8C0.5 5.87827 1.34286 3.84344 2.84315 2.34315C4.34344 0.842855 6.37827 0 8.5 0C10.6217 0 12.6566 0.842855 14.1569 2.34315C15.6571 3.84344 16.5 5.87827 16.5 8V16.667ZM6 19H11C11 19.663 10.7366 20.2989 10.2678 20.7678C9.79893 21.2366 9.16304 21.5 8.5 21.5C7.83696 21.5 7.20107 21.2366 6.73223 20.7678C6.26339 20.2989 6 19.663 6 19Z"
              fill="white"
            />
          </svg>
          </button>
        ) : reminder === "0" ? (
          <svg
            width="22"
            height="23"
            viewBox="0 0 22 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.193 18.607H2.607C2.51414 18.607 2.42312 18.5811 2.34413 18.5323C2.26515 18.4835 2.20131 18.4137 2.15979 18.3306C2.11826 18.2476 2.10068 18.1546 2.10902 18.0621C2.11736 17.9696 2.15129 17.8813 2.207 17.807L2.607 17.274V8.607C2.607 7.277 2.931 6.023 3.506 4.92L0 1.415L1.415 0L21.214 19.8L19.799 21.214L17.193 18.607ZM5.015 6.429C4.74462 7.12328 4.60625 7.86193 4.607 8.607V16.607H15.193L5.015 6.429ZM18.607 14.393L16.607 12.393V8.607C16.6072 7.55467 16.3306 6.52079 15.805 5.60912C15.2794 4.69745 14.5233 3.94005 13.6125 3.41292C12.7017 2.88579 11.6683 2.60749 10.6159 2.60592C9.56359 2.60435 8.52936 2.87959 7.617 3.404L6.167 1.952C7.37173 1.14822 8.77207 0.686546 10.2186 0.616236C11.6652 0.545926 13.1037 0.869615 14.3807 1.55277C15.6577 2.23593 16.7253 3.25293 17.4696 4.49528C18.2139 5.73764 18.607 7.15874 18.607 8.607V14.393ZM8.107 19.607H13.107C13.107 20.27 12.8436 20.9059 12.3748 21.3748C11.9059 21.8436 11.27 22.107 10.607 22.107C9.94396 22.107 9.30807 21.8436 8.83923 21.3748C8.37039 20.9059 8.107 20.27 8.107 19.607Z"
              fill="white"
            />
          </svg>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default Task;
