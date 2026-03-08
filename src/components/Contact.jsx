import Form from "../tools/Form";
import Inner from "./Inner";
import { useState } from "react";
import emailjs from '@emailjs/browser';
import { services } from "../services/data";


function Contact({person}) {

    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        serviceType: "",
        message: ""
    });

    const [status, setStatus] = useState("");

    const onSubmit = async (e) => {
        e.preventDefault();
        

        try {
            // Replace with your EmailJS credentials
            const result = await emailjs.send(
                'service_bk7ygra',      // Get from EmailJS dashboard
                'template_taquakc',     // Get from EmailJS dashboard
                {
                    from_name: form.name,
                    from_email: form.email,
                    phone: form.phone,
                    service_type: form.serviceType,
                    message: form.message,
                    to_name: person.name, // Your name
                },
                'lUgUAsYr0CTdY8LtU'       // Get from EmailJS dashboard
            );

            console.log('Email sent successfully:', result.text);
            setStatus("success");
            console.log("Form data:", form);
            setForm({
                name: "",
                email: "",
                phone: "",
                serviceType: "",
                message: ""
            });
        } catch (error) {
            console.error('Email send failed:', error);
        } finally {
            console.log("EmailJS process completed.");
        }
    };

    const servicesName = services.map(service => service.name);

    return (
        <>
        
            <section id="contact" className="contact">
                <Inner className="section-header">
                    <div>
                        <h2 className="section-title">Discutons de votre prochain projet</h2>
                        <p>
                            Réponse sous 24–48h ouvrées.
                        </p>
                    </div>
                </Inner>
                <Inner className="contact-details">
                    <div className="form-group">
                        <Form services={servicesName} form={form} setForm={setForm} onSubmit={onSubmit} status={status} />
                    </div>
                </Inner>
            </section>
        
        </>
    );
}

export default Contact;