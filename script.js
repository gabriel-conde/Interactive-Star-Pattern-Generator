// Initialize variables
var myheading = "<h1>Welcome to the Interactive Star Pattern Generator</h1>",
linktag = '<a href="https://github.com/gabriel-conde" target="_blank">My Github</a>',
introtext = "<p>This web page allows you to generate an interactive star pattern based on the number you input.</p>",
begineffect = "<strong>",
endeffect = "</strong>",
beginpara = "<p>",
endpara = "</p>";

// Displaying the value of each variable.
document.write(beginpara + myheading + endpara);
document.write(linktag);
document.write(beginpara + begineffect + introtext + endeffect + endpara);

// The user is prompted to enter a number which is stored in the variable input.
var input = prompt("Hello! Please enter a number between 2 and 30.");

// Checks if the user gave a valid input.
if (input < 2 || input > 30) {
    alert("Sorry! That is not a number between 2 and 30. Please enter a valid number.");
} else {
    // Outer loop to display even numbers of stars
    for (var row = 2; row <= input; row += 2) {
        // Create a paragraph element for each row so that each group of even numbered stars is on a new line.
        document.write(beginpara);
        // Inner loop to display even numbers of stars
        for(var star = 1; star <= row; star ++) {
            // Display stars inside the paragraph
            document.write(begineffect + "⭐" + endeffect);
        }
        // Closes the paragraph element
        document.write(endpara);
    }
    // Displays 'Good Job!' after the outer loop's final iteration.
    document.write(beginpara + begineffect + "Good job!" + endeffect + endpara);
}