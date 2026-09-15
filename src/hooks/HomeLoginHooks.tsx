import { useMutation } from "@tanstack/react-query";
import {userLogin} from '../services/LoginServices';


interface LoginRequest {
  username: string;
  password: string;
}

export const useLogin =() =>{
return useMutation({
    mutationFn: (request: LoginRequest) =>
      userLogin(request.username, request.password),
  });

}