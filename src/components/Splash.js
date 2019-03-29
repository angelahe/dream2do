import React from 'react'


const Splash = (props) => {
  return (
    <div>
      <div> Hello world from app</div>
      <div>
        <input type="text" placeholder="email" required />
      </div>
      <button onClick={props.handleClick}>Go to Flashcards</button><br />


      {/* <input type="text" placeholder="" required /> */}
    </div>
  )
}

export default Splash