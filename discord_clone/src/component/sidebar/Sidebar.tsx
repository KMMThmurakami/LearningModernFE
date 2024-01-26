import React, { useEffect, useState } from "react";
import "./Sidebar.scss";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddIcon from "@mui/icons-material/Add";
import SidebarChannel from "./SidebarChannel";
import SidebarFooter from "./SidebarFooter";
import { db } from "../../firebase";
import {
  onSnapshot,
  collection,
  query,
  DocumentData,
} from "firebase/firestore";

const Sidebar = () => {
  interface Channel {
    id: string;
    channel: DocumentData;
  }

  const [channels, setChannels] = useState<Channel[]>([]);

  const q = query(collection(db, "channels"));

  useEffect(() => {
    onSnapshot(q, (querySnapShot) => {
      const channelsResult: Channel[] = [];
      querySnapShot.docs.forEach((doc) =>
        channelsResult.push({
          id: doc.id,
          channel: doc.data(),
        })
      );
      setChannels(channelsResult);
    });
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebarLeft">
        <div className="discordIconWrapper">
          <img src="discordIcon.png" alt="" className="discordIcon" />
        </div>
        <div className="sidebarIcon">
          <img src="logo192.png" alt="" />
        </div>
      </div>

      <div className="sidebarRight">
        {/* top */}
        <div className="sidebarTop">
          <h3>Discord</h3>
          <ExpandMoreIcon />
        </div>

        {/* channels */}
        <div className="sidebarChannels">
          <div className="sidebarChannelsHeader">
            <div className="sidebarHeader">
              <ExpandMoreIcon />
              <h4>プログラミングチャンネル</h4>
            </div>
            <AddIcon className="sidebarAddIcon" />
          </div>

          <div className="sidebarChannelsList">
            {channels.map((channel) => (
              <SidebarChannel
                channel={channel}
                id={channel.id}
                key={channel.id}
              />
            ))}
          </div>

          {/* footer */}
          <SidebarFooter />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
