import { Button } from "./Button";
import { CrossIcon } from "../icons/CrossIcon";
import { Input } from "./Input";
import { useEffect, useRef } from "react";
import axios from "axios";
import { backend_url } from "../config";

interface CreateContentInterfacce {
  open: boolean;
  onClose: () => void;
}

export const CreateContentModal = ({
  open,
  onClose,
}: CreateContentInterfacce) => {
  const modalRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLInputElement | null>(null);
  const linkRef = useRef<HTMLInputElement | null>(null);
  const typeRef = useRef<HTMLSelectElement | null>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (modalRef && !modalRef.current?.contains(event?.target as Node)) {
        onClose();
      }
    };
    if (open) {
      document.addEventListener("mousedown", handleOutsideClick);
    }
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [onClose, open]);

  async function addContent() {
    const title = titleRef.current?.value;
    const link = linkRef.current?.value;
    const type = typeRef.current?.value;

    await axios.post(
      `${backend_url}/content`,
      {
        title,
        link,
        type,
      },
      {
        headers: {
          token: localStorage.getItem("token"),
        },
      }
    );
    onClose();
  }

  return (
    <div>
      {open && (
        <div className="w-screen h-screen bg-slate-500/50 fixed top-0 left-0 flex justify-center items-center">
          <div ref={modalRef} className="bg-white w-96 h-96 rounded-md p-4">
            <div className="flex justify-end">
              <Button
                variant="icon"
                onClick={onClose}
                size="lg"
                startIcon={<CrossIcon size="lg" />}
              ></Button>
            </div>
            <div className="flex flex-col items-center justify-center flex-1 gap-4">
              <div className="w-5/6">
                <p className="text-sm font-medium text-gray-700 mb-1">
                  Enter Title
                </p>
                <Input placeholder="Title" ref={titleRef} />
              </div>
              <div className="w-5/6">
                <p className="text-sm font-medium text-gray-700 mb-1">
                  Enter Link
                </p>
                <Input placeholder="Link" ref={linkRef} />
              </div>
              <div className="w-5/6">
                <p className="text-sm font-medium text-gray-700 mb-1">
                  Select Type
                </p>
                <Input
                  placeholder="Type"
                  ref={typeRef}
                  options={["youtube", "twitter"]}
                />
              </div>
              <Button
                variant="primary"
                text="Submit"
                size="md"
                onClick={addContent}
              ></Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
