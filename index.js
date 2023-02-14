const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
]

function superbowlWin(array){
    function findWin(element, index, array){
        return (element.result === 'W')
    }
    if(array.find(findWin)){
        return array.find(findWin).year
    }
    else{
        return array.find(findWin)
    }
}

superbowlWin(record)

// Function should receive one argument (an array of objects) 
// Each object has two properties
// Function shold use find() to test the objects to see if the result is W
// Should return the year when the win occurred
// Returns undefined