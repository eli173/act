


var WorkBackProb = function()
{
    var fst = (Math.round(Math.random()*4)+1)*10;
    var f_to_s = random_int(5)+2;
    var snd = fst + f_to_s;
    var s_to_t = random_int(3)+1;
    var thd = s_to_t * (fst + f_to_s);
    var qstr = "The second year a company went into business, "+
	"they made "+String(f_to_s)+" million more than the first year "+
	"they were in business. The third year, they made "+
	String(s_to_t)+" times as much as in the second year. "+
	"The third year, they made "+String(thd)+" million dollars. "+
	"How many millions of dollars did they make "+
	"in their first year?";
    var ans = fst;
    var opts = [ans];
    opts.push(snd);
    opts.push(thd-fst);
    opts.push(snd+fst);
    opts.push(fst+4);
    var expl = "todo";
    var q = new Question(qstr, opts, ans, expl);
    return q;
}
