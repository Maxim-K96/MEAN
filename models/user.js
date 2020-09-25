/* Модель пользователя */

const 
		mongoose = require('mongoose'), // База данных
		bcrypt = require('bcryptjs'),  // Хэширование пароля
		config = require('../config/db')

// Схема. Описывает какие поля ожидаются от пользователя
// Эта схема будет каждый раз добавлятся в базу данных
// Схема - объект (В виду того, что в MongoDB помещаются объекты, создается схема(объект))

const UserScheme = mongoose.Schema({
	name: {
		type: String
	},
	email: {
		type: String,   // Тип вводимых данных
		required: true  //Обязательно для ввода
	},
	login: {
		type: String,   // Тип вводимых данных
		required: true  //Обязательно для ввода
	},
	password: {
		type: String,   // Тип вводимых данных
		required: true  //Обязательно для ввода
	},
});

// Объект для экспорта
const User = module.exports = mongoose.model('User', UserScheme);

// Функции для работы с пользователем (Добавление пользователя в БД,
// Получить пользователя из БД)

// Функция поиска в БД по логину
module.exports.getUserByLogin = function(login, callback) {
	const query = {login: login}; // Принимает из поля логин, введенный логин
	User.findOne(query, callback); // Метод поиска
};

// Поиск пользователя по его ID
module.exports.getUserByLogin = function(id, callback) {
	User.findById(id, callback); // Метод поиска
};

// Сравнение введенного пароля и хранящегося в БД
// [Источник]:(https://www.youtube.com/watch?v=5R0Myhk97Kg&t=1s) {29:53}
module.exports.comparePass = function(passFromUser, userDBPass,callback) {
	bcrypt.compare(passFromUser, userDBPass, (err, isMatch) => {
		if(err) throw err;
		callback(null, isMatch);
	});
};

// Функция добавления пользователя в БД
module.exports.addUser = function(newUser, callback) {  	// newUser - объект, состоящий из данных, введенным пользователем в форму
	bcrypt.genSalt(10, (err, salt) => {  										// Хеширование пароля [10 - длина хеша]
		bcrypt.hash(newUser.password, salt, (err, hash) => { 	// Получения введенного пароля пользователем и его хеширование
			if(err) throw err;  																// В случае ошибки, ошибка выводится в консоль
			newUser.password = hash; 														// Замена введенного пароля хешем
			newUser.save(callback); 														// Сохранение пользователя в БД
		});
	});
};