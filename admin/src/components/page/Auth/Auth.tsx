import { useContext } from "react"
import AdminApi from "../../../api/users"
import {
    useForm,
    SubmitHandler
} from "react-hook-form"
import AuthContext from "../../../context/AuthProvider"

type FormInputs = {
    email: string,
    password: string,
}

const Auth = () => {
    const { setSuccess } = useContext(AuthContext) as any
    const {
        register,
        handleSubmit,
        setError,
        formState: { errors },
    } = useForm<FormInputs>({
        defaultValues: {
            email: "email@example.com",
            password: "1111",
        }
    })

    const onSubmit: SubmitHandler<FormInputs> = async (data) => {
        const email = data.email;
        const password = data.password;

        for (let i = 0; i < AdminApi.length; i++) {
            if (AdminApi[i].id === "admin") {
                if (AdminApi[i].email === email && AdminApi[i].password === password) {
                    setSuccess(true)
                } else {
                    setError('email', {
                        type: 'manual'
                    })
                    setError('password', {
                        type: 'manual'
                    })
                }
            }
        }
    }

    return (
        <>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img
                        className="mx-auto h-10 w-auto"
                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                        alt="Your Company"
                    />
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Войти в аккаунт
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="space-y-6"
                        action="#"
                        method="POST">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                Логин
                            </label>
                            <div className="mt-2">
                                <input
                                    {...register("email", {
                                        required: true,
                                        pattern: {
                                            value: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                            message: "Введите верный логин",
                                        },
                                    })}
                                    id="email"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                                {errors?.email && (
                                    <p className="text-red-600" role="alert">Введите верный логин</p>
                                )}

                            </div>
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                Пароль
                            </label>
                            <div className="mt-2">
                                <input
                                    {...register("password", { required: true })}
                                    id="password"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                                {errors?.password && (
                                    <p className="text-red-600" role="alert">Введите верный пароль</p>
                                )}
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Войти
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Auth