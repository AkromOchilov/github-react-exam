import React from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { Content } from './../index';

const Main = () => {
	let { username } = useParams();
	return <>{username ? <Outlet /> : <Content />}</>;
};

export default Main;
