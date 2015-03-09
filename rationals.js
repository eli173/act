

// should be just a utility class?


var Rational = function(num,den)
{
    num = typeof num !== 'undefined' ? num : 1;
    den = typeof den !== 'undefined' ? den : 1;
    if(den==0)
    { //error!
	console.log("Error: can't have 0 as denominator")
	return null;
    }
    this.numerator = num;
    this.denominator = den;
    this.simplify();
    return this;
}

Rational.prototype.simplify = function()
{
    var b=this.numerator;
    var a=this.denominator;
    console.log(a,b);
    var gcd = 1;
    while(b!=0)
    {
	gcd = a % b;
	a = b;
	b = gcd;
	gcd = a;
    }
    this.numerator = this.numerator/gcd;
    this.denominator = this.denominator/gcd;
    if(this.denominator<0)
    {
	this.denominator = -this.denominator;
	this.numerator = -this.numerator;
    }

}

Rational.prototype.toString = function()
{
    if(this.numerator==0)
    {
	return String(0);
    }
    else if(this.denominator==1)
    {
	return String(this.numerator);
    }
    else
    {
	return String(this.numerator)+"/"+String(this.denominator);
    }
}
