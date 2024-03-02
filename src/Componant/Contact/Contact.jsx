import { useState } from 'react';
import './Contact.scss';
import '../../app.scss'
import emailjs from '@emailjs/browser'


export const ContactForm = () => {
    const YOUR_SERVICE_ID = 'service_6mmgv2t';
    const YOUR_TEMPLATE_ID = 'template_4lvpmrw';
    const YOUR_PUBLIC_KEY = 'vYyZZ1C_TmsdvOyhr';
    const [name, setName] = useState('');
    const [to_name] = useState('Shubham Pal');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();

        const templateParams = {
            name,
            to_name,
            email,
            message
        };

        emailjs.send(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, templateParams, {
            publicKey: YOUR_PUBLIC_KEY,
        })
            .then(
                (response) => {
                    console.log('SUCCESS!', response.status, response.text);
                },
                (err) => {
                    console.log('FAILED...', err);
                },
            );

        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <div className="contact-form-box">
            Contact here
                {/* <div className="image-box">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/220px-Image_created_with_a_mobile_phone.png" alt="" />
                </div> */}
            <div className="form">
                <form onSubmit={sendEmail}>
                    <label htmlFor="Name"> Name
                        <input
                            type="text"
                            placeholder='Name'
                            id='Name'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </label>
                    <label htmlFor="Email"> Email
                        <input
                            type="email"
                            placeholder='Email'
                            id='Email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </label>
                    <label htmlFor="Message"> Message
                        <textarea
                            name="message"
                            id="Message"
                            cols="30"
                            placeholder='Message'
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        ></textarea>
                    </label>
                    <button type="submit">Send</button>
                </form>
            </div>
        </div>
    );
};