/* Science Questions:
    1. How long is the human DNA? 2 meters
    2. Who invented Calculus? Issac Newton
    3. What's the largest organ in the human body? Skin
*/
$(document).ready(function(){
    var q1 = {
                question: "How long is the human DNA?",
                correct: "2 meters",
                wrong1: "2 cm",
                wrong2: "5 mm",
                wrong3: "500cm",
            }
    var questions = [
        {
            question: "Who invented Calculus?",
            correct: "Albert Einstein",
            wrong1: "Stephen Hawking",
            wrong2: "Thomas Edison",
            wrong3: "Sir Issac Newton",
        },
        {
            question: "What's the largest organ in the human body?",
            correct: "heart",
            wrong2: "skin",
            wrong3: "lungs",
        },
        {
            question: "How long is the human DNA?",
            correct: "2 meters",
            wrong1: "2 cm",
            wrong2: "5 mm",
            wrong3: "500cm",
        }
    ]
    var correct;
    var incorrect;
    console.log(questions[0].question);
    for(var i = 0; i < questions.length; i++){
        //display question
        //run timer
        //run questionCheck function
    }
    //once question displayed, checks questions or if time runs out
    function questionCheck(question) {
        if(answer === questions[question].correct){
            alert("Correct!");
            correct++;
            //run timer for few seconds, then run function for next question

        }
    }
})



