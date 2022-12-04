import React from 'react';
import { Link } from 'react-router-dom';
import error from './../../Assets/Images/error.png';
import './Error.scss';

const Error = () => {
	return (
		<div className={'error-container'}>
			<section className={'error'}>
				<img
					className={'error__img'}
					src={error}
					alt='Error'
					width={500}
					height={194}
				/>
				<h2 className={'error__heading'}>Page not found - 404</h2>
				<p className={'error__text'}>
					This page not found (deleted or never exists).Try a phrase
					in search box or back to home and start again.
				</p>
				<Link to={'/'} className={'error__link'}>
					TAKE ME HOME!
				</Link>
			</section>
		</div>
	);
};

export default Error;
