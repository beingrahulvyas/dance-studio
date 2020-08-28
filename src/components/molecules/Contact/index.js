import React from 'react';
import { useForm } from 'react-hook-form';
import { ContactSection } from './index.style';
import ErrorMessage from '../../atoms/ErrorMessage';

const Contact = () => {

    const { handleSubmit, register, errors } = useForm();

    const onSubmit = () => {

    }

    return (
        <ContactSection>
            <h2>Contact Us</h2>
            <p>Please fill this form in a decent manner</p>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="input-grp">
                    <input
                        type="text"
                        placeholder="Name"
                        name="name"
                        ref={register({
                            required: "Required",
                            minLength: {
                                value: 2,
                                message: "Name should be minimum 2 characters"
                            }
                        })} />
                    {errors.name && <ErrorMessage message={errors.name.message} />}
                </div>
                <div className="input-grp">
                    <input
                        type="email"
                        placeholder="Email"
                        name="email"
                        ref={register({
                            required: "Required",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "Invalid Email Address"
                            }
                        })} />
                    {errors.email && <ErrorMessage message={errors.email.message} />}
                </div>
                <textarea
                    placeholder="Message"
                    rows={4} />
                <button type="submit">Send Message</button>
            </form>
        </ContactSection>
    );
}

export default Contact;