import './AboutMe.css';
import content from './display'
import React,{useState} from 'react'

function AboutMe() {
    const [value,setValue] = useState([]);
    const handleClick = (e)=>{
        e.preventDefault();

        const button_tag = e.target.innerHTML;

        setValue(content[`${button_tag}`]);

        const vlue = document.getElementById("cont");
        if(vlue){

            vlue.style.opacity='1';
        }
   
    }

    const handleHide =(e)=>{
        e.preventDefault();

        // setValue([])

        const vlue = document.getElementById("cont");
        vlue.style.opacity='0';
    }

    return (
        <div className="about__me">
            <h2>Know Me</h2>
            <button className = "button" onClick={handleClick}>About_Myself</button> 
            <button className = "button" onClick={handleClick}>Education</button>            
            <button className = "button" onClick={handleClick}>Experience</button>            
            <button className = "button" onClick={handleClick}>Interests</button>            
            <button className = "button" onClick={handleClick}>Skills</button>       
                  
            

            {value.length>0 ? 
            <div id = "cont" className="content__present">
            {value.map((term)=>
            <h2 className="my__portfolio">{term}</h2>
            )}
            <button className='hide__button' onClick={handleHide}>Hide</button></div>:<></>}

        </div>
    )
}

export default AboutMe
