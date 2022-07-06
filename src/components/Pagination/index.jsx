import React, { useEffect, useState } from 'react';
import { PageButton, PaginationContainer } from './styled';

const Page = ({ text, isActive = false, pageChangeHandler }) => {
	return (
		<div>
			<PageButton
				onClick={() => {
					pageChangeHandler(text);
				}}
				isActive={isActive}
				text={text}
			/>
		</div>
	);
};

const Pagination = ({ totalPostCount = 20 }) => {
	const [currentPage, setCurrentPage] = useState(1);
	const postPerPage = 6;
	const totalPageCount = Math.ceil(totalPostCount / postPerPage);
	// const lastPostIndex = currentPage * postPerPage;
	// const firstPostIndex = lastPostIndex - postPerPage;

	const changePage = (i) => {
		if (currentPage === i && i === 0 && i === totalPageCount + 1) return;
		setCurrentPage(i);
	};
	useEffect(() => {}, [currentPage]);

	const PageList = () => {
		let list = [];
		for (let i = 1; i <= totalPageCount; i++) {
			list.push(
				<Page
					isActive={i === currentPage}
					key={i}
					text={i}
					pageChangeHandler={changePage}
				/>
			);
		}
		return list;
	};

	return (
		<PaginationContainer>
			<PageList />
		</PaginationContainer>
	);
};

export default Pagination;
