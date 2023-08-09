import linkedInLogo from '../img/linkedin.png';
import githubLogo from '../img/github.png';
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import axios from 'axios';

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [msg, setMsg] = useState('')
  const form = useRef()
  const [joke, setJoke] = useState('')

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_PUBLIC_KEY)
    .then((result) => {
        alert('Message sent!')
    }, (error) => {
        alert('Error. Please try again or contact me directly at jackwardlaw0@gmail.com')
    });
    
    setName('')
    setEmail('')
    setMsg('')

  };

  const getJoke = () => {
    axios.get('https://icanhazdadjoke.com/', {
      headers: {
        Accept: 'application/json',
      }
    })
    .then((response) => {
      console.log(response.data.joke)
      setJoke('"' +response.data.joke )
    })
  }

  
  return (
    <div id="contact" className="flex flex-col justify-center items-center">
      <h1 className="font-mono sm:text-4xl text-3xl mb-5 text-white">
          Contact
      </h1>
      <p className="">
        Get in touch.
      </p>
      <div className="m-10">
        <form ref={form} onSubmit={sendEmail}>
          <label className="block font-bold mb-2">Name</label>
          <input className="text-gray-700 rounded w-full py-2 px-3 mb-6" type="text" name="name" placeholder="John Doe" value={name} onChange={event => setName(event.target.value)}/>
          <label className="block font-bold mb-2">Email</label>
          <input className="text-gray-700 rounded w-full py-2 px-3 mb-6" type="email" name="email" placeholder="example@gmail.com" value={email} onChange={event => setEmail(event.target.value)} />
          <label className="block font-bold mb-2">Message</label>
          <textarea className="text-gray-700 rounded w-full py-2 px-3 mb-6" name="message" value={msg} placeholder="Hi there!" onChange={event => setMsg(event.target.value)}/>
          <button className="bg-gray-800 hover:bg-gray-600 text-white font-bold py-2 px-6 rounded" type="submit">Send</button>
        </form>
      </div>

      <div className="my-10 text-center">
        <button className="text-white hover:text-gray-400" onClick={getJoke}>Click here for a joke</button>
        <span className="text-xs"> (from icanhazdadjoke.com)</span>
        <p className="px-10 pt-2">{joke}</p>
        
      </div>

      <div className="flex flex-row px-10 mt-10 items-center">
        <p className="mx-4">jackwardlaw0@gmail.com</p>
        <a className="object-fill h-4 w-4 m-2 mx-4" target="_blank" href="https://linkedin.com/in/jackwardlaw"><img src={linkedInLogo} alt="LinkedIn"/></a>
        <a className="object-fill h-4 w-4 m-2 mx-4" target="_blank" href="https://github.com/jackw00"><img src={githubLogo} className="rounded" alt="GitHub"/></a>
        <a
          href="#"
          className="px-1 m-2 hover:bg-gray-800 rounded text-sm">
          Home
        </a>
      </div>
    </div>
  );
}