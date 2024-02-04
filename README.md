# credit-calculator

1 ДЛЯ ПОЧАТКУ РОБОТИ ПЕРЕЙДІТЬ ЗА ПОСИЛАННЯМ

##

https://yuriykrasnobokiy.github.io/credit-calculator/

##

АБО

##

1 ДЛЯ ПОЧАТКУ РОБОТИ СКЛОНУЙТЕ РЕПОЗИТОРІЙ СОБІ НА МАШИНУ

##

2 ВІДКРИЙТЕ ФАЙЛ index.html

## Завдання 1 (Кредитний калькулятор):

Створити HTML-сторінку, що містить кредитний калькулятор. Калькулятор має дозволяти користувачам вводити _суму позики_ та _період погашення_, а потім відображати _денну суму погашення_ та _загальну суму погашення_.

Відсоткова ставка має бути заданою і дорівнювати 2.2% на день.

Формула для обрахування **денної суми погашень**:

$$
DR = (LA + (LA * (IR / 100) * RP)) / RP,
$$

де **DR -** денна сума погашень; **LA -** сума позики; **RP -** період погашення (днів); **IR -** відсоткова ставка (= 2.2).

Формула для обрахування **суми повного погашення**:

$$
TR = DR * RP
$$

де **TR** - сума повного погашення; **DR** - денна сума погашень; **RP** - \*\*\*\*період погашення (днів).

### Технічні вимоги до виконання завдання:

1. Завдання має бути виконаним з використанням чистого **HTML**, **CSS** (дозволяється використання **SCSS**) \***\*та **JavaScript** (**ES6\*\*).
2. Сторінка має бути адаптивною та мінімалістичною.
3. Код повинен бути написаний з урахуванням загальноприйнятих практик та стандартів розробки.
4. Весь код повинен бути залитий на **GitHub** та мати README-файл з описом запуску проєкту та описом виконаного завдання.

### Вимоги до виконання завдання:

1. Створити HTML-форму, яка містить наступні поля:

   - Сума кредиту
   - Період погашення (днів)
   - Кнопка «Отримати кредит»

   <aside>
   📌 * для полів “Сума кредиту” та “Період погашення” має бути створено поле для введення значення та слайдер.

   </aside>

2. Реалізувати логіку розрахунку кредиту (денної та повної сум погашень).
   - Додати розрахунок (за формулами вище) та відобразити на сторінці суму щоденного погашення та загальну суму погашення.
   - Коли користувач змінює одне з полів - мають автоматично змінюватися розраховані суми.
   - Встановити ліміти для поля “Сума кредиту”: мін. - 1000 грн; макс. - 50000 грн. Крок для слайдеру встановити рівним 100 грн.
   - Встановити ліміти для поля “Період погашення”: мін. - 7 днів; макс. - 60 днів. Крок для слайдеру встановити рівним 1 дню.
   - Додати валідацію для полів і відображати повідомлення про помилку, якщо будь-яке поле порожнє або їх значення знаходяться за межами встановлених лімітів. При наявності помилок - кнопка «Отримати кредит» має бути неактивною.
3. Додати відповідні підписи полів та стилі з використанням CSS, щоб зробити форму візуально приємною.
