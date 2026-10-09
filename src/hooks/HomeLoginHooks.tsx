import { useMutation } from "@tanstack/react-query";
import {userLogin} from '../services/LoginServices';
import { useNavigate } from "react-router-dom";


interface LoginRequest {
  username: string;
  password: string;
}

export const useLogin =() =>{
  const navigate = useNavigate();
return useMutation({
    mutationFn: (request: LoginRequest) =>
      userLogin(request.username, request.password),
    onSuccess: (data) => {
      console.log("Login successful:", data);
      navigate("/products/home");
    }
  });

}