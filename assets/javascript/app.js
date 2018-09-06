var timerStart = 10;
var IntervalId;
var timerRunning = false;
var count = 0;
var wrongAnswers = 0;
var correctAnswers = 0;
var answerA = false;
var answerB = false;
var answerC = false;
var answerD = false;

var questions = [
    {
        question: "In what Pennsylvania town is The Office located?",
        answer1: ["Harrisburg", false],
        answer2: ["Scranton", true],
        answer3: ["Philadelphia", false],
        answer4: ["Punxatawny", false],
        answerImage: "assets/images/scranton.jpg"
    },
    {
        question: "Dwight operates a beet farm called, what?",
        answer1: ["Black Bear Farm", false],
        answer2: ["Poor Richard's Farm", false],
        answer3: ["Shrute Farm", false],
        answer4: ["Shrute Farms", true],
        answerImage: "assets/images/Shrute_Farms.jpg"
    },
    {
        question: "What is Creed's job title?",
        answer1: ["Quality Assurance Director", true],
        answer2: ["Quality Control Director", false],
        answer3: ["Quality Control Supervisor", false],
        answer4: ["Creed has no official job title or duties", false],
        answerImage: "assets/images/creed.jpg"
    },
    {
        question: "Who does Michael Scott fire in the first Halloween episode?",
        answer1: ["Devon", true],
        answer2: ["Josh", false],
        answer3: ["Mose", false],
        answer4: ["Hunter", false],
        answerImage: "assets/images/devon.png"
    },
    {
        question: "How does Dwight stop Roy from attacking Jim after Roy finds out about Jim and Pam's kiss?",
        answer1: ["Karate", false],
        answer2: ["Crying", false],
        answer3: ["'Michael!'", false],
        answer4: ["Pepper spray", true],
        answerImage: "assets/images/roy.png"
    },
    {
        question: "What is the name of the pie stand that the employees visit on the work bus?",
        answer1: ["Pies 4 all", false],
        answer2: ["War and Pies", false],
        answer3: ["Laverne's Pie Stand", true],
        answer4: ["Pied Pie-per Pie Stand", false],
        answerImage: "assets/images/Lavernes-Pies.jpg"
    },
    {
        question: "What activity does Kelly choose for her birthday gift from Jim and Dwight?",
        answer1: ["Take a nap", true],
        answer2: ["Go shopping", false],
        answer3: ["Watch TV at work", false],
        answer4: ["Marry Ryan", false],
        answerImage: "assets/images/kelly.jpg"
    },
    {
        question: "What is the name of Jan Levinson's line of candles?",
        answer1: ["Scents you asked", false],
        answer2: ["Candle you handle it?", false],
        answer3: ["Femininity, by Jan", false],
        answer4: ["Serenity, by Jan", true],
        answerImage: "assets/images/serenity.jpg"
    },
    {
        question: "What is the title of the book that Michael 'is writing' ?",
        answer1: ["Somehow I manage", true],
        answer2: ["Michael Scarn: private eye", false],
        answer3: ["Like Mike", false],
        answer4: ["Prison Mike defeats the dementors", false],
        answerImage: "assets/images/somehow.jpg"
    },
    {
        question: "What is the name of Kevin Malone's band?",
        answer1: ["Scrantonicity II", true],
        answer2: ["Scrantonicity", false],
        answer3: ["Ross Can", false],
        answer4: ["Message In A Bottle", false],
        answerImage: "assets/images/scrantonicity-ii.png"
    },

];
//  a function that advances through the questions array each time a new question is needed and assigns the answer and a boolean value
function nextQuestion() {
    $('#centerImage').attr("src","");

    $("#buttonA, #buttonB, #buttonC, #buttonD").prop("checked",false);

    $("#question").text(questions[count].question);

    $("#answerA").text(questions[count].answer1[0]);
    answerA = (questions[count].answer1[1])

    $("#answerB").text(questions[count].answer2[0]);
    answerB = (questions[count].answer2[1]);

    $("#answerC").text(questions[count].answer3[0]);
    answerC = (questions[count].answer3[1]);

    $("#answerD").text(questions[count].answer4[0]);
    answerD = (questions[count].answer4[1]);
    //advances the count variable to move to the next question
    count++;
    $(".qAndA").show();
    $("#instructions, #win, #lose").hide();
    start();
}
// create the unseen timer for the start screen and for the win and lose functions
function timesUp() {
    if (count === questions.length) {
        setTimeout(summary, 3500);
    }
    else {
        setTimeout(nextQuestion, 3500);
    }
}
// the displayed timer that runs down when a question is asked
function start() {
    timerStart = 11;
    if (!timerRunning) {
      $("#timerDisplay").show();
        intervalId = setInterval(timerChange, 1000);
        timerRunning = true;
    }
}
function stop() {
    clearInterval(intervalId);
    timerRunning = false;
}

function timerChange() {
    timerStart--;
    $("#timerDisplay").show();
    $("#timerDisplay").text(timerStart + " seconds left");
    if (timerStart === 0) {
        stop();
        wrong();
    }
}
// summarize results at quiz end
function summary() {
    $(".qAndA, button").hide();
    $("#lose, #win, #instructions").show();
    $("#lose").text("You answered " + wrongAnswers + " questions incorrectly");
    $("#win").text("You answered " + correctAnswers + " questions correctly");
    $("#instructions").text("Congratulations.");
    $("#centerImage").attr("src","assets/images/assistant.jpg");
    count = 0;
    $("#playAgain").text("Click here to play again!");
    $("#playAgain").click(nextQuestion);

}
// instructions for when a correct answer is selected
function right() {
    stop();
    $("#timerDisplay, .qAndA").hide();
    $("#win").show();
    $('#centerImage').attr("src",questions[count-1].answerImage);

    correctAnswers++;
    timesUp();
}
// instructions for when a wrong answer is selected or time runs out
function wrong() {
    stop();
    $("#timerDisplay, .qAndA").hide();
    $("#lose").show()
    $('#centerImage').attr("src",questions[count-1].answerImage );
    wrongAnswers++;
    timesUp();
}

$(document).ready(function () {
    $(".qAndA, #win, #lose, #timerDisplay").hide();
    $("#instructions")
    timesUp();

    $("#buttonA").click(function () {
        if (answerA === true) {
            right();
        }
        else {
            wrong();
        }
    });
    $("#buttonB").click(function () {
        if (answerB === true) {
            right();
        }
        else {
            wrong();
        }
    });
    $("#buttonC").click(function () {
        if (answerC === true) {
            right();
        }
        else {
            wrong();
        }
    });
    $("#buttonD").click(function () {
        if (answerD === true) {
            right();
        }
        else {
            wrong();
        }
    });
});


