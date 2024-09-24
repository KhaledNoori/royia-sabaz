import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2"; // وارد کردن SweetAlert2
import "bootstrap-icons/font/bootstrap-icons.css";
import "./Contact.css";

function ContactUs() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_v0rd0n5", "template_5dcj9a8", form.current, {
        publicKey: "jFrhxC0BZiCyn-0pI",
      })
      .then(
        () => {
          Swal.fire({
            title: "موفقیت!",
            text: "پیام شما با موفقیت ارسال شد!",
            icon: "success",
            confirmButtonText: "OK",
          });
          form.current.reset();
        },
        (error) => {
          Swal.fire({
            title: "خطا!",
            text: "ارسال پیام ناکام ماند.",
            icon: "error",
            confirmButtonText: "OK",
          });
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <div className="container">
      <h3 className=" text-center mt-5">ارتباط با ما</h3>
      <div className="row gy-3 mt-5 row1">
        <div className="col-lg-6 mb-5 ms-10 ">
          <form className="" ref={form} onSubmit={sendEmail}>
            <div className="row gy-4">
              <div className="col-md-9">
                <label className="form-lable">نام</label>
                <input
                  className="form-control mt-2"
                  type="text"
                  required
                  name="user_name"
                />
              </div>

              <div className="col-md-9">
                <label className="form-lable">ایمیل</label>
                <input
                  className="form-control mt-2"
                  type="email"
                  name="user_email"
                  required
                />
              </div>

              <div className="col-md-9">
                <label className="form-lable ">متن پیام</label>
                <textarea
                  name="message"
                  rows={2}
                  required
                  className="form-control mt-2"
                />
              </div>

              <div className="col-md-9">
                <input
                  type="submit"
                  value="Send"
                  className="btn btn-primary"
                  style={{ width: "100%" }}
                />
              </div>
            </div>
          </form>
        </div>

        <div className="col-lg-6 ">
          <div className="row gy-3">
            <div className="col-md-6 ">
              <div className="info-box">
                <i class="bi bi-geo-alt-fill icon "></i>
                <h5>آدرس:</h5>
                <p className=" mb-1"> افغانستان هرات پل رنگینه </p>
              </div>
              <div className="info-box mt-5">
                <i class="bi bi-telephone icon"></i>
                <h5>شماره تماس</h5>
                <p className="pa">+93 794 3445 434</p>
                <p className="pa">+93 794 5345 434</p>
              </div>
            </div>
            <div className="col-md-6 ">
              <div className="info-box">
                <i class="bi bi-envelope-check icon"></i>
                <h5>ایمیل</h5>
                <p>RoyaiSabaz@gmail.com</p>
              </div>
              <div className="info-box mt-5">
                <i class="bi bi-telegram icon"></i>
                <h5>ID تلگرام</h5>
                <p>RoyaiSabaz@22</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
