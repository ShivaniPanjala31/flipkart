import '../styles/register.css';
import {useForm} from 'react-hook-form';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { useState } from 'react';

function Register(){
    const navigate = useNavigate();
    const [mobileErrorMsg, setMobileErrorMsg] = useState(null);
    const [emailErrorMsg, setEmailErrorMsg] = useState(null);

    const {register,handleSubmit,watch,formState:{errors} } = useForm();
    const registerUser = (formData) => {
        // console.log(formData);
        axios.post('http://localhost:3001/v1/users/register',formData).then(response=>{
            navigate('/login')
        
        }).catch(error=>{
            if(error.response.data?.errorDescription==='Mobile no already exist'){
                setMobileErrorMsg('Mobile no already exist');

            }
            else if(error.response.data?.errorDescription==='Email already exist'){
                setEmailErrorMsg('Email already exist');

            }


        })

    };

    const passwordValue = watch('password', '');
   
    const hasUpperCase = (value) => /[A-Z]/.test(value);
    const hasLowerCase = (value) => /[a-z]/.test(value);



    return(
        <div class="outer-wrapper text-center">
            <div class="wrapper">
                <form noValidate onSubmit={handleSubmit(registerUser)}>
                <h1>Register</h1>
                    <div class="input-box">
                        <input type="text" placeholder="Firstname" id="firstName" {...register("firstName", { required: true, minLength: 3 })} />
                        {errors.firstName?.type==='required' && (<p className='error-msg'>Firstname is required</p>) }  
                        {errors.firstName?.type==='minLength' && (<p className='error-msg'>Firstname should be minimum of 3 letters</p>) }  
                        <i class='bx bxs-user'></i>
                    </div>
                    <div class="input-box">
                        <input type="text" placeholder="Lastname" id="lastName" {...register("lastName", {required:true})}/>
                        {errors.lastName?.type==='required' && (<p className='error-msg'>lastName is required</p>) }
                        <i class='bx bxs-user'></i>
                    </div>
                    <div class="input-box">
                        <input type="email" placeholder="Email" id="email" {...register("email" ,{required:true, pattern: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/})} />
                        {errors.email?.type==='required' && (<p className='error-msg'>Email is required</p>) }
                        {errors.email?.type==='pattern' && (<p className='error-msg'>Invalid email format</p>) }
                        {emailErrorMsg && <p className='error-msg'>{emailErrorMsg}</p>}
                        <i class='bx bxs-user'></i>
                    </div>
                    <div class="input-box">
                        <input type="password" placeholder="Password" id="password" {...register("password",{required:true, validate:{
                            hasLowerCase: (value)=>hasLowerCase(value) || "password should contain a lower letter",
                            hasUpperCase: (value)=>hasUpperCase(value) || "password should contain a capital letter"

                            }})} />
                        {errors.password?.type==='required' && (<p className='error-msg'>password is required</p>) }
                        {errors.password?.message && <p className="error-msg">{errors.password.message}</p>}
                        <i class='bx bxs-lock-alt'></i>
                    </div>
                    <div class="input-box">
                        <input type="password" placeholder="Repeat Password" id="repeatPassword" {...register("repeatPassword",{required:true, validate:(value) => value === passwordValue})} />
                        {errors.repeatPassword?.type==='required' && (<p className='error-msg'>repeatPassword is required</p>) }
                        {errors.repeatPassword?.type==='validate' && (<p className='error-msg'>Password and Repeat Password must be same</p>) }
                        <i class='bx bxs-lock-alt'></i>

                    </div>
                    <div class="input-box">
                        <input type="text" placeholder="Mobile No" id="mobile" {...register("mobile",{required:true})} />
                        {errors.mobile?.type==='required' && (<p className='error-msg'>mobile number is required</p>) }
                        {mobileErrorMsg && <p className='error-msg'>{mobileErrorMsg} </p>}
                        <i class='bx bxs-user'></i>
                    </div>
                    <button type='submit' class='btn'>Register</button>
                    <div class="register-link">
                        <p>Already have an account ?
                            <Link to={'/login'}className='ms-1 text-primary' style={{textDecoration:'none'}}>Login</Link> here
                        </p>
                    </div>

                </form>

            </div> 
        </div>
       
    )

}

export default Register;