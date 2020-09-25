// ============================== main ===================================
// Подключение библиотек
const 
		express 		= require('express'),
		cors 				= require('cors'),
		bodyParser  = require('body-parser'),
		mongoose 		= require('mongoose'),
		passport    = require('passport'),
		path				= require('path'),
		config			= require('./config/db'),
		account  		= require('./routes/account');

const app = express(); 									// создание приложения

const port = 3013;		 									// указание порта

// ================== Внешний вид ==========================
 

// =========================================================
app.use(passport.initialize()); 				// Инициализация библиотеки
app.use(passport.session());    				// Создание сессий
require('./config/passport')(passport); // Экспорт функции авторизации и передача session

// Создание статической папки; {path.join(__dirname, 'public') - Указание полного пути до папки}
app.use(express.static(path.join(__dirname, 'public'))); 

//----------------------------------- База данных ------------------------
// Локальная база данных (Подключение)
mongoose.connect(config.db, { useNewUrlParser:true, useUnifiedTopology: true });

//(Обработчики)
mongoose.connection.on('connected', () => {
	console.log('Успех');
});

mongoose.connection.on('error', (err) => {
	console.log('Не удалось подключится к БД: ' + err);
});
//---------------------------------------------------------------------------

// cors - технология позволяющая внедрять API службы. Дает возможность спокойно взаимодействовать с др. веб сайтами по API-соединению
app.use(cors());

// body-parser - обрабатывает различные формы
app.use(bodyParser.json());

//================================================================================
// Отслеживание URL адресов
app.get('/', (req, res) => {  // отслеживание главной страницы; req -запрос; res - ответ сервера
	res.send('Главная страница');
});

app.use('/account', account);

// Отслеживание локального сервера
app.listen(port, () => {
	console.log("Сервер запущен по порту: " + port);
});