const questions = [
    { question: 'How many planets are in the Solar System?', answer: '8' },
    { question: 'How many continents are there?', answer: '7' },
    { question: 'How many legs does an insect have?', answer: '6' },
    { question: 'What year was JavaScript created?', answer: '1995' }
  ];
score = 0;
  
for(let i = 0; i<questions.length; i++){
    let question = questions[i].question;
    let answer = questions[i].answer;
    let response = prompt(question);

    if(response === answer){
        score++;
        console.log(score);
    }


}