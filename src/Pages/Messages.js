import React from "react";
import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";
import {
  Chat,
  Channel,
  ChannelList,
  ChannelHeader,
  MessageList,
  Window,
  MessageInput,
  Thread,
  TypingIndicator,
  MessageInputFlat,
  MessageSimple,
  ChannelListMessenger,
  ChannelPreviewMessenger,
} from "stream-chat-react";
import { StreamChat } from "stream-chat";
import "stream-chat-react/dist/css/index.css";

const chatClient = new StreamChat("gx5a64bj4ptz");
const userToken =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiZmFsbGluZy1tb2RlLTQifQ.sas-nXnGL29NRiSv15pW_bp_t5uVKQtgi46Ii621G1s";

chatClient.setUser(
  {
    id: "falling-mode-4",
    name: "Falling mode",
    image:
      "https://getstream.io/random_png/?id=falling-mode-4&name=Falling+mode",
  },
  userToken
);

const filters = { type: "messaging", example: 1 };
const sort = { last_message_at: -1 };

const Messages = () => (
  <div>
    <Header role="staff" />
    <Sidebar role="staff" active="Messages" />
    <div className="page-container">
      {/* <div className="title-container">
        <h4>My Messages</h4>
        <a
          className="btn-floating waves-effect red darken-3 addIcon modal-trigger"
          href="#modal2"
        >
          <i className="material-icons">add</i>
        </a>
      </div> */}
      <div style={{ width: "100%", height: "100%" }}>
        <Chat client={chatClient} theme={"messaging"}>
          <ChannelList
            filters={filters}
            sort={sort}
            List={ChannelListMessenger}
            Preview={ChannelPreviewMessenger}
          />
          <Channel>
            <Window>
              <ChannelHeader />
              <MessageList TypingIndicator={TypingIndicator} />
              <MessageInput Input={MessageInputFlat} focus />
            </Window>
            <Thread Message={MessageSimple} />
          </Channel>
        </Chat>
      </div>
    </div>
  </div>
);

export default Messages;
