import React, { useState } from 'react';
import './index.css'; 

const MainPage = () => {
  const[submit,setSubmit]=useState(false)




  const resultPage=()=>{
    return(

      <div className="content">

        <h1>Submitted Sucessfully!</h1>

        <button  onClick={()=>setSubmit(true)}  className="submit-button">Send again</button>

      </div>




    )
  }







  return (<>

  <div className="container">



    {submit? <form className="document" onSubmit={()=>setSubmit(false)}>
      <h1>Made by Yashwanth</h1>

      <div className="input-container">
        <label className="label">Name</label>
        <input type="text" onChange={()=>{}} className="textinput" />
      </div>
      <div className="input-container">
        <label className="label">Email</label>
        <input type="text" onChange={()=>{}} className="textinput" />
      </div>
      <div className="input-container">
        <label className="label">Message</label>
        <textarea type="text" onChange={()=>{}} cols='40' className="textbox" rows="20" />
      </div>


      <button type="submit" className="submit-button">Submit</button>




    </form>
:resultPage()}


    


  </div>
  


    

    </>
  );
};

export default MainPage;
