const quizDB = [
{
	question:"Q1: What is the full form of HTML?",
			a:"Hello To My Land",
			b:"Hay Text Markup Language",
			c:"HyperText Makeup Language",
			d:"Hypertext Markup Language",
			ans:"ans4"
},

{
	question:"Q2: What is the full form of css?",
			a:"Cascading Style Sheets",
			b:"Cascading Style Sheep",
			c:"cartoon Style Sheets",
			d:"Cascading Supper Sheets",
			ans:"ans1"
},


{
	question:"Q3: What is the full form of HTTP?",
			a:"Hypertext Transfer Product",
			b:"Hypertext Text Protocol",
			c:"Hy Transfer Protocol",
			d:"Hypertext Transfer Protocolo",
			ans:"ans4"
},


{
	question:"Q4: What is the full form of js?",
			a:"Javascript",
			b:"Javasupper",
			c:"Juttscript",
			d:"Jordenshoes",
			ans:"ans1"
}



];

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');
const answers = document.querySelectorAll('.answer');
const showscore  = document.querySelector('#showscore');

showscore

let questioncount = 0;
let score = 0;


const loadQuestion = () => {
	const questionlist = quizDB[questioncount];
	question.innerText = questionlist.question;
	option1.innerText = questionlist.a;
	option2.innerText = questionlist.b;
	option3.innerText = questionlist.c;
	option4.innerText = questionlist.d;
}

loadQuestion();

const getCheckAnswer = () => {
	let answer;
	answers.forEach( (curAnsElem) => {
		if(curAnsElem.checked){
			answer = curAnsElem.id;
		}


	});
	return answer;

};

const deselectAll = () => {
		answers.forEach( (curAnsElem) => curAnsElem.checked = false);
	}
submit.addEventListener('click', () => {
	const chekdanswer = getCheckAnswer();
	console.log(chekdanswer);

	if(chekdanswer=== quizDB[questioncount].ans){
		score++;
	};
	questioncount++;

	deselectAll();

	if (questioncount < quizDB.length){
		loadQuestion();

	}else{
		showscore.innerHTML = `
		<h3> You Scored ${score}/${quizDB.length} </h3>
		<button class="btn" onclick="location.reload()">Play Again</button>
		`;
		showscore.classList.remove('scorearea');

	}
});