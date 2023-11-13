import { createContext, useState } from "react";
import UsuarioLogin from "../models/UsuarioLogin";
import { login } from "../services/Service";

interface AuthContextProps {
    usuario: UsuarioLogin
    handleLogin(Usuario: UsuarioLogin):Promise<void>;
    handleLogout():void; 
    isLoading: boolean;
}
interface AuthProviderProps {
    children: React.ReactNode;
}
export const AuthContext = createContext({} as AuthContextProps);
export function AuthProvider({ children }: AuthProviderProps) {
    const [usuario, setUsuario] = useState<UsuarioLogin>({
        id: 0,
        nome: "",
        usuario: "",
        senha: "",
        token: "",
        foto: ""
    })
    const [isLoading, setIsLoading] = useState(false);
    async function handleLogin(userLogin: UsuarioLogin) {
        setIsLoading(true);
        try {
            await login("/logar", userLogin, setUsuario)
            alert("Login realizado com sucesso")
            setIsLoading(false)

        } catch (error) {
            console.log(error)
            alert("Erro ao realizar login")
            setIsLoading(false)
        }
    }
    async function handleLogout() {
        setUsuario({
            id: 0,
            nome: "",
            usuario: "",
            senha: "",
            token: "",
            foto: ""
        })
    }
    return (
        <AuthContext.Provider value={{ usuario, handleLogin, handleLogout, isLoading }}>
            {children}
        </AuthContext.Provider>
    )
}


