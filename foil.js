


var FoilProb = function()    
{
    return Math.random()<0.2 ? Foil1() : Foil2();
}

var Foil1 = function()
{
    var qstr = "Expand:<br /><i>(";
    var a=0,b=0,c=0,d=0;
    do
    {
	a = Math.round(Math.random()*12)-6;
	b = Math.round(Math.random()*12)-6;
	c = Math.round(Math.random()*12)-6;
	d = Math.round(Math.random()*12)-6;
    } while(a==0 || b==0 || c==0 || d==0);
    qstr += String(a)+"x";
    if(b<0)
	qstr += " - "+String(Math.abs(b));
    else
	qstr += " + "+String(b);
    qstr += ")("+String(c)+"x";
    if(d<0)
	qstr+= " - "+String(Math.abs(d));
    else
	qstr+= " + "+String(d);
    qstr+= ")</i>"
    var mkstr = function(q,w,e)
    {
	var tmpstr = ""
	tmpstr += String(q)+"x^2";
	if(w<0)
	    tmpstr += " - "+String(Math.abs(w))+"x";
	else if (w==0)
	    tmpstr += "";
	else
	    tmpstr += " + "+ String(w)+"x";
	if(e<0)
	    tmpstr += " - "+String(Math.abs(e));
	else if (e==0)
	    tmpstr+= "";
	else
	    tmpstr += " + "+ String(e);
	return tmpstr;
    }
    var ansstr = mkstr(a*c,a*d+b*c,b*d);
    var opts = [ansstr];
    opts.push(mkstr(-a*c,-a*d-b*c,-b*d));
    opts.push(mkstr(a*c,a*d,b*d));
    opts.push(mkstr(b*d,a*d+b*c,a*c));
    opts.push(mkstr(a+c,a-b+c-d,b+d));
    opts.sort(function(a,b){return Math.random()<0.5;});
    var expl = "todo";
    var q = new Question(qstr,opts,ansstr,expl);
    return q;
}

var Foil2 = function ()
{
    var qstr = "Expand:<br /><i>("
    var a=0,b=0;
    do
    {
	a = Math.round(Math.random()*12)-6;
	b = Math.round(Math.random()*12)-6;
    } while (a==0 ||b==0);
    qstr +=String(a)+"x";
    if(b>0)
	qstr += " + "+String(b);
    else
	qstr += " - "+String(Math.abs(b));
    qstr += ")^2</i>"
    var mkstr = function(q,w,e)
    {
	var tmpstr = ""
	tmpstr += String(q)+"x^2";
	if(w<0)
	    tmpstr += " - "+String(Math.abs(w))+"x";
	else if (w==0)
	    tmpstr += "";
	else
	    tmpstr += " + "+ String(w)+"x";
	if(e<0)
	    tmpstr += " - "+String(Math.abs(e));
	else if (e==0)
	    tmpstr+= "";
	else
	    tmpstr += " + "+ String(e);
	return tmpstr;
    }
    var ansstr = mkstr(a*a,2*a*b,b*b);
    var opts = [ansstr];
    opts.push(mkstr(-a*a,2*a*b,-b*b));
    opts.push(mkstr(a*b,a+b+a,-b*b));
    opts.push(mkstr(a*a,a*b,b*b));
    opts.push(mkstr(b*b,2*a*b,a*a));
    opts.sort(function(a,b){return Math.random()>0.5;});
    var expl = "todo";
    var q = new Question(qstr,opts,ansstr,expl);
    return q;
}
