# Mesto
Cards library

## Функционал
Размещает карточки с изображениями, удаляет ранее размещенные карточки, ставит/убирает лайки с карточек.
Попап "Редактировать профиль". Позволяет редактировать поля "Имя" и "О себе".
Открытие попапа с картинкой. При клике на картинку карточки она открывается в попапе, закрывается по клику на крестик.
Форма добавления новой карточки. ПОзволяет добавить карточку (не навсегда).
Валидация форм. Кнопки сохранения изменений данных должны быть неактивными, если хотя бы одно из полей формы невалидно. Если поле формы не прошло валидацию, под ним должен появляться красный текст ошибки.
Работа с API. Получение галереи карточек с сервера, получение и редактирование информации по профилю юзера через сервер.

## Технологии:
JS (ES5 / ES6); ООП; GIT; Webpack; API; HTML; CSS (flex, grid); BEM; 

## Развертывание:
1. Клонировать репозиторий командой git clone
2. Установить пакеты npm i
3. Запустить необходимую сборку:
- npm run build - создает сборку Production
- npm run dev - создает сборку Development, запускает сервер, и открывает проект в браузере с hot обновлением

### Link https://pavelsolodkin.github.io/Mesto/

### Дальнейшие улучшения:
Смена аватарки.
Реализация количества лайков, добавления и удаления карточек по клику на соответствующие иконки карточки (навсегда).

