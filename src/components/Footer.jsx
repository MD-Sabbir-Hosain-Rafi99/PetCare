import React from 'react'
import Logo from '../assets/logonav.jpg'
const Footer = () => {
  return (
    <div className="bg-base-200">
      <div className='max-w-screen-2xl mx-auto w-full px-4 md:px-8 lg:px-12 pt-20'>
      <footer className="footer sm:footer-horizontal text-base-content p-10">
        <aside>
          <img className='h-20' src={Logo} alt="" />
          <p>
          Copyright © 2025 - All right reserved by Pet Care Service
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </div>
    </div>
  )
}

export default Footer

