"use client"
import { socialData } from '@/constants/data'
import './ContactLinks.scss'
import Link from 'next/link'
import { FaPaperPlane } from 'react-icons/fa'
import { FormEvent, useState } from 'react';
import toast from 'react-hot-toast';

export default function ContactLinks() {
    const [data, setData] = useState({
        yourName: "",
        email: "",
        whatsapp: "",
        subject: "",
        message: "",
      });
    
        // Define a function to handle form input changes
        const handleInputChange = (e: any) => {
          const { name, value } = e.target;
          
          // Update the formData state with the new value
          setData({
            ...data,
            [name]: value,
          });
        };
    
      const sendEmail = async (e: FormEvent )=>{
        e.preventDefault();
    
        const response = await fetch('/api/send', {
          method: "POST",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        })
    
        if (response.status === 200){
          setData({
            yourName: "",
            email: "",
            whatsapp: "",
            subject: "",
            message: "",
          })
          toast.success(`Hi ${data.yourName}, your message was sent successfully!`)
        }
        else {
          toast.error('Sorry!, Your message has not been sent')
        }
      }
  return (
    <div className="contact-container container">
        <div className="col-1">
            {
                socialData.map((link) => (
                    <Link href={link.link} key={link.name}>
                        <div className="icon">
                            {link.icon}
                        </div>
                        <h5>
                            {link.name}
                        </h5>
                    </Link>
                ))
            }
        </div>
        <form className="col-2" onSubmit={sendEmail}>
            <div className="form-group">
                <input className='input' 
                type="text" 
                name="yourName"  // Change "name" to "yourName"
                id="name" 
                value={data.yourName}
                onChange={handleInputChange}
                placeholder='Your name'
                required />

                <input className='input' 
                type="email" 
                name="email" 
                id="email" 
                value={data.email}
                onChange={handleInputChange}
                placeholder='Your email' 
                required />
            </div>
            <div className="form-group">
                <input className='input' 
                type="text" 
                name='whatsapp'
                id='whatsapp'
                value={data.whatsapp}
                onChange={handleInputChange}
                placeholder='Your WhatsApp' />

                <input className='input' 
                type="text" 
                name="subject" 
                id="subject" 
                value={data.subject}
                onChange={handleInputChange}
                placeholder='Subject' 
                required />
            </div>
            <textarea className='input' 
            name="message" 
            id="message"
            value={data.message}
            onChange={handleInputChange}
            required 
            placeholder='Write your message here' 
            rows={5} ></textarea>
            <button className='btn' type='submit'>
                <p>Submit</p>
                <FaPaperPlane />
            </button>
        </form>
    </div>
  )
}
