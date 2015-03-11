


var random_int = function(n)
{ // returns random int between 0 (inclusive) and n
    return Math.round(Math.random()*n);
}


var random_element = function(array)
{
    return array[random_int(array.length)];
}
