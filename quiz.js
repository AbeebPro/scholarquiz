let opt1 = document.querySelector(".opt1")
let opt2 = document.querySelector(".opt2")
let opt3 = document.querySelector(".opt3")
let opt4 = document.querySelector(".opt4")
let question = document.querySelector(".question")
let nextBtn = document.querySelector(".next-btn")
let options = document.querySelector(".options")
let scoreCard = document.querySelector(".score-card")
let totalScore = document.querySelector(".total-score")

const quizApp = {
	questions: [
		{
			q: "The HTML and HTTP standard are defined by ____?",
			option: ["Web client", "Internet association", "www consortium", "www"],
			correctAnswer: 3
		},

		{
			q: "The tag used to add images to the HTML document is ?",
			option: ["&ltfont&gt", " &lthr&gt", "&lth1&gt", "&ltimg&gt"],
			correctAnswer: 4
		},
		{
			q: "The ____ passes the information given by the user to a specified program",
			option: [" User", "Programmer", "Web server", "Browser"],
			correctAnswer: 3
		},
		{
			q: "____ is used to store the data within the documents on the server.",
			option: [" XML", " HTML", " DHTML", "CGI"],
			correctAnswer: 1
		},
		{
			q: "The &ltFont&gt tag is similar to ____",
			option: ["&ltBIG&gttag", "&ltBIG&gttag", " &ltMARQUEE&gttag", "&ltBIG&gtand&ltSmall&gt tags"],
			correctAnswer: 4
		},
		{
			q: "What is the name of the location address of the hypertext documents?",
			option: [" Url", " Google", "www", "CGI"],
			correctAnswer: 1
		},
		{
			q: "HTML is what type of language?",
			option: ["Scripting", "Markup", "Programming", "Network protocol"],
			correctAnswer: 2
		},
		{
			q: "Apart from &ltb&gt tag, what other tag makes text bold?",
			option: [" &ltfat&gt", "&ltstrong&gt", "&ltemp&gt", "&ltblack&gt"],
			correctAnswer: 2
		},
		{
			q: "Which of the following is used to set the background colour in CSS",
			option: ["background-colour", "color", " background-color", "background-image"],
			correctAnswer: 3
		},
		{
			q: "Which HTML tag produces the biggesst heading?",
			option: [" &lth7&gt", "&lth9&gt", "&lth4&gt", "&lth1&gt"],
			correctAnswer: 4
		},
		{
			q: "The css lnks properties are.",
			option: [":link, :visited, :hover, :active", " :link,:hover:visited,,:active",
			 "  :visited,:link, :hover, :active", ":visited,:link,:active, :hover"],
			correctAnswer: 1
		},
		{
			q: "Tags and text that are not directly displayed on the page are written in what section?",
			option: ["&lthtml&gt", "&lttitle&gt","&ltbody&gt ", "&lthead&gt"],
			correctAnswer: 4
		},
		{
			q: "All html code must be put inside of these symbols",
			option: ["tags", "less than symbol","curly brackets ", "Angle brackets"],
			correctAnswer: 1
		},
		{
			q: "All  CSS code must be put inside of these symbols",
			option: ["tags", "less than symbol","curly brackets ", "Angle brackets"],
			correctAnswer: 3
		},
		{
			q: "What is css?",
			option: ["Cascading Style Source", "Cascading Style Sheets","Current Stlying Sheets ", "Common Style Sheet"],
			correctAnswer: 2
		},
		{
			q: "What is correct HTML element for inserting a break line? ?",
			option: ["&ltbreak&gt", "&ltbr&gt","&ltlb&gt ", "&ltb&gt"],
			correctAnswer: 2
		},
		{
			q: "Which character is used to indicate an end tag?",
			option: ["&lt", "()","^ ", "/"],
			correctAnswer: 3
		},
		{
			q: "How can you make a bulleted list? ",
			option: ["&ltdl&gt", "&ltol&gt","&ltlist&gt ", "&ltul&gt"],
			correctAnswer: 4
		},
		{
			q: "How can you make a numbered list? ",
			option: ["&ltdl&gt", "&ltol&gt","&ltlist&gt ", "&ltul&gt"],
			correctAnswer: 2
		},
		{
			q: "Which HTML element defines the title of a document ",
			option: ["&lttitle&gt", "&ltmeta&gt","&lthead&gt ", "&ltul&gt"],
			correctAnswer: 1
		},
		{
			q: "Which HTML attribute specifies an alternate text for an image, if the immage cannot be displayed? ",
			option: ["&ltlongdesc&gt", "&lttitle&gt","&ltalt&gt ", "&ltsrc&gt"],
			correctAnswer: 3
		},
	],
	index: 0,
	load: function(){
		if (this.index <= this.questions.length-1){
			question.innerHTML = this.index+1 + " . " + this.questions[this.index].q
			opt1.innerHTML = this.questions[this.index].option[0]
			opt2.innerHTML = this.questions[this.index].option[1]
			opt3.innerHTML = this.questions[this.index].option[2]
			opt4.innerHTML = this.questions[this.index].option[3]
		}else{
			this.endQuiz()
		}
	},
	next: function(){
		this.index++
		this.load()
	},

	check: function(elementToBeSelected){
		let id = elementToBeSelected.className.split("")
		if (id[id.length-1] == this.questions[this.index].correctAnswer){
			this.score++
			this.scoreCard()
			elementToBeSelected.id = "correct"
		}else{
			elementToBeSelected.id = "wrong"
		}	
	},
	enableClick: function(){
		for (let i=0; i <= options.children.length-1; i++){
			options.children[i].style.pointerEvents = "auto"
			options.children[i].id = ""
		}
	},
	disableClick: function(){
		for (let i=0; i <= options.children.length-1; i++){
			options.children[i].style.pointerEvents = "none"
		}
	},
	score: 0,
	scoreCard: function(){
		scoreCard.innerHTML = this.score + "/" +this.questions.length
	},
	endQuiz: function(){
		//scoreCard.style.display = "block"
		totalScore.style.display = "block"
		question.style.display = "none"
		options.style.display = "none"
		nextBtn.style.display = "none"
	},
}

window.load = quizApp.load()

const next = function(){
	quizApp.next()
	quizApp.enableClick()
}

const optionButton = function(elementToBeSelected){
	quizApp.check(elementToBeSelected)
	quizApp.disableClick()
}

const restart = function(){
	window.location.reload()
}