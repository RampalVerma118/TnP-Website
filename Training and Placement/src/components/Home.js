import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <>
  
       <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
        <div className="carousel-inner">
            <div className="carousel-item active">
            <img src="/img/slide1.jpg" style={{height:"400px", objectFit:"cover" }} className="d-block w-100 img-fluid " alt="..."/>
            </div>
            <div className="carousel-item bg-dark">
            <img src="/img/slide2.jpeg" style={{height:"400px", objectFit:"cover"}} className="d-block w-100  " alt="..."/>
            </div>
            <div className="carousel-item">
            <img src="/img/slide3.jpg" style={{height:"400px",objectFit:"cover" }} className="d-block w-100 " alt="..."/>
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className='container my-5' style={{height:"300px"}}>
        {/* <h3>About us</h3> */}
        <div className='row'>
          <div className='col-md-6'>
        <p className='' style={{alignContent:"left", width:"600px", marginLeft:"5px",fontFamily:"cursive"}}>
          The purpose of Training and Placement Management System is to automate the existing  manual system by the help of computerized equipment’s and full-fledged computer software, fulfilling their requirements, so that their valuable data/information can be stored for a longer period with easy accessing and manipulation of the same. The required software and hardware are easily available and easy to work with
 
          <strong>Training and Placement Management System</strong>, as described above, can lead to error free, secure, reliable and fast management system. It can assist the user to concentrate on their other activities rather to concentrate on the record keeping. Thus, it will help organization in better utilization of resources. The organization can maintain computerized records without redundant entries. That means that one need not be distracted by information that is not relevant, while being able to reach the information!
        </p>
        </div>


        <div className='col-md-1'>
          <img src="/img/img1.jpg" alt="error" style={{height:"308px",width:"665px"}} />
        </div>

        </div>

      </div>
      
      <div className='' style={{backgroundImage:"url('/img/img3.jpg') ", height:"500px",objectFit:"cover",}}> 

      <div className='row' >
          <div className="col-md-4" style={{height:"400px",alignItems:"center"}}>
          <h1 className='my-2 text-light' style={{ textAlign:"center",justifyContent:"center",marginLeft:"27px",fontFamily:"-moz-initial"}}>TRAINING AND PLACEMENT</h1>
          <img src="/img/img4.png" alt="error" style={{height:"300px",marginLeft:"76px",marginTop:"23px"}}/>
          </div>

          <div className=" col-md-8">
            <h4 className='my-2 text-light' style={{fontFamily:"math"}}>
              Training and placement provide everything related to the placement. Here you can easily find our collage campus recrutment related information like which compaines are coming and also you can find the previous year placement record.
            </h4>
            
            <div className='my-5' style={{marginLeft:"114px"}}>
              
             <Link className="nav-link  text-light" to="/about"><strong>► About</strong></Link>
            
              <Link className='nav-link   text-light' to="/contactus"><strong>► Contact</strong> </Link>
              <Link className="nav-link   text-light " to="/processofplacement"><strong>► Process of Placement</strong></Link>
              <Link className="nav-link   text-light " to="/topcompanies"><strong>► Top Companies</strong></Link>
              
              <Link className="nav-link   text-light " to="/placementrecords"><strong>► Placement Records</strong></Link>
              <Link className="nav-link   text-light " to="/testimonial"><strong> ► Alumni Testimonial</strong></Link>
              
          </div>
           </div>

      </div>
      </div>
    </>
  )
}
