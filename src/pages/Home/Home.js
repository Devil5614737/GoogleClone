import React, { useContext, useState } from 'react'
import '../../Styles/Home.css'
import Logo from '../../assests/logo.png'
import DarkOutlined from '../../assests/darkOutline.svg'
import Sun from '../../assests/sun2.svg'
import Search from '../../assests/search.svg';
import Mic from '../../assests/mic.svg';
import {Context} from '../../Context'
import {useNavigate} from 'react-router-dom';
import {ThemeContext} from '../../App';

function Home() {
    const navigate=useNavigate()
    const {searchTerm,setSearchTerm,searchGoogle}=useContext(Context)
    const { theme, setTheme } = useContext(ThemeContext)


// function search(){
//     window.addEventListener('keydown',(e)=>{
//         e.keyCode===13&& searchGoogle()
//     })
// }

// search()


const handleTheme=()=>{
    setTheme(theme==='white' ? "black":"white")
}
    return (
     <div className="containers" style={{backgroundColor: theme}}>
         <div className="content-container">
             <img src={theme==="white" ? 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png' : Logo} alt="google " />
             <div className="input">
                 <div className="input-container">
                    <img id='icon' src={Search} alt="icon" />
                    <input type="text"  value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)}/>
                    <img id='icon2' src={Mic} alt="icon" />
                 </div>
                 <button onClick={searchGoogle}>Google Search</button>
             </div>
         </div>
         <img onClick={handleTheme} id='dark' src={theme==='white'? DarkOutlined : Sun} alt="icon" />
     </div>
    )
}

export default Home;
