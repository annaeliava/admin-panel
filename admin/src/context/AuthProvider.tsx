import { createContext, useState } from "react";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }: any) => {
    const [success, setSuccess] = useState<Boolean>(false)

    return (
        <AuthContext.Provider value={{ success, setSuccess }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;