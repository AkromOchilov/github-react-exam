import React from 'react';
import './App.scss';

import { Layout, Content, Followers, Main, Error } from './../index';
import { Routes, Route } from 'react-router-dom';
const LazyRepos = React.lazy(() => import('./../Repos/Repos'));

function App() {
	return (
		<>
			<Routes>
				<Route path={'/'} element={<Layout />}>
					<Route path={':username'} element={<Main />}>
						<Route index element={<Content />} />
						<Route path={'overview'} element={<Content />} />
						<Route
							path={'repos'}
							element={
								<React.Suspense fallback={'Loading...'}>
									<LazyRepos />
								</React.Suspense>
							}
						/>
						<Route path={'followers'} element={<Followers />} />
					</Route>
				</Route>
				<Route path={'*'} element={<Error />} />
			</Routes>
		</>
	);
}

export default App;
