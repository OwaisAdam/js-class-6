
// Question no 1

function greetUser() {
    var firstName = prompt("owais:");
    var lastName = prompt("Adam:");
    

    var fullName = firstName + " " + lastName;

  
    alert("Hello, " + fullName + "!");
}
greetUser();


// Question no 2

function getPhoneModelLength() {
    
    var phoneModel = prompt("Samsung galaxy:");

    var length = phoneModel.length;

    document.write("<p>The length of your favorite mobile phone model is: " + length + "</p>");
}
getPhoneModelLength()

// Question no 3

function findIndexOfN() {
    
    var word = "Pakistani";

    var n = 7;
    var index = word.indexOf("n");
     

   
    document.write("<p>The index of 'n' in 'Pakistani' is: " + index + "</p>");
}
findIndexOfN();




// Question no 4

function findLastIndexOfL() {
  
    var word = "Hello World";


    var lastIndex = word.lastIndexOf("l");

   
    document.write("<p>The last index of 'l' in 'Hello World' is: " + lastIndex + "</p>");
}
findLastIndexOfL();





// Question no 5



function findCharacterAtIndex() {
    
    var word = "Pakistani";

    var character = word.charAt(3);
    


    document.write("<p>The character at index 3 in 'Pakistani' is: " + character + "</p>");
}
findCharacterAtIndex();





// Question no 6



function replaceSubstring() {
    
    var city = "Hyderabad";

    
    var newCity = city.replace("Hyder", "Islamabad");

    
    document.write("<p>The modified city name is: " + newCity + "</p>");
}
replaceSubstring();




// Question no 7


function replaceAndWithAmpersand() {
    
    var message = "Ali and Sami are best friends. They play cricket and football together.";

 
    var newMessage = message.replace(/and/g, "&");

  
    document.write("<p>The modified message is: " + newMessage + "</p>");
}
replaceAndWithAmpersand();




// Question no 8

function convertStringToNumber() {
    
    var stringNumber = "472";

    
    var number = parseInt(stringNumber);

    
    document.write("<p>Value: " + number + "</p>");
    document.write("<p>Type: " + typeof(number) + "</p>");
}
convertStringToNumber();


// Question no 9


function isValidUsername(username) {
    
    var specialSymbols = ['@', '.', ',', '!'];

    for (var i = 0; i < username.length; i++) {
        
        if (specialSymbols.includes(username[i])) {
            return false;
        }
    }
    return true; 
}

function validateUsername() {
    var username = prompt("owais:");

   
    if (!isValidUsername(username)) {
        alert("Owais Adam.");
        validateUsername(); 
    } else {
        alert("Username is valid: " + username);
    }
}
validateUsername();





// Question no 10

var A = ["cake", "apple pie", "cookie", "chips", "patties"];

function searchItem() {
    
    var userInput = prompt("Pizza Cake:");

    
    var found = false;
    for (var i = 0; i < A.length; i++) {
        if (A[i].toLowerCase() === userInput.toLowerCase()) {
            found = true;
            break;
        }
    }

    
    if (found) {
        alert("Yes, \"" + userInput + "\" cake", "apple pie", "cookie", "chips", "patties.");
    } else {
        alert("No, \"" + userInput + "\" cake", "apple pie", "cookie", "chips", "patties.");
    }
}


searchItem();


// Question no 11


function isValidPassword(password) {
    
    var hasAlphabets = /[a-zA-Z]/.test(password);
    var hasNumbers = /[0-9]/.test(password);

    var startsWithNumber = /^[0-9]/.test(password);

    var isLongEnough = password.length >= 6;

   
    return hasAlphabets && hasNumbers && !startsWithNumber && isLongEnough;
}

function validatePassword() {
    var password = prompt("Enter your password:");

    
    if (!isValidPassword(password)) {
        alert("Invalid password.");
        validatePassword(); 
    } else {
        alert("Password is valid.");
    }
}


validatePassword();


// Question no 12


function displayLastCharacter() {
  
    var userInput = prompt("Enter some text:");

    
    if (userInput !== null && userInput !== '') {
       
        var lastCharacter = userInput.charAt(userInput.length - 1);

        
        alert("The last character of the input is: " + lastCharacter);
    } else {
        
        alert("You did not enter any text.");
    }
}


displayLastCharacter();




// Question no 13


function countOccurrences() {
    
    var str = "The quick brown fox jumps over the lazy dog";
    
   
    var lowerStr = str.toLowerCase();

    var word = "the";

 
    var words = lowerStr.split(" ");

   
    var count = 0;

    
    for (var i = 0; i < words.length; i++) {
        if (words[i] === word) {
            count++;
        }
    }

    
    alert("Number of occurrences of the word 'the': " + count);
}


countOccurrences();



