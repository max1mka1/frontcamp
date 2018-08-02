# Задание
Нужно написать js-скрипт, который получит с адреса https://frontend.camp.dev.unit6.ru/get-slides json с содержимым баннеров.

Пример данных:

```json
[
    {
        "title": "В августе скидка 50% на доставку документов",
        "text": "Весь месяц экспресс-доставка документов вдвое дешевле",
        "image": "../images/slide-1.png",
        "active": true,
        "order": 10,
        "start": 1531471919,
        "end": 1557737519,
    },
    ...
]
```
Поулченные данные нужно отфильтровать по полям `active`(только true), `startDate`(не позже сегодняшней даты) и `endDate`(не раньше сегодняшней даты), и отсортировать по полю `order` по возрастанию.

Далее, нужно реализовать блок переключающихся баннеров, используя верстку, содержащуюся в index.html и данные, полученные с сервера.
Эффект, с которым баннеры будут сменять друг друга - на усмотрение разработчика.

Помимо этого, верстка баннера содержит как минимум 2 ошибки, желательно их найти и исправить.

Разрешено использовать любые фреймворки и библиотеки для решения задачи.

Выполненное задание нужно упаковать в архив, и отправить на  **v@unit6.ru**
