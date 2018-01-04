function stringCalc(string) {
    var splitString = string.toLowerCase().split(" ");

    if (splitString.length !== 4 || isNaN === splitString[1] || isNaN === [3]) {
        console.log("ERROR: Syntax. Please Review Input");
    };

    switch (string) {
        case "multiply":
            splitString[1] * splitString[3];

        case "divide":
            splitString[1] / splitString[3];
    }
}