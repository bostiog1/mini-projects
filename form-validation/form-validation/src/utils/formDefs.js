const formDefs = [
  {
    label: 'Full Name',
    type: 'text',
    placeholder: 'Enter your full name',
    errorPattern: /^[a-zA-Z]+ [a-zA-Z]+$/,
    errorMsg: 'Please enter your first and last name',
  },
  {
    label: 'Phone No.',
    type: 'tel',
    placeholder: '9876543210',
    errorPattern: /^\d{10}$/,
    errorMsg: 'Phone number must be 10 digits',
  },
  {
    label: 'Email Id',
    type: 'email',
    placeholder: 'Enter your email',
    errorPattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
    errorMsg: 'Please enter a valid email',
  },
  {
    label: 'Your Message',
    type: 'textarea',
    placeholder: 'Enter your message',
    minLength: 10,
    errorMsg: 'Message should be at least 10 characters long',
  },
];

export default formDefs;
