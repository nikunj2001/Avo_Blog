import React,{useState} from 'react'
import { NavLink,useHistory } from 'react-router-dom'


const Login = () => {
    const history = useHistory();
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const  loginUser =async(e)=>{
            e.preventDefault();

            const res =await fetch('/signin',{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    email,password
                })
            })
            const data = res.json();
            if(res.status ===400  || !data){
                window.alert("Invalid credentials")
            }else{
                window.alert("Login successfull")
                history.push(('/'));
            }
    }
    return (
        <>
                 <section className='sign-in' >
            <div className='container mt-5' >
                <div className='signin-content'>
                     <div className='signin-image' >
                            <figure>
                                <img src="" alt="SignIn Image" />
                            </figure>
                            <NavLink to='/signup' className='signin-image-link' >Create an acoount</NavLink>
                        </div>
                    <div className='signin-form'>
                        <h1 className='form-title'>
                            Sign up
                        </h1>
                        <form method="POST" className='register-form' >
                            
                            <div className='form-group'>
                                <label htmlFor="email">
                                 <span class="material-icons">
work
</span>
                                </label>
                                <input type="text" name='email' id='email' autoComplete="off" 
                                value={email} 
                                onChange={(e)=>setEmail(e.target.value)}
                                placeholder="Your email" />
                            </div>
                          
                            
                            <div className='form-group'>
                                <label htmlFor="password">
                                   <span class="material-icons">
account_circle
</span>
                                </label>
                                <input type="password" name='password' id='password' autoComplete="off" 
                                value={password} 
                                onChange={(e)=>setPassword(e.target.value)}
                                placeholder="Your Password" />
                            </div>
                           

                                <div className='form-group form-button'>
                                    <input type="submit" value="Log In" name='signin' id='signin' className='form-submit' onClick={loginUser}  />
                                </div>
                        </form>
                        </div>
                       
                </div>
                </div>     
        </section>   
        </>
    )
}

export default Login
