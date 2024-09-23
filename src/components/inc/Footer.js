import React from "react";
import { Link } from "react-router-dom";
import './Footer.css';

function Footer (){
    return(

        <section className="section Footer border-top">

        <div className="container">
           <div className="row"> 
               <div className="col-md-4 text-center ">
                  <h6 >در باره مکتب</h6>
                 <hr/>
                 <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و </p>
                </div>
               <div className="col-md-4 text-center">
                   <h6>لینک صفحات</h6>
                <hr/>
                <div className="di "><Link className='link1 text-center' to="/">خانه</Link></div>
                <div className="di"><Link className='link1' to="/about">در باره ما</Link></div>
                <div className="di"><Link className='link1' to="/essay">مقالات</Link></div>
                <div className="di"><Link className='link1' to="/student">شاگردان برتر</Link></div>
                <div className="di"><Link className='link1' to="/contactUs">ارتباط با ما</Link></div>
               </div>
               <div className="col-md-4 text-center">
                   <h6> لینک های ارتباطی </h6>
                   <hr/>
                   <div><p className=" mb-1"> آدرس : افغانستان هرات پل رنگینه </p></div>
                   <div><p className=" mb-1">+93 794 5345 434</p></div>
                   <div><p className=" mb-1">+93 794 3445 434</p></div>
                   <div><p className=" mb-1">RoyaiSabaz@gmail.com</p></div>
                   <div><p className=" mb-1"> ID-Telegram: RoyaiSabaz@1212</p></div>
                   
               </div>
            </div>
        </div>
     </section>
    )

}
export default Footer 