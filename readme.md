[Источник]:(https://www.youtube.com/watch?v=RIo9WfOZMx4)
### MEAN -абревиатура, где каждая буква означает технологию используемую в стеке: ###
> - MongoDB
> - Express.js
> - Angular.js
> - Node.js

### Каждый компонент отвечает за определенную роль при построении веб-сайта: ###
> - MongoDB - отвечает за базы данных
> - Express.js - отвечает за маршрутизацию (отслеживание URL-адресов)
> - Angular.js - отвечает за внешний вид приложения
> - Node.js - отвечает за серверную часть разработки

Построение сайта в стеке MEAN происходит на языке JavaScript

В стеке MEAN каждая технология отвечает лишь за определенную часть работы с пользователем.
Такой подход позволяет быстро и эффективно манипулировать кодом, внедряя новые функции и расширяя его.

---
# Наглядная схема
  
     ######             ##########            #######           
   #        #   ==>   #            #   ==>  #         #  
   # client #         # Angular.js #        # Node.js #       
   #        #   <==   #            #   <==  #         #   
    .######             ##########            #######        
                  Графический интерфейс        |    ↑
============================================   |    |
                                               ↓    |
                          #######             ###########        
                        #         #   ==>   #             #
                        # MongoDB #         #  Express.js #
                        #         #   <==   #             # 
                          #######             ###########
---

# Стек MEAN кроссплатформенный
Для создания проекта необходимо установить *Node.js* и *MongoDB* 

---
# Создание проекта #

Вначале, необходимо создать файл *package.json*, в котором описывается проект, зависимости(библиотеки), 
без которых проект не будет работать. Делается это посредством команды 
_$ npm init_ 

---
После инициализации, необходимо открыть package.json в текстовом редакторе и добавить 
*{ dependecies }* - специальный объект, внутри которого прописываются все библиотеки, которые необходимы для 
корректной работы приложения: 

{ 
  ...,
    "dependencies": {
      ()
    },
  ...,  
}

После записи в "dependencies" всех библиотек, в терминале необходимо прописать 
_$ npm install_
и указанные в "dependencies" библиотеки будут установлены в проект

#  библиотеки #

{
  ...,
  "dependencies": {
    "express": "\*",      # * - означает, что необходимо установить последнюю версию, express - библиотека позволяет легко и быстро отследить Url адреса
    "mongoose": "\*",     # mongoose - библиотека для работы с MongoDB
    "bcryptjs": "\*",     # bcryptjs - библиотека для хеширования пароля
    "passport": "\*",     # passport - библиотека для работы с регистрацией, авторизацией пользователя
    "passport-jwt": "\*", # passport-jwt - 'стратегия' passport.js позволяющая авторизовать пользователя через JSON Web Token (личная авторизация внутри проекта)
    "body-parser": "\*",  # body-parser - позволяет спарсить Url запрос, который передается вместе с POST данными
    "cors": "\*",         # cors - библиотека для работы с url адресами
    "jsonwebtoken": "\*", # jsonwebtoken - библиотека для создания форм и создания безопасности для этих форм
  },
  ...
}

**{ Passport.js - это специальная библиотека, которая позволяет легко и удобно авторизовывать пользователя,
причем авторизация производится безопасно (не сможет взломать систему и авторизоваться в несуществующем профиле) 
[Источник]:(http://www.passportjs.org/) 
Есть возможность (стратегия) вставить авторизацию через сторонний сервис (Google, facebook и т.д.)}**

После того, как в "dependencies" были вписаны все необходимые библиотеки, в терминале ввести команду:
_$ sudo npm install _

После установки библиотек, необходимо создать основной файл **{ index.js }**

Для запуска работы стека MEAN, необходимо прописать команду:
_$ npm start_ 
Перед этим, необходимо в файле package.json в разделе **{ scripts }**
прописать дополнительную команду **{ start }**

{
  ...,
  "scripts": {
    ...,
    *{ "start": "node index", }*
},
  ...,
}

После запуска порта, возможно в браузере зайти по адресу
_( http://localhost:[port]/ )_ or _( 127.0.0.1:[port] )_

Для автоматического обновления сервера при изменениях, 
неоходимо установить:
_$ sudo npm install -g nodemon_

После установки, для запуска сервера необходимо прописать
_$ nodemon_
========================================================================
[Источник]:(https://www.youtube.com/watch?v=nE2lzCFIjX8) 
[Источник]:(https://www.youtube.com/watch?v=frA3uyxY7vo)
[Источник]:(https://www.youtube.com/watch?v=5R0Myhk97Kg&t=1s)

# Структура проекта MEAN #

progect 
   |-node_modules/_[{ библиотеки проекта }]_
   |-Public/_[{ Статическая папка }]_
   |-config/_[{ Файлы для настроек проекта}]_
   |    |-db.js _[{ Файл подключения к базе данных }]_
   |    |-passport.js _[{ авторизация пользователя (passport-jwt) }]_
   |
   |-{name_progect}/ _[{ Папка с файлами Angular CLI }]_
   |    |-src/ _[{ Source файлы frontend }]_
   |    |  |-app/ _[{ Компоненты }]_
   |    |  |  |-{ name_component }/ _{ Отдельные компоненты }_
   |    |  |  |-app.component.html _{ Главная страница сайта, куда вставляются компоненты блоков }_
   |    |  |  |-app.module.ts _{ Подключение различных модулей }_
   |    |  |
   |    |  |-index.html _[{ Основной файл HTML, куда встраиваются компоненты страниц }]_
   |    |
   |    |-angular.json _[{ Файл, конфигурации Angular CLI }]_
   |
   |-models/_[{ Модели [Описывает определенный объект](Получает данные от пользователя и помещает в базу данных MongoDB) }]_
   |    |-user.js _[{ Модель обработки прав пользователя(Возможность регистрации, авторизации, выход из учетной записи) }]_
   |
   |-routes/_[{Отслеживание URL-адресов}]_
   |    |-account.js _[{URL-адреса типа:([/account/reg],[/account/dashboard])}]_
   |
   |-index.js _[{Основной файл}]_
   |-package-lock.json _[{Более подробное описание библиотек}]_
   |-package.json _[{Описание проекта}]_

##### MongoDB - *{ Хранит все элементы в формате объектов }*

# Angular CLI
[Источник]:(https://www.youtube.com/watch?v=YYWcUm4uChk)
[Источник]:(https://cli.angular.io/)

## Установка Angular CLI:
_$ npm install -g @angular/cli_

## Создание Angular CLI приложение, внутри нашего приложения
_$ ng new {name_app}_

После установки Angular CLI необходимо зайти в файл: 
__{ /name_progect/angular.json }__
и в разделе *"outputPatch"*

{
  "projects":{
    "{_name_app_}": {
      "architect": {
        "build":{
          "options": {
            "outputPatch": "dist/{ _name_app_ }",
          }
        }
      }
    }
  }
}
вместо *{ "outputPatch" :"dist/{ name_app }", }*, прописать *{ "outputPatch" : "../public", }*
(Данная опция определяет место сохранения frontend файлов [index.html; main.css; index.js; ...])

Для запуска Angular CLI необходимо пройти в папку __[/progect/{ name_progect }/]__
и ввести команду:
_$ ng serve_
После запуска, стартовая страница доступна по адресу:
*{ http://localhost:4200/ }*

## Компоненты(component) Angular

Компонентами в Angular называют теги, в которые помещаются блоки кода, 
для более удобной поддержки проекта. 

*Повторяющиеся секции сайта лучше выносить в отдельные компоненты*

Компонент состоит из:
>{name_component}.component.css - *файл определяет стиль компонента*
>{name_component}.component.html - *файл определяет html-разметку документа*
>{name_component}.component.spec.ts - *настройки компонента*
>{name_component}.component.ts - *декораторы (прописываются доп.файлы, принадлежащие компоненту. Также указывается в какой HTML-тег втраивается компонент)*

Для каждой отдельной страницы (Регистрация, Авторизация, Главная и т.д.)
создается отдельный компонент. Также компоненты создаются для каждого определенного блока на сайте.
К примеру, на странице сайта создаются блоки:
=============================================================================
header: [                           || nav: [                               ||
*/ Входящие файлы в компонент /*    ||   */ Входящие файлы в компонент /*   ||
  header.component.css              ||   nav.component.css                  ||
  header.component.html             ||   nav.component.html                 ||
  header.component.spec.ts          ||   nav.component.spec.ts              ||
  header.component.ts               ||   nav.component.ts                   ||
];                                  || ];                                   ||
=============================================================================
section: [                          || aside: [                             ||
  */ Входящие файлы в компонент /*  ||   */ Входящие файлы в компонент /*   ||
  section.component.css             ||   aside.component.css                ||
  section.component.html            ||   aside.component.html               ||
  section.component.spec.ts         ||   aside.component.spec.ts            ||
  section.component.ts              ||   aside.component.ts                 ||
];                                  || ];                                   ||
=============================================================================
footer: [                           ||                                      ||
  */ Входящие файлы в компонент /*  ||                                      ||
  footer.component.css              ||                                      ||
  footer.component.html             ||                                      ||
  footer.component.spec.ts          ||                                      ||
  footer.component.ts               ||                                      ||
];                                  ||                                      ||
=============================================================================

## Для создания компонента, необходимо находится в директории:
__[ /progect/{name_progect}/ ]__
и ввести команду:
_$ ng g component { name_component }_ Например _*[ $ ng g component header ]*_
Произойдет создание компонента в директории: 
**[ /progect/{name_progect}/src/app/{name_component}/[ {name_component}.component.css
                                                      {name_component}.component.html
                                                      {name_component}.component.spec.ts
                                                      {name_component}.component.ts ] ]**

## Создание отдельных компонентов (страниц)
_$ ng g component registration (страница регистрации)
_$ ng g component authorization (страница авторизации)
_$ ng g component dashbord (страница пользователя)
_$ ng g component home (главная страница)

**{ Важно: На данном этапе, приложение не объединено с серверной частью (nodejs) }**

## Настройка отслеживание URl адресов (Переход по страницам)

Необходимо зайти в app.module.ts
**[ /progect/{name_progect}/src/app/app.module.ts ]**

и вписать:
*{ import { RouterModule, Routes } from '@angular/router'; }*
RouterModule - специальный модуль, который служит для отслеживания URL адресов
    >const {name_const}: Routes = [
      {path: '', component:{name_component}},
    ];

Пример:
  >const appRoute: Routes = [
    {path: '', component:HomeComponent}, **{ path: '', - Url - главная страница; component: HomeComponent - Какой компонент выводится при переходе по URL }**
    {path: 'reg', component:RegComponent},
    {path: 'auth', component:AuthComponent},
    {path: 'dashboard', component:DashbordComponent},
  ];

После добавления модулей, необходимо дополнительно импортировать
отслеживаемые URL-адреса через списки:

  @NgModule({
    declarations:[
      AppComponent,
      HeaderComponent,
      FooterComponent,
      RegComponent,
      AuthComponent,
      DashboardComponent,
      HomeComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    _{ RouterModule.forRoot(appRoute) }_ *{ appRoute - список URL-адресов }*
  ],
})

После внесения дополнений, чтобы выводить различные компоненты, в зависимости от того,
на каком URL-адресе вы находитесь, необходимо добавить в файл:
**[ /progect/{name_progect}/src/app/app.component.html ]**

_{ <router-outlet></router-outlet> }_
данный тег позволяет, в зависимости от того, где находится пользователь, вызывает 
определенный компонент, который встраивается в <router-outlet>

**{ Важно: вместе с AngularCLI предоставляются специальные ссылки в теге <a> 
вместо <href> - [routerLink]="['/']" }**

[routerLink]="['/']" - Данный метод указания ссылок позволяет избежать проблем,
при переносе сайта на удаленный сервер. Позволяет избежать переписывания URL-адресов
(c http://localhost:4200/ на ссылки удаленного сервера). Данный вид записи делает ссылки
относительно домена.

# Реализация главной страницы и форма регистрации:
[источник]:(https://www.youtube.com/watch?v=HTsYV5HH3OI)

Создание функции (код JS) прописывается в файлах <name_component>.component.ts

*[ /progect/{name progect}/src/app/{name component}/<name_component>.component.ts ]*

Функции прописываются в экспортируемом классе <name_component>Component

  >export class <name_component>Component implements OnInit {
    /*<прописываются переменные>*/
    {name: String;}
    {login: String;}
    {email: String;}
    {password: String;}

  >  constructor() {   }
     ngOnInit(): void {  }
    *<Your function>*
  >}

*Атрибут name в HTML формах не считывается в AngularJS, поэтому для получения значении полей ввода
(Логин, пароль и тд.) необходимо прописать название полей в HTML form в формате AngularJS:
 [(ngModel)]="<name>"
причем, в поле input (в html документе) также необходимо указать name:
<input type="password" [(ngModel)]="password" name="password" placeholder="password" class="password"/>*

Для того, чтобы AngularJS распознал [(ngModel)]="<name>" необходимо подключить модуль **FormsModule** к программе.
Подключение осуществляется в основном файле компонентов:
  **[ /progect/{name progect}/src/app/app.module.ts ]**
(Подключенные в этом файле модули, подключаются ко всем остальным автоматически)
  __import { FormsModule } from '@angular/forms';__
(Не забудьте прописать в imports)

Для получения данных поля, необходимо ввести: *this.<name>* 
к примеру: this.login

Пример поля регистрации: *[<name_progect>/src/app/reg/reg.component.ts]*

  >export class <name_component>Component implements OnInit {
    email: String;
    password: String;
    passwordRepeat: String;
    login: String;

  >  constructor() {  }
    ngOnInit(): void {  }

  >  userRegisterClick() {
      const user = {
        email: this.email,
        login: this.login,
        password: this.password,
        passwordRepeat: this.passwordRepeat,
      }
      //alert(this.password);
      //return false; //Для предотваращения перезагрузки страницы после нажатия кнопки
    }
  }

После получения данных из форм, необходимо создать *service* для проверки корректности введенных данных.
В созданном *service* прописыватся функции, которые возвращают true, если данные корректны, либо false,
если это не так.

Сервис создается по адресу: *[ /progect/{name progect}/src/app ]*
  _sudo ng g service <name_service>_
После создания сервиса, необходимо зайти в *[ /progect/{name progect}/src/app/app.module.ts ]* 
и зарегистрировать сервис:
  __import { <name_service>Service } from './<name_service.service>'__
(Не забудьте зарегистрировать сервис в providers:[])

После регистрации, переходим в *[ /progect/{name progect}/src/app/<name_servicce>.service.ts ]*
и прописываем функции, проверяющие данные поступающие от пользователя:

  >export class <name_service>Service {
    constructor() {  }

  >  checkLogin(login) {
      if(login == undefined)
        return false;
      else
        return true;
    }
  }

Прописывается функция для каждого поля своя.

После возвращаемся в *[ /progect/{name progect}/src/app/reg/reg.component.ts ]*
импортируем сервис:
  __import { <name_service>Service } from '../<name_service>.service'__ 
После импорта, подключенный сервис необходимо объявить в конструкторе класса:

>export class RegComponent implements OnInit {
  
>  /* Данные, получаемые из форм */
  //name: String;
  login: String;
  email: String;
  password: String;
  passwordRepeat: String;

  constructor(private <variable_name>: <name_service>Service) { }

>  ngOnInit(): void {
  }
  /* Функция, срабатывающая при нажатии на кнопку регистрации*/
  userRegisterClick() {
    /* Данные пользователя */
    const user = {
      email: this.email,
      login: this.login,
      password: this.password,
      passwordRepeat: this.passwordRepeat,
    };

     /* Проверки */
    if(!this.checkForm.checkLogin(user.login)) {
      console.log("Логин введен не был");
      return false;
    } else if(!this.checkForm.checkEmail(user.email)) {
        console.log("Email введен не был");
        return false;
    } else if(!this.checkForm.checkPassword(user.password)) {
        console.log("Password введен не был");
        return false;
    } else if(!this.checkForm.checkPasswordRepeat(user.passwordRepeat)) {
        console.log("Repeat Password не соответсвует введенному паролю");
        return false;
    }
  }
}

#===================================================================
Библиотека для содания всплывающих окон
[источник]:(https://www.youtube.com/watch?v=HTsYV5HH3OI)[24:38]
[источник]:(https://www.npmjs.com/package/angular2-flash-messages)
Установка производится по адресу:*[ /progect/{name progect} ]*

_npm install angular2-flash-messages --save_

после установки пакета, переходим в *[ /progect/{name progect}/src/app/app.module.ts ]*
и импортировать модуль: 
__import { FlashMessagesModule } from 'angular2-flash-messages';__
(Не забудьте прописать в *imports [FlashMessagesModule.forRoot(),]*)

После проходим в файл *[ /progect/{name progect}/src/app/app.component.html ]*
и вставляем тег <flash-messages></flash-messages> (Место отображение сообщений)

Переходим в *[ /progect/{name progect}/src/app/reg/reg.component.ts ]*,
импортируем <flash-messages>:
  __import { FlashMessagesService } from 'angular2-flash-messages';__;
Регистрируем в конструкторе:
  >export class RegComponent implements OnInit {
  constructor(
    private <variable_name>: CheckFormService,
    private <variable_name>: FlashMessagesService,
    ) { }
  }

И вставляем в проверки:
>  if(!this.checkForm.checkEmail(user.email)) {
  /* Cообщения об ошибке. Пакет angular2-flash-messages */
            this.flashMessages.show("Email не введен", {
            cssClass: 'alert-danger',
            timeout: 4000
          });*
          return false;
      } else if(!this.checkForm.checkLogin(user.login)) {
 /* Cообщения об ошибке. Пакет angular2-flash-messages */
          this.flashMessages.show("Логин введен не был", {
            cssClass: 'alert-danger',
            timeout: 4000
          });*
          return false;
      } else if(!this.checkForm.checkPassword(user.password)) {
  /* Cообщения об ошибке. Пакет angular2-flash-messages */
          this.flashMessages.show("Password введен не был", {
            cssClass: 'alert-danger',
            timeout: 4000
          });*
          return false;
      } else if(!this.checkForm.checkPasswordRepeat(user.passwordRepeat, user.password)) {
 /* Cообщения об ошибке. Пакет angular2-flash-messages */
          this.flashMessages.show("Repeat Password не соответсвует введенному паролю", {
            cssClass: 'alert-danger',
            timeout: 4000
          });*
          return false;
      }