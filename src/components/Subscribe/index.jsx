import React from 'react';
import { Description } from '../../shared/Description';
import {
	SubscribeAction,
	SubscribeButton,
	SubscribeContainer,
	SubscribeInput,
	Title,
} from './styled';

const Subscribe = ({ mt }) => {
	return (
		<SubscribeContainer mt={mt}>
			<Title>Deliciousness to your inbox</Title>
			<Description mt='24'>
				Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqut enim ad minim{' '}
			</Description>
			<SubscribeAction>
				<SubscribeInput />
				<SubscribeButton text='Subscribe' />
			</SubscribeAction>
		</SubscribeContainer>
	);
};

export default Subscribe;
