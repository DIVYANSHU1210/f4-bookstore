import React, {useState} from "react";




const DisplayBooks = ({queryResults})=>{   
    const [selectedBook, setSelectedBook] = useState("");
    return(
        <div>
            <div style={{backgroundColor:"#71C5F461"}}>
                {
                    selectedBook && (
                        <div style={{display:"flex" , color:"white"}}>
                            <img 
                                    src={selectedBook.volumeInfo.imageLinks.thumbnail}
                                    style={{height:"200px", width:"150px" , margin:"10px"}}
                            />
                            <div>
                                <h1>{selectedBook.volumeInfo.title}</h1>
                                <h4>{selectedBook.volumeInfo.authors[0]}</h4>
                                <p>{selectedBook.volumeInfo.description}</p>
                                <h5>{selectedBook.volumeInfo.}</h5>
                                {/* words.slice(0, wordLimit).join(' '); */}

                            </div>

                        </div>
                    )
                }
            </div>
            <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(5,1fr)",
                }}>
                {
                    queryResults&& (
                        queryResults.map((value, index)=>(
                                <div key={index} onClick={()=>setSelectedBook(value)}>
                                    <img 
                                    src={value.volumeInfo.imageLinks.thumbnail} 
                                    style={{height:"200px", width:"150px" , margin:"10px"}}
                                    />                   
                                </div>
                        ))
                    )
                }
            </div>
        </div>
        
    )  
} 



export default DisplayBooks;