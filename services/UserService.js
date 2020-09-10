class UserService {
	//En el futuro será remplazado por una API o un fetch a una DB.
	getUser = () => {
		return {
			name: 'Juan',
			age: 33,
		};
	};
}

module.exports = UserService;
