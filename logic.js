
// timer variabla/interval
var secondsLeft = 90;
var timerInterval;
// pitanja i odgovori
var questions = [{
        title: "What is JSON?",
        choices: ["JSON stands for JavaScript Object Notation. JSON is a lightweight format for storing and transporting data.",
            "JSON stands for JavaScript Object Nomination. JSON is a lightweight format for storing and transporting data.",
            "JSON stands for JavaScript Object Notation. JSON is a lightweight format for storing and transporting data.",
            "JSON is a lightweight format for storing and transporting data, JavaScript library.The purpose of JSON is to make it much easier to use JavaScript on your website"
        ],
        answer: "JSON stands for JavaScript Object Notation. JSON is a lightweight format for storing and transporting data."
    },
    {
        title: "The condition in an if / else statement is enclosed within ____.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses"
    },
    {
        title: "What is jquery?",
        choices: ["jQuery is set of web development techniques using many web technologies on the client side to create asynchronous web applications.",
            "jQuery is a lightweight format for storing and transporting data, JavaScript library.The purpose of jQuery is to make it much easier to use JavaScript on your website",
            " jQuery is interpreted, high-level, general-purpose programming language. Created by Guido van Rossum and first released in 1991",
            "jQuery is a lightweight, write less, do more, JavaScript library.The purpose of jQuery is to make it much easier to use JavaScript on your website"
        ],
        answer: "jQuery is a lightweight, write less, do more, JavaScript library.The purpose of jQuery is to make it much easier to use JavaScript on your website"
    },
    {
        title: "How do we close an if statement?",
        choices: ["commas", "curly brackets", "quotes", "parentheses"],
        answer: "quotes"
    },

    {
        title: "What is JavaScript mostly used for in web development?",
        choices: ["In most cases, JavaScript is used to build desktop aplications", "In most cases, JavaScript is used to build games",
            "In most cases, JavaScript is used to create responsive, interactive elements for web pages, enhancing the user experience",
            "In most cases, JavaScript is used to build education software"
        ],
        answer: "In most cases, JavaScript is used to create responsive, interactive elements for web pages, enhancing the user experience"
    }
];

var timeEl = document.querySelector(".Time");
var questionsEl = document.querySelector(".questions-rendered");
var scoreEl = document.querySelector(".Score");
var highScoreEl = document.querySelector(".highScore");
var submitButton = document.querySelector("#submit");
var refreshButton = document.querySelector("#goBack");

var initialInput = document.querySelector("#initials");
var scoreList = document.querySelector("#scoreList");
var scoreForm = document.querySelector("#score-form");

var userInitials = [];

document.querySelector('.Score').style.display = 'none';
document.querySelector('.highscorePage').style.display = 'none';

refreshButton.addEventListener("click", function () {
    location.reload()
});

// funkcija kojom postavljamo tajmer
function setTime() {
    timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = "TIME REMAINING: " + secondsLeft;
        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            document.querySelector('.Score').style.display = 'block';
            document.querySelector(".Time").style.display = 'none';
            document.querySelector('.questions-rendered').style.display = 'none';
            highScoreEl.textContent = "YOUR SCORE IS " + secondsLeft;
        }
    }, 1000);
}

const startBtn = document.getElementById("startquiz");

startBtn.addEventListener('click', function () {
    setTime();
    startBtn.style.display = 'none';
    document.querySelector('.QnA').style.display = 'none';
    displayQuestions(questionIndex);
})

var questionIndex = 0;

//funkcija za ispis pitanja i mogucih odgovora
function displayQuestions() {

    questionsEl.textContent = "";
    var question = questions[questionIndex];
    var questionDiv = document.createElement("div");
    var questionText = document.createElement("h2");
    questionText.textContent = question.title;
    questionDiv.appendChild(questionText)

    for (var i = 0; i < question.choices.length; i++) {
        var option = document.createElement("button");
        option.textContent = question.choices[i];
        option.setAttribute("class", "option");
        option.addEventListener("click", function (e) {
            var optionClicked = (e.target.innerHTML);

            if (optionClicked === questions[questionIndex].answer) {
                alert("Correct!");
                displayQuestions(questionIndex++);
            } else {
                alert("Incorrect!");
                displayQuestions(questionIndex++);
                secondsLeft -= 10;
            }

        });
        if (questionIndex == questions.length - 1) {
            clearInterval(timerInterval);
            document.querySelector('.Score').style.display = 'block';
            document.querySelector(".Time").style.display = 'none';
            highScoreEl.textContent = "YOUR SCORE IS " + secondsLeft;
            return;
        }
        questionDiv.appendChild(option);
    }
    questionsEl.appendChild(questionDiv);
}

//funkcija za rezultate
function renderScores() {
    scoreList.innerHTML = "";

    for (var x = 0; x < userInitials.length; x++) {
        var letters = userInitials[x];

        var li = document.createElement("li");
        li.textContent = letters;
        li.setAttribute("data-index", x);

        var button = document.createElement("button");
        button.textContent = "Clear";

        li.appendChild(button);
        scoreList.appendChild(li);
    }
}


// funkcija za iniciranje igre
function init() {
    var storedScores = JSON.parse(localStorage.getItem("userInitials"));

    if (storedScores !== null) {
        userInitials = storedScores;
    }

    const submitBtn = document.getElementById("submit");

    submitBtn.addEventListener('click', function () {
        event.preventDefault();

        var initialText = initialInput.value.trim();

        if (initialText === "") {
            return;
        }
        userInitials.push(initialText + " " + secondsLeft);
        console.log(userInitials);
        initialInput.value = "";

        document.querySelector('.Score').style.display = 'none';
        document.querySelector('.highscorePage').style.display = 'block';

        storeScore();
        renderScores();

    });
}


// funkcija za pohranjivanje rezultata
function storeScore() {
    localStorage.setItem("userInitials", JSON.stringify(userInitials));
    highScoreEl.appendChild(userInitials)
    
}

scoreList.addEventListener("click", function (event) {
    var element = event.target;

    if (element.matches("button") === true) {
        var index = element.parentElement.getAttribute("data-index");
        userInitials.splice(index, 1);

        storeScore();
        renderScores();
    }
});
init();