import React, { useState } from 'react';

const Contact: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errors, setErrors] = useState({ name: '', email: '', message: '' });

    const validateForm = () => {
        let formErrors = { name: '', email: '', message: '' };
        let isValid = true;

        if (!name) {
            formErrors.name = 'Name is required';
            isValid = false;
        }

        if (!email) {
            formErrors.email = 'Email is required';
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            formErrors.email = 'Email is invalid';
            isValid = false;
        }

        if (!message) {
            formErrors.message = 'Message is required';
            isValid = false;
        }

        setErrors(formErrors);
        return isValid;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validateForm()) {
            // Handle form submission (e.g., send data to an API)
            console.log({ name, email, message });
            setName('');
            setEmail('');
            setMessage('');
            setErrors({ name: '', email: '', message: '' });
        }
    };

    return (
        <div className="contact-container">
            <h2>Contact Me</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    {errors.name && <span className="error">{errors.name}</span>}
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    {errors.email && <span className="error">{errors.email}</span>}
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                    {errors.message && <span className="error">{errors.message}</span>}
                </div>
                <button type="submit">Send Message</button>
            </form>
            <div className="map-container">
                {/* Interactive map can be integrated here */}
                <h3>Find me here:</h3>
                <div id="map"></div>
            </div>
        </div>
    );
};

export default Contact;