function populate(){
    if(quiz.isEnded()){
        showScores();
    }
    else{
        //show questions
        var e1 = document.getElementById("questions");
        e1.innerHTML = quiz.getQuestionIndex().text;
        //show choices 
        var choices = quiz.getQuestionIndex().choices;
        for(var i=0; i<choices.length ;i++)
        {
            var element = document.getElementById("choice"+i);
            element.innerHTML = choices[i];
            ans("btn"+i , choices[i]);
        }

        showProgress();
    }
};

function ans(id, choice)
{
    var button = document.getElementById(id);
    button.onclick = function(){
        quiz.guess(choice);
        populate();
    }
};

function showScores()
{
    var gameOverHtml = "<h1>Result</h1>";
    gameOverHtml += "<h2 id='score'>Your scores:" +quiz.score + "</h2>";
    var ele1 = document.getElementById("quiz");
    ele1.innerHTML = gameOverHtml;
};

function showProgress()
{
    var currentQuestion = quiz.questionIndex +1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question "+ currentQuestion + " of " + quiz.questions.length;
}

var questions = [
    new Question("Which of the following function of Number object forces a number to display in exponential notation?", ["toExponential()", "toFixed()", "toPrecision()", "toLocaleString()"], "toExponential()"),
    new Question("Which of the following function of Array object removes the last element from an array and returns that element?", ["push()", "pop()", "map()", "join()"], "pop()"),
    new Question("Which of the following function of Array object sorts the elements of an array?", ["toSource()", "toString()", "unshift()", "sort()"], "sort()")
];

var quiz = new Quiz(questions);

populate();