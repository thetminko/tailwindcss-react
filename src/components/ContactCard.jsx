import React from 'react';

const ContactCard = () => (
  <div class="md:flex bg-white rounded-lg p-6 border max-w-md">
    <img class="h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6 object-cover" src={"./avator.jpg"} alt="avatar" />
    <div class="text-center md:text-left">
      <h2 class="text-lg">John Doe</h2>
      <div class="text-purple-500">Software Engineer</div>
      <div class="text-gray-600">john.doe@ufinity.com</div>
      <div class="text-gray-600">(+65) 8888 8888</div>
    </div>
  </div>
);

export default ContactCard;