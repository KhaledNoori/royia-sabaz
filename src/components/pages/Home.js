import React from "react";
import './Home.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from "../inc/slider";
import { Link } from "react-router-dom";
import VM from "../inc/VM";


 function Home (){
    return(
      <div>
       <Slider />
      { /* َAbout our school */ }
          <section className="section">

             <div className="container">
                <div className="row"> 
                    <div className="col-md-12 text-center">
                       <h3 className="main-heading">مکتب ما</h3>
                      <div className="underline mx-auto mt-3"></div>
                          <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای  </p>
                           <Link to="/about" className="btn btn-primary shadow">جزئیات بیشتر</Link>
                         </div>
                    </div>
                 </div>
          </section>

          {/* Vision and Mision  */}
         <VM />

         {/* Footer  */}

         

   </div>
    )
}

export default Home;