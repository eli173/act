
var Question = function(question, options, answer, explanation)
{ // question should be html for simplicity I guess
    explanation = typeof explanation !== 'undefined' ? explanation : null;
    this.question = question;
    this.options = options;
    this.answer = answer;
    this.explanation = explanation;
    return this;
}



Question.prototype.selected = function(choice)
{
    var choiceNum = choice.charCodeAt()-97;
    if(this.options[choiceNum]==this.answer)
    {
	document.getElementById("results").hidden = false;
	document.getElementById("results").innerHTML = "Good Job!";
    }
    else
    {
	document.getElementById("results").hidden = false;
	document.getElementById("results").innerHTML =
	    "Oops!</br>"+this.explanation;
    }
};



Question.prototype.ask = function()
{
    var q = this;
    var ansPreHTML = '<div class="ansletter">'
    var ansMidHTML = '</div> '
    document.getElementById("question").innerHTML = this.question;
    document.getElementById("answers").hidden = false;
    document.getElementById("results").hidden = true;

    document.getElementById("a").onclick = function(){q.selected("a");};
    document.getElementById("b").onclick = function(){q.selected("b");};
    document.getElementById("c").onclick = function(){q.selected("c");};
    document.getElementById("d").onclick = function(){q.selected("d");};
    document.getElementById("e").onclick = function(){q.selected("e");};

    document.getElementById("a").innerHTML =
	ansPreHTML+"A. "+ansMidHTML+this.options[0];
    document.getElementById("b").innerHTML =
	ansPreHTML+"B. "+ansMidHTML+this.options[1];
    document.getElementById("c").innerHTML =
	ansPreHTML+"C. "+ansMidHTML+this.options[2];
    document.getElementById("d").innerHTML =
	ansPreHTML+"D. "+ansMidHTML+this.options[3];
    document.getElementById("e").innerHTML =
	ansPreHTML+"E. "+ansMidHTML+this.options[4];
};





var questionType = "Random";

var nextQuestion = function()
{
    document.getElementById("types").hidden = true;
    var new_q = null;
    if(questionType=="Random")
    {
	var num = Math.floor(Math.random()*3) //number of things...
	switch(num) {
	case 0:
    	    new_q = new IntegerAlgebraProb();
    	    break;
	case 1:
    	    new_q = new AveragesProb();
    	    break;
	case 2:
    	    new_q = new FactorProb();
    	    break;
	}
    }
    else if(questionType=="Algebra")
	new_q = new IntegerAlgebraProb();
    else if(questionType=="Averages")
	new_q = new AveragesProb();
    else if(questionType=="Factoring")
	new_q = new Factor2();
    else if(questionType=="Systems of equations")
	new_q = new Factor1();
    new_q.ask();
}


var selectType = function(type)
{
    document.getElementById("typestatus").innerHTML = type;
    questionType = type;
}

var openTypeSelector = function()
{
    document.getElementById("types").hidden = false;
    document.getElementById("t_algebra").onclick = function()
    {selectType("Algebra")};
    document.getElementById("t_averages").onclick = function()
    {selectType("Averages")};
    document.getElementById("t_factoring").onclick = function()
    {selectType("Factoring")};
    document.getElementById("t_sysofeqns").onclick = function()
    {selectType("Systems of equations")};
    document.getElementById("t_random").onclick = function()
    {selectType("Random")};
}

