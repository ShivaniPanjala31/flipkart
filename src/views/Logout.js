import { MessageService } from "../services/MessageService";
import { Link } from "react-router-dom";
import { useEffect } from "react";

function Logout(){

    // const navigate = useNavigate();

    useEffect(()=>{
        if(localStorage.getItem('user-info')){
            localStorage.clear(); 
        }
        MessageService.sendMessage(false);
        // navigate('/');
    });

    return(
        <div className="text-center m-5">
            You have logged out, please <Link to={'/'}>click here</Link> to go to home page
        </div>
    )
     
};
export default Logout;