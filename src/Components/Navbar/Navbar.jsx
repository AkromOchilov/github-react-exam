import React from 'react';
import { NavLink, useParams } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => {
	let { username } = useParams();
	username = username ? username : 'AkromOchilov';
	return (
		<nav className='navbar navbar-expand-lg navbar-light bg-light py-2 z-index-2 sticky-top border-bottom'>
			<div className='container-fluid'>
				<div className='collapse navbar-collapse' id='navbarText'>
					<ul className='navbar-nav m-auto mb-2 mb-lg-0'>
						<li className='nav-item ms-3 d-flex align-items-center'>
							<NavLink
								to={`${username}/overview`}
								className={({ isActive }) =>
									isActive
										? 'navbar-link navbar-link-1 fw-bold text-decoration-underline nav-link text-dark'
										: 'navbar-link navbar-link-1 nav-link text-dark'
								}
								aria-current='page'>
								Overview
							</NavLink>
						</li>
						<li className='nav-item ms-3 d-flex align-items-center'>
							<NavLink
								to={`${username}/repos`}
								className={({ isActive }) =>
									isActive
										? 'navbar-link navbar-link-2 nav-link text-dark fw-bold text-decoration-underline'
										: 'navbar-link navbar-link-2 nav-link text-dark'
								}>
								Repositories
							</NavLink>
						</li>
						<li className='nav-item ms-3 d-flex align-items-center'>
							<NavLink
								to={`${username}/projects`}
								className={({ isActive }) =>
									isActive
										? 'navbar-link navbar-link-3 nav-link text-dark fw-bold text-decoration-underline'
										: 'navbar-link navbar-link-3 nav-link text-dark'
								}>
								Projects
							</NavLink>
						</li>
						<li className='nav-item ms-3 d-flex align-items-center'>
							<NavLink
								to={`${username}/packages`}
								className={({ isActive }) =>
									isActive
										? 'navbar-link navbar-link-4 nav-link text-dark fw-bold text-decoration-underline'
										: 'navbar-link navbar-link-4 nav-link text-dark'
								}>
								Packages
							</NavLink>
						</li>
						<li className='nav-item ms-3 d-flex align-items-center'>
							<NavLink
								to={`${username}/stars`}
								className={({ isActive }) =>
									isActive
										? 'navbar-link navbar-link-5 nav-link text-dark fw-bold text-decoration-underline'
										: 'navbar-link navbar-link-5 nav-link text-dark'
								}>
								Stars
							</NavLink>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
