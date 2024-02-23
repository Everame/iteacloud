# Архитектура проекта

├── app/<br />
| # Слой композиции приложения<br />
| # Содержит только абстрактную логику инициализации и маршрутизации по приложению<br />
| ├──router/<br />
| | ├──Router<br />
| # Содержит в себе логику маршрутизации<br />
| ├──App<br />
| # Содержит в себе обёртку для маршрутизации по приложению<br />
|<br />
├── pages/<br />
| # Срезы, реализующие полные представления для этого приложения<br />
| ├── LandingPage<br />
| # Срез, содержащий в себе полное представление страницы для неавторизованных пользователей<br />
| ├── AuthPage<br />
| # Срез, содержащий в себе полное представление страницы для авторизации пользователя<br />
| ├── UserPage<br />
| # Срез, содержащий в себе полное представление страницы личного кабинета пользователя с функциями "Менджемента полей" и "Получения рекомендаций"<br />
|<br />
├── widgets/<br />
| # Срезы, реализующие различные комбинации абстрактных и/или бизнес-блоков с нижележащих слоёв,<br />
| # для предоставления изолированных атомарных фрагментов пользовательского интерфейса<br />
| ├── Login<br />
| ├── Registration<br />
| ├── Sidebar<br />
| ├── Header<br />
| ├── ActionField<br />
|<br />
├── features/<br />
| # Срезы, реализующие пользовательские сценарии; обычно здесь приходится оперировать бизнес-объектами<br />
| ├── CreateUser<br />
| ├── SignIn<br />
| ├── FieldExecutor<br />
| ├── GetRecomendation<br />
| ├── ToastExecutor<br />
| ├── FetchHttpClient<br />
|<br />
├── entities/<br />
| # Срезы, реализующие бизнес-блоки в терминах того, какая бизнес-логика приложения сработает<br />
| ├── FieldInfo/<br />
| | ├── ui/<br />
| | # Содержит в себе UI-компоненты, применяемые только для этого компонента<br />
| | ├── model/<br />
| | # Содержит в себе сущности логики компонента<br />
| | ├── api/<br />
| | # Содержит в себе методы для взаимодествия с API<br />
| | ├── index<br />
| | # Срез, всех абстрактных блоков, находящихся в слайсе<br />
| ├── Recomendation<br />
| | ├── ui/<br />
| | ├── model/<br />
| | ├── api/<br />
| | ├── index<br />
| ├── ToastWrapper<br />
| | ├── ui/<br />
| | ├── model/<br />
| | ├── api/<br />
| | ├── index<br />
|<br />
├── shared/<br />
| # Этот слой – набор абстрактных сегментов и общепереиспользуемых элементов<br />
| # Это означает, что на нём недопустимы какие-либо ui-элементы, кастомные библиотеки и любые блоки переиспользуемые по всему проекту<br />

## Правила нейминга в коде 



| CamelCase | PascalCase | KebabCase |
| :---: | :---: | :---: |                                      
| Переменные | Функциональные компоненты | Переменные конфигурационных файлов |                                      
| Методы | Классы |
| Функции |

*Хуки называть по правилам React;                            `

## Правила нейминга в файловой системе

| CamelCase | PascalCase |
| :---: | :---: |
| Слои | Функциональные компоненты |
| Слайсы | Классы |
| Сегменты |

*Хуки называть по правилам React;

## Шпаргалка по использованию FSD

![Модель использования FSD](image.png)

## Внешние зависимости

### Маршрутизация проекта
- React-router

### Стилизация проекта
- TailwindCSS

### Библиотеки для разработки собственной бибилиотеки UI-компонентов (Typescript)
- Material-UI
- Zod (Валидация форм)
- react-hook-form (Для обработки событий и взаимодействия с формами)

### Библиотеки для тестирования компонентов
- Storybook
- Jest

### Библиотеки для сборки проекта
- Vite

### CI/CD библиотеки
- nodemon
- Prettier
- Eslint

## Скрипты для запуска и тестирования
- npm run dev (запуск в режиме разработчика)
- npm run build (cборка приложения)
- npm run test (запуск jest-тестов)
