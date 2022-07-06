import React from 'react';
import {
	HeaderAction,
	HeaderAuthor,
	HeaderBadgeStyle,
	HeaderButton,
	HeaderContainer,
	HeaderInfo,
	RecipeInfo,
	RecipeTitle,
} from './styled';

import Badge from '../../../shared/Badge';
import Break from '../../../shared/Break';

import { ReactComponent as PrinterIcon } from './assets/printer.svg';
import { ReactComponent as ShareIcon } from './assets/share.svg';
import { useLocation } from 'react-router-dom';

const HeaderBadge = ({ title, text, type }) => {
	return (
		<HeaderBadgeStyle>
			<Break $height='50px' />
			<Badge title={title} text={text} type={type} />
		</HeaderBadgeStyle>
	);
};

const Header = ({ title, author, basicInfo }) => {
	const location = useLocation();

	const onPrint = () => {
		window.print();
	};

	const onShare = () => {
		const websiteUrl = process.env.REACT_APP_NOT_SECRET_CODE;
		if (Navigator.share) {
			navigator.share({
				text: `${websiteUrl}/${location.pathname}`,
			});
		} else {
		}
	};

	return (
		<HeaderContainer>
			<HeaderInfo>
				<RecipeTitle>{title}</RecipeTitle>
				<RecipeInfo>
					<HeaderAuthor>
						<img src={author.img} alt='John Smith' />
						<div>
							<h4>{author.name}</h4>
							<p>{author.date}</p>
						</div>
					</HeaderAuthor>
					<HeaderBadge title='Prep time' text={basicInfo.prep} type='time' />
					<HeaderBadge title='Cook time' text={basicInfo.cook} type='food' />
					<HeaderBadge title='Food type' text={basicInfo.type} type='food' />
				</RecipeInfo>
			</HeaderInfo>
			{/* <HeaderAction>
				<HeaderButton>
					<div onClick={onPrint}>
						<PrinterIcon />
					</div>
					<span>Print</span>
				</HeaderButton>
				<HeaderButton>
					<div onClick={onShare}>
						<ShareIcon />
					</div>
					<span>Share</span>
				</HeaderButton>
			</HeaderAction> */}
		</HeaderContainer>
	);
};

export default Header;
