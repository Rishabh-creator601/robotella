import React from "react";


const Common = (props) =>{
    return (<>
 <section id='header' className="">

<div className="container-fluid nav_bg">
<div className="row">
<div className="col-10 mx-auto">

    <div className="row">


<div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1">
        <h1 className="mt-5" >{props.name}</h1>

        <h2 className="my-3">{props.subheading} </h2>

        <div className="mt-10 btn btn-sm">

        <a type="button" href={props.to_} className="btn-get-started">{props.btn_name} </a>


        </div>
        
 </div>



    <div className="col-lg-6 order-1 order-lg-2 header-img">
    <img src={props.imgsrc} className='img-fluid animated' alt='' />
    </div>
</div>
</div>

</div>
</div>



      
 </section>

    
    </>);
};



export default Common;