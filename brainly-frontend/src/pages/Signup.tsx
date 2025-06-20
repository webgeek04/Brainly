import { useRef } from "react";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import axios from "axios";
import { backend_url } from "../config";
import { useNavigate } from "react-router-dom";

export default function Signup(){

    const usernameRef = useRef<HTMLInputElement | null>(null);
    const passwordRef = useRef<HTMLInputElement | null>(null);
    const navigate= useNavigate();
    
async function signup(){
    const username= usernameRef.current?.value;
    const password= passwordRef.current?.value;
    try{
      await axios.post(`${backend_url}/signup`, {
          username,
          password,
      });
      alert("signed Up successfully")
      navigate("/signin")
    }
    catch(e){
      alert(e);
    }
}

    return (
      <div className="h-screen w-screen bg-gradient-to-br from-slate-100 via-blue-100 to-indigo-100 flex justify-center items-center">
        <div className="bg-white w-96 h-72 rounded-md p-4 flex justify-center">
          <div>
            <div className="text-3xl mb-2 text-center">Signup</div>
            <Input placeholder="username" ref={usernameRef} />
            <Input placeholder="password" ref={passwordRef} />
            <div className="flex justify-center">
              <Button variant="primary" text="Signup" size="md" onClick={signup}></Button>
            </div>
          </div>
        </div>
      </div>
    );
}