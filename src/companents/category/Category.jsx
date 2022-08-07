import React, { useState } from 'react';
import './_category.scss';
import { useDispatch } from 'react-redux';
import uniqid from 'uniqid';
import { getCategories } from '../../redux/slices/video';

const keywords = [
	'All',
	'React js',
	'Angular js',
	'React Native',
	'use of API',
	'Redux',
	'Music',
	'Algorithm Art ',
	'Python',
	'Csharp',
	'Coding',
	'Cricket',
	'Marvel',
	'DC',
	'Gatsby',
];

function Category() {
	const [active, setActive] = useState('All');
	const dispatch = useDispatch();

	const handleClick = (value) => {
		dispatch(getCategories(value));
		setActive(value);
	};

	return (
		<div className="categories">
			{keywords.map((keyword) => {
				return (
					<span
						key={uniqid()}
						onClick={() => handleClick(keyword)}
						className={active === keyword ? 'active' : null}
					>
						{keyword}
					</span>
				);
			})}
		</div>
	);
}

export default Category;
