const formDefs = [
  {
    label: 'Full Name',
    type: 'text',
    placeholder: 'Enter your full name',
    errorPattern: /^[a-zA-Z]+ [a-zA-Z]+$/,
    errorMsg: 'Write full name',
  },
  {
    label: 'Phone No.',
    type: 'tel',
    placeholder: '9876543210',
    errorPattern: /^\d{10}$/,
    errorMsg: 'Should be 10 digits',
  },
  {
    label: 'Email Id',
    type: 'email',
    placeholder: 'Enter your email',
    errorPattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
    errorMsg: 'Email Invalid',
  },
  {
    label: 'Your Message',
    type: 'textarea',
    placeholder: 'Enter your message',
    minLength: 10,
    errorMsg: '10 characters required',
  },
];

export default formDefs;
