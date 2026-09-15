import {getLoginHome} from "../api/ApiUrls";
import {homeClient} from "../api/ApiClients";

export const userLogin = async(username :string, password :string)=> {
   
        const response = await homeClient.post(
            getLoginHome,
            {
                username: username,
                password: password
            }
        );
        return response.data;      
   

}