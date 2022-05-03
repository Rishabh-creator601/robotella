import React, { useState } from "react";

const Contact = () =>{

const [data,setData] = useState({
    name:"",
    phone:"",
    email:"",
    msg:""
});

const InputEvent  = (event) =>{

    const {name,value} = event.target;
    setData((preVal)=>{
        return {
            ...preVal,
            [name] :value
        }
    })

}

const FormSubmit = (e) =>{


    e.preventDefault();
    alert(`${data.name} , Your Msg Has Been Sent `)
}

    return (<>
    <div className="m-5">
        <h1><center>Contact Us</center></h1>
    </div>

<div className="container contact_div">
<div className="row">
<div className="col-md-6 col-10 mx-auto">

<form onSubmit={FormSubmit}>


<div class="form-group pb-4">
<label for="name_input">Enter Your Name:</label>
<input 
type="text" 
class="form-control" 
id="name_input"  
placeholder="Enter Your name"
name="name"
value={data.name}
onChange={InputEvent}
 />
</div>

<div class="form-group mb-2 pb-4">
<label for="phone_input">Enter Your Phone No:</label>
<input 
type="number" 
class="form-control" 
id="phone_input" 
placeholder="Enter Your Phone No"
value={data.phone}
name="phone"
onChange={InputEvent}
 />
    
  </div>


  <div class="form-group mb-2 pb-4">
<label for="email_input">Email address :</label>
<input 
type="email" 
class="form-control" 
id="email_input" 
aria-describedby="emailHelp" 
placeholder="Enter Your email"
value={data.email}
name="email"
onChange={InputEvent}
 />
</div>


<div class="form-group mb-2 pb-4">
<label for="text_input">Describe Your Issue </label>
<textarea 
type="text" 
class="form-control" 
id="text_input" 
placeholder="Write Your Description" 
value={data.msg}
name="msg"
onChange={InputEvent}
 
 ></textarea>
    
</div>


  <button type="submit" class="btn btn-outline-primary">Submit</button>
</form>


            </div>

        </div>
    </div>
    
    </>);
};



export default Contact;