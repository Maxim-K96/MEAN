const 
		express 	= require('express'),
 		router  	= express.Router(),
 		User 			= require('../models/user'),
 		passport 	= require('passport'),
 		jwt 			= require('jsonwebtoken'),
 		config 		= require('../config/db');

//router.get('/reg', (req, res) => {  // отслеживание страницы регистрации; req -запрос; res - ответ сервера
//	res.send('Регистрация');
//});

router.post('/reg', (req, res) => {  // Получение данных от пользователя (Находятся в req)
	let newUser = new User({ 						// Локальный объект
		email: req.body.email,						// Полученные данные из формы 
		login: req.body.login,						//	заносятся в локальный объект
		password: req.body.password,			//
		passwordRepeat: req.body.passwordRepeat,
	});

	User.addUser(newUser, (err, user) => {
		if(err)
			res.json({success: false, msg: "Пользователь не был добавлен"});
		else
			res.json({success: true, msg: "Пользователь был добавлен!!!"}); 
	});
});

//router.get('/auth', (req, res) => {  
//	res.send('Авторизация');
//});

// [Источник]:(https://www.youtube.com/watch?v=5R0Myhk97Kg&t=1s) {17:53}
router.post('/auth', (req, res) => {  
	const login = req.body.login;
	const password = req.body.password;

	User.getUserByLogin(login, (err, user) => { 										// Сравнение логина введенного и хранящегося в БД
		if(err) throw err;
		if(!user)
			return res.json({success: false, msg: "Такой пользователь найден не был"});

		User.comparePass(password, user.password, (err, isMatch) => { // В случае, если логин был обнаружен, сравнение паролей
			if(err) throw err;
			if(isMatch) { 																							// Авторизация пользователя
				const token = jwt.sign(user.toJSON(), config.secret, {
					expiresIn: 3600 * 24 																		// Время сессии (3600 = 1 час) {Авторизация на сутки}
				});

				res.json({  																							// Вывод информации о пользователе
					success: true,
					token: 'JWT ' + token,
					user: {
						id: user._id,
						name: user.name,
						login: user.login,
						email: user.email
					}
				})
			} else
				return res.json({success: false, msg: "Пароли не совпадают"});
		});
	});
});

router.get('/dashboard', passport.authenticate('jwt', {session: false}), (req, res) => {  // passport.authenticate('jwt', {session: false}) - Запрет заходить в кабинет пользователя, если он не зарегистрирован (авторизован) 
	res.send('Кабинет пользователя');
});

module.exports = router;																																	// Экспорт 

/*
Token - Уникальный индентификатор, который сложно подделать другим пользователям,
установит время сессии, а также записана доп. хешированная информация, зашищающая от 
взлома
 */
