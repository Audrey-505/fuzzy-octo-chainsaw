import React from 'react'
import Login from "../pages/Login";
// import style1 from {justifyContent: 'center'}
// import style2 from {textAlign:'center'}

export default function Home({currentPage, handlePageChange}){
    return(
        <div className='homePage' style={{justifyContent:'center', textAlign:'center', backgroundSize: 'cover'}}>
             <h1 className='homeTitle'>Home Page</h1>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque
            velit, lobortis ut magna varius, blandit rhoncus sem. Morbi lacinia nisi
            ac dui fermentum, sed luctus urna tincidunt. Etiam ut feugiat ex. Cras
            non risus mi. Curabitur mattis rutrum ipsum, ut aliquet urna imperdiet
            ac. Sed nec nulla aliquam, bibendum odio eget, vestibulum tortor. Cras
            rutrum ligula in tincidunt commodo. Morbi sit amet mollis orci, in
            tristique ex. Donec nec ornare elit. Donec blandit est sed risus feugiat
            porttitor. Vestibulum molestie hendrerit massa non consequat. Vestibulum
            vitae lorem tortor. In elementum ultricies tempus. Interdum et malesuada
            fames ac ante ipsum primis in faucibus.
            </p>
            <button className='btn btn-primary btn-lg'>
            <a
            href="#Login"
            onClick={() => handlePageChange('Login')}
            className={currentPage === 'Login' ? 'nav-link active' : 'nav-link'}
            ></a>
            Chat Now!</button>
        </div>
    )
}