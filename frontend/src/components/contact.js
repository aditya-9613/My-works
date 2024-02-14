import React from "react";
import './contact.css';
const Contact = () => {
    return (
        <div>
            <div class="container shadow-lg p-3 mb-5 mainboxx rounded" >
                <div class="row d-flex justify-content-evenly mt-3">
                    <div class="col-md-4 d-flex justify-content-center">
                        <h1 class="contact">Contact Details</h1>
                    </div>
                    <div class="col-md-3 shadow-lg p-3 mb-5 bg-body-tertiary rounded text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#40A2D8"
                            class="bi bi-telephone-fill" viewBox="0 0 16 16">
                            <path fill-rule="evenodd"
                                d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
                        </svg><br />
                        <p>+91-9450535983<br />+91-7071436779</p>
                    </div>
                    <div class="col-md-3 shadow-lg p-3 mb-5 bg-body-tertiary rounded text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                            class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
                        </svg><br />
                        <p>120-122,1/2/3, sharp laboratories, kashi vidyapeeth block road,maheshpur 1/2/3,120-122,Sharp Laboratories, Maheshpur,110093,Varanasi, Near panchyat bhawan, Industrial Estate, Varanasi-221106, Uttar Pradesh, India</p>
                    </div>
                </div>
                <div class="row d-flex justify-content-evenly">
                    <div class="col-md-4">

                    </div>
                    <div class="col-md-3 shadow-lg p-3 mb-5 bg-body-tertiary rounded text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                            class="bi bi-envelope" viewBox="0 0 16 16">
                            <path
                                d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
                        </svg> <br />
                        <p>test@gmail.com</p>
                    </div>
                    <div class="col-md-3 shadow-lg p-3 mb-5 bg-body-tertiary rounded text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-radar"
                            viewBox="0 0 16 16">
                            <path
                                d="M6.634 1.135A7 7 0 0 1 15 8a.5.5 0 0 1-1 0 6 6 0 1 0-6.5 5.98v-1.005A5 5 0 1 1 13 8a.5.5 0 0 1-1 0 4 4 0 1 0-4.5 3.969v-1.011A2.999 2.999 0 1 1 11 8a.5.5 0 0 1-1 0 2 2 0 1 0-2.5 1.936v-1.07a1 1 0 1 1 1 0V15.5a.5.5 0 0 1-1 0v-.518a7 7 0 0 1-.866-13.847" />
                        </svg> <br />
                        <p>Distributors Locations <br /> Varanasi , Balia , Jaunpur</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Contact;