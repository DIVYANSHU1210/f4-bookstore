import React from "react";




const DisplayBooks = ({queryResults})=>{   
    return(
        <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(4,1fr)",
        }}>
        {
            queryResults&& (
                queryResults.map((value, index)=>(
                        <div key={index}>
                            <img 
                            src={value.volumeInfo.imageLinks.thumbnail} 
                            style={{height:"200px", width:"150px" , margin:"10px"}}
                            />                   
                        </div>
                ))
            )
        }
        </div>
    )  
} 



export default DisplayBooks;