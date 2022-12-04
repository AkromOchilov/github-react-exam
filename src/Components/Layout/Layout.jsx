import React from 'react';
import { Header, Navbar, Main, Footer, Sidebar } from './../index';

const Layout = () => {
	return (
		<>
			<Header />
			<Navbar />
			<div className='container d-flex px-5'>
				<Sidebar />
				<Main />
			</div>
			<Footer />
		</>
	);
};

export default Layout;
