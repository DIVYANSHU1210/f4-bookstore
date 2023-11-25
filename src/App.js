import React, {useState} from "react";
import "./style.css"
import Navbar from "./components/Navbar";
import Display from "./components/DisplayBooks";


const App = ()=> {
    const [queryResults, setQueryResults] = useState("");
    return (

        <div>
            <Navbar setQueryResults = {setQueryResults}/>
            {/* <p>{searchval}</p> */}
            {/* {console.log(queryResults)} */}

            <Display queryResults={queryResults}/>
        </div>
    )
}

export default App;