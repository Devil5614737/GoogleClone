import React, { useEffect,useState} from 'react'
import '../Styles/Navbar.css'
import Logo from '../assests/logo.png'
import Search from '../assests/search.svg';
import Mic from '../assests/mic.svg';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
import { useContext } from 'react';
import { Context } from '../Context';
import {ThemeContext} from '../App'





function Navbar() {
    const {searchTerm,setSearchTerm,searchGoogle}=useContext(Context)
    const { theme, setTheme } = useContext(ThemeContext)
    const navigate=useNavigate()
    const[searchText,setSearchText]=useState("")
    const [data,setData]=useState([])
      

function changeNavColor(){
    let nav=document.getElementById('navbar')
    window.addEventListener('scroll',()=>{
        if(window.scrollY>150){
            nav.classList.add('active')
        }else{
            nav.classList.remove('active')
        }
    })
}

useEffect(()=>{
    changeNavColor()
})

const getData = async () => {
    axios
      .get(
        `https://www.googleapis.com/customsearch/v1?key=AIzaSyB3s7e1Ps7AhwguzOP-GQ9tZvUvtHRsuJo&cx=02f4a3721fb0a1981&q=${searchText || 'kaushik'}`
      ).then(res=>{
        if(res.data){
          setData(res.data)
          navigate("/results");

        }else{
          navigate('/')
        }
      })
      
  };

//   function search(){
//       window.addEventListener('keypress',(e)=>{
//           if(e.keyCode===13){
//               getData()
              
//           }
//       })
//   }

//   useEffect(()=>{

//       search()
//   },[])



    return (
        <div className="navbar" id='navbar' style={{backgroundColor:theme}}>
            <img src={theme==='dark' ? Logo : 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png' } alt="" className="logo" />
            <div className="inputcontainer"  style={{backgroundColor:theme,boxShadow:theme==='white' && '10px 10px 10px rgba(0,0,0,.1)'}}>
                <input style={{backgroundColor:'white'}}  type="text"  onChange={(e)=>setSearchTerm(e.target.value)} value={searchTerm}/>
                <img src={Mic} alt="mic logo" className="mic" />
                <img onClick={searchGoogle} src={Search} alt="search logo" className="search" />
            </div>
        </div>
    )
}

export default Navbar
