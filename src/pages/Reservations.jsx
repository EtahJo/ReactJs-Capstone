import React,{useState,useReducer} from 'react';
import { reducer,innitialState } from '../reducer/reducer';

const Reservations = () => {
    const[form,setForm]= useState({
        date:'',
        time:'',
        guests:'',
        occasion:'',
    })
    const [bookingTime,dispatch]= useReducer(reducer,innitialState)
    // const [bookingTime,setBookingTime]=useState([])
    const onChange =(vals)=>{
        console.log(vals.target[0])
        if(vals.target.id === "res-date"){
            dispatch({type:vals.target.value,})
        }
       
        // if(vals?.target.value ==="2023-01-23"){
        //     setBookingTime(["17:00","18:00","19:00","20:00","21:00","22:00"])
        // }
        // if(vals?.target.value ==="2023-01-24"){
        //     setBookingTime(["15:00","16:00","17:00","20:00","21:00","22:00"])
        // }
        // if(vals?.target.value ==="2023-01-25"){
        //     setBookingTime(["17:00","18:00","19:00","20:00","21:00","22:00"])
        // }
        // if(vals?.target.value ==="2023-01-26"){
        //     setBookingTime(["13:00","14:00","15:00","20:00","21:00","22:00"])
        // }
        // if(vals?.target.value ==="2023-01-27"){
        //     setBookingTime(["09:00","10:00","11:00","12:00","13:00","14:00"])
        // }
        // if(vals?.target.value ==="2023-01-28"){
        //     setBookingTime(["13:00","15:00","17:00","20:00","21:00","22:00"])
        // }
        // if(vals?.target.value ==="2023-01-29"){
        //     setBookingTime(["17:00","18:00","19:00","20:00","21:00","22:00"])
        // }
    }
    const onSubmit = (e)=>{
        e.preventDefault();
        console.log(form)
        setForm({
            date:'',
        time:'',
        guests:'',
        occasion:'',
        })
    }
  return (
    <main className='reservationForm'>
        <h3>Table Reservation Form</h3>
        <form onSubmit={onSubmit} onChange={onChange}>
   <label htmlFor="res-date">Choose date</label>
   <input type="date" 
   id="res-date"
   data-test-id="res-date"
    value={form.date} 
    onChange={(e)=>setForm({...form,date:e.target.value})}/>
   <label htmlFor="res-time">Choose time</label>
   <select 
   id="res-time" 
   data-test-id="res-time"
   value={form.time} 
   onChange={(e)=>setForm({...form,time:e.target.value})}>
    {bookingTime.map((time,index)=>(
        <option value={time} key={index}>{time}</option>
    ))}
   </select>
   <label htmlFor="guests">Number of guests</label>
   <input type="number" 
   placeholder="1" 
   min="1" max="10" 
   id="guests" 
   data-test-id="guests"
   onChange={e=>setForm({...form,guests:e.target.value})} defaultValue={form.time}/>
   <label htmlFor="occasion">Occasion</label>
   <select 
   id="occasion" 
   data-test-id="occasion"
   value={form.occasion}
   onChange={e=>setForm({...form,occasion:e.target.value})}>
      <option value={"birthday"}>Birthday</option>
      <option value={"anniversary"}>Anniversary</option>
   </select>
   <button type="submit" data-test-id='submit' >Make Your reservation</button>
</form>
    </main>
   
  )
}

export default Reservations