var quizBox = document.getElementById('code-quiz');
var answersbox = document.getElementById('sub-answers');
var answerButton = document.getElementById('answers');


//Prompt to start quiz
answersbox.addEventListener("click",function(){
    generatequiz(questions, quizBox, answersbox, answerButton);
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
function generatequiz(questions, quizBox, answersbox, answerButton){
    alert("Hello")
}

var index =0
function nextQuestion () {
    //Check if answer is correct or not
    index ++
    //Check if game is over or not
    if(index <questions.length){
        revealQuestions(questions, quizBox)
    }
    //else {Game over}
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
    // }
}


//If user presses submit, reveal results
answerButton.onclick = function(){
    revealAnswers(questions, quizBox, answersbox);

    var userInput=window.prompt("All done! Your final score is + Enter initials: ");
    console.log(userInput);

    var userInput=window.prompt("High scores");
    console.log(userInput);

}


//Reveal the answers after user pressed submit
function revealAnswers(questions, quizBox, answersbox){
   
    var answersbox = quizBox.querySelectorAll('.answers');

    var useranswer = '';
    var anountcorrectAnswers = 0;

    for(var i=0; i<questions.length; i++){

        useranswer = (answersbox[i].querySelector('input[name=question'+i+']:checked')||{}).value;

        if(unseranswer===questions[i].correctanswer){
            amountcorrectAnswers++;
            answersbox[i].style.color = 'blue';
        }

        else{
            answersbox[i].style.color = 'pink';
        }
    }

   answersbox.innerHTML = amountcorrectAnswers + ' out of ' + questions.length; i++;
}
   
