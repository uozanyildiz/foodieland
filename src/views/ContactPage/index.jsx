import React from 'react';
import Layout from '../../components/Layout';
import FormInput, { MessageInput } from './FormInput';
import Subscribe from '../../components/Subscribe';
import {
	ContactContainer,
	ContactImg,
	ContactTitle,
	FormButton,
	FormContainer,
	FormGroup,
	Test,
} from './styled';

const ContactPage = () => {
	return (
		<Layout>
			<ContactContainer>
				<ContactTitle>Contact Us</ContactTitle>
				<div>
					<ContactImg src='/img/contact-us.png' />
					<FormContainer>
						<FormGroup>
							<FormInput label='Name' placeholder='Enter your name..' />
							<FormInput label='Email address' placeholder='Email address..' />
						</FormGroup>
						<FormGroup>
							<FormInput label='Subject' placeholder='Enter subject..' />
							<FormInput label='Enquiry type' placeholder='Advertising' />
						</FormGroup>
						<FormGroup>
							<MessageInput
								label='Message'
								placeholder='Enter your message..'
							/>
						</FormGroup>
						<FormButton text='Submit' />
					</FormContainer>
				</div>
			</ContactContainer>
			<Subscribe mt={160} />
		</Layout>
	);
};

export default ContactPage;
