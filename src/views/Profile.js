import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function Profile(){
    const [userDetails, setUserDetails] = useState({});
    const navigate = useNavigate();

    useEffect(()=>{
        if(localStorage.getItem('user-info')){
            const userInfo = JSON.parse(localStorage.getItem('user-info'));
            console.log(userInfo);
            axios.get('http://localhost:3001/v1/users/'+ userInfo.userId, {headers:{Authorization:userInfo.token}}).then(response=>{
                console.log(response);
                setUserDetails(response.data?.user);
                //sssconsole.log(userDetails);
            }).catch(error=>{
                
            })

        }
    },[]);

    const edit = ()=>{
        navigate('/edit-details')
    }

    return(
        <div className="container m-5">
            <div className="row">
                <div className="col-sm text-center">
                    <h3 className="mb-3">Profile Details</h3>
                    <div className="mb-3">
                        <div className="mb-2">
                            {userDetails.profilePic ? <img alt="" src={userDetails.profilePic} width="200px"/> : <i className="fa-solid fa-user" style={{fontSize: '50px'}}></i>}
                        </div>
                    </div>

                    <h6> firstName:  <span className="text-success"> {userDetails.firstName} </span> </h6>
                    <h6> lastName:  <span className="text-success"> {userDetails.lastName}  </span> </h6>
                    <h6> email: <span className="text-success"> {userDetails.email} </span> </h6>
                    <h6> mobile: <span className="text-success"> {userDetails.mobile} </span> </h6>

                    <button className="btn btn-primary" onClick={edit}><i className="fa-solid fa-pencil me-2"></i>Edit </button>
                </div>

            </div>
        </div>
    )
};
export default Profile;