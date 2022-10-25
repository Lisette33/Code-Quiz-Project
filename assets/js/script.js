var quizBox = document.getElementById('code-quiz');
var answersbox = document.getElementById('sub-answers');
var answerButton = document.getElementById('answers');
var instructions = document.getElementById('instructions');
var highScores = []
var scores = document.getElementById('scores');
var highScoresList = document.getElementById('highScores');

//Prompt to start quiz
answersbox.addEventListener("click",function(){
   instructions.style.display="none"
   answersbox.style.display="none"
    revealQuestions(questions, quizBox);
    // revealAnswers(questions, quizBox, answersbox);
})



//These are the questions.
var questions = [
    {
        question: "Commonly used data types Do Not include:",
        answers: {
            a: 'strings',
            b: 'booleans',
            c: 'alerts',
            d: 'numbers'
        },
        correctanswer: 'c'
    },

    {
    question: "The condition in an if / else statement is enclosed with _______.",
        answers: {
            a: 'quotes',
            b: 'curly brackets',
            c: 'parenthesis',
            d: 'square brackets'
        },
        correctanswer: 'c'
    },

    {
        question: "Arrays in JavaScript can be used to store _______.",
            answers: {
                a: 'numbers and strings',
                b: 'other arrays',
                c: 'booleans',
                d: 'all of the above'
            },
            correctanswer: 'd'
        },

    {
        question: "String values must be enclosed within _______ when being assigned to variables.",
            answers: {
                a: 'commas',
                b: 'curly brackets',
                c: 'quotes',
                d: 'parenthesis'
            },
            correctanswer: 'c'
        },
        
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
            answers: {
                a: 'JavaScript',
                b: 'terminal/bash',
                c: 'for loops',
                d: 'console.log'
            },
            correctanswer: 'd'
        },

];
var anountcorrectAnswers = 0;

function generatequiz(questions, quizBox, answersbox, answerButton){
    alert("Click OK to Begin Quiz")
}

var index =0
var amountcorrectAnswers = 0
function nextQuestion () {
    //Check if answer is correct or not
    index ++
    var useranswer = '';
    useranswer = (document.querySelector('input[type="radio"]:checked')||{}).value;

    for(var i=0; i<questions.length; i++){


        if(useranswer===questions[i].correctanswer){
            amountcorrectAnswers++;
    
        }
    }
    //Check if game is over or not
    if(index <questions.length){
        revealQuestions(questions, quizBox)
    }
    else {
        gameOver() 
    }


}

//Show questions
function revealQuestions(questions, quizBox){
    var output = [];
    var answers;

    // for(var i=0; i<questions.length; i++){
        
        answers = [];

        for(letter in questions[index].answers){
            console.log(letter)

            answers.push(
            '<label>'
                + '<input type="radio" name="question'+index+'"value="'+letter+'">'
                + letter + ': '
                +questions[index].answers[letter]
            +'</label>' 
            );
        }

        quizBox.innerHTML = (
            '<div class="question">' + questions[index].question + '</div>'
            + '<div class="answers">' + answers.join('') + '</div>'
            + '<button onclick="nextQuestion()" class="nextButton">next</button>'
        );
        
}


//If user presses submit, reveal results
function gameOver(){
    revealAnswers(questions, quizBox, answersbox);

    var userInput=window.prompt("All done! Your final score is "+amountcorrectAnswers+ ' out of ' + questions.length+ "Enter initials: ");
    console.log(userInput);

var newScore = {
    initials:userInput,
    score:amountcorrectAnswers
}
highScores = JSON.parse(localStorage.getItem("scores")||"[]")
highScores.push(newScore)
localStorage.setItem("scores",JSON.stringify(highScores))
for(var i=0; i<highScores.length; i++){
var li=document.createElement("li")
li.innerText=highScores[i].initials+" "+highScores[i].score
highScoresList.appendChild(li)
}
scores.style.display="block"
}


//Reveal the answers after user pressed submit
function revealAnswers(questions, quizBox, answersbox){
   
    var answersbox = document.getElementById("answers");

quizBox.innerHTML=""
   answersbox.innerHTML = amountcorrectAnswers + ' out of ' + questions.length;
}
   
