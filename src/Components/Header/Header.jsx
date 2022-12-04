import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import notification from './../../Assets/Images/notification.png';
import github from './../../Assets/Images/githubLight.svg';
import Dropdown from 'react-bootstrap/Dropdown';
import { getSearch } from './../../api/api';
import { list, profile } from './list.js';
import './Header.scss';

const Header = () => {
	let [open, setOpen] = useState(false);
	let [search, setSearch] = useState('');
	let [info, setInfo] = useState([]);

	let handle = async (search) => {
		let data = await getSearch(search);
		setInfo(data.items);
	};

	useEffect(() => {
		handle(search);
	}, [search]);

	return (
		<header
			className={
				'd-flex align-items-center justify-content-between px-4 bg-dark'
			}>
			<div className='header__left d-flex align-items-center'>
				<Link to='/' className={'d-flex me-3'}>
					<img
						src={github}
						alt='Github icon'
						width={32}
						height={32}
						className={'d-flex rounded-circle bg-white'}
					/>
				</Link>
				<form
					className={'form d-flex flex-column'}
					onSubmit={(e) => {
						e.preventDefault();
					}}>
					<input
						type='text'
						id={'header-input'}
						className='search__input form-control bg-dark py-0 text-light position-relative'
						placeholder={'Search or jump to...'}
						name={'input'}
						onChange={(e) => {
							setSearch(e.target.value);
							if (e.target.value.length > 0) {
								setOpen(true);
							} else {
								setOpen(false);
							}
						}}
					/>

					<ul
						className={`list-modal list-group ${
							open && 'activate'
						}`}>
						{info?.length > 0 &&
							info.map((item) => {
								return (
									<li
										key={item.id}
										className={
											'list-nav-item list-group-item'
										}>
										<Link
											to={`/${item.login}`}
											className={
												'modal-link text-dark text-decoration-none'
											}>
											{item.login}
										</Link>
									</li>
								);
							})}
					</ul>
				</form>
				<nav className='navbar navbar-expand-lg navbar-light bg-dark'>
					<div className='container-fluid'>
						<div
							className='collapse navbar-collapse'
							id='navbarText'>
							<ul className='navbar-nav me-auto mb-2 mb-lg-0 text-light'>
								<li className='nav-item'>
									<NavLink
										to={'/'}
										className={'item nav-link text-light'}
										aria-current='page'>
										Pull requests
									</NavLink>
								</li>
								<li className='nav-item'>
									<NavLink
										to={'/'}
										className='item nav-link text-light'>
										Issues
									</NavLink>
								</li>
								<li className='nav-item'>
									<NavLink
										to={'/'}
										className='item nav-link text-light'>
										Codespaces
									</NavLink>
								</li>
								<li className='nav-item'>
									<NavLink
										to={'/'}
										className='item nav-link text-light'>
										Marketplace
									</NavLink>
								</li>
								<li className='nav-item'>
									<NavLink
										to={'/'}
										className='item nav-link text-light'>
										Explore
									</NavLink>
								</li>
							</ul>
						</div>
					</div>
				</nav>
			</div>

			<div className='header__right d-flex align-items-center'>
				<NavLink to={'/'}>
					<img
						src={notification}
						alt='Notifications'
						width={16}
						height={16}
						className={'text-bg-white'}
					/>
				</NavLink>
				<Dropdown>
					<Dropdown.Toggle
						className={'text-white'}
						variant='none'
						id='dropdown-basic'>
						+
					</Dropdown.Toggle>

					<Dropdown.Menu className={'header-dropdown z-index-3'}>
						{list?.length > 0 &&
							list.map((item, index) => {
								return (
									<Dropdown.Item key={index}>
										{item}
									</Dropdown.Item>
								);
							})}
					</Dropdown.Menu>
				</Dropdown>

				<Dropdown>
					<Dropdown.Toggle
						className={'text-white'}
						variant='none'
						id='dropdown-basic'>
						<img
							src={
								'https://avatars.githubusercontent.com/u/89277113?v=4'
							}
							alt='Notifications'
							width={24}
							height={24}
							className={'text-bg-white rounded-circle'}
						/>
					</Dropdown.Toggle>

					<Dropdown.Menu className={'header-dropdown z-index-3'}>
						{profile?.length > 0 &&
							profile.map((item, index) => {
								return (
									<Dropdown.Item key={index}>
										<Link
											to={'/AkromOchilov'}
											className={
												'profile-link text-secondary text-decoration-none'
											}>
											{item}
										</Link>
									</Dropdown.Item>
								);
							})}
					</Dropdown.Menu>
				</Dropdown>
			</div>
		</header>
	);
};

export default Header;
