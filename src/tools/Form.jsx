function Form({services, form, setForm, onSubmit, status}) {
    return (
        <form onSubmit={onSubmit} className="contact-form">
           <div className="form-group name">
                <label htmlFor="name">Nom Complet</label>
                <input type="text" id="name" name="name" placeholder="Jean Dupont" value={form.name} onChange={(e)=>{setForm({...form, name: e.target.value})}} required />
           </div>
           <div className="form-group email">
                <label htmlFor="email">Adresse Email</label>
                <input type="email" id="email" name="email" placeholder="jean@exemple.com" value={form.email} onChange={(e)=>{setForm({...form, email: e.target.value})}} required />
           </div>
            <div className="form-group phone">
                <label htmlFor="phone">Numéro de Téléphone</label>
                <input type="tel" id="phone" name="phone" placeholder="+33 6 12 34 56 78" value={form.phone} onChange={(e)=>{setForm({...form, phone: e.target.value})}} required />
           </div>
           <div className="form-group service-type">
                <label htmlFor="service-type">Type de Service</label>
                <select id="service-type" name="service-type" value={form.serviceType} onChange={(e)=>{setForm({...form, serviceType: e.target.value})}} required>
                    <option value="" disabled>Sélectionnez un service</option>
                    {services.map((service, index) => (
                         <option key={index} value={service}>{service}</option>
                    ))}
               </select>
           </div>
           <div className="form-group message">
                <label htmlFor="message">Votre Message</label>
                <textarea id="message" name="message" placeholder="Parlez-nous de votre projet..." rows="5" value={form.message} onChange={(e)=>{setForm({...form, message: e.target.value})}} required></textarea>
           </div>
           <button className="button secondary submit-btn" type="submit">
                Envoyer le Message
           </button>
           <div className="form-status">
                {status === "success" && <p className="success-message">Votre message a été envoyé avec succès !</p>}
           </div>
        </form>
    );
}

export default Form;