import React from 'react';
import { NavLink } from 'react-router-dom';
import github from './../../Assets/Images/github.svg';
import './Footer.scss';

const Footer = () => {
	return (
		<footer
			className={
				'd-flex align-items-center bg-white py-4 container border-top'
			}>
			<NavLink to={'/'} className={'d-flex me-2'}>
				<img
					src={github}
					alt='Github logo'
					width={24}
					height={24}
					className={'d-flex'}
				/>
			</NavLink>
			<span className={'footer__span fs-6 me-4'}>
				&#169; 2022 GitHub, Inc.
			</span>
			<nav className='footer__nav navbar navbar-expand-lg navbar-primary'>
				<div className='container-fluid'>
					<nav className='collapse navbar-collapse' id='navbarText'>
						<ul className='navbar-nav'>
							<li className='footer__item nav-item ms-4'>
								<NavLink
									to={'/'}
									className='footer__link nav-link'>
									Terms
								</NavLink>
							</li>
							<li className='footer__item nav-item ms-4'>
								<NavLink
									to={'/'}
									className='footer__link nav-link'>
									Privacy
								</NavLink>
							</li>
							<li className='footer__item nav-item ms-4'>
								<NavLink
									to={'/'}
									className='footer__link nav-link'>
									Security
								</NavLink>
							</li>
							<li className='footer__item nav-item ms-4'>
								<NavLink
									to={'/'}
									className='footer__link nav-link'>
									Status
								</NavLink>
							</li>
							<li className='footer__item nav-item ms-4'>
								<NavLink
									to={'/'}
									className='footer__link nav-link'>
									Docs
								</NavLink>
							</li>
							<li className='footer__item nav-item ms-4'>
								<NavLink
									to={'/'}
									className='footer__link nav-link'>
									Contact GitHub
								</NavLink>
							</li>
							<li className='footer__item nav-item ms-4'>
								<NavLink
									to={'/'}
									className='footer__link nav-link'>
									Pricing
								</NavLink>
							</li>
							<li className='footer__item nav-item ms-4'>
								<NavLink
									to={'/'}
									className='footer__link nav-link'>
									API
								</NavLink>
							</li>
							<li className='footer__item nav-item ms-4'>
								<NavLink
									to={'/'}
									className='footer__link nav-link'>
									Training
								</NavLink>
							</li>
							<li className='footer__item nav-item ms-4'>
								<NavLink
									to={'/'}
									className='footer__link nav-link'>
									Blog
								</NavLink>
							</li>
							<li className='footer__item nav-item ms-4'>
								<NavLink
									to={'/'}
									className='footer__link nav-link'>
									About
								</NavLink>
							</li>
						</ul>
					</nav>
				</div>
			</nav>
		</footer>
	);
};

export default Footer;
