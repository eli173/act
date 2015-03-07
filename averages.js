
var average = function(numls)
{
    var sum = numls.reduce(function(a,b){return b+=a;},0);
    return new Rational(sum,numls.length);
}


var AveragesProb = function()
{
    return (Math.random()>0.5) ? AveragesType1() : AveragesType2();

}




var AveragesType1 = function()
{
    var nums = [];
    var len = Math.round(Math.random()*3)+4;
    for(var i=0;i<len;i++)
    {
	nums[i] = Math.round(Math.random()*99)+1;
    }
    var sum = nums.reduce(function(a,b){return b+=a;},0);
    var ans = average(nums)
    var expl = "Add all the numbers together and divide by the number of numbers";
    var opts = [ans,sum,average([nums[0],nums[len-1]])];
    opts.push(nums[3]);
    opts.push(nums[0]+nums[len-1]);
    opts.sort(function(a,b){return Math.random()>0.5;});
    var qstring = "Find the average of these numbers:</br>"
    for(var i=0;i<len-1;i++)
    {
	qstring += String(nums[i])+", ";
    }
    qstring += String(nums[len-1]);
    var q = new Question(qstring,opts,ans,expl);
    return q;
}

var AveragesType2 = function()
{
    var name = "Ronaldo"
    var qstring = name+" has taken four of the five tests in his math class and gotten the following grades:</br>"
    var avg = [90,94,88][Math.round(Math.random()*2)];
    var grades = [avg,avg,avg,avg];
    for(var i=0;i<4;i++)
    {
	grades[i] += Math.round(Math.random()*8)-4;
    }
    // sanity check
    var ans = avg*5-(grades[0]+grades[1]+grades[2]+grades[3]);
    while(ans>100)
    {
	grades[Math.round(Math.random()*3)] += 1;
	ans = avg*5-(grades[0]+grades[1]+grades[2]+grades[3]);
    }
    var opts = [];
    for(var i=0;i<4;i++)
    {
	opts[i] = Math.round(Math.random()*8)-4+avg;
    }
    opts.push(ans);
    opts.sort(function(a,b){return Math.random>0.5;});
    qstring += String(grades[0])+", "+String(grades[1])+", "+
	String(grades[2])+", "+String(grades[3])+"</br>";
    qstring +="If he wants to get an average of "+String(avg)+
	" for all 5 tests, what grade does he need to get "+
	"on the last test?";
    // TODO
    var expl = "todo"
    var q = new Question(qstring, opts, ans, expl);
    return q;
}
