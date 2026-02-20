// To make the checkbox clicked on the Fees page if the user clicks apply on one of the individual courses.
// (W3Schools, 2024), demonstrates how to implement sessionStorage.
// (The IIE, 2024), demonstrates how to implement functions.
function applyForCourse(appliedCourse){
    sessionStorage.setItem(appliedCourse, 'true');
    window.location.href ='fees.html'
}

/* 
Reference List:

The IIE. 2024. HIGHER CERTIFICATE OF MOBILE APPILCATION AND WEB DEVELOPMENT [WEDE5020/d/p/w MODULE MANUAL/GUIDE 2024]. The Independent Institute of Education: Unpublished.

W3Schools. 2024. Window sessionStorage. [Online]. Available at: https://www.w3schools.com/jsref/prop_win_sessionstorage.asp [Accessed 06 October 2024].
*/