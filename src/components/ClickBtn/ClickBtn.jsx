// import React, { useState } from 'react'
// import './ClickBtn.css'

// const ClickBtn = () => {
//     const [clicked, setClicked] = useState(false)
//     const ClickMe = () => {
//         console.log('Button was pressed');
//         setClicked(!clicked)
//     }

// const blockClassname = clicked ? 'clickBlock blockActive': 'clickBlock'

//   return (
//     <div className={blockClassname}>
//     <button onClick={ClickMe}>
//         Press me 
//     </button>

//     </div>
//   )
// }

// export default ClickBtn 


// import React, { useState } from 'react'

// const ClickBtn = () => {
//     const [count, setCount] = useState(0);

//     const plusClick = () => {
//         setCount(count + 1)
//     }
//     const minusClick = () => {
//         setCount((prevNumber) => {
//             (prevNumber < 1 ? 0 : prevNumber - 1)
//         })
//     }

//     <div>
//         <h1>Count: {count} </h1>
//         <button onClick={plusClick}>Plus click</button>
//         <button onClick={minusClick}>Minus click</button>
//     </div>
//   )
// }}


// export default ClickBtn

import React, {useState} from 'react'

const ClickBtn = () => {
    const [count, setCount] = useState(0)

    
  return (
    <div>ClickBtn</div>
  )
}

export default ClickBtn