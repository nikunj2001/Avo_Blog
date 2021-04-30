import React,{useState} from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import '../setupProxy'
const Signup = () => {
    const history = useHistory()
    const [user,setUser] = useState({
        name:"",email:"",phone:"",work:"",password:"",cpassword:""
    })
    let name,value;
    const handleInputs = (e)=>{
           name=e.target.name;
           value=e.target.value;
           setUser({...user,[name]:value})
    }
    const PostData =async(e)=>{
            e.preventDefault();
            const {name,email,phone,work,password,cpassword}= user;
            const res= await fetch('/register',{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    name,email,phone,work,password,cpassword
                })
            })
            const data=await res.json();
            if(res.status===422 || !data ){
                window.alert("Faild to register")
                console.log("Faild to register");
            }else{
                window.alert("Successful to register")
                console.log("successful to register");
                history.push('/login')
            }
    }
    return (
        <>
         <section className='signup' >
            <div className='container mt-5' >
                <div className='signup-content'>
                    <div className='signup-form' >
                        <h1 className='form-title' >
                            Sign up
                        </h1>
                        <form method="POST" className='register-form' >
                            <div className='form-group'>
                                <label htmlFor="name">
                                   <span class="material-icons">
account_circle
</span>
                                </label>
                                <input type="text" name="name" id='name' autoComplete="off" 
                                value={user.name}
                                onChange={handleInputs}     
                                     placeholder="Your Name" />
                            </div>
                            <div className='form-group'>
                                <label htmlFor="email">
                                 <span class="material-icons">
work
</span>
                                </label>
                                <input type="text" name='email' id='email' autoComplete="off" 
                                value={user.email}
                                onChange={handleInputs}     
                                     placeholder="Your email"/>
                            </div>
                            <div className='form-group'>
                                <label htmlFor="phone">
                                  <span class="material-icons">
settings_phone
</span>
                                </label>
                                <input type="number" name='phone' id='phone' autoComplete="off" 
                                value={user.phone}
                                onChange={handleInputs}     
                                     placeholder="Your Number" />
                            </div>
                            <div className='form-group'>
                                <label htmlFor="work">
                                   <span class="material-icons">
work
</span>
                                </label>
                                <input type="text" name='work' id='work' autoComplete="off" 
                                value={user.work}
                                onChange={handleInputs}     
                                     placeholder="Your Profession" />
                            </div>
                            <div className='form-group'>
                                <label htmlFor="password">
                                   <span class="material-icons">
account_circle
</span>
                                </label>
                                <input type="password" name='password' id='password' autoComplete="off" 
                                value={user.password}
                                onChange={handleInputs}     
                                     placeholder="Your Password" />
                            </div>
                            <div className='form-group'>
                                <label htmlFor="cpassword">
                                   <span class="material-icons">
account_circle
</span>
                                </label>
                                <input type="password" name='cpassword' id='cpassword' autoComplete="off" 
                                value={user.cpassword}
                                onChange={handleInputs}     
                                     placeholder="Confirm your Password" />
                            </div>

                                <div className='form-group form-button'>
                                    <input type="submit" value="Register" onClick={PostData}  name='signup' id='signup' className='form-submit' />
                                </div>
                        </form>
                        </div>
                        <div className='signup-image' >
                            <figure>
                                <img src="" alt="SignUp Image" />
                            </figure>
                            <NavLink to='/login' className='signup-image-link' >I am already registered</NavLink>
                        </div>
                </div>
                </div>     
        </section>   
        </>
    )
}

export default Signup

