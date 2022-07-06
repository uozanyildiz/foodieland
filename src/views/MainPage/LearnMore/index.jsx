import React from 'react';
import {
	SectionButton,
	SectionContainer,
	SectionImg,
	SectionImgWrapper,
	SectionText,
	SectionTitle,
} from './styled';
import { Description } from '../../../shared/Description';
import happyChefImg from './assets/happy-chef.png';
const LearnMore = () => {
	return (
		<SectionContainer>
			<SectionText>
				<SectionTitle>Everyone can be a chef in their own kitchen</SectionTitle>
				<Description mt={24}>
					Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqut enim ad minim{' '}
				</Description>
				<SectionButton text='Learn more' to='/blog/1' />
			</SectionText>
			<SectionImgWrapper>
				<SectionImg src={happyChefImg} />
			</SectionImgWrapper>
		</SectionContainer>
	);
};

export default LearnMore;
