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
    console.log(questions[3].question);
    var time = 10;
    var interval;
    var correct;
    var incorrect;
    console.log(questions[0].question);
    //this is endless loop right now: fix
    do{
        var i = 0
        $("#question").html("<h2>"+questions[i].question+ "</h2");
        $("#answer1").text(questions[i].correct);
        $("#answer2").text(questions[i].wrong1);
        $("#answer3").text(questions[i].wrong2);
        $("#answer4").text(questions[i].wrong3);
        //run timer
        setTimeout(next, 1000*10);
        interval = setInterval(countDown,1000);
        console.log(time)
        //run questionCheck function
        answerClicks();
        i++;
    } while(i < questions.length)
    //function for onclick of answers
    function answerClicks(id){
        $(id).on('click',function(){
            answer = $(this).text();
            console.log(answer);
            functionCheck(i);
        })
    }
    answerClicks('#answer1');
    answerClicks('#answer2');
    answerClicks('#answer3');
    answerClicks('#answer4');

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



