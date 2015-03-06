


var Question = function(question, options, answer, explanation=null)
{ // question should be html for simplicity I guess
    this.question = question;
    this.options = options;
    this.answer = answer;
    this.explanation = explanation;
    return this;
}



var sampleQ = Question("What's 3 + 4?",
		       ['-1','12','7','34'],
		       '7',
		       "self-explanatory");



Question.prototype.ask = function()
{
    document.getElementById("question").innerHTML = this.question;
    document.getElementById("answers");
    document.getElementById("a");
    
}
