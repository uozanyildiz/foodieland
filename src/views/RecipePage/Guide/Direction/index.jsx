import React from 'react';
import {
	DirectionBr,
	DirectionChecklist,
	DirectionContainer,
	DirectionDescription,
} from './styled';
import ReactMarkdown from 'react-markdown';
const Direction = ({ title, desc, index }) => {
	return (
		<DirectionContainer>
			<DirectionChecklist divide={false}>
				{`${index}. ${title}`}
			</DirectionChecklist>
			<DirectionDescription>
				<ReactMarkdown children={desc} />
			</DirectionDescription>
			<DirectionBr />
		</DirectionContainer>
	);
};

export default Direction;
