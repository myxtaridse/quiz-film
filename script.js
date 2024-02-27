const questionText = document.getElementById('question-text');
const picture = document.getElementById('picture');
const answersContainer = document.getElementById('answers-container');
const backBtn = document.getElementById('back-btn');
const nextBtn = document.getElementById('next-btn');

const questions = [
    {
        question: 'Сколько лет Хатико ждал своего хозяина после его смерти в фильме "Хатико: Самый верный друг"?',
        answers: [
            {text: '12 лет', correct: false},
            {text: '7 лет', correct: false},
            {text: '9 лет', correct: true},
            {text: '4 года', correct: false}
        ],
        img: "./img/1.webp"
    },
    {
        question: 'Как Джеку удалось попасть на корабль из фильма "Титаник"?',
        answers: [
            {text: 'Он пробрался тайком', correct: false},
            {text: 'Он купил билет на последние деньги', correct: false},
            {text: 'Он выиграл билет в покер', correct: true},
            {text: 'Он украл билет', correct: false}
        ],
        img: './img/2.webp'
    },
    {
        question: 'Какой предмет появляеться в каждой сцене фильма "Бойцовский клуб"?',
        answers: [
            {text: 'Бутылка "Coca-Cola"', correct: false},
            {text: 'Чизбургер "McDonalds"', correct: false},
            {text: 'Пачка сигарет "Marlboro"', correct: false},
            {text: 'Стаканчик "Starbucks"', correct: true}
        ],
        img: './img/3.webp'
    },
    {
        question: 'Какова марка автомобиля, который отиграл роль машины времени из фильма "Назад в будущее"?',
        answers: [
            {text: 'DeLorean DMC-12', correct: true},
            {text: 'Audi quattro', correct: false},
            {text: 'BMW 750iL (E38)', correct: false},
            {text: 'ВАЗ-2121', correct: false}
        ],
        img: './img/4.webp'
    },
    {
        question: 'Какое боевое искусство первым загрузили в мозг Нео в фильме "Матрица"?',
        answers: [
            {text: 'Айкиду', correct: false},
            {text: 'Капоэйра', correct: false},
            {text: 'Джиу-джитсу', correct: true},
            {text: 'Каратэ', correct: false}
        ],
        img: './img/5.webp'
    },
    {
        question: 'Как называется эльфийский (волшебный) хлеб из трилогии фильмов "Властелин Колец"?',
        answers: [
            {text: 'Лемиш', correct: false},
            {text: 'Лембас', correct: true},
            {text: 'Люмбаш', correct: false},
            {text: 'Любэ', correct: false}
        ],
        img: './img/6.webp'
    },
    {
        question: 'Какую фразу говорил Трумэн соседям если не увидит их, в фильме "Шоу Трумана"?',
        answers: [
            {text: '"Никогда не говорите никогда!"', correct: false},
            {text: '"Ещё увидимся!"', correct: false},
            {text: '"Доброе утроб добрый день и добрый вечер!"', correct: true},
            {text: '"Я буду по Вам скучать!"', correct: false}
        ],
        img: './img/7.jpeg'
    },
    {
        question: 'Где, по мнению главного героя "Остров проклятых", размещена тайная лаборатория для экспериментов?',
        answers: [
            {text: 'На маяке', correct: true},
            {text: 'В бункере', correct: false},
            {text: 'Под кладбищем', correct: false},
            {text: 'В шахте', correct: false}
        ],
        img: './img/8.webp'
    },
    {
        question: 'В какую «фруктовую компанию» лейтенант Дэн инвестирует деньги Форреста из фильма "Форест Гамп"?',
        answers: [
            {text: 'Orange', correct: false},
            {text: 'Banana', correct: false},
            {text: 'Apple', correct: true},
            {text: 'Grape', correct: false}
        ],
        img: './img/9.webp'
    },
    {
        question: 'Сколько времени провёл в плену Тони Старк в трилогии "Железный Человек"?',
        answers: [
            {text: 'был убит в плену', correct: false},
            {text: 'три месяца', correct: true},
            {text: 'два года', correct: false},
            {text: 'две недели', correct: false}
        ],
        img: './img/10.webp'
    },
    {
        question: 'Какой фрукт является символом смерти в трилогии "Крёстный отец"?',
        answers: [
            {text: 'Апельсин', correct: true},
            {text: 'Банан', correct: false},
            {text: 'Яблоко', correct: false},
            {text: 'Лимон', correct: false}
        ],
        img: './img/11.webp'
    },
    {
        question: 'Что украл Дрисс у Филиппа - аристократа миллионера в фильме "1+1"?',
        answers: [
            {text: 'Жизнь', correct: false},
            {text: 'Яйцо Фаберже', correct: true},
            {text: 'Картину художника Джексон Поллок «№ 5»', correct: false},
            {text: 'Машину', correct: false}
        ],
        img: './img/12.webp'
    }/*,
    {
        question: 'Сколько лет Хатико ждал своего хозяина после его смерти в фильме "Хатико: Самый верный друг"?',
        answers: [
            {text: '12 лет', correct: false},
            {text: '7 лет', correct: false},
            {text: '9 лет', correct: true},
            {text: '4 года', correct: false}
        ],
        img: './img/1.webp'
    }*/
];


let currentQuestionIndex = 0;
let score = 0;

const startQuiz = () => {
    currentQuestionIndex = 0;
    score = 0;

    showQuestions();
}

const showQuestions = () => {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionText.innerHTML = questionNo + '. ' + currentQuestion.question;
    picture.innerHTML = `<img src='${currentQuestion.img}' class='img-question'>`;
    
    currentQuestion.answers.forEach((answer) => {
        const button = document.createElement('button');
        button.innerHTML = answer.text;
        button.classList.add('answer-btn');
        answersContainer.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
    });
}

const resetState = () => {
    while (answersContainer.firstChild) {
        answersContainer.removeChild(answersContainer.firstChild);
    }
}

const selectAnswer = (e) => {
    const selectBtn = e.target;
    const isCorrect = selectBtn.dataset.correct === 'true';
    if (isCorrect) {
        selectBtn.classList.add('correct');
        score++;
    } 
    Array.from(answersContainer.children).forEach(button => {
        if (button.dataset.correct === 'true') {
            button.classList.add('correct');
        }
        button.disabled = true;
    });
}

const showScore = () => {
    resetState();
    questionText.innerHTML = `Вы набрали ${score} из ${questions.length}`;
    if (score <= 12 && score > 8) {
        picture.innerHTML = `<img src='img/final-5.jpg' class='img-question img-finish'>`;
    } else if (score <= 7 && score > 5) {
        picture.innerHTML = `<img src='img/final-2.jpg' class='img-question img-finish'>`;
    } else if (score <= 4 && score > 0) {
        picture.innerHTML = `<img src='img/final-1.jpg' class='img-question img-finish'>`;
    } else {
        picture.innerHTML = `<img src='img/всё.jpg' class='img-question img-finish'>`;
    }
    
    
    
}

const nextQuestion = () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestions();
    } else {
        showScore();
    }
}

nextBtn.addEventListener('click', () => {
    if (currentQuestionIndex < questions.length) {
        nextQuestion();
    } else {
        startQuiz();
    }
});

startQuiz(); 


