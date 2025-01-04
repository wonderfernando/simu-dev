"use client";

import { MailIcon, LockKeyhole, Eye, EyeOff } from "lucide-react";
import "../login.css";

export default function Login() {
  return (
    <div className="relative container_login p-8 w-full h-screen">
      <div id="login_box">
        <div id="login_header">
          <div id="login_logo" className="w-full text-center mt-[1em]">
            <img
              src="https://i.ibb.co/KsRKfsf/logo.png"
              alt="Logotipo"
              className="w-[167px] h-[67px] mx-auto"
            />
          </div>
        </div>
        <form
          action=""
          id="login_form"
          className="min-w-[200px] max-w-[505px] mx-auto"
        >
          <h1
            id="login_title"
            className="text-white font-bold text-[34px] text-center"
          >
            Recupere sua senha
          </h1>
          <div className="form_control relative flex bg-white rounded-[15px] overflow-hidden">
            <label
              htmlFor="login_email"
              className="py-3 px-3 text-xl flex items-center space-x-2"
            >
              <MailIcon className="w-5 h-5 text-[#a4a4a4]" />
            </label>
            <input
              type="email"
              name="login_email"
              id="login_email"
              placeholder="exemplo@gmail.com"
              className="w-full py-3 px-3 text-xl bg-transparent focus:outline-none"
            />
          </div>
          <div className="form_control relative">
            <button
              type="button"
              className="text-white font-bold space-x-2 py-3 px-3 rounded-[15px] w-full mb-[2em] text-[1.2em] bg-[#fa8325] transition duration-300 hover-bg-custom mt-[1em]"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
