import React from 'react'
import Login from "../pages/Login";
// import style1 from {justifyContent: 'center'}
// import style2 from {textAlign:'center'}
import { Link } from 'react-router-dom'

export default function Home(){
    // const [currentPage, setCurrentPage] = useState('Login');


    // const handlePageChange = (page) => setCurrentPage(page) 
    return(
        <div className='homePage' style={{justifyContent:'center', textAlign:'center'}}>
             <h1 className='homeTitle'>Chat Social</h1>
             <h3>Meet People With Common Interest.</h3>
            <button className='btn btn-primary btn-lg' as={Link} to='#Login'>
            {/* <a
            href="#login"
            onClick={() => handlePageChange('Login')}
            // className={currentPage === 'Login' ? 'nav-link active' : 'nav-link'}
            ></a> */}
            Get Started</button>
        </div>
    )
}