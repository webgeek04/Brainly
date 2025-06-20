import { BrainIcon } from "../icons/BrainIcon";
import { TwitterIcon } from "../icons/TwitterIcon";
import { YoutubeIcon } from "../icons/YoutubeIcon";
import { SidebarItem } from "./SidebarItem";

export const Sidebar = () => {
  return (
    <div className="bg-white h-screen border-r-2 border-r-slate-400 w-64 fixed left-0 top-0">
      <div className="flex ">
        <div className="m-4 mr-2"><BrainIcon size="2xl"/></div>
        <div className="text-3xl font-semibold m-4 ml-2">Brainly</div>
      </div>
      <SidebarItem icon={<TwitterIcon />} text="Tweets" />
      <SidebarItem icon={<YoutubeIcon />} text="Videos" />
    </div>
  );
};
