
var average = function(numls)
{
    var sum = numls.reduce(function(a,b){return b+=a;},0);
    return new Rational(sum,numls.length);
}


var AveragesProb = function()
{
    return AveragesType1();

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

