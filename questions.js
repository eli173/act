

var Type = function(name,generator)
{
    name = typeof name !== 'undefined' ? name : "";
    generator = typeof generator !== 'undefined' ? generator : null;
    this.name = name;
    this.generator = generator;
    return this;
};


    
var types = [
    new Type("Algebra", IntegerAlgebraProb),
    new Type("Averages", AveragesProb),
    new Type("Factoring",Factor1),
    new Type("Systems of equations",Factor2),
    new Type("Random",nextQuestion)
];

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


var sampleQ = new Question("What's 3 + 4?",
			   ['-1','12','7','34','3/4'],
		       '7',
		       "self-explanatory");



var nextQuestion = function()
{
    var new_q = null;
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
    new_q.ask();
}


var openTypeSelector = function()
{
    var typesEl = document.getElementById("types");
    var innerstr = "";
    for(var i=0;i<types.length;i++)
    {
	innerstr += '<div class="type">';
	innerstr += types[i].name;
	innerstr += '</div>';
    }
    typesEl.innerHTML = innerstr;
    typesEl.hidden = false;
    var divs = document.getElementsByClassName("type");
    console.log(divs)
    for(i=0;i<divs.length;i++)
    {
	divs[i].onClick = function(){selectType(divs[i].innerHTML);};
    }
    
    
}

var selectType = function(type)
{
    console.log(type);
}
