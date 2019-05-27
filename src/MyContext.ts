import React from "react";

// this is the equivalent to the createStore method of Redux
// https://redux.js.org/api/createstore

interface User {
	firstName: string;
	lastName: string;
	email: string;
}

enum UI_THEME {
	LIGHT,
	DARK
}

enum LANGUAGE {
	FRENCH,
	ENGLISH,
	SPANISH
}

interface ApplicationContext {
	user: User;
	theme: UI_THEME,
	language: LANGUAGE

}

const MyContext = React.createContext<ApplicationContext>({
	user : {
		email : "test@gmail.com",
		firstName : "john",
		lastName : "doe"
	},
	language : LANGUAGE.ENGLISH,
	theme : UI_THEME.DARK
});

export default MyContext;