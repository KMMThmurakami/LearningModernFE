import "./Sidebar.scss";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddIcon from "@mui/icons-material/Add";
import SidebarChannel from "./SidebarChannel";
import SidebarFooter from "./SidebarFooter";
import useCollection from "../../hooks/useCollection";
import { db } from "../../firebase";
import { addDoc, collection } from "firebase/firestore";

const Sidebar = () => {
  const { documents: channels } = useCollection("channels");
  const channelsOrderBy = channels.sort((a, b) =>
    a.channel.channelName.localeCompare(b.channel.channelName)
  );

  const addChannel = async () => {
    let channelName = prompt("新しいチャンネルを追加します");

    if (channelName) {
      await addDoc(collection(db, "channels"), {
        channelName: channelName,
      });
    }
  };

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
            <AddIcon className="sidebarAddIcon" onClick={() => addChannel()} />
          </div>

          <div className="sidebarChannelsList">
            {channelsOrderBy.map((channel) => (
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
