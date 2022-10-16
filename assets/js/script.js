var quizBox = document.getElementById('code-quiz');
var answersbox = document.getElementById('sub-answers');
var answerButton = document.getElementById('answers');

generatequiz(questions, quizBox, answersbox, answerButton);



function generatequiz(questions, quizBox, answersbox, answerButton){

//Prompt to start quiz



//These are the questions.
var Questions = [
    {
        question1: "Commonly used data types Do Not include:",
        answers: {
            a: 'strings',
            b: 'booleans',
            c: 'alerts',
            d: 'numbers'
        },
        correctanswer: 'c'
    },

    {
    question2: "The condition in an if / else statement is enclosed with _______.",
        answers: {
            a: 'quotes',
            b: 'curly brackets',
            c: 'parenthesis',
            d: 'square brackets'
        },
        correctanswer: 'c'
    },

    {
        question3: "Arrays in JavaScript can be used to store _______.",
            answers: {
                a: 'numbers and strings',
                b: 'other arrays',
                c: 'booleans',
                d: 'all of the above'
            },
            correctanswer: 'd'
        },

    {
        question3: "String values must be enclosed within _______ when being assigned to variables.",
            answers: {
                a: 'commas',
                b: 'curly brackets',
                c: 'quotes',
                d: 'parenthesis'
            },
            correctanswer: 'c'
        },
        
    {
        question4: "A very useful tool used during development and debugging for printing content to the debugger is:",
            answers: {
                a: 'JavaScript',
                b: 'terminal/bash',
                c: 'for loops',
                d: 'console.log'
            },
            correctanswer: 'd'
        },

];
}

//Show questions
revealQuestions(questions, quizBox);

function revealQuestions(questions, quizBox){
    var output = [];
    var answers;

    for(var i=0; i<questions.lenth; i++){

        answers = [];

        for(letter in questions[i].answers){

            answers.push(
            '<label>'
                + '<input type="radio" name="question'+i+'"value="'+letter+'">'
                + letter + ': '
                +questions[i].answers[letter]
            +'</label' 
            );
        }

        output.push(
            'div class"question">' + questions[i].questions + '</div>'
            + '<div class="answers">' + answers.join('') + '</div>'
        );
    }

    quizBox.innerHTML = output.join('');
}

//If user presses submit, reveal results
answerButton.onclick = function(){
    revealAnswers(questions, quizBox, answersbox);

    var userInput=window.prompt("All done! Your final score is + Enter initials: ");
    console.log(userInput);

    var userInput=window.prompt("High scores");
    console.log(userInput);

}

//Reveal the answers after user presses submit
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
   
answerButton.onclick = function(){
    revealAnswers(questions, quizBox, answersbox);
}