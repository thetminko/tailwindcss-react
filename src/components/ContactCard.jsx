import React from 'react';

const ContactCard = () => (
  <div className="md:flex bg-white rounded-lg p-6 border max-w-md">
    <img className="h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6 object-cover" src={"./avator.jpg"} alt="avatar" />
    <div className="text-center md:text-left">
      <h2 className="text-lg font-bold md:font-normal">John Doe</h2>
      <div className="text-purple-500">Software Engineer</div>
      <div className="text-gray-600">john.doe@ufinity.com</div>
      <div className="text-gray-600">(+65) 8888 8888</div>
      <button className="btn btn-blue mt-4 text-sm">Greet!</button>
    </div>
  </div>
);

export default ContactCard;