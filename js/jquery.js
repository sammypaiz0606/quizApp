var questions = [
    {
        question: 'What is 2 + 2?',
        answer: '4'
    },
    {
        question: 'How many days are there in a week?',
        answer: '7'
    },
    {
        question: 'what day is today?',
        answer:'tuesday'
    },
    {
        question:'whats my favorite color',
        answer:'green'
    }
];
// This for loop will loop true the array os strings
for(var i = 0; i < questions.length; i++) {
    //make a variable call question equal to the value of question
    var question = questions[i].question;
    //make an element added to every question array
    var el = document.getElementById('question' + [i]);
    
    //check the console.log in the screen to display the question[i] value
    console.log(question, el);
    //the element will be added to every question value
    el.textContent = question;
};
// when clicked the button this will trigger
function testResults() {
    
    var correct = 0;
    var incorrect = 0;
    
    for(var i =0; i < questions.length; i++) {
        var answer = questions[i].answer;
        var guess = document.getElementById('answer' + [i]).value;
        
        if(answer == guess) {
            correct++;
        }else {
            incorrect++;
        };
    };
    document.getElementById('correct').textContent = correct;
    document.getElementById('incorrect').textContent = incorrect;
};


