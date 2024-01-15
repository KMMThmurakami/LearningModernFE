import React from "react";
import "./SidebarFooter.scss";
import MicIcon from "@mui/icons-material/Mic";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import SettingIcon from "@mui/icons-material/Settings";

function SidebarFooter() {
  return (
    <div className="sidebarFooter">
      <div className="sidebarAccount">
        <img src={`${process.env.PUBLIC_URL}/myIcon.png`} alt="" />
        <div className="accountName">
          <h4>kumamon</h4>
          <span>#0629</span>
        </div>
      </div>

      <div className="sidebarFooterIconWrapper">
        <MicIcon className="sidebarFooterIcon" />
        <HeadphonesIcon className="sidebarFooterIcon" />
        <SettingIcon className="sidebarFooterIcon" />
      </div>
    </div>
  );
}

export default SidebarFooter;
