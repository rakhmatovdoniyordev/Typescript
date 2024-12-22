{
    //1-masala
    function evenNumbers(n) {
        var sum = 0;
        for (var i = 1; i <= n; i++) {
            if (i % 2 == 0) {
                sum = sum + i;
            }
        }
        console.log(sum);
    }
    evenNumbers(7);
}
{
    //2-masala
    function bool(n) {
        return n === true ? 1 : 0;
    }
    console.log(bool(true));
}
{
    //3-masala
    function capitalLetter(n) {
        return n.slice(0, 2);
    }
    console.log(capitalLetter("Laylo"));
}
{
    //4-masala
    function realNumber(n) {
        return Math.round(n + 2);
    }
    console.log(realNumber(5.3));
}
{
    //5-masala
    function numForString(n) {
        return (n + 1).toString();
    }
    console.log(numForString(4));
}
{
    //6-masala
    function func(n) {
        for (var i = 0; i <= n.length - 1; i++) {
            console.log(n[i]);
        }
    }
    func("salom");
}
{
    //7-masala
    function reverse(n) {
        var result = '';
        for (var i = n; i >= -n; i--) {
            result += i + ',';
        }
        result = result.slice(0, -1);
        return result;
    }
    console.log(reverse(2));
}
{
    //8-masala
    function trueOrFalse(n) {
        return n === 1 ? true : false;
    }
    console.log(trueOrFalse(0));
}
{
    //9-masala
    function information(name, nation) {
        return "My name is ".concat(name, ". I'm ").concat(nation);
    }
    console.log(information("Doniyor", "Uzbek"));
}
