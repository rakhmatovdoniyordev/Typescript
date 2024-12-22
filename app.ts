
{
    //1-masala
    function evenNumbers(n: number): void{
        let sum : number = 0
        for(let i : number = 1; i <= n; i++){
            if(i % 2 == 0){
                sum = sum + i
            }
        }
        console.log(sum);
    }
    evenNumbers(7)
}

{
    //2-masala
    function bool(n: boolean): number{
        return n === true ? 1 : 0
    }
    console.log(bool(true));

}

{
    //3-masala
    function capitalLetter(n: string): string{
        return n.slice(0,2)
    }
    console.log(capitalLetter("Laylo"));


}

{
    //4-masala
    function realNumber(n: number): number{
        return Math.round(n + 2)
    }
    console.log(realNumber(5.3));

}

{
    //5-masala
    function numForString(n: number): string{
        return (n + 1).toString()
    }
    console.log(numForString(4));

}

{
    //6-masala
    function func(n: string): void{
        for( let i: number = 0; i <= n.length - 1; i++){
            console.log(n[i]);
        }
    }
    func("salom")
}

{
    //7-masala
    function reverse(n: number): string {
        let result = '';
        for (let i: number = n; i >= -n; i--) {
            result += i + ',';
        }
        result = result.slice(0, -1);
        return result;
    }
    console.log(reverse(2));
}

{
    //8-masala
    function trueOrFalse(n: number): boolean{
        return n === 1 ? true : false
    }
    console.log(trueOrFalse(0));

}

{
    //9-masala
    function information(name: string, nation: string): string{
        return `My name is ${name}. I'm ${nation}`
    }
    console.log(information("Doniyor", "Uzbek"));

}