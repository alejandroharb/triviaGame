/* To Do:
    1. Make questions into array rather than an object (turn it back)
    2. create end of game page displaying correct and incorrect variables
*/
$(document).ready(function(){
    var questions =[
        {
        question: "Who invented Calculus?",
        answer: 4,
        choices: {
            1: "Stephen Hawking",
            2: "Thomas Edison",
            3: "Albert Einstein",
            4: "Sir Issac Newton"
            }
        },
        {
        question: "What's the largest organ in the human body?",
        answer: 1,
        choices: {
            1: "skin",
            2: "liver",
            3: "lungs",
            4: "intestines"
            }
        },
        {
            question: "How long is the human DNA?",
            answer: 4,
            choices: {
                1: "2 cm",
                2: "5 mm",
                3: "500 cm",
                4: "2 meters"
            }
        },
        {
            question: "Roughly how many cells are in a human body?",
            answer: 3,
            choices: {
                1: "200,000",
                2:"1 million",
                3: "30 million",
                4: "30 trillion"
            }
        },
        {
            question: "How old is the earth?",
            answer: 1,
            choices: {
                1: "4.5 billion years old",
                2:"5000 years old",
                3:"100,000 years old",
                4:"3 trillion years old"
            }
        },
        {
            question: "What organ works the hardest?",
            answer: 2,
            choices: {
                1:"heart",
                2: "brain",
                3:"tongue",
                4:"liver"
            }
        },
        {
            question: "How many planets in the Universe could potentially hold life?",
            answer: 4,
            choices: {
                1:"10",
                2:"3,000",
                3:"1",
                4: "60 billion"
            }
        },
        {
            question: "What is light?",
            answer: 3,
            choices:{
                1: "A particle",
                2: "A wave",
                3: "Both a wave and particle",
                4: "Atom",
            }
        },
        {
            question: "Stranded on an island, what will kill you first?",
            answer: 3,
            choices:{
                1: "Not eating",
                2: "Not drinking water",
                3: "Not sleeping",
                4: "No shelter",
            }
        },
        {
            question: "Stranded on an island, what will kill you last?",
            answer: 1,
            choices:{
                1: "Not eating",
                2: "Not drinking water",
                3: "Not sleeping",
                4: "No shelter",
            }
        }
    ];
    var next;
    var timer;
    var correct = 0;
    var incorrect = 0;
    var i = 0;
    var time;
    //click listeners for answers
    userAnswer('#answer1');
    userAnswer('#answer2');
    userAnswer('#answer3');
    userAnswer('#answer4');

    //starts game when START button clicked
    function startGame(){
        $('#start').on('click', function(){
            $('.triviaQuestions').removeClass('noShow')
            displayQuestions();
            $("#start").addClass('noShow');
            $("#finalScore").addClass('noShow');
        })
    }
    startGame();

    //displays questions after each is answered or time runs out
    function displayQuestions(){
        //restarts countdown timer at each question
        clearTimeout(next);
        stopCounter();
        counter();
        //removes colors denoting correct answer for previous question
        $('#answer1').removeClass('backgroundRed backgroundGreen');
        $('#answer2').removeClass('backgroundRed backgroundGreen');
        $('#answer3').removeClass('backgroundRed backgroundGreen');
        $('#answer4').removeClass('backgroundRed backgroundGreen');
        //displays questions in DOM
        $("#question").html("<h2>"+questions[i].question+ "</h2");
        $("#answer1").text(questions[i].choices[1]);
        $("#answer2").text(questions[i].choices[2]);
        $("#answer3").text(questions[i].choices[3]);
        $("#answer4").text(questions[i].choices[4]);
    }
    //moves to next array element: next question
    function nextQuestion(){
        i++;
        //checks if at end of array to finish game
        if(i == questions.length){
            return gameEnd();
        }
        stopCounter();
        //timeout for displaying answers
        var next = setTimeout(function(){ displayQuestions() },3000);
    }
    //click listener for each answer
    function userAnswer(id){
        $(id).on('click',function(){
            clearInterval(timer);
            userAnswer = $(this).text();
            //variable contains the number of correct answer
            var answerNumber = questions[i].answer;
            //variable contains the string of correct answer
            var answerString = questions[i].choices[answerNumber]
            //checks answers if right or wrong
            if(userAnswer == answerString){
                correct++;
                //displays that answer was correct
                $(this).addClass("backgroundGreen");
            } else{
                incorrect++;
                //displays answer was wrong and shows correct answer
                $(this).addClass("backgroundRed");
                $(this).append("p").text("nope, correct answer is: "+answerString )
            }
            nextQuestion();
        });
    }
    //time countdown, checks if time runs out
    var countDown = function(){
        time--;
        console.log("i variable: "+i)
        console.log("time variable: "+time);
        $('#timer').text(time);
        if(time == 0){
            stopCounter();
            nextQuestion();
            showAnswers();
        }
    }
    //timer for each question: 10 seconds
    var counter = function(){
        clearInterval(timer);
        time = 10;
        timer = setInterval(countDown,1000);
    }
    //stops timer
    function stopCounter(){
        clearInterval(timer);
    }
    //displays game score
    var gameEnd = function(){
        stopCounter();
        $(".triviaQuestions").addClass("noShow");
        $('#correct').text(correct);
        $('#incorrect').text(incorrect);
        $('#finalScore').removeClass("noShow");
    }
    //click listener for restarting game
    function replay(){
        $('#reset').on('click', function(){
            reset();
            $('.triviaQuestions').removeClass('noShow')
            displayQuestions();
            $("#start").addClass('noShow');
            $("#finalScore").addClass('noShow');
        });
    }
    replay();
    //resets variables
    var reset = function(){
        i = 0;
        correct = 0;
        incorrect =0;
    }
});



