

var IntegerAlgebraProb = function()
{
    // ax + b = cx + d
    var coeffs = [0,0,0,0];
    var vars = ['x','y','m','a','b','n'];
    do
    {
	for(var i=0;i<4;i++)
	{
	    coeffs[i] = Math.round(Math.random()*15);
	}
    } while((coeffs[0]==0 && coeffs[2]==0) ||
	    (coeffs[0]==0 && coeffs[1]==0) ||
	    (coeffs[2]==0 && coeffs[3]==0) ||
	    (coeffs[0]-coeffs[2]==0));
    var thevar = vars[Math.round(Math.random()*(vars.length-1))];
    var qstring = "Solve for <i>"+thevar+"</i>:</br>";
    var a = coeffs[0], b = coeffs[1], c = coeffs[2], d = coeffs[3];
    var get_side_str = function(f,s,vbl)
    {
	var retstr = ""
	if(f==0)
	    retstr += "";//retstr += String(b);
	else
	    retstr += String(f)+vbl;
	if(s>0)
	    retstr += " + "+ String(s);
	else if(s<0)
	    retstr += " - "+ String(Math.abs(s));
	return retstr;
    }
    qstring += get_side_str(a,b,thevar) + 
	" = " +
	get_side_str(c,d,thevar);
    var ans = new Rational(d-b,c-a);
    var opts = [];
    opts.push(ans);
    if(b-d!=0)
	opts.push(new Rational(a-c,b-d));
    opts.push(new Rational(b-d,c-a));
    opts.push(a+b+c+d);
    while(opts.length<5)
    {
	opts.push(Math.round(Math.random()*10));
    }
    opts.sort(function(a,b){return Math.random()>0.5;});
    var expl = "no explanation yet";
    var q = new Question(qstring,opts,ans,expl);
    return q;
}
