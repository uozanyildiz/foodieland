import React, { useState } from 'react';
import {
	Checked,
	ChecklistBr,
	ChecklistContainer,
	ChecklistText,
	Unchecked,
} from './styled';
const Checklist = ({ divide = true, children, className }) => {
	const [check, setCheck] = useState(false);
	const clickHandler = () => {
		setCheck(!check);
	};

	const icon = check ? <Checked /> : <Unchecked />;

	return (
		<ChecklistContainer className={className}>
			<div onClick={clickHandler}>
				{icon}
				<ChecklistText checked={check}>{children}</ChecklistText>
			</div>
			{divide && <ChecklistBr />}
		</ChecklistContainer>
	);
};

export default Checklist;
