/// set template array with object values
let employees = [];

let monthlyPay = 0;
// gets the dom ready
$(document).ready(onReady);



// make click handler events for when add employee button/ delete is pressed

function onReady() {
  
 
    console.log('DOM IS READY');

    // this creates an event for when the button is first pressed
    $('.addSubmitButton').on('click', addSubmit);
    $('body').on('click', ".deleteButton", deleteEmployees);
    $('.addSubmitButton').on('click', salaryTotal);
    $('.addSubmitButton').on('click', monthlyCash)


}

//// render function
// function renderEmployeeList() {

function monthlyCash() {

    if (monthlyPay > 20000) {
        $('.h4').css('background-color', 'red')
    }
    $('#theFirstName').val('')
    $('#theLastName').val('')
    $('#theID').val('')
    $('#theTitle').val('')
    $('#theAnnualSalary').val('')

}

// }







/// delete button says hey jquery grab this and grab the parent
// and its parent and remove it 

function deleteEmployees() {

    console.log("hi")

    $(this).parent().parent().remove()


}



/// here i should make the function for click event submit

function addSubmit() {
    /// get input values coonect the them in input values from html
    let addFirst = $('#theFirstName').val()
    let addLast = $('#theLastName').val()
    let addID = $('#theID').val()
    let addTitle = $('#theTitle').val()
    let addannualSalary = $('#theAnnualSalary').val()
    // set an object with new values so you can call on it 
    let theEmployees = {
        first: addFirst,
        last: addLast,
        id: Number(addID),
        title: addTitle,
        annualSalary: addannualSalary
    }

    // // pushing employess into employee array

    employees.push(theEmployees)
    $('employeeList').empty();
    for (let i = 0; i < employees.length; i++) {
        /// we are taking the table we have in html and appending evertyhing into it
        $('table').append(`
        <tbody class ='employeeList'>
         <th> ${employees[i].first}</th> 
         <th> ${employees[i].last}</th>
         <th>${employees[i].id}</th> 
         <th>${employees[i].title}</th>
         <th> ${employees[i].annualSalary}</th>
         <th> <button class = "deleteButton"> DELETE</button></th>
       </tbody>
  `)
    }

   

}

//render the new updates each time







/// doing the math so our annual salary gets made into monthly 

function salaryTotal() {
    let yearlySalary = $("#theAnnualSalary").val()
    monthlyPay += yearlySalary /12
    $("#theMoneyTotal").text(monthlyPay)
   

}



