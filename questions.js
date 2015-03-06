


var Question = function(question, options, answer, explanation=null)
{ // question should be html for simplicity I guess
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
    console.log("bef")
    console.log(this)
    console.log("aft")
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


var sampleQ = new Question("What's 3 + 4?",
			   ['-1','12','7','34','3/4'],
		       '7',
		       "self-explanatory");



