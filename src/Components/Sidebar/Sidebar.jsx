import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './Sidebar.scss';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { getData } from './../../api/api';

const Sidebar = () => {
	let { username } = useParams();
	username = username ? username : 'AkromOchilov';
	let [info, setInfo] = useState([]);

	let handleData = async (username) => {
		let data = await getData(username);
		setInfo(data);
	};

	useEffect(() => {
		handleData(username);
	}, [username]);

	const renderTooltip = (props) => (
		<Tooltip id='button-tooltip' {...props}>
			Change your avatar
		</Tooltip>
	);
	return (
		<section
			className={'sidebar d-flex flex-column container col-3 pt-4 me-3'}>
			<OverlayTrigger
				placement='bottom'
				delay={{ show: 250, hide: 400 }}
				overlay={renderTooltip}>
				<Button variant='white'>
					<img
						src={info.avatar_url}
						alt='GitHub holder avatar'
						width={296}
						height={296}
						className={'d-flex rounded-circle w-100 '}
					/>
				</Button>
			</OverlayTrigger>

			<div className='sidebar_titles mb-2 pt-3'>
				<h2 className='sidebar__title fs-4 fw-bold m-0'>{info.name}</h2>
				<span className={'sidebar__username text-secondary'}>
					{info.login}
				</span>
			</div>
			<p className={'sidebar__bio'}>{info.bio}</p>

			<button className='btn btn-light bg-light shadow-sm rounded fw-semibold mb-3'>
				Edit profile
			</button>

			<div className='sidebar__follow d-flex align-items-center fs-5'>
				<ul className='sidebar__list list-inline d-flex list-unstyled'>
					<li className='sidebar__item list-inline-item d-flex align-items-center m-0'>
						<Link
							to={`${username}/followers`}
							className={
								'sidebar__follower d-flex align-items-center text-secondary text-decoration-none fs-6 me-3'
							}>
							{info.followers} followers
						</Link>
					</li>
					<li className='sidebar__item list-inline-item'>
						<Link
							to={'/'}
							className={
								'sidebar__following d-flex align-items-center text-secondary text-decoration-none fs-6 '
							}>
							{info.following} following
						</Link>
					</li>
				</ul>
			</div>
			<address
				className={
					'sidebar__location fs-6 d-flex align-items-center pb-3 border-bottom'
				}>
				{info.location}
			</address>
		</section>
	);
};

export default Sidebar;
