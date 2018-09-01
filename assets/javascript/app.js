// array of objects with the question, wrong answers, one correct answer, a "correct" image/video/sound
var count = 0;
var answerA = false;
var answerB = false;
var answerC = false;
var answerD = false;
var questions = [
    {
        question: "What?",
        answer1: ["Wrong1", false],
        answer2: ["Correct", true],
        answer3: ["Wrong3", false],
        answer4: ["Wrong4", false],
        answerImage: "Answer"
    },
    {
        question: "Why?",
        answer1: ["pear", false],
        answer2: ["lemon", false],
        answer3: ["grape", false],
        answer4: ["apple", true],
        answerImage: "Answer"
    },

    //etc...
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

}
// create the timer for each question and for the win and lose functions
// summarize results at quiz end


$(document).ready(function () {
    $(".qAndA, #win, #lose").hide();
    // show instructions with a click to continue
    $("#instructions")
    $("button").click(function () {

        nextQuestion();

        $(".qAndA").show();
        $("#instructions").hide();
        $("#win").hide();
        $("#lose").hide();

        console.log(answerA);

        $("#buttonA").click(function () {
            if (answerA === true) {
                $("#win").show();
                $(".qAndA").hide();
                $("button").text("Next Question");
            }
            else {
                $("#lose").show()
                $(".qAndA").hide();
                $("button").text("Next Question");
            }

        });
        $("#buttonB").click(function () {
            if (answerB === true) {
                $("#win").show();
                $(".qAndA").hide();
                $("button").text("Next Question");
            }
            else {
                $("#lose").show()
                $(".qAndA").hide();
                $("button").text("Next Question");
            }

        });
        $("#buttonC").click(function () {
            if (answerC === true) {
                $("#win").show();
                $(".qAndA").hide();
                $("button").text("Next Question");
            }
            else {
                $("#lose").show()
                $(".qAndA").hide();
                $("button").text("Next Question");
            }

        });
        $("#buttonD").click(function () {
            if (answerD === true) {
                $("#win").show();
                $(".qAndA").hide();
                $("button").text("Next Question");
            }
            else {
                $("#lose").show()
                $(".qAndA").hide();
                $("button").text("Next Question");
            }

        });


        });

});


    // function timesUp() {
    // }

    // window.setTimeout (timesUp, 1000 * 10);

    // start again

