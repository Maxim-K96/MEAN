// [источник]:(http://www.passportjs.org/packages/passport-jwt/)
// [Источник]:(https://www.youtube.com/watch?v=5R0Myhk97Kg&t=1s)

const 
		config = require('./db.js'),
		User 	 = require('../models/user.js');


module.exports = function(passport) {
	let JwtStrategy = require('passport-jwt').Strategy,
    	ExtractJwt = require('passport-jwt').ExtractJwt;
	let opts = {} 																									// Создание пустого объекта (будет содержать опции авторизации)
	opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken(); // Тип авторизации
	opts.secretOrKey = config.secret; 															// Секретный ключ (из файла ./db.js)
	//opts.issuer = 'accounts.examplesoft.com'; 										//
	//opts.audience = 'yoursite.net';																// Указывает используемый веб-сервер
	passport.use(new JwtStrategy(opts, function(jwt_payload, done) { // Указывается используемая стратегия (jwt_payload - объект {Пользователь}, который пытается авторизоваться на сайте), (done - вызывается после того, как функция полностью отработает)
	    User.findOne({id: jwt_payload.sub}, function(err, user) { 	 // Обращение к базе данных User и находит один элемент, у которого id будет совпадать с пользователем, пытающимся авторизоваться
	        if (err) {
	            return done(err, false); 														 // В случае ошибки
	        }
	        if (user) {
	            return done(null, user); 														 // В случае, если объект найден
	        } else {
	            return done(null, false); 													 // Если не был найден
	            // or you could create a new account
	        }
	    });
	}));
}

/*
При попытке авторизоваться, данные пользователя записываются в объект jwt_payload,
При передачи объекта функции User.findOne (Поиска совпадения в базе данных) вместо искомого ключа (id)
присваивается имя { sub } (Отсюда сравнение [User.findOne({id: jwt_payload.sub})])
 */

