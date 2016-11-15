/* To Do:
    1. Make questions into array rather than an object (turn it back)
*/
$(document).ready(function(){
    var questions =
    {
        1 :     {
                question: "Who invented Calculus?",
                answer: 2,
                choices: {
                    1: "Stephen Hawking",
                    2: "Thomas Edison",
                    3: "Albert Einstein"
                    }
                // time: 10
                },
        2 :     {
                question: "What's the largest organ in the human body?",
                correct: "skin",
                wrong1: "heart",
                wrong2: "liver",
                wrong3: "lungs",
                // time: 10
                },
        3 :     {
                    question: "How long is the human DNA?",
                    correct: "2 meters",
                    wrong1: "2 cm",
                    wrong2: "5 mm",
                    wrong3: "500cm",
                    // time: 10
                },
        4:      {
                    question: "Roughly how many cells are in a human body?",
                    correct: "30 million",
                    wrong1: "200,000",
                    wrong2: "1 million",
                    wrong3: "300 trillion",
                    // time: 10
                },
        5:      {
                    question: "How old is the earth?",
                    correct: "4.5 billion years old",
                    wrong1: "5000 years old",
                    wrong2: "100,000 years old",
                    wrong3: "3 trillion years old",
                    // time: 10
                },
        6:      {
                    question: "What organ works the hardest?",
                    correct: "brain",
                    wrong1: "heart",
                    wrong2: "tongue",
                    wrong3: "liver",
                    // time: 10
                },
        7:      {
                    question: "How many planets in the Universe could potentially hold life?",
                    correct: "60 billion",
                    wrong1: "10",
                    wrong2: "3,000",
                    wrong3: "1",
                    // time: 10
                },
        // 8:      {
        //             question: "?",
        //             correct: "",
        //             wrong1: "",
        //             wrong2: "",
        //             wrong3: "",
        //             time: 10
        //         },
        // 9:      {
        //             question: "?",
        //             correct: "",
        //             wrong1: "",
        //             wrong2: "",
        //             wrong3: "",
        //             time: 10
        //         },
        // 10:      {
        //             question: "?",
        //             correct: "",
        //             wrong1: "",
        //             wrong2: "",
        //             wrong3: "",
        //             time: 10
        //         },
        // 11:      {
        //             question: "?",
        //             correct: "",
        //             wrong1: "",
        //             wrong2: "",
        //             wrong3: "",
        //             time: 10
        //         },
        // 12:      {
        //             question: "?",
        //             correct: "",
        //             wrong1: "",
        //             wrong2: "",
        //             wrong3: "",
        //             time: 10
        //         },
        // 13:      {
        //             question: "?",
        //             correct: "",
        //             wrong1: "",
        //             wrong2: "",
        //             wrong3: "",
        //             time: 10
        //         },
        // 14:      {
        //             question: "?",
        //             correct: "",
        //             wrong1: "",
        //             wrong2: "",
        //             wrong3: "",
        //             time: 10
        //         },
        // 15:      {
        //             question: "?",
        //             correct: "",
        //             wrong1: "",
        //             wrong2: "",
        //             wrong3: "",
        //             time: 10
        //         },
        // 16:      {
        //             question: "?",
        //             correct: "",
        //             wrong1: "",
        //             wrong2: "",
        //             wrong3: "",
        //             time: 10
        //         },
        // 17:      {
        //             question: "?",
        //             correct: "",
        //             wrong1: "",
        //             wrong2: "",
        //             wrong3: "",
        //             time: 10
        //         },
        // 18:      {
        //             question: "?",
        //             correct: "",
        //             wrong1: "",
        //             wrong2: "",
        //             wrong3: "",
        //             time: 10
        //         },
        // 19:      {
        //             question: "?",
        //             correct: "",
        //             wrong1: "",
        //             wrong2: "",
        //             wrong3: "",
        //             time: 10
        //         },
        // 20:      {
        //             question: "?",
        //             correct: "",
        //             wrong1: "",
        //             wrong2: "",
        //             wrong3: "",
        //             time: 10
        //         },
    };
    var next;
    var timer;
    var correct = 0;
    var incorrect = 0;
    var i = 1;
    var time;
    function startGame(startIndex){
        $("#question").html("<h2>"+questions[i].question+ "</h2");
        $("#answer1").text(questions[i].correct);
        $("#answer2").text(questions[i].wrong1);
        $("#answer3").text(questions[i].wrong2);
        $("#answer4").text(questions[i].wrong3);
    }
    startGame(1);
    function displayQuestions(i){
        clearTimeout(next);
        stopCounter();
        counter();
        //removes colors denoting correct answer
        $('#answer1').removeClass('backgroundGreen');
        $('#answer2').removeClass('backgroundRed');
        $('#answer3').removeClass('backgroundRed');
        $('#answer4').removeClass('backgroundRed');
        //displays questions in DOM
        $("#question").html("<h2>"+questions[i].question+ "</h2");
        $("#answer1").text(questions[i].correct);
        $("#answer2").text(questions[i].wrong1);
        $("#answer3").text(questions[i].wrong2);
        $("#answer4").text(questions[i].wrong3);
    }
    function nextQuestion(){
            i++;
            if(i=8){
                //do something to end trivia game and display score;
            }
            stopCounter();
            var next = setTimeout(function(){ displayQuestions(i) },3000);
        }
    var counter = function(){
        clearInterval(timer);
        time = 10;
        timer = setInterval(countDown,1000);
    }
    function stopCounter(){
        clearInterval(timer);
    }
    function showAnswers(){
        $("#answer1").addClass('backgroundGreen');
        $('#answer2').addClass('backgroundRed');
        $('#answer3').addClass('backgroundRed');
        $('#answer4').addClass('backgroundRed');
    }
    //function for onclick of answers
    function userAnswer(id){
        $(id).on('click',function(){
            clearInterval(timer);
            //displays questions depending on which question user is on.
            answer = $(this).text();
            console.log(answer);
            //checks answers if right or wrong
            if(answer == questions[i].correct){
                correct++;
            }
            if((answer == questions[i].wrong1) || (answer == questions[i].wrong2) || (answer == questions[i].wrong3)){
                incorrect++;
            }
            nextQuestion();
            showAnswers();
        })
    }
    userAnswer('#answer1');
    userAnswer('#answer2');
    userAnswer('#answer3');
    userAnswer('#answer4');

    //once question displayed, checks questions or if time runs out

    var countDown = function(){
        time--;
        console.log("i variable: "+i)
        console.log("time variable: "+time);
        $('#timer').text(time);
        if(time == 0){
            stopCounter();
            i++
            nextQuestion();
            showAnswers();
        }
    }

})



