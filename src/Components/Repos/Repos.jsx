import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import SplitButton from 'react-bootstrap/SplitButton';
import { getRepos } from './../../api/api';
import { categories, langs, sort } from './list.js';
import dayjs from 'dayjs';
import './Repos.scss';

const Repos = () => {
	let { username } = useParams();
	username = username ? username : 'AkromOchilov';
	let [repos, setRepos] = useState([]);
	let [search, setSearch] = useState('');

	let handleRepos = async (username) => {
		let data = await getRepos(username);
		setRepos(data);
	};

	useEffect(() => {
		handleRepos(username);
	}, [username]);

	return (
		<section className={'d-flex flex-column py-3 w-100'}>
			<form
				className='form d-flex align-items-center mb-4'
				onSubmit={(e) => e.preventDefault()}>
				<input
					type='text'
					className='form-control w-100 p-0 py-1 px-2'
					placeholder={'Find a repository...'}
					onChange={(e) => setSearch(e.target.value)}
					value={search}
				/>

				<DropdownButton
					id='dropdown-basic-button'
					variant={'light'}
					title='Type'
					className={'d-flex mx-1 ms-3'}>
					{categories?.length > 0 &&
						categories.map((item, index) => {
							return (
								<Dropdown.Item key={index}>
									{item}
								</Dropdown.Item>
							);
						})}
				</DropdownButton>
				<DropdownButton
					id='dropdown-basic-button'
					variant={'light'}
					title='Language'
					className={'d-flex mx-1'}>
					{langs?.length > 0 &&
						langs.map((lang, index) => {
							return (
								<Dropdown.Item key={index}>
									{lang}
								</Dropdown.Item>
							);
						})}
				</DropdownButton>
				<DropdownButton
					id='dropdown-basic-button'
					variant={'light'}
					title='Sort'
					className={'d-flex mx-1 me-3'}>
					{sort?.length > 0 &&
						sort.map((sort, index) => {
							return (
								<Dropdown.Item key={index}>
									{sort}
								</Dropdown.Item>
							);
						})}
				</DropdownButton>

				<button className={'new btn btn-success'}>New</button>
			</form>

			<div className='repos d-flex flex-column  row'>
				{repos?.length > 0 &&
					repos
						.filter((item) => {
							return search.toLowerCase() === ''
								? item
								: item.name.toLowerCase().includes(search);
						})
						.map((repo) => {
							return (
								<div
									key={repo.id}
									className='col py-4 border-top border-bottom d-flex align-items-center justify-content-between'>
									<div className='d-flex flex-column mb-2'>
										<div className='repos__titles d-flex align-items-center mb-2'>
											<Link
												to={'/overview'}
												className='repos__title fs-4 m-0 me-3 text-primary text-decoration-none'>
												{repo.name}
											</Link>
											<p
												className={
													'repos__btn rounded-pill m-0'
												}>
												{repo.visibility}
											</p>
										</div>
										<div className='repos__stats d-flex align-items-center'>
											<div
												className={
													repo.language === 'CSS'
														? 'content__lang purple me-3'
														: repo.language ===
														  'SCSS'
														? 'content__lang pink me-3'
														: repo.language ===
														  'JavaScript'
														? 'content__lang yellow me-3'
														: 'content__lang orange me-3'
												}>
												{repo.language}
											</div>
											<span className={'repos__update'}>
												Updated on{' '}
												{dayjs(repo.updated_at).format(
													'MMM D',
												)}
											</span>
										</div>
									</div>

									<div className='repos__status'>
										<SplitButton
											id={`dropdown-split-variants-light`}
											variant={'light'}
											title='Stars'
											className={
												'repos__stars d-flex align-items-center'
											}>
											<Dropdown.Item eventKey='1'>
												Action
											</Dropdown.Item>
										</SplitButton>
									</div>
								</div>
							);
						})}
			</div>
		</section>
	);
};

export default Repos;
