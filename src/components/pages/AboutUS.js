import React from "react";
import CountUp from "react-countup";

import Footer from "../inc/Footer";
import "./About.css";
function AboutUs() {
  return (
    <div className="container">
      <div>
        <h3 className=" text-center m-5 text-primary">در باره ما</h3>
      </div>
      <div className="row gy-2 my-5 ">
        <div className="col-lg-6 mb-5  ">
          <div className="div-pa">
            <p className=" para">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
              کتابهای زیادی در شصت و سه درصد گذشته حال .
            </p>
          </div>
        </div>

        <div className="col-lg-6 ">
          <div className="div-img">
            <img
              src="assets/images/photo_2024-09-11_09-11-16.png" alt="ewew"
              height={420}
              width={420}
            />
          </div>
        </div>
      </div>

      <div className="container counts my-5">
        <div className="row ">
          <div className="col-lg-3 col-md-6 mb-3">
            <div className="d-flex align-items-center justify-content-center shadow p-3">
              <i class="bi bi-buildings blue"></i>
              <div>
                <span className="fw-bold fs-4 text-primary">
                  <CountUp start={0} end={3} duration={3} />
                </span>
                <p className=" fw-bold">مرکز آموزشی</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-3">
            <div className="d-flex align-items-center justify-content-center shadow p-3">
              <i class="bi bi-person-standing blue"></i>
              <div>
                <span className="fw-bold fs-4 text-primary">
                  <CountUp start={0} end={85} duration={3} />
                </span>
                <p className=" fw-bold">آموزگار </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-3">
            <div className="d-flex align-items-center justify-content-center shadow p-3">
              <i class="bi bi-people-fill blue"></i>
              <div>
                <span className="fw-bold fs-4 text-primary">
                  <CountUp start={0} end={850} duration={3} />
                </span>
                <p className=" fw-bold">دانش آموز </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-3">
            <div className="d-flex align-items-center justify-content-center shadow p-3">
              <i class="bi bi-building blue"></i>
              <div>
                <span className="fw-bold fs-4 text-primary">
                  <CountUp start={0} end={120} duration={3} />
                </span>
                <p className=" fw-bold"> صنف آموزشی</p>
              </div>
            </div>
          </div>
        </div>

    
      </div>

      <Footer />
    </div>
  );
}

export default AboutUs;
