import { useRef } from "react";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { backend_url } from "../config";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Signin() {
  const usernameRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const navigate = useNavigate();

  async function signin() {
    const username = usernameRef.current?.value;
    const password = passwordRef.current?.value;
    try {
      const response = await axios.post(`${backend_url}/signin`, {
        username,
        password,
      });
      const jwt = response.data.token;
      localStorage.setItem("token", jwt);
      navigate("/dashboard");
    } catch (e) {
      alert(e);
    }
  }

  return (
    <div className="h-screen w-screen bg-gradient-to-br from-slate-100 via-blue-100 to-indigo-100 flex justify-center items-center">
      <div className="bg-white w-96 h-72 rounded-md p-4 flex justify-center">
        <div>
          <div className="text-3xl mb-2 text-center">Signin</div>
          <Input placeholder="username" ref={usernameRef} />
          <Input placeholder="password" ref={passwordRef} />
          <div className="flex justify-center">
            <Button
              variant="primary"
              text="Signin"
              size="md"
              onClick={signin}
            ></Button>
          </div>
        </div>
      </div>
    </div>
  );
}
