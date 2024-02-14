import '../styles/register.css';
import {useForm} from 'react-hook-form';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate,Link } from 'react-router-dom';
import { MessageService } from '../services/MessageService';

function Login(){

    const [emailErrorMsg, setEmailErrorMsg] = useState(null);
    const [passwordErrorMsg, setPasswordErrorMsg] = useState(null);
    const navigate = useNavigate();

    const {register,handleSubmit,formState:{errors} } = useForm();
    const loginUser = (formData) => {
        axios.post('http://localhost:3001/v1/users/login',formData).then(response=>{
            console.log(response);
            if(response.data?.data){
                localStorage.setItem('user-info', JSON.stringify(response.data.data));
                MessageService.sendMessage(true);
                navigate('/');
            }
            

        }).catch(error=>{
            console.log(error);
            if(error.response.data?.errorDescription){
                if(error.response.data?.errorDescription=== "Email is not registered"){
                    setEmailErrorMsg('Email is not registered');
                }
                else {
                    setPasswordErrorMsg('Incorrect password');
                }
            }
            
        })
    };

    const hasUpperCase = (value) => /[A-Z]/.test(value);
    const hasLowerCase = (value) => /[a-z]/.test(value);
    
    return(
        <div className="outer-wrapper text-center">
            <div className="wrapper">
                <form noValidate onSubmit={handleSubmit(loginUser)}>
                <h1>Login</h1>
                    <div className="input-box">
                        <input type="email" placeholder="Email" id="email" {...register("email" ,{required:true, pattern: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/})} />
                        {errors.email?.type==='required' && (<p className='error-msg'>Email is required</p>) }
                        {errors.email?.type==='pattern' && (<p className='error-msg'>Invalid email format</p>) }
                        {emailErrorMsg && <p className='error-msg'>{emailErrorMsg}</p>}
                        <i className='bx bxs-user'></i>
                    </div>
                    <div className="input-box">
                        <input type="password" placeholder="Password" id="password" {...register("password",{required:true, validate:{
                            hasLowerCase: (value)=>hasLowerCase(value) || "password should contain a lower letter",
                            hasUpperCase: (value)=>hasUpperCase(value) || "password should contain a capital letter"

                            }})} />
                        {errors.password?.type==='required' && (<p className='error-msg'>password is required</p>) }
                        {errors.password?.message && <p className="error-msg">{errors.password.message}</p>}
                        {passwordErrorMsg && <p className='error-msg'>{passwordErrorMsg}</p>}
                        <i className='bx bxs-lock-alt'></i>
                    </div>
                    <button type='submit' className='btn'>Login</button>
                    <div className="register-link">
                        <p>Dont't have an account ?
                        <Link to={'/register'}className='ms-1 text-primary' style={{textDecoration:'none'}}>Register</Link> here
                        </p>
                    </div>

                </form>

            </div> 
        </div>
       
    )


}

export default Login;