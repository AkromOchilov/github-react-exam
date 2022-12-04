import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getFollowers } from './../../api/api';
import './Followers.scss';

const Followers = () => {
	let { username } = useParams();
	username = username ? username : 'AkromOchilov';
	let [followers, setFollowers] = useState([]);

	let handleFollowers = async (username) => {
		let data = await getFollowers(username);
		setFollowers(data);
	};

	useEffect(() => {
		handleFollowers(username);
	}, [username]);

	return (
		<section className={'d-flex flex-column py-2 w-100'}>
			{followers?.length > 0 &&
				followers.map((follower) => {
					return (
						<div
							key={follower.id}
							className='follower d-flex align-items-center border-bottom py-4'>
							<Link
								to={'/'}
								className={'text-decoration-none me-3'}>
								<img
									src={follower.avatar_url}
									alt='Follower'
									className={'d-flex rounded-circle'}
									width={50}
									height={50}
								/>
							</Link>
							<div className='follower__infos d-flex flex-column'>
								<div className='follower__usernames d-flex align-items-center fs-6 mb-1'>
									<Link
										to={'/'}
										className={
											'follower__username d-flex text-decoration-none text-secondary me-3'
										}>
										{follower.login}
									</Link>
								</div>
							</div>
							<button className='follower__btn btn btn-light ms-auto border p-0 py-1 px-3'>
								Follow
							</button>
						</div>
					);
				})}
		</section>
	);
};

export default Followers;
