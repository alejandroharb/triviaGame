/* Science Questions:
    1. How long is the human DNA? 2 meters
    2. Who invented Calculus? Issac Newton
    3. What's the largest organ in the human body? Skin
*/
$(document).ready(function(){
    var questions = [
        {
            question: "Who invented Calculus?",
            correct: "Sir Issac Newton",
            wrong1: "Stephen Hawking",
            wrong2: "Thomas Edison",
            wrong3: "Albert Einstein"
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
    ];
    var i = 0;
    var time = 10;
    var interval;
    var correct = 0;
    var incorrect = 0;

    userChoice('#answer1',i);
    userChoice('#answer2',i);
    userChoice('#answer3',i);
    userChoice('#answer4',i);
    function questionDisplay(i) {
        $("#question").html("<h2>"+questions[i].question+ "</h2");
        $("#answer1").text(questions[i].correct);
        $("#answer2").text(questions[i].wrong1);
        $("#answer3").text(questions[i].wrong2);
        $("#answer4").text(questions[i].wrong3);
        //run timer
        setTimeout(next, 1000*10);
        setInterval(countDown,1000);
    };
    questionDisplay(i);
    console.log("global i: "+ i)    
    
    //detects user answers
    function userChoice(id,i){
        $(id).on('click',function(){
            answer = $(this).text();
            console.log(answer);
            if(answer == questions[i].correct){
                alert("Correct!");
                correct++;
                //run timer for few seconds, then run function for next question
                setTimeout(next, 3000);
            } else if(answer == questions[i].wrong1 || answer == questions[question].wrong2 || answer == questions[question].wrong3){
                alert("Wrong!");
                incorrect++;
                setTimeout(next, 3000);
            }
        })
    };
    //once question displayed, checks questions or if time runs out
    var functionCheck = function(question) {
        
    }
    var countDown = function(){
        time--;
        $('#timer').text(time);
    }
    //adds 1 to i to run next round of question
    var next = function(i){
        i++;
        questionDisplay(i);
    }

})



