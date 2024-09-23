import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function ContactUs (){

  
  
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_v0rd0n5', 'template_5dcj9a8', form.current, {
          publicKey: 'jFrhxC0BZiCyn-0pI',
        })
        .then(
          () => {
            console.log('SUCCESS!');
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    };
  

    return(

        <div className="container">
           <div className="row"> 
               <div className="col-md-6 mb-5  text-center">
           

               <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
                       
                         
                   
                  
               </div>

               <div className="col-md-6 mb-5  text-center">
                  
                 <div ><i class="bi bi-telephone " style={{color:"black"}}></i></div>
                 <div ><i class="bi bi-telephone"></i></div>
                 <div ><i class="bi bi-envelope-check"></i></div>
                 <div ><i class="bi bi-telegram"></i></div>


                       
                         
                   
                  
               </div>
              
            </div>
        </div>
    )
}

export default ContactUs