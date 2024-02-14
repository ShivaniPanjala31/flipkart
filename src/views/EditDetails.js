import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function EditDetails(){
    const [userDetails, setUserDetails] = useState({});
    const [profilePicture, setProfilePicture] = useState(null);
    const navigate = useNavigate();

    useEffect(()=>{
        if(localStorage.getItem('user-info')){
            const userInfo = JSON.parse(localStorage.getItem('user-info'));
            axios.get('http://localhost:3001/v1/users/'+ userInfo.userId, {headers:{Authorization:userInfo.token}}).then(response=>{
                setUserDetails(response.data?.user);
                setProfilePicture(response.data.user.profilePic);
                }).catch(error=>{
                
            })
        }
    },[]);

    const save = ()=>{
        if(localStorage.getItem('user-info')){
            const userInfo = JSON.parse(localStorage.getItem('user-info'));
            axios.put('http://localhost:3001/v1/users/'+ userInfo.userId, {...userDetails, profilePic: profilePicture},{headers:{Authorization:userInfo.token}}).then(response=>{
                setUserDetails(response.data?.user);
                setProfilePicture(response.data.user.profilePic);
                navigate('/profile');
                }).catch(error=>{           
            })
        }
    }

    
    const updateProfilePicture = (event) => {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        // The result property contains the data as a data URL
        const base64String = reader.result;
        setProfilePicture(base64String);
        console.log(base64String);
      };
      // Read the image as a data URL
      reader.readAsDataURL(file);
    };
    

    return(
        <div className="container m-5">
            <div className="row">
                <div className="col-sm-6 mx-auto">
                    <h3 className="mb-3" style={{fontWeight:'bold'}}>Edit Profile Details</h3>
                    <div className="mb-3">
                        <div className="mb-3">
                            {profilePicture? <img alt="" width="200px" src={profilePicture}></img> : <i style={{fontSize: '50px'}} className="fa-solid fa-user"></i> }
                        </div>
                        <input type="file" accept="image/*" onChange={updateProfilePicture} />
                    </div>

                    <div className="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">Email address</label>
                        <input type="email" className="form-control" value={userDetails.email} id="exampleFormControlInput1" placeholder="name@example.com" disabled/>
                    </div>

                    <div className="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">First Name</label>
                        <input type="text" className="form-control" value={userDetails.firstName} id="exampleFormControlInput1" onChange={(event)=>setUserDetails({...userDetails,firstName:event.target.value})} placeholder="name@example.com" />
                    </div>

                    <div className="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">Last Name</label>
                        <input type="text" className="form-control" value={userDetails.lastName} id="exampleFormControlInput1" onChange={(event) => setUserDetails({...userDetails, lastName: event.target.value})} placeholder="name@example.com" />
                    </div>

                    <div className="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">Mobile No</label>
                        <input type="text" className="form-control" value={userDetails.mobile} id="exampleFormControlInput1" onChange={(event) => setUserDetails({...userDetails, mobile: event.target.value})} placeholder="name@example.com" />
                    </div>


                    <button className="btn btn-primary" onClick={save}>Save </button>
                </div>

            </div>
        </div>
    )
};
export default EditDetails;