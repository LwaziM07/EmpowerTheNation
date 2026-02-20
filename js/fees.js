let firstAid = document.getElementById("firstAid"); //"getElementById" is a method called to read/ edit or return an HTML element(w3schools.com, 2024.). 
let sewing = document.getElementById("sewing");//This enables accessing each of the checkboxes and form elements in the script.
let landscaping = document.getElementById("landscaping");
let lifeSkills = document.getElementById("lifeSkills");
let childMinding=document.getElementById("childMinding");
let cooking = document.getElementById("cooking");
let gardenMaintenance = document.getElementById("gardenMaintenance");

const form = document.getElementById('enrolementForm')
//Setting Variables
const six_month_course = 1500;       
const six_week_course = 750;

let totalAfterDiscount = 0;
let vat = 0;
let priceWithVat = 0;
let discountPercentage = 0;

//"sessionStorage" was used as a temporary storage holder for values passed from other pages "getItem" is used to recieve those values (w3schools, 2024).
document.getElementById("lifeSkills").checked = sessionStorage.getItem("checkedLifeSkills") === 'true';
document.getElementById("landscaping").checked = sessionStorage.getItem("checkedLandscaping") === 'true';
document.getElementById("cooking").checked = sessionStorage.getItem("checkedCooking") === 'true'; 
document.getElementById("sewing").checked = sessionStorage.getItem("checkedSewing") === 'true';
document.getElementById("gardenMaintenance").checked = sessionStorage.getItem("checkedGardenMaintenance") === 'true';
document.getElementById("firstAid").checked = sessionStorage.getItem("checkedFirstAid") === 'true'; 
document.getElementById("childMinding").checked = sessionStorage.getItem("checkedChildMinding") === 'true'; 


// If the user reloads the webpage, all checkboxes will be un-checked. This is also an error handler to prevent checkboxes to be checked if the user un-checked the checkboxes.
if(window.location.reload){ // W3Schools (2024), demonstrates how to reload the web page.
    sessionStorage.clear(); // W3Schools (2024), demonstrates how to clear sessionStorage
}

// (The IIE, 2024), demonstrates how to implement functions.
function check() {

    let total = 0;
// An object (courses) was created to categorize the courses into six_month and six_week, each with different prices.
    let courses = {
        six_week: [cooking, gardenMaintenance, childMinding],
        six_month: [sewing, lifeSkills, firstAid, landscaping] 
    };

    //Loop structure for the six month courses

    for (let course of courses.six_month) //using a "for..loop" helps when wanting to iterate over objects of an array (w3schools, 2024)
        //This "for..of loop is used to iterate over the courses of each course type"
        
    {
        if (course.checked) { //This if statement is used to check if any of the chekboxes inside of their repective course types are checked.
            //If any are checked, then the value associated with the courses' course type is accumulated with the total (The IIE, 2024).
            total += six_month_course;
        }
    }

    //Loop structure for the six week courses

    for (let course of courses.six_week)  //using a "for..loop" helps when wanting to iterate over objects of an array (w3schools, 2024)
    //This "for..of loop is used to iterate over the courses of each course type"
        
    {
        if (course.checked) { //This if statement is used to check if any of the chekboxes inside of their repective course types are checked.
            //If any are checked, then the value associated with the courses' course type is accumulated with the total (The IIE, 2024).
            total += six_week_course;
        }
    }


    let selectedCourses = [
        gardenMaintenance.checked,
        firstAid.checked,
        cooking.checked,
        childMinding.checked,
        landscaping.checked,
        lifeSkills.checked,
        sewing.checked
    ]. filter(Boolean).length   /* "filter (Boolean)" is a Javascript method used in filtering arrays for any false values and removes them,

                                        if checkboxes are checked ,e.g."checkbox.checked" it will return a true value.
                                        if checkboxes are unchecked, it will return a false value and will be removed from the array (w3schools, 2024)*/
            
                                        /* The ".lenght" property sets or returns the number of selected checkboxes in the array
                                        It looks at the number of values left inside the array after it's been filtered and takes note of the remaining values.(w3schools, 2024)*/


    // Applying the discount thats based on the number of selected courses.(The IIE, 2024)
    let discount = 0;
    
    //If statements that determine the discount based on the length of the values in the array.
    
    if (selectedCourses === 2) {
        discount = 0.05;
    } else if (selectedCourses === 3){
        discount = 0.10;
    } else if (selectedCourses > 3){
        discount = 0.15;
    }

    // Applying the discount to the total Price
    discountPercentage = discount * 100
    let discountAmount = total * discount;
    totalAfterDiscount = total - discountAmount;
    
    // Calculating the VAT and the total price with VAT
    const vat = totalAfterDiscount * 0.15
    const priceWithVat = totalAfterDiscount + vat;

     // Displayong the prices and making sure they update.           
    document.getElementById("totalPrice").textContent = totalAfterDiscount.toFixed(2); // (toFixed) Makes sure prices are displayed with two deimal places (w3schools, 2024)
    document.getElementById("vatPrice").textContent = vat.toFixed(2); // (textContent) Makes sure only the text within the tag is displayed and not the tags itself(w3schools, 2024) 
    document.getElementById("discount").textContent = discountPercentage+"%";
    document.getElementById("totalWithVAT").textContent = priceWithVat.toFixed(2);


    document.getElementById("totalPriceField").value ="R"+ total.toFixed(2); //Here we use ".value" assign the value of the calculated values to the html elemets on the fees html file (W3schools, 2024).
    document.getElementById("vatPriceField").value = "R" + vat.toFixed(2);
    document.getElementById("totalWithVATField").value = "R"+ priceWithVat.toFixed(2);

}

check(); // Calling the function to execute


// function to clear sessionStorage data and clear all form data to its original state,
//setting all of the price calculations back to zero as a result. This helps users start over without any leftover data.      
function clearData(){
    sessionStorage.clear(); // (W3Schools, 2024)

    document.getElementById('enrolementForm').reset();

    document.getElementById("discount").textContent = "0%";
    document.getElementById("totalWithVAT").textContent = "0.00";
    document.getElementById("totalPrice").textContent = "0.00";
    document.getElementById("vatPrice").textContent = "0.00";      
     
}
    // function to check if at least one checbox is checked.
    function checkCourseSelection() {
        let courseIsSelected = false; //this is our flag variable that is initialized to false to help track for any changes that may occur in the loop in this case, the checkboxes that may be checked during the loop (The IIE, 2024).
        
        for (let index = 0; index < checkboxes.length; index++) {

            // using a "for" Loop to iterate over each checkbox in the checkboxes array and set "courseIsSelected" to true 
            //if any of the checkboxs are checked"(W3Schools, 2019).

            //index starts at 0 and uncrements until it reaches the total number of checkboxes in the array(checkboxes.length)

            if (checkboxes[index].checked) {

                //An if statement is used to check if the checkbox at the curent checkbox (checkbox[index])is checked.

                courseIsSelected = true; // if the checkbox is checked, then the flag variable "courseIsSelected" is set to true.

                break; //break is then used to exit the loop when at least one checkbox is found (W3schools, 2024).
            }
        }
        if (!courseIsSelected) { 
            //An if satement is then set up to check if "courseIsSelected" is still false to then alert the user that at least one course should be ticked,
            //if no courses are selected.
            
            alert ("Please select at least one course before submitting.");
            return false; // Returning booloeans to a function (Barker, 2020).
            
            //if "courseIsSelected" is false, the booloean "false" is returned to the function, 
            //preventing submission as a result.
        }
        return true; // Returning booloeans to a function (Barker, 2020).
        
        //if "courseIsSelected" is true, then, the function has the booloean true returned to 
        //it and proceed with the submission if it is valid,

    }

    form.addEventListener('submit', function(event){
        //An event listener is added to the form so that whenever the user presses submit, if no course was selected it will run 
        if (!checkCourseSelection()){

            event.preventDefault() //(The IIE, 2024)
            //If no course is selected before pressing submit, then checkCourseSelection() returns "false", 
            //which will prevent the function of mailing the email from taking place using the "preventDefault() as that would be the forms "default function".
        }
    })

// using eventListener for dynamic calculation.

const checkboxes = [firstAid, sewing, landscaping, lifeSkills, childMinding, cooking, gardenMaintenance];

//event listeners are added to each checkbox to trigger the check() function whenever the user changes thir course selection.
//enabling dynamic updating of prices, discounts and VAT (w3schools, 2024).

checkboxes.forEach(checkbox => {
//"forEach()" is a method used to call a function to each element of an array (w3schools, 2024).   
    checkbox.addEventListener('change', check);
    //'change is an HTML DOM Event used to mark when the content of a form element has changed(checkbox) .
    //and "check" is the function used to to calculate and display the prices and discounts based on which checkbox has been "changed" (is checked or not)(W3schools, 2019)

}); // Together it is an event listener that listens for the "change" in the chechkbox when it it is checked / unchecked and will trigger the check() function as a result.


 /*

    Reference List:

    Barker, K. 2020. Returning boolean values in JavaScript - Kieran Barker. [online]. Kieran Barker. Available at: https://barker.codes/blog/returning-boolean-values-in-javascript/ [Accessed 31 Oct. 2024].

    w3Schools. 2024. HTML DOM Element textContent Property. [Online]. Available at: https://www.w3schools.com/jsref/prop_node_textcontent.asp [Accessed 5 Oct. 2024].

    www.w3schools.com. 2024. HTML DOM getElementById() Method. [online] Available at: https://www.w3schools.com/jsref/met_document_getelementbyid.asp [Accessed 5 Oct. 2024].

    www.w3schools.com. 2024. HTML DOM Input Checkbox checked Property. [online] Available at: https://www.w3schools.com/jsref/prop_checkbox_checked.asp [Accessed 5 Oct. 2024].

    W3schools. 2024. HTML DOM Input Text value Property. [online] Available at: https://www.w3schools.com/jsref/prop_text_value.asp.

    The IIE. 2024. HIGHER CERTIFICATE OF MOBILE APPILCATION AND WEB DEVELOPMENT [WEDE5020/d/p/w MODULE MANUAL/GUIDE 2024]. The Independent Institute of Education: Unpublished.

    W3schools. 2019. onchange Event. [online] Available at: https://www.w3schools.com/jsref/event_onchange.asp [Accessed 26 Oct. 2024].

    W3schools. 2024. Java Break and Continue. [online] Available at: https://www.w3schools.com/java/java_break.asp.[Accessed 1 Nov. 2024].
    
    w3schools. 2024. JavaScript toFixed() Method. [online] .Available at: https://www.w3schools.com/jsref/jsref_tofixed.asp [Accessed 5 Oct. 2024].

    w3schools. 2024. JavaScript Array filter() Method. [online] .Available at: https://www.w3schools.com/jsref/jsref_filter.asp [Accessed 6 Oct. 2024].
    
    w3schools. 2024. JavaScript Array forEach() Method. [online] Available at: https://www.w3schools.com/jsref/jsref_foreach.asp [Accessed 26 Oct. 2024].
    
    w3schools. 2024. JavaScript Array length Property. [online] .Available at: https://www.w3schools.com/jsref/jsref_length_array.asp [Accessed 6 Oct. 2024].

    w3schools. 2024. JavaScript Booleans. [online] .Available at: https://www.w3schools.com/js/js_booleans.asp [Accessed 6 Oct. 2024].
    
    W3schools. 2024. JavaScript For Of. [online] Available at: https://www.w3schools.com/js/js_loop_forof.asp [Accessed 22 Oct. 2024].

    W3Schools. 2024. Window location.reload(). [Online]. Available at: https://www.w3schools.com/jsref/met_loc_reload.asp#:~:text=Window%20location.reload()&text=The%20reload()%20method%20reloads,reload%20button%20in%20your%20browser [Accessed 31 October 2024].
    
    W3Schools. 2024. Window sessionStorage. [Online]. Available at: https://www.w3schools.com/jsref/prop_win_sessionstorage.asp [Accessed 06 October 2024].

*/