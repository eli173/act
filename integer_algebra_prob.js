
// gotta check for div by 0

var gcd = function(a,b)
{
    var f = a;
    var s = b;
    var tmp = 0;
    while(s!=0)
    {
	tmp = f % s;
	f = s;
	s = tmp;	
    }
    return f;
}


var simplify_frac = function(n, d)
{
    if (d<0) // if both neg then pos, if just d then swap
    {
	n = -n;
	d = -d;
    }
    var thegcd = gcd(Math.abs(n),Math.abs(d));
    return [n/thegcd, d/thegcd];
}


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
    this.coeffs = coeffs;
    var thevar = vars[Math.round(Math.random()*vars.length)];
    var qstring = "Solve for <it>x</it>:</br>";
    qstring += this.get_a_side(coeffs[0],coeffs[1],thevar) +
	" = " +
	this.get_a_side(coeffs[2],coeffs[3],thevar);
    var ans = this.get_answer();
    var opts = this.get_options();
    var expl = "no explanation yet"
    var q = new Question(qstring,opts,ans,expl);
    return q;
}


IntegerAlgebraProb.prototype.get_options = function()
{
    var opts = [];
    var a = this.coeffs[0];
    var b = this.coeffs[1];
    var c = this.coeffs[2];
    var d = this.coeffs[3];
    opts.push(this.get_answer());
    if(b-d!=0)
    {
	var simpd = simplify_frac(a-c,b-d);
	opts.push(String(simpd[0])+"/"+String(simpd[1]));
	simpd = simplify_frac(d-b,a-c);
	opts.push(String(simpd[0])+"/"+String(simpd[1]));
    }
    opts.push(a+b+c+d);    
    if(a!=0)
    {
	simpd = simplify_frac(c+d-b,a);
	opts.push(String(simpd[0])+"/"+String(simpd[1]));
    }
    while(opts.length<5)
    {
    opts.push(Math.round(Math.random()*10));    
    }
    opts.sort(function(a,b)
	      {
		  return Math.random()>0.5;
	      })
    return opts;
}

IntegerAlgebraProb.prototype.get_answer = function()
{
    var num = this.coeffs[3] - this.coeffs[1];
    var den = this.coeffs[0] - this.coeffs[2];
    var simpd = simplify_frac(num,den);
    num = simpd[0];
    den = simpd[1];
    return String(num)+"/"+String(den);
}

IntegerAlgebraProb.prototype.get_a_side = function(a,b,thevar)
{
    var retstr = "";
    if(a==0)
    {
	retstr += String(b);
    }
    else
    {
	retstr += String(a) + thevar;
    }
    if(b>0) // dont need to do anything if b==0
    {
	retstr += " + " + String(b);
    }
    else if(b<0)
    {
	retstr += " - " + String(Math.abs(b));
    }
    return retstr;
}
