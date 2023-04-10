import React from 'react'
import Login from "../pages/Login";
// import style1 from {justifyContent: 'center'}
// import style2 from {textAlign:'center'}
import { Button } from "react-bootstrap"
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCommentDots } from '@fortawesome/free-solid-svg-icons'
import apple from '../../images/apple.png'
import google from '../../images/google.png'


export default function Home(){
    // const [currentPage, setCurrentPage] = useState('Login');


    // const handlePageChange = (page) => setCurrentPage(page) 
    return(
        <div>
            <div className='homePage' style={{justifyContent:'center', textAlign:'center'}}>
            <br />
            <br />
            <br />
             <h1 className='homeTitle'>Chat Social</h1>
             <h3 className='homeTitle' style={{alignContent: 'center'}}>Meet People With Common Interest.</h3>
             <br />
             <br />
             <br />
            <a href='./Signup'>
            <Button className='btn btn-primary btn-lg'>
            Get Started
            </Button>
            </a>
            </div>
            <div className='homeChat' style={{justifyContent:'center', textAlign:'center'}}>
            <br />
            <br />
            <FontAwesomeIcon icon={faCommentDots} beat style={{color: "#0a0514"}} size='10x' />
            <br />
            <br />   
            <h1>"Your network is your net worth"</h1>
            <h2>- Porter Gale</h2>       
            </div>
            <div className='comingSoon' style={{justifyContent:'center', textAlign:'center'}}>
            <br />
            <br /> 
            <h1 className='soonTitle'>Coming Soon.</h1>
            <br />
            <br /> 
            <br />
            <br /> 
            <img src={apple} width={110}/>
            <img src={google} width={110}/>

            </div>
        </div>
    )
}