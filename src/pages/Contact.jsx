import { useState } from 'react';

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});

  const handleBlur = (e) => {
    const { name, value } = e.target;
    if (!value) {
      setErrors({ ...errors, [name]: 'This field is required' });
    } else {
      setErrors({ ...errors, [name]: '' });
    }
    if (name === 'email' && value && !/\S+@\S+\.\S+/.test(value)) {
      setErrors({ ...errors, email: 'Email is invalid' });
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <section>
      <h2>Contact</h2>
      <form>
        <input type="text" name="name" placeholder="Name" onChange={handleChange} onBlur={handleBlur} />
        {errors.name && <p>{errors.name}</p>}
        <input type="email" name="email" placeholder="Email" onChange={handleChange} onBlur={handleBlur} />
        {errors.email && <p>{errors.email}</p>}
        <textarea name="message" placeholder="Message" onChange={handleChange} onBlur={handleBlur}></textarea>
        {errors.message && <p>{errors.message}</p>}
        <button type="submit">Send</button>
      </form>
      <p>Or email me at: your.email@example.com</p>
    </section>
  );
}

export default Contact;
