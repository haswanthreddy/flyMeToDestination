function flyMeToMyDestination(airportsArray) {
    if (!Array.isArray(airportsArray) || !airportsArray.length) {
        return { error: 'Invalid airports data' }
    }
    // Taking initial step as max
    let maxReachableDestination = airportsArray[0];

    if (maxReachableDestination === 0) {
        return { result: -1 }
    }

  
    // total number of stops required .i.e., the result
    let totalNoOfStops = 1;

  
    // noOfStops left is stops iterations left in arry from the current index
    let noOfStopsLeft = maxReachableDestination;

    // to know maximum number till noOfStops left becomes zero
    let tempMaxReachableDestination = 0;

    /**
     * @description iterating over each element in airports array and
     * among the elements ahead till the index of maxReachableDestination which ever is greater,
     * we take that into tempMaxReachableDestination when the noOfStopsLeft becomes zero, 
     * we assign maxReachableDestinations with tempMaxReachableDestinations value,
     * by doing so we can take maximum steps needed each time, achieving no of stops needed.
     * if inbetween we get a situation where tempMaxreachableDestination is zero it implies that,
     * we can't take further steps and return result as -1.
     */

    for (let i = 1; i < airportsArray.length; i++) {
        const fuel = airportsArray[i];

        if (tempMaxReachableDestination <= fuel) {
            tempMaxReachableDestination = fuel;
        }

        noOfStopsLeft -= 1;

        if (noOfStopsLeft === 0 || (i === airportsArray.length - 1)) {
            if (tempMaxReachableDestination === 0 && noOfStopsLeft === 0) {
                return { result: -1 }
            }

            maxReachableDestination = tempMaxReachableDestination
            tempMaxReachableDestination = 0;
            noOfStopsLeft = maxReachableDestination
            totalNoOfStops += 1
        }

    }

    return { result: totalNoOfStops }
}


const { result: result1, error: error1 } = flyMeToMyDestination([2,1,2,3,1]);
console.log(result1 || error1)

const { result: result2, error: error2 } = flyMeToMyDestination([1,6,3,4,5,0,0,0,6]);
console.log(result2 || error2)

const { result: result3, error: error3 } = flyMeToMyDestination([0,0,0,0,6]);
console.log(result3 || error3)