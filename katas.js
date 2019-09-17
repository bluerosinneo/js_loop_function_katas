(function(){
    
    
    function oneThroughTwenty() {
        const numbers = []

        for(let i = 1; i <= 20; i++){
            numbers.push(i);
        }

        return numbers;
    }
    //console.log(oneThroughTwenty());

    function evensToTwenty() {
        const numbers = []

        for(let i = 1; i <=20; i++){
            if(i%2 == 0){
                numbers.push(i);
            }
        }

        return numbers;
    }
   // console.log(evensToTwenty());

    function oddsToTwenty() {
        const numbers = []

        for(let i = 1; i <= 20; i++){
            if(i%2 == 1){
                numbers.push(i);
            }
        }

        return numbers;
    }
    //console.log(oddsToTwenty());

    function multiplesOfFive() {
        const numbers = []

        // Your code goes below
        for(let i = 1; i <= 100; i++){
            if(i%5 == 0){
                numbers.push(i);
            }
        }

        return numbers;
    }
    //console.log(multiplesOfFive());

    function squareNumbers() {
        const numbers = []

        // Your code goes below
        // going to make perfect squares untill we go over
        // 100
        let i = 1;
        while(i*i <= 100){
            numbers.push(i*i);
            i = i + 1;
        }

        return numbers;
    }
    //console.log(squareNumbers());

    function countingBackwards() {
        const numbers = []

        // Your code goes below
        for(let i = 20; i >=1; i--){
            numbers.push(i);
        }

        return numbers;
    }
    //console.log(countingBackwards());

    function evenNumbersBackwards() {
        const numbers = []

        // Your code goes below
        for(let i = 20; i >= 1; i--){
            if(i%2 == 0){
                numbers.push(i);
            }
        }

        return numbers;
    }
    //console.log(evenNumbersBackwards());

    function oddNumbersBackwards() {
        const numbers = []

        // Your code goes below
        for(let i = 20; i >= 0; i--){
            if(i%2 == 1){
                numbers.push(i);
            }
        }

        return numbers;
    }
    //console.log(oddNumbersBackwards());

    function multiplesOfFiveBackwards() {
        const numbers = []

        // Your code goes below
        for(let i = 100; i >= 1; i--){
            if(i%5 == 0){
                numbers.push(i);
            }
        }

        return numbers;
    }
    console.log(multiplesOfFiveBackwards());

    function squareNumbersBackwards() {
        // change const to let
        // thank you very much
        let numbers = []

        //first do it in order
        //then reverse it later
        let i = 1;
        while(i*i <= 100){
            numbers.push(i*i);
            i = i + 1;
        }

        numbers = numbers.reverse();
        return numbers;
    }
    console.log(squareNumbersBackwards());
    
    
})();