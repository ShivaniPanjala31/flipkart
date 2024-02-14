import React, {useState} from "react";

function User(props){

    const [isShowModal,setIsShowModal] = useState(false);
    const {user,index,deleteUser} = props;

    const Cancel = () => setIsShowModal(false);

    const removeUser = ()=>{
        setIsShowModal(true);   
    }

    const confirmDelete = ()=>{
        deleteUser(index);
        setIsShowModal(false);
    }

        return (
        
        <React.Fragment>
            <div className="row">
            <div className="col-sm">
            <div style={{ boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)', padding: '15px', margin: '5px' }}>
                <div className="text-end">
                    <button className="btn btn-danger" onClick={removeUser}><i className="fa-solid fa-trash"></i></button>
                </div>
                <h6>ID: <span className="text-success">{user.id}</span> </h6>
                <h6>Name: <span className="text-success">{user.name}</span> </h6>
                <h6>Email: <span className="text-success">{user.email}</span> </h6>
                <h6>Phone: <span className="text-success">{user.phone}</span> </h6>
                <h6>Address: <span className="text-success">{user.address.city}</span> </h6>
            </div>
            </div>
        </div>

        
{
    isShowModal && <div className="modal" style={{ display: 'block', backgroundColor: 'rgb(0, 0, 0, 0.5)' }}>
    <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title">Delete User</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={Cancel}></button>
            </div>
            <div className="modal-body">
                <p>Are you sure, you want to delete this user?</p>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={Cancel}>Cancel</button>
                <button type="button" className="btn btn-danger" onClick={()=>confirmDelete()} >Delete</button>
            </div>
        </div>
    </div>
</div>
}
        </React.Fragment>


    )
}

export default User;