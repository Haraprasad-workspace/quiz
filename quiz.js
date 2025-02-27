// a array of questions 
// questions => question,options,ans
const questions = [
    {
        question: "1.What is the capital of Gujarat?",
        options: ["Ahmedabad", "Gandhinagar", "Mumbai", "Surat"],
        ans: 1
    },
    {
        question: "2.What is the capital of Maharashtra?",
        options: ["Ahmedabad", "Gandhinagar", "Mumbai", "Surat"],
        ans: 2
    },
    {
        question: "3.What is the capital of Odisha?",
        options: ["Ahmedabad", "Bhubaneswar", "Mumbai", "Surat"],
        ans: 1
    },
    {
        question: "4.What is the capital of Goa?",
        options: ["Panjim", "Gandhinagar", "Mumbai", "Surat"],
        ans: 0
    },
    {
        question: "5.Which city is known as the Diamond City?",
        options: ["Ahmedabad", "Gandhinagar", "Mumbai", "Surat"],
        ans: 3
    },
    {
        question: "6.Select the city outside Gujarat.",
        options: ["Ahmedabad", "Gandhinagar", "Mumbai", "Surat"],
        ans: 2
    }
];
let question_element = document.getElementById("question");
let option_element=document.getElementById("option_list");
let next_bttn = document.getElementById("next");
let prv_bttn=document.getElementById("previous");
let curr_index=0;
let selected_option=null;
let score=0;

function loadquestion(){
    questions.forEach((ques,index)=>{
    current_question=questions[curr_index];
    question_element.innerText=current_question.question;
    option_element.innerHTML="";    // clears all the options 
    selected_option=null;  //resets the options to null 

    current_question.options.forEach((opt,index)=>{
        let li= document.createElement("li");
        let button = document.createElement("button");
        button.innerText=opt;
        button.addEventListener("click",function() {
            checkanswer(index,button);
        })
        li.appendChild(button);
        option_element.appendChild(li);
    });
    });
};
function checkanswer(selected_opt,button){
    let current_question=questions[curr_index];
    let btns = document.querySelectorAll("#option_list button");
    btns.forEach(bttn=> bttn.disabled=true);

    if(selected_opt===current_question.ans){
        button.style.backgroundColor = "green"; // Correct answer
        button.style.color = "white";
        score++;
    }else{
        button.style.backgroundColor= "red";}

    selected_option=selected_opt;


    setTimeout(()=>{
        curr_index++;
        if(curr_index < questions.length){
            loadquestion();
        }
        else{
            showresults();
        }
    },700);
        
};
next_bttn.addEventListener("click",function(){
    if (selected_option!==null){
        curr_index++;

        if(curr_index<questions.length){
            loadquestion();
        }
        else{
            showresults();
        }
    }
    else{
        alert("please select any one answer ");
    }


})

function showresults(){
    localStorage.setItem("score",score);
    window.location.href="result.html";
}
let submit_btn=document.getElementById("submit");
submit_btn.addEventListener("click",showresults);
loadquestion();
