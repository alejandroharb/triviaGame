/* Science Questions:
    1. How long is the human DNA? 2 meters
    2. Who invented Calculus? Issac Newton
    3. What's the largest organ in the human body? Skin
*/
$(document).ready(function(){
    var questions = [
        {
            question: "Who invented Calculus?",
            correct: "Albert Einstein",
            wrong1: "Stephen Hawking",
            wrong2: "Thomas Edison",
            wrong3: "Sir Issac Newton"
        },
        {
            question: "What's the largest organ in the human body?",
            correct: "skin",
            wrong1: "heart",
            wrong2: "liver",
            wrong3: "lungs"
        },
        {
            question: "How long is the human DNA?",
            correct: "2 meters",
            wrong1: "2 cm",
            wrong2: "5 mm",
            wrong3: "500cm"
        },
        {
            question: "Roughly how many cells are in a human body?",
            correct: "30 million",
            wrong1: "200,000",
            wrong2: "1 million",
            wrong3: "300 trillion"
        }
    ]
    console.log(questions[3].question);
})



