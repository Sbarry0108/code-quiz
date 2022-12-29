let quizId = document.getElementById("startQuiz");
let index = 0;
let count = 0;
let finalScore = 0;
let scores = [];
var x ;
let questionList = [
    {
        questionNumber:1,
        question:"Commonly used data types DO Not Include:",
        answer1: "strings",
        answer2: "booleans",
        answer3: "alerts",
        answer4: "numbers",
        correctAnswer: "alerts"
    },
    {
        questionNumber:2,
        question:"The condition in an if / else statement is enclosed with____.",
        answer1: "quotes",
        answer2: "curly brackets",
        answer3: "parenthesis",
        answer4: "square brackets",
        correctAnswer: "parenthesis"
    },
    {
        questionNumber:3,
        question:"Arrays in JavaScrip can be used to store_____.",
        answer1: "numbers and strings",
        answer2: "other arrays",
        answer3: "booleans",
        answer4: "all of the above",
        correctAnswer: "all of the above"
    },
    {
        questionNumber:4,
        question:"String values must be enclosed within____ when being assigned to variables.",
        answer1: "commas",
        answer2: "curly brackets",
        answer3: "quotes",
        answer4: "parenthesis",
        correctAnswer: "quotes"
    }
]





quizId.addEventListener('click',quizButtoncliked);
document.getElementById("1").addEventListener('click', proccessAnswer);
document.getElementById("2").addEventListener('click', proccessAnswer);
document.getElementById("3").addEventListener('click', proccessAnswer);
document.getElementById("4").addEventListener('click', proccessAnswer);
document.getElementById("goBack").addEventListener('click', buttonClick);
document.getElementById("clear").addEventListener('click', buttonClick);
document.getElementById("submit").addEventListener('click', displayResult);
document.getElementById("viewscore").addEventListener('click', displayResult2);


function buttonClick (e) {
    if(e.target.id == "goBack") {
        document.getElementById("finalResult").style.display = "none";
        document.getElementById("container").style.display = "block";
        scores = [];
    } else {
        document.getElementById("finalResult2").innerHTML = "";
    }

}
function displayResult2() {
    document.getElementById("container2").style.display = "none";
    document.getElementById("final").style.display = "none";
    document.getElementById("container").style.display = "none";
    document.getElementById("finalResult").style.display = "block";
    
}


function displayResult() {
    let initial = document.getElementById("scoreInput").value;
    document.getElementById("time").innerHTML = "Time: 100";
    let score = {
        initial: initial,
        score: finalScore
    }
    scores.push(score);
    let finalResult = document.getElementById("finalResult2");
    
    for(let i=0; i<scores.length;i++) {
        let tag = document.createElement('div');
        tag.innerHTML = scores[i].initial + "-" + scores[i].score ;
        tag.className = "divClass"
        finalResult.prepend(tag);
    }
    document.getElementById("final").style.display = "none";
    document.getElementById("finalResult").style.display = "block";

}

function proccessAnswer(e) {
    if(index < questionList.length) {
        if(e.target.innerHTML == questionList[index].correctAnswer) {
            document.getElementById("answer").innerHTML = "Correct!"
            count+=5;
        } else {
            document.getElementById("answer").innerHTML = "Wrong!"
        }
    }
    index++;
    if(index < questionList.length) {
        let question = questionList[index];
        document.getElementById("1").innerHTML = question.answer1;
        document.getElementById("2").innerHTML = question.answer2;
        document.getElementById("3").innerHTML = question.answer3;
        document.getElementById("4").innerHTML = question.answer4;
        document.getElementById("questionNumber").innerHTML= "Question Number: " + question.questionNumber;
        document.getElementById("question").innerHTML = question.question;
    } else {
        index = 0;
        document.getElementById("container2").style.display = "none";
        document.getElementById("score").innerHTML = "    Your Score is: " + count;
        finalScore = count;
        count=0;
        document.getElementById("final").style.display = "block";
        clearTimeout(x);
        
    }
    
}


function quizButtoncliked(e) {
    document.getElementById("container").style.display = "none";
    let question = questionList[index];
    document.getElementById("1").innerHTML = question.answer1;
    document.getElementById("2").innerHTML = question.answer2;
    document.getElementById("3").innerHTML = question.answer3;
    document.getElementById("4").innerHTML = question.answer4;
    document.getElementById("question").innerHTML = question.question;

    document.getElementById("questionNumber").innerHTML= "Question Number: " + question.questionNumber;
    document.getElementById("container2").style.display = "block";

    var counter = 100;

      x = setInterval(function() {
        counter--;
        document.getElementById("time").innerHTML = "Time: " +counter ;
        if (counter <= 0 ) {
            document.getElementById("time").innerHTML = "Time is UP";
            index = 0;
            document.getElementById("container2").style.display = "none";
            document.getElementById("score").innerHTML = "    Your Score is: " + count;
            finalScore = count;
            count=0;
            document.getElementById("final").style.display = "block";
            clearTimeout(x);

        }
    }, 1000);
}
