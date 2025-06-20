import type { ReactElement } from "react";

interface SidebarItemInterface{
    text:string;
    icon:ReactElement
}

export const SidebarItem=(props:SidebarItemInterface)=>{
    const{text, icon}=props;
    return (
      <div className="flex pl-4">
        <div className="p-2"> {icon} </div>
        <div className="p-2">{text}</div>
      </div>
    );
}