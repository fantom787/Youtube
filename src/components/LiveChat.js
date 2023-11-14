import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { UNSAFE_DataRouterStateContext } from "react-router-dom";
import { addMessage } from "../utils/chatSlice";
import {
  generateRandomMessage,
  generateRandomName,
} from "../utils/randomNameGenerator";
import { POLLING_RATE } from "../utils/constants";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  // api polling
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);
  useEffect(() => {
    const i = setInterval(() => {
      // logic for api polling
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: generateRandomMessage(25),
        })
      );
    }, POLLING_RATE);
    return () => clearTimeout(i);
  }, []);
  return (
    <>
      <div className="w-full h-[600px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
        {chatMessages.map((c, index) => (
          <ChatMessage key={index} name={c.name} message={c.message} />
        ))}
      </div>
      <form
        className="w-full p-2 ml-2 border border-black"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: "Ambuj",
              message: liveMessage,
            })
          );
          setLiveMessage("");
        }}
      >
        <input
          type="text"
          className="px-2 w-80"
          value={liveMessage}
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
        />
        <button className="px-2 mx-8 bg-green-100">Send</button>
      </form>
    </>
  );
};

export default LiveChat;
