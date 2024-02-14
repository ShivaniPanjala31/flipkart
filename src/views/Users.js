import { useState } from "react";
import User from "../components/User";
import axios from "axios";

function Users(){
  
  const [users,setUsers] = useState([]);

  axios.get('https://jsonplaceholder.typicode.com/users').then((response)=>{

    // console.log(response);
    setUsers(response.data);

  }).catch(error=>{

  })

    const deleteUser = (index)=>{
      const _users = users.filter((user,i) => i !== index );
      setUsers(_users);
     }

    return(
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <h2 className="text-center">Users</h2> 
            <div className="row"> 
            {users.map((user,index)=>(
              <div className="col-sm-4" key={user.id}>
                <User user={user} index={index}  deleteUser={deleteUser}/>
                </div>
            ))}

            </div>

          </div>

        </div>

      </div>
    )

}

export default Users;