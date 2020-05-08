
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