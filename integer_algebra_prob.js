
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
    if (n<0&&d<0)
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
    var thevar = vars[Math.round(Math.random()*vars.length)];
    qstring = "Solve for <it>x</it>:</br>";
    qstring += this.get_a_side(coeffs[0],coeffs[1]) +
	" = " +
	get_a_side(coeffs[2],coeffs[3]);
    var ans = this.get_answer(coeffs[0],coeffs[1],coeffs[2],coeffs[3]);
    var opts = [];
    opts.append(ans);
    
    var q = Question();
}


IntegerAlgebraProb.prototype.get_options = function(coeffs)
{
    var opts = [];
    opts.append(this.get_answer)
}

IntegerAlgebraProb.prototype.get_answer = function(a,b,c,d)
{
    var num = d - b;
    var den = a - c;
    var simpd = simplify(num,den);
    num = simpd[0];
    den = simpd[1];
    return String(num)+"/"+String(den);
}

IntegerAlgebraProb.prototype.get_a_side = function(a,b)
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
