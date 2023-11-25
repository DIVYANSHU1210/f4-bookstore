import React, {useState, useEffect} from "react";
import logo from "../images/logo.png"
import heart from "../images/heart.png"
import bell from "../images/bell.png"
import pro from "../images/pro.png"
import profile from "../images/profile.png"

import axios from "axios";

const Navbar = ({setQueryResults})=>{

    const [searchval, setSearchVal] = useState("");
    

    useEffect(() => {
        implementSearch();
    }, []);
    
    function implementSearch(e){
        if(e){
            e.preventDefault();
        }


        axios.get("https://www.googleapis.com/books/v1/volumes",{
            params:{
                q: searchval || "harry+potter"
            }
        })
        .then(response =>{
            setQueryResults(response.data.items)
        })
        .catch(error => console.log(error))
    }


    return (
        <div className="nav">
            <div>
                <img src={logo} alt="logo" style={{width:"30px"}}></img>
                <p>KeazoNBOOKS</p>
            </div>
            
            <div>
                <input 
                placeholder="Search for the book you want and read it now... Sherlock Holmes, Harry Pot..." 
                onChange={(e)=>{setSearchVal(e.target.value)}}></input>
                <button onClick={implementSearch}>Search</button>
                
            </div>

            <div>
                <img src={heart}/>
                <img src= {bell}/>
                <img src={pro}/>
                <img src={profile}/>
            </div>
        </div>
    )
}

export default Navbar;