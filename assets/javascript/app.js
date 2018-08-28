// array of objects with the question, wrong answers, one correct answer, a "correct" image/video/sound

var questions = [
    {question: "What?", correctAnswer: "Correct", wrongAnswer1: "Wrong1", wrongAnswer2: "Wrong2", wrongAnswer3: "Wrong3"},
    {},
    {},
    {},
    {},
    //etc...

]

$(document).ready(function () {
    $(".qAndA, #win, #lose").hide();
    // show instructions with a click to continue
    $("#instructions")
     // show first question and answer
     $("button").click(function(){
        $(".qAndA").show();
    });
    // function timesUp() {
    // }

    // window.setTimeout (timesUp, 1000 * 10);


    // timer function
    // if statement for correct, wrong, and timeout

    // hide first question and show second, etc.

    // summarize results

    // start again

});