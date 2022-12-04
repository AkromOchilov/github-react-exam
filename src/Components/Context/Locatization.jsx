import React, { useState } from 'react';

const Context = React.createContext(null);

const Provider = ({ children }) => {
	let [id, setId] = useState(1);
	return (
		<Context.Provider value={{ id, setId }}>{children}</Context.Provider>
	);
};

export { Context, Provider };
