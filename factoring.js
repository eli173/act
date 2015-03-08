




var FactorProb = function()
{
    return (Math.random()>0.5) ? Factor1() : Factor2();
}


var Factor1 = function()
{ // if xy = prod and x+y = sum and x>y>0 then x-y=?
    // x == prod/y, prod/y+y=sum => y^2-sum.y+prod=0
    // uhh... (y-x)(y-y)=0
    // two y's: then check corresp. x's
    // so make the thing factorable!
    var x = Math.round(Math.random()*12)+4;
    var y = Math.round(Math.random()*12)+4;
    var prod = x*y;
    var sum = x+y;
    var qstring = "if <i>x + y = "+String(sum)+"</i> and <i>xy = "+
	String(prod)+" and <i>x&gt;y&geq;0</i> then <i>x - y</i> is";
    var ans = Math.abs(x-y);//String(x)+", "+ String(y);
    var opts = [ans,prod-sum,ans+sum,new Rational(prod,sum),x];
    opts.sort(function(a,b){return Math.random()>0.5;});

    var expl = "To solve this problem, we use a sequence of algebraic manipulations as follows:</br>"
    expl += "In <i>xy = "+String(prod)+
	"</i>, we divide both sides by <i>x</i> to get <i>y = "+
	String(prod)+"/x</i>.</br>"
    expl += "Using this, we can now replace <i>y</i> "+
	"in the other equation with <i>"+String(prod)+"/x</i>.</br>"
    expl += "This gives us <i>x + "+String(prod)+
	"/x = "+String(sum)+"</i>.</br>"
    expl += "We now multiply both sides by <i>x</i> and get <i>"+
	String(prod)+" x^2 = "+String(sum)+"x</i>, "+
	"which can be rewritten as <i>"+
	"x^2 - "+String(sum)+"x + "+String(prod)+" = 0</i>.</br>"
    expl += "We then factor this, getting <i>(x - "+String(x)+")(x - "+
	String(y)+") = 0</i>, so <i>x = "+
	String(x)+", "+String(y)+"</i></br>";
    expl += "Using one of these results, we could figure out "+
	"a corresponding <i>y</i>, and fortunately, "+
	"we see that we get the other solution, "+
	"so we don't need to worry about "+
	"there being multiple solutions for <i>x</i>.";
    var q = new Question(qstring, opts, ans, expl);
    return q;
}


var Factor2 = function()
{
    var vars = ['x','y','a','n','p']
    var thevar = vars[Math.floor(Math.random()*4)];
    // okay these select rand els things are wrong I think...
    var qstring = "Solve for <i>"+thevar+"</i>:</br>"
    var s1 = 0;
    var s2 = 0;
    do
    {
	s1 = Math.floor(Math.random()*12)-6;
	s2 = Math.floor(Math.random()*12)-6;
    } while(s1==0 || s2==0);
    var a = 1;
    var b = s1+s2;
    var c = s1*s2;
    qstring += "<i>"+"x^2 "; // dont need str(a) now..
    qstring += ((b>0)?"+ ":"- ")+String(Math.abs(b));
    qstring += ((c>0)?" + ":" - ")+String(Math.abs(c))+" = 0</i></br>"
	//+ "+String(b)+"x +"+
	//String(c)+" = 0</i></br>";
    var ans = String(s1)+", "+String(s2);
    var opts = [];
    opts.push(ans);
    opts.push(String(b-s1)+", "+String(b+s1));
    opts.push(String(c+s2)+", "+String(c-s1));
    opts.push(String(b*s2)+", "+String(c+s1));
    opts.push(String(s1)+", "+String(s2+s1));
    opts.sort(function(a,b){return Math.random()>0.5;});
    var expl = "todo"
    var q = new Question(qstring, opts, ans, expl);
    return q;
}
