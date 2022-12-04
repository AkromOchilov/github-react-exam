export let getData = async (username = 'AkromOchilov') => {
	try {
		let rawData = await fetch(`https://api.github.com/users/${username}`);
		let data = await rawData.json();
		return data;
	} catch (error) {
		console.log(error);
	}
};

export let getRepos = async (username = 'AkromOchilov') => {
	try {
		let rawData = await fetch(
			`https://api.github.com/users/${username}/repos`,
		);
		let data = await rawData.json();
		return data;
	} catch (error) {
		console.log(error);
	}
};

export let getFollowers = async (username = 'AkromOchilov') => {
	try {
		let rawData = await fetch(
			`https://api.github.com/users/${username}/followers`,
		);
		let data = await rawData.json();
		return data;
	} catch (error) {
		console.log(error);
	}
};

export let getSearch = async (username = 'AkromOchilov') => {
	try {
		let rawData = await fetch(
			`https://api.github.com/search/users?q=${username}`,
		);
		let data = await rawData.json();
		return data;
	} catch (error) {
		console.log(error);
	}
};
