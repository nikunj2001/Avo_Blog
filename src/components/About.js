import React,{useEffect} from 'react'   ;
import my from '../img/my.jfif';
import {useHistory} from 'react-router-dom'
const About = () => {
    const history= useHistory();
    const callAboutPage=async()=>{
        try{
                const res = await fetch('/about',{
                    method:'GET',
                    headers:{
                        Accept:"application/json",
                        "Content-Type":"application/json"
                    },
                    credentials:'include'
                })
                const data =await res.json();
                if(!res.status===200){
                        const error = new Error(res.error);
                        throw error;
                }
        }catch(err){
                console.log(err);
                history.push('/login');
        }
    }
    useEffect(() => {
        callAboutPage();
    }, []);
    return (


        <>
        <div className="container">
            <form method="GET">
                <div className="row">
                    <div className="col-md-4">
                        <div className="profile-img">
                        <img src={my} alt=""/>

                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="profile-head">
                            <h5>Nikunj Gupta</h5>
                            <h6>Web Developer </h6>
                            <p className='mt-3 mb-5' >RANKINGS:2/10</p>

                           <ul className="nav nav-tabs" role='tablist'>
                            <li className="nav-item">
                                <a href="" className="nav-link active" id="home-tab" data-toggle="tab" href='#home' role="tab">About</a>
                            </li>
                            <li className="nav-item">
                                                                <a href="" className="nav-link active" id="profile-tab" data-toggle="tab" href='#profile' role="tab">Timeline</a>

                            </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <input type="submit" className="profile-edit-btn" value='Edit Profile' name='btnAddMore' />
                    </div>
                </div>

                <div className="row">
                    {/*Left side      */}
                    <div className="col-md-4">
                        <div className="profile-work">
                            <p>WORK LINK</p>
                            <a href="https://fonts.google.com/icons?selected=Material+Icons" target="_blank">Icons</a><br/>
                            <a href="https://fonts.google.com/icons?selected=Material+Icons" target="_blank">Insta</a><br/>
                            <a href="https://fonts.google.com/icons?selected=Material+Icons" target="_blank">Twitter</a><br/>
                        </div>
                    </div>
                {/*Right  */}
                <div className="col-md-8 pl-5 about-info">
                    <div className="tab-content profile-tab" id="myTabContent">
                        <div className="tab-pane" fade show active  id='home' role='tab-panel' aria-labelledby='home-tab' >
                            <div className="row">
                                <div className="col-md-6">
                                        <label htmlFor="">User ID</label>
                                </div>
                                <div className="col-md-6">
                                    <p>26532106532107831</p>
                                </div>

                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                        <label htmlFor="">Name</label>
                                </div>
                                <div className="col-md-6">
                                    <p>Nikunj Gupta</p>
                                </div>

                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                        <label htmlFor=""></label>
                                </div>
                                <div className="col-md-6">
                                    <p>Nikunj Gupta</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                </div>

            </form>
        </div>
        </>
    )
}

export default About
