import React from "react";
import "./Sidebar.scss";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddIcon from "@mui/icons-material/Add";
import SidebarChannel from "./SidebarChannel";
import SidebarFooter from "./SidebarFooter";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarLeft">
        <div className="sidebarIcon">
          <img src="logo192.png" alt="" />
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
            <SidebarChannel />
          </div>

          {/* footer */}
          <SidebarFooter />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
