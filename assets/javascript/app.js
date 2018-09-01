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
        answerImage: "Answer"
    },
    {
        question: "Dwight operates a beet farm called, what?",
        answer1: ["Black Bear Farm", false],
        answer2: ["Poor Richard's Farm", false],
        answer3: ["Shrute Farm", false],
        answer4: ["Shrute Farms", true],
        answerImage: "Answer"
    },
    {
        question: "What is Creed's job title?",
        answer1: ["Quality Assurance Director", true],
        answer2: ["Quality Control Director", false],
        answer3: ["Quality Control Supervisor", false],
        answer4: ["Creed has no official job title or duties", false],
        answerImage: "Answer"
    },
    {
        question: "Who does Michael Scott fire in the first Halloween episode?",
        answer1: ["Devon", true],
        answer2: ["Josh", false],
        answer3: ["Mose", false],
        answer4: ["Hunter", false],
        answerImage: "Answer"
    },
    {
        question: "How does Dwight stop Roy from attacking Jim after Roy finds out about Jim and Pam's kiss?",
        answer1: ["Karate", false],
        answer2: ["Crying", false],
        answer3: ["'Michael!'", false],
        answer4: ["Pepper spray", true],
        answerImage: "Answer"
    },
    {
        question: "What is the name of the pie stand that the employees visit on the work bus?",
        answer1: ["Pies 4 all", false],
        answer2: ["War and Pies", false],
        answer3: ["Laverne's Pie Stand", true],
        answer4: ["Pied Pie-per Pie Stand", false],
        answerImage: "Answer"
    },
    {
        question: "What activity does Kelly choose for her birthday gift from Jim and Dwight?",
        answer1: ["Take a nap", true],
        answer2: ["Go shopping", false],
        answer3: ["Watch TV at work", false],
        answer4: ["Marry Ryan", false],
        answerImage: "Answer"
    },
    {
        question: "What is the name of Jan Levinson's line of candles?",
        answer1: ["Scents you asked", false],
        answer2: ["Candle you handle it?", false],
        answer3: ["Femininity, by Jan", false],
        answer4: ["Serenity, by Jan", true],
        answerImage: "Answer"
    },
    {
        question: "What is the title of the book that Michael 'is writing' ?",
        answer1: ["Somehow I manage", true],
        answer2: ["Michael Scarn: private eye", false],
        answer3: ["Like Mike", false],
        answer4: ["Prison Mike defeats the dementors", false],
        answerImage: "Answer"
    },
    {
        question: "What is the name of Kevin Malone's band?",
        answer1: ["Scrantonicity II", true],
        answer2: ["Scrantonicity", false],
        answer3: ["Ross Can", false],
        answer4: ["Message In A Bottle", false],
        answerImage: "Answer"
    },

];
//  a function that advances through the questions array each time a new question is needed and assigns the answer and a boolean value
function nextQuestion() {
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
    $("#instructions").hide();
    $("#win").hide();
    $("#lose").hide();
    countDown();
}
// create the timer for the start screen and for the win and lose functions
function timesUp() {
    if (count === questions.length) {
        summary();
    }
    else {
        setTimeout(nextQuestion, 3500);
    }
}
// the displayed timer that runs when down when a question is asked
function countDown() {
    var myVar = setInterval(myTimer, 1000);
    var initialTime = 1000 * 10;
    function myTimer() {
        var d = initialTime;
        var t = d - 1000;
        initialTime = t;
        $("#timerDisplay").text(t / 1000 + " seconds left");
        if (t / 1000 === 0) {
            clearInterval(myVar);
            wrong();
        }
        console.log(t);
    }
}
// summarize results at quiz end
function summary() {
    $(".qAndA, #win, #lose, #instructions, button").hide();
    console.log("wrong = " + wrongAnswers);
    console.log("right = " + correctAnswers);
}
// instructions for when a correct answer is selected
function right() {
    $("#win").show();
    $(".qAndA").hide();
    $("button").text("Next Question");
    correctAnswers++;
    timesUp();
    console.log("#of correct " + correctAnswers);
}
// instructions for when a wrong answer is selected or time runs out
function wrong() {
    $("#lose").show()
    $(".qAndA").hide();
    $("button").text("Next Question");
    wrongAnswers++;
    timesUp();
    console.log("#of wrong " + wrongAnswers);
}

$(document).ready(function () {
    $(".qAndA, #win, #lose").hide();
    // show instructions with a click to continue
    $("#instructions")
    timesUp();
    $("button").click(function () {
        if (count === questions.length) {
            summary();
        }
        else {
            nextQuestion();
        }
    });

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


