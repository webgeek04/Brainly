import axios from "axios";
import { CreateContentModal } from "../components/AddContentModal";
import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { Sidebar } from "../components/Sidebar";
import { useContent } from "../hooks/useContent";
import { AddIcon } from "../icons/AddIcon";
import { ShareIcon } from "../icons/ShareIcon";
import { useEffect, useState } from "react";
import { backend_url, frontend_url } from "../config";

export default function Dashboard() {
  const [modalOpen, setModalOpen] = useState(false);
  const {contents,refresh}= useContent();

  useEffect(()=>{
  refresh()
  },[modalOpen])

  async function ShareBrain(){
    const response= await axios.post(`${backend_url}/brain/share`,{
      share:true
    },{
      headers:{
        "token": localStorage.getItem("token")
      }
    })
    console.log(response.data)
    const shareUrl= `${frontend_url}/share/${response.data.hash}`
    alert(shareUrl)
  }


  return (
    <div className="min-h-screen w-screen p-0 m-0">
      <Sidebar />
      <div>
        <CreateContentModal
          open={modalOpen}
          onClose={() => {
            setModalOpen(false);
          }}
        />
        <div className="bg-slate-200 h-full ml-64 pl-4">
          <div className="flex justify-between p-4 pt-2">
            <div className="font-semibold text-4xl">All Brains</div>
            <div className="flex ">
              <Button
                startIcon={<ShareIcon size="md" />}
                variant="secondary"
                size="sm"
                text="Share Brain"
                onClick={ShareBrain}
              />
              <Button
                startIcon={<AddIcon size="md" />}
                variant="primary"
                size="sm"
                text="Add content"
                onClick={() => {
                  setModalOpen(true);
                }}
              />
            </div>
          </div>
          <div className="flex flex-wrap gap-1">
            {contents.map(({_id, type, link, title }) => {
              return <Card key={_id} id={_id} type={type} title={title} link={link} />;
            })}

          </div>
        </div>
      </div>
    </div>
  );
}

