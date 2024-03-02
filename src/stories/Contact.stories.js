import React from 'react';
import { action } from '@storybook/addon-actions';
import { ContactForm } from './ContactForm'; // Import the ContactForm component
import './ContactForm.scss'; // Import CSS for styling

export default {
  title: 'ContactForm',
  component: ContactForm,
};

// Template for a default state of the ContactForm
const Template = (args) => <ContactForm {...args} />;

// Story for the default state of the ContactForm
export const Default = Template.bind({});
Default.args = {
  onSubmit: action('Submit') // Log action when the form is submitted
};

// Story for the ContactForm with some pre-filled data
export const WithData = Template.bind({});
WithData.args = {
  onSubmit: action('Submit'),
  formData: {
    name: 'John Doe',
    email: 'john.doe@example.com',
    message: 'Hello, I am interested in your services.'
  }
};
