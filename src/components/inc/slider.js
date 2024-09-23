import React from "react";
import {Carousel} from 'react-bootstrap'
function Slider () {

    return(

<Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="assets/images/after-school-programs-McKinney-TX.jpg"
          alt="First slide"
        />
        <Carousel.Caption className="cu-cap">
            <img src="assets/images/photo_2024-09-11_09-11-16.png" alt="im" height={200} width={200} />
          <h3 >مرکز تعلیمی خصوصی رویای سبز</h3>
          <p style={{color:"black"}}>در یچه ای بسوی علم واخلاق اسلامی</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="assets/images/2.jpg"
          alt="Second slide"
        />
        <Carousel.Caption className="cu-cap">
        <img src="assets/images/photo_2024-09-11_09-11-16.png" alt="im" height={200} width={200} />
        <h3 style={{color:"white"}}>مرکز تعلیمی خصوصی رویای سبز</h3>
          <p style={{color:"white"}} >در یچه ای بسوی علم واخلاق اسلامی</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="assets/images/2.jpg"
          alt="Third slide"
        />
        <Carousel.Caption className="cu-cap">
        <img src="assets/images/photo_2024-09-11_09-11-16.png" alt="im" height={200} width={200} />
        <h3 style={{color:"white"}} >مرکز تعلیمی خصوصی رویای سبز</h3>
        <p style={{color:"white"}}>در یچه ای بسوی علم واخلاق اسلامی</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    )
}

export default Slider