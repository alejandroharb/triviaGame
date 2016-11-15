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
            wrong3: "Albert Einstein",
            time: 10
        },
        {
            question: "What's the largest organ in the human body?",
            correct: "skin",
            wrong1: "heart",
            wrong2: "liver",
            wrong3: "lungs",
            time: 10
        },
        {
            question: "How long is the human DNA?",
            correct: "2 meters",
            wrong1: "2 cm",
            wrong2: "5 mm",
            wrong3: "500cm",
            time: 10
        },
        {
            question: "Roughly how many cells are in a human body?",
            correct: "30 million",
            wrong1: "200,000",
            wrong2: "1 million",
            wrong3: "300 trillion",
            time: 10
        }
    ];
    var correct = 0;
    var incorrect = 0;
    var i = 0;
    var count;
    var nextQuestion;
    userAnswer('#answer1');
    userAnswer('#answer2');
    userAnswer('#answer3');
    userAnswer('#answer4');
    //display first question to begin game. no timer
    function startGame(i){
        $("#question").html("<h2>"+questions[i].question+ "</h2");
        $("#answer1").text(questions[i].correct);
        $("#answer2").text(questions[i].wrong1);
        $("#answer3").text(questions[i].wrong2);
        $("#answer4").text(questions[i].wrong3);
        $("#answer1").on('click',function(){
        })
    }
    startGame(0);

    function displayQuestions(i){
        //to stop previous question's timer
        stopCounter();
        $("#question").html("<h2>"+questions[i].question+ "</h2");
        $("#answer1").text(questions[i].correct);
        $("#answer2").text(questions[i].wrong1);
        $("#answer3").text(questions[i].wrong2);
        $("#answer4").text(questions[i].wrong3);
        //run timer for current question
        // counter(); (checking to see if eliminating this counter prevents double counters)
    }

    //function for onclick of answers
    function userAnswer(id){

        $(id).on('click',function(){
            answer = $(this).text();
            //checks answers if right or wrong
            if(answer == questions[i].correct){
                console.log("answer correct");
                stopCounter();
                correct++;
                i++
                nextQuestion();
                console.log("correct after click: " + correct);
            }
            if((answer == questions[i].wrong1) || (answer == questions[i].wrong2) || (answer == questions[i].wrong3)){
                console.log("answer incorrect");
                stopCounter();
                incorrect++;
                i++
                nextQuestion();
                console.log("incorrect after click: " + incorrect);
            }
        })
        ;
    }
    function counter(){
        var count = setInterval(countDown,1000);
    }
    function stopCounter(){
        clearInterval(count);
    }
    function nextQuestion(){
        var nextQuestion = setTimeout(function(){displayQuestions(i)},3000);
    }

    
    //once question displayed, checks questions or if time runs out

    var countDown = function(){
        console.log(i);
        var time = questions[i].time--;
        $('#timer').text(time);
        if(time == 0){
            i++
            stopCounter();
            nextQuestion();
        }
    }

})



