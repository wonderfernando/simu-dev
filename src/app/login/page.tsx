"use client";

import { MailIcon, LockKeyhole, Eye, EyeOff, Loader2 } from "lucide-react";
import "./login.css";
import Link from "next/link";
import { useEffect, useReducer, useState } from "react";
import { loginServer } from "./loginServer";
import { useForm } from "react-hook-form";
import * as z  from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { FirstLoginComponet } from "./FirstLoginComponent";

const schema = z.object({
  email: z.string().email("Digite um email válido"),
  password: z.string().min(6, "A senha deve ter no mínimo 6 caracteres"),
});
type FormData = z.infer<typeof schema>;
export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
const router = useRouter()
  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };
  const {register,handleSubmit, formState: {errors}} = useForm<FormData>({
    resolver: zodResolver(schema),
  });
  useEffect(() => {
 
      if (errors.email) {
        toast.error(errors.email.message);
      }
      if (errors.password) {
        toast.error(errors.password.message,{position:"top-left"});
      }
 
  }, [errors]);
  const [isLoading, setIsLoading] = useState(false);
  async function handleSubmited(data: FormData) {
    try {
      setIsLoading(true);
      const res = await loginServer({email:data.email,password:data.password});
     console.log(res)
      if (res.success) {
        toast.success("Login efetuado com sucesso");
          router.push("/");
      }
      setIsLoading(false);
    }catch(error){
      setIsLoading(false);
      toast.error(error.message);
    }
    
}
console.log(errors)
const [open, setOpen] = useState(false)
   
  return (
    <div className="relative bg-login container_login p-8 w-full h-screen">
      <div id="login_box ">
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
          onSubmit={handleSubmit(handleSubmited)}
          id="login_form"
          className=" min-w-[200px] max-w-[505px] mx-auto"
        >
          <h1
            className="text-white font-bold text-[34px] text-center mt-4 mb-8"
          >
            Acesse a sua conta
          </h1>
          <div className="form_control relative flex bg-white rounded-[15px] overflow-hidden">
            <label
              htmlFor="login_email"
              className="py-3 px-3 text-xl flex items-center space-x-2"
            >
              <MailIcon className="w-5 h-5 text-[#a4a4a4]" />
            </label>
            <input
              {...register("email")}
              id="login_email"
              placeholder="exemplo@gmail.com"
              className="w-full py-3 px-3 text-xl bg-transparent focus:outline-none"
            />
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
              {...register("password")}
              id="login_pass"
              placeholder="digite a sua senha"
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
        disabled={isLoading}
              type="submit"
          
              className="flex items-center justify-center gap-2 text-white font-bold space-x-2 py-3 px-3 rounded-[15px] w-full mb-[2em] text-[1.2em] bg-[#fa8325] transition duration-300 hover-bg-custom"
            >
              Entrar {isLoading && <Loader2 className="animate-spin" />}
            </button>
          </div>
          <p className="text-center">
            <Link href="" className="text-white text-[1.1em] hover:underline">
              Esqueceu a sua senha?
            </Link>
          </p>
        </form>
      </div>
      <FirstLoginComponet open={open} setOpen={setOpen}/>
    </div>
  );
}
