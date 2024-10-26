import React from 'react';
import './ContactForm.css';
import swal from 'sweetalert';

function ContactForm() {
    return (
        <div className="contact-form-block" id="contact">
            <div className="form">
                <div>
                    <h1 className="contact-form-heading">About us</h1>
                    <div>
                        <img src="https://i.imgur.com/rAjHY0y.png" alt="separator" className="img-separator"/>
                    </div>
                    <p className="contact-form-paragraph">
                        Vivamus suscipit tortor eget felis porttitor volutpat. Vestibulum
                        ac diam sit amet quam vehicula elementum sed sit amet dui.
                        Pellentesque in ipsum id orci porta dapibus. Proin eget tortor risus.
                        Curabitur aliquet quam id dui posuere blandit. Donec rutrum
                        congue leo eget malesuada. Vivamus suscipit tortor eget
                        felis porttitor volutpat. Vivamus suscipit tortor eget felis.
                    </p>
                </div>
            </div>

            <div className="form">
                <div>
                    <h1 className="contact-form-heading">Contact us</h1>
                    <form>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea id="message" name="message"/>
                        </div>
                        <button type="submit" className="send-btn" onClick={(e) => {
                            e.preventDefault();
                            const userEmail = document.getElementById("email").value;
                            const userMessage = document.getElementById('message').value;
                            if (userEmail !== "" || userMessage !== "") {
                                swal("Thanks for your message!", "We will contact you shortly", "success");
                            } else {
                                swal("Error", "Please fill in all the fields", "error");
                            }
                        }}>Send</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ContactForm;