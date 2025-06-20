import { DeleteIcon } from "../icons/DeleteIcon";
import { BrainIcon } from "../icons/BrainIcon";
import { ShareIcon } from "../icons/ShareIcon";
import { Button } from "./Button";
import axios from "axios";
import { backend_url } from "../config";

interface CardProps {
  id: string;
  title: string;
  link: string;
  type: "twitter" | "youtube";
}

async function deleteContent(id: string) {
  console.log(id);
  await axios.delete(`${backend_url}/content/${id}`, {
    headers: {
      token: localStorage.getItem("token"),
    },
  });
  alert("Deleted successfully");
}

const defaultClass =
  "rounded-md bg-white shadow-md ring-1 ring-slate-300 p-2 m-4 min-w-72 max-w-72 min-h-72";

export const Card = (props: CardProps) => {
  const { title, link, type } = props;
  return (
    <div className={defaultClass}>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-x-4">
          <BrainIcon size="md" />
          <div className="text-xl font-normal">{title}</div>
        </div>
        <div className="flex">
          <Button
            variant="icon"
            size="md"
            startIcon={<ShareIcon size="md" />}
            onClick={() => {
              window.open(link, "_blank");
            }}
          ></Button>
          <Button
            variant="icon"
            size="md"
            startIcon={<DeleteIcon size="md" />}
            onClick={() => deleteContent(props.id)}
          ></Button>
        </div>
      </div>
      <div className="rounded-md mx-auto my-4 ">
        {type === "youtube" && (
          <iframe
            className="w-5/6 h-40 rounded-md mx-auto my-4"
            src={link.replace("watch", "embed").replace("?v=", "/")}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        )}

        <div className="justify-center p-2">
          {type == "twitter" && (
            <blockquote className="twitter-tweet" data-width="150">
              <a href={link.replace("x.com", "twitter.com")}></a>
            </blockquote>
          )}
        </div>
      </div>
    </div>
  );
};
