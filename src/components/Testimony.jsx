import React from 'react'

const Testimony = ({number,image,comment}) => {
  // const [ rate,setRate]= useState([])
  console.log(Array(3).fill(4))
  return (
    <div className='testimony'>
        <p>Jennifer</p>
        <div className='comment'>
            <img src={image} alt='user profile'/>
            <p>{comment} </p>
        </div>
        <div className='rating'>
        {
         Array(number).fill(4).map((star)=>(
            <p>⭐</p>
          ))
        }
        </div>
     
       
    </div>
  )
}

export default Testimony