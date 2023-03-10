import React, { useState } from "react";
import { useCookies } from "react-cookie";

function Message(prop) {
  const { id, sender, message } = prop.messages;
  const [cookies, setCookies] = useCookies("userData");
  const userId = cookies.userData.users[0].id;
  return (
    <div className={userId == sender ? "flex flex-row-reverse" : "flex flex-row"}>
      <h1
        className={
          userId == sender
            ? "text-xl bg-blue-700 max-h-fit max-w-fit p-2 mr-10  mt-5 rounded-3xl"
            : "text-xl bg-green-700 max-h-fit max-w-fit p-2 mr-10  mt-5 rounded-3xl"
        }
      >
        {message}
      </h1>
    </div>
  );
}

export default Message;
