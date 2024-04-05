//NOTE: This JavaScript file is linked to grade.html

// 1. We create a function gradeGenerator that will help take as input a student's mark and 
// return as output the grade
function gradeGenerator() {
    let marks = parseFloat(prompt("ENTER THE STUDENT'S MARK HERE(Should be between 0 and 100):"));
    // Here we prompt the user to enter the student's marks, 
    // The entered value is stored in variable marks
    if (isNaN(marks) || marks < 0 || marks > 100) {
        alert("WRONG INPUT: Kindly enter a number which should be between 0 and 100");
        return;
    }
    // isNaN(marks) checks if the value entered is not a number/ greater than 100 or less than 0
    // if so, it displays error message above.

    let grade;
    // We declare a variable grade which will store the grade after input
    if (marks > 79) {
        grade = 'A';
    } else if (marks >= 60 && marks <= 79) {
        grade = 'B';
    } else if (marks >= 49 && marks <= 59) {
        grade = 'C';
    } else if (marks >= 40 && marks <= 49) {
        grade = 'D';
    } else {
        grade = 'E';
    }
    // The above conditions will check the marks within the range specified and return the associated grade. 

    alert("This is the student's grade: " + grade);
    // An alert message which brings back the generated grade.
}