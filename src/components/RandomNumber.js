
import { useState } from "react"

function RandomNumber() {
    var [random, setrandom] = useState(0)
  
    function randomnumber() {
      setrandom(Math.floor(Math.random() * 10) + 1)
    }
  
    return (
      <>
        <div className="randomNumber">
          <div className="container">
            <h1>Random Number Generator App</h1>
            <h2>{random}</h2>
            <div>
              <button className="btn" onClick={randomnumber}>Get Random Number</button>
            </div>
          </div>
        </div>
      </>
    )
  }
  export default RandomNumber
  