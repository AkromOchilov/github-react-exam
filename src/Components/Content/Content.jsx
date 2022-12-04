import React, { useRef, useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getRepos } from './../../api/api';
import './Content.scss';

const Content = () => {
	let { username } = useParams();
	username = username ? username : 'AkromOchilov';
	let langRef = useRef();
	let [overview, setOverview] = useState([]);

	let handleOverview = async (username) => {
		let data = await getRepos(username);
		setOverview(data);
	};

	useEffect(() => {
		handleOverview(username);
	}, [username]);

	return (
		<section className={'col-9 d-flex flex-column py-3'}>
			<div className='content__title d-flex align-items-center justify-content-between'>
				<h2 className='fs-5'>Popular repositories</h2>
				<button className={'btn btn-white'}>Customize your pins</button>
			</div>

			<div className='content__repos row gx-4 overflow-hidden'>
				<ol className='content__list list row row-cols-2 g-3 list-unstyled'>
					{overview?.length > 0 &&
						overview.map((overview) => {
							return (
								<li
									key={overview.id}
									className='content__item list-item col'>
									<div className='border rounded p-3 mb-2'>
										<div className='d-flex align-items-center justify-content-between mb-3'>
											<Link
												to={'/'}
												className={
													'content__link d-flex fw-bold text-decoration-none'
												}>
												{overview.name}
											</Link>
											<button className='content__btn btn btn-light rounded-pill'>
												{overview.visibility}
											</button>
										</div>
										<div
											className={
												overview.language === 'CSS'
													? 'content__lang purple d-flex align-items-center'
													: overview.language ===
													  'SCSS'
													? 'content__lang pink d-flex align-items-center'
													: overview.language ===
													  'JavaScript'
													? 'content__lang yellow d-flex align-items-center'
													: 'content__lang orange d-flex align-items-center'
											}
											ref={langRef}>
											{overview.language}
										</div>
									</div>
								</li>
							);
						})}
				</ol>
			</div>
		</section>
	);
};

export default Content;
