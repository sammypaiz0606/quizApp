function myAnswer() {
    var answer = document.getElementById('answer');
    var result = document.getElementById('result');
    
    if(answer.value == 4) {
        result.style.color = 'green';
        result.textContent = 'That is correct';  
    } else {
        result.style.color = 'red';
        result.textContent = 'Not the correct answer';
    };
};