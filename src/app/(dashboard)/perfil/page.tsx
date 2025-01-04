import { Mail, MapPin, PhoneCall, Wallet } from "lucide-react";

export default function pageProfile() {
    return (
        <div className="grid grid-cols-12 gap-4">
            <div className="text-sm text-zinc-500 col-span-4 rounded-lg p-4 bg-zinc-50 flex flex-col items-center">
                <img src="https://github.com/wonderfernando.png" className="rounded-full" width={100} alt="" />

                <div className="mb-4">
                    <h1 className="font-extrabold text-center text-lg">Fernando Silva</h1>
                    <span className="flex items-center gap-2 text-xs bg-yellow-600 p-2 text-white rounded-full"><Wallet />Balance 1200.000kz</span>
                </div>

                <div className="flex flex-col gap-4">
                    <span className="flex items-center gap-2"><MapPin size={15} /> Morro bento, gamek</span>
                    <span className="flex items-center gap-2"><Mail size={15} /> fernandoja@gmail.com</span>
                    <span className="flex items-center gap-2"><PhoneCall size={15} /> 244 921 312 423</span>
                </div>
            </div>
            <div className="col-span-6 flex flex-col gap-2 text-sm text-zinc-500">
                <div className="rounded-lg flex flex-col bg-zinc-50 p-4 t">
                    <h1 className="font-extrabold text-lg mb-4">Detalhes da conta</h1>
                    <div className="flex flex-col gap-4">
                        <div className="flex justify-between items-center">
                            <span>Primeiro nome</span>
                            <span>Fernando</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span>Ultimo nome</span>
                            <span>Silva</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span>Data de aniversário</span>
                            <span>17/02/2001</span>
                        </div>
                    </div>

                </div>
                <div className="rounded-lg flex flex-col bg-zinc-50 p-4 t">
                    <h1 className="font-extrabold text-lg mb-4">Detalhes da conta</h1>
                    <div className="flex flex-col gap-4">
                        <div className="flex justify-between items-center">
                            <span>Primeiro nome</span>
                            <span>Fernando</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span>Ultimo nome</span>
                            <span>Silva</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span>Data de aniversário</span>
                            <span>17/02/2001</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}