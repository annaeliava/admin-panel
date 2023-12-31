import { useState, useContext } from "react";
import { Disclosure } from "@headlessui/react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../../context/AuthProvider";

const Sidebar = () => {
    const [title, setTitle] = useState<string>('Главная')

    const navigate = useNavigate()

    const { setSuccess } = useContext(AuthContext) as any

    const handleMain = () => {
        navigate("/admin-panel/main")
        setTitle('Главная')
    }

    const handleOrders = () => {
        navigate("/admin-panel/orders")
        setTitle('Заказы')
    }

    return (
        <>
            <Disclosure as='nav'>
                <div className="flex">
                    <div className="flex flex-col h-screen px-3 py-5 bg-white shadow w-60">
                        <div className="space-y-3">
                            <div className="flex items-center">
                                <h2 className="text-xl font-bold">{title}</h2>
                            </div>
                            <div className="flex-1">
                                <ul className="pt-2 pb-4 space-y-1 text-sm">
                                    <li className="rounded-sm">
                                        <button
                                            onClick={handleMain}
                                            className="flex items-center p-2 space-x-3 rounded-md"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="w-6 h-6"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                strokeWidth={2}
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                                                />
                                            </svg>
                                            <span>Главная</span>
                                        </button>
                                    </li>
                                    <li className="rounded-sm">
                                        <button
                                            onClick={handleOrders}
                                            className="flex items-center p-2 space-x-3 rounded-md"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="w-6 h-6"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                strokeWidth={2}
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                                                />
                                            </svg>
                                            <span>Заказы</span>
                                        </button>
                                    </li>
                                    <li className="rounded-sm">
                                        <button
                                            onClick={() => setSuccess(false)}
                                            className="flex items-center p-2 space-x-3 rounded-md"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="w-6 h-6"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                strokeWidth={2}
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                                                />
                                            </svg>
                                            <span>Выйти</span>
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </Disclosure>
        </>
    );
}

export default Sidebar