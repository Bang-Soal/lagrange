import { createContext, useContext, useState } from "react";
import { useQuery, useMutation } from "react-query";
import { SigninResponse } from "@/types/auth"

//  SigninResponse["data"]["user"]
interface UserData extends Omit<Pick<SigninResponse, "data">, "token"> { };

interface AuthContextType {
    user?: UserData;
    loading: boolean;
    login: () => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
    children: React.ReactNode;
};
export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);