const quizData=[{
    question:"Which planet in the solar system is known as the “Red Planet”?",

a: "Venus",
b: "Earth",
c: "Mars",
d: "Jupiter",
correct : "c",
},
{
question:"Who wrote the novel “War and Peace”?",

a:"Anton Chekhov",
b:"Fyodor Dostoevsky",
c:"Leo Tolstoy",
d:"Ivan Turgenev",
correct : "c",
},
{
question:" What is the capital of Japan?",

a: "Beijing",
b:"Tokyo",
c:"Seoul",
d:"Bangkok",
correct : "b",
}
];








const quiz=document.getElementById("quiz");
const countQuestion=document.getElementById("count-question");
const tottleNumberofQuestion=document.getElementById("tol-num-que");
const questionNumber=document.getElementById("question-number");
const questionTitle=document.getElementById("question");
const answerLable=document.querySelectorAll(".answer-lable");
const nextQuestionbtn=document.getElementById("next-question-btn");
const allInputs=document.querySelectorAll("input[type='radio']");
const submitequiz=document.getElementById("submite");
const resultEl=document.getElementById("result");
const scoreEl=document.getElementById("score");

let currentQtn=0;
let answered=0;

const loadQuiz=()=>{
    countQuestion.innerHTML=`${currentQtn +1}`;
    tottleNumberofQuestion.innerHTML=quizData.length;
    questionNumber.innerHTML=`${currentQtn +1}`;
    questionTitle.innerHTML=quizData[currentQtn].question;
    answerLable[0].innerHTML=quizData[currentQtn].a;
    answerLable[1].innerHTML=quizData[currentQtn].b;
    answerLable[2].innerHTML=quizData[currentQtn].c;
    answerLable[3].innerHTML=quizData[currentQtn].d;

    reset();
    if(currentQtn==quizData.length-1){
        nextQuestionbtn.style.display="none";
        submitequiz.style.display="block";
    }
}
const reset =()=>{
    allInputs.forEach((allInputs)=>{
        allInputs.checked=false;
    })
}

nextQuestionbtn.addEventListener("click",()=>{
    let answer=getSelected();
    if(answer){
        if(answer===quizData[currentQtn].correct){
            answered++;
        }
        currentQtn++;
        if(currentQtn<quizData.length){
            loadQuiz();
        }
    }
});

submitequiz.addEventListener("click",()=>{
    let answer=getSelected();
    if(answer===quizData[currentQtn].correct){
        answered++;
    };
    currentQtn++;
    if(getSelected()){
    quiz.style.display="none";
    resultEl.style.display="block";
    scoreEl.innerHTML=`Questions Answered Correctly ${answered}/${quizData.length}`;
    }
})

const getSelected=()=>{
    let answer;
    allInputs.forEach((allInputs)=>{
        if(allInputs.checked){
            answer=allInputs.value;
        }
    });
    return answer;
}
loadQuiz();