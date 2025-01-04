"use client";

import { LockKeyhole, Eye, EyeOff } from "lucide-react";
import "../login.css";
import Link from "next/link";
import { useState } from "react";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

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
            Crie uma senha nova
          </h1>
          <div className="form_control relative flex bg-white rounded-[15px] overflow-hidden mt-[1em] mb-[1em]">
            <label
              htmlFor="login_pass"
              className="py-3 px-3 text-xl flex items-center space-x-2"
            >
              <LockKeyhole className="w-5 h-5 text-[#a4a4a4]" />
            </label>
            <input
              type={showPassword ? "text" : "password"}
              name="login_pass"
              id="login_pass"
              placeholder="crie uma senha nova"
              className="w-full py-3 px-3 text-xl bg-transparent focus:outline-none"
            />
            {showPassword ? (
              <EyeOff
                className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 cursor-pointer text-[#a4a4a4]"
                onClick={togglePasswordVisibility}
              />
            ) : (
              <Eye
                className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 cursor-pointer text-[#a4a4a4]"
                onClick={togglePasswordVisibility}
              />
            )}
          </div>

          <div className="form_control relative flex bg-white rounded-[15px] overflow-hidden mt-[1em] mb-[1em]">
            <label
              htmlFor="login_pass"
              className="py-3 px-3 text-xl flex items-center space-x-2"
            >
              <LockKeyhole className="w-5 h-5 text-[#a4a4a4]" />
            </label>
            <input
              type={showPassword ? "text" : "password"}
              name="login_pass"
              id="login_pass"
              placeholder="repita a senha"
              className="w-full py-3 px-3 text-xl bg-transparent focus:outline-none"
            />
            {showPassword ? (
              <EyeOff
                className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 cursor-pointer text-[#a4a4a4]"
                onClick={togglePasswordVisibility}
              />
            ) : (
              <Eye
                className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 cursor-pointer text-[#a4a4a4]"
                onClick={togglePasswordVisibility}
              />
            )}
          </div>

          <div className="form_control relative">
            <button
              type="button"
              className="text-white font-bold space-x-2 py-3 px-3 rounded-[15px] w-full mb-[2em] text-[1.2em] bg-[#fa8325] transition duration-300 hover-bg-custom"
            >
              Entrar
            </button>
          </div>
          <p className="text-center">
            <Link href="" className="text-white text-[1.1em] hover:underline">
              Esqueceu a sua senha?
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
