/// set template array with object values
let employees = [ 

];

$(document).ready(onReady);
// set on ready function for DOM
// make click handler events for when add employee button/ delete is pressed
function onReady(){
    // render here as well
    renderEmployeeList()
    console.log('DOM IS READY');
    $('.addSubmitButton').on('click', addSubmit);
    $('body').on('click','.deleteEmployee', deleteEmployees);
    



}

//// render function
function renderEmployeeList() {
    $('#employeeList').empty();
    for (let i = 0; i < employees.length; i++) {
    
        $('#employeeList').append(`
          <li> <span class="idSpan">
            ${employees[i].first}</span>: ${employees[i].last} ${employees[i].id} ${employees[i].title} ${employees[i].annualSalary} 
            <button class="deleteEmployees"></button>
          </li>
        `)
      }
    }
  
  




/// delete button 

function deleteEmployees() {

    let weAreClicking = $(this);
    let idSpan = weAreClicking.siblings()
    let idText = IDSpan.text()
    
    console.log(idText);
    
    let employeesWeWantToDelete = [];
    
    for (let i= 0; i < employees.length; i++ ){
      if (IDText !== employees[i].id){ 
        employeesWeWantToDelete.push(employees[i])
      }
    }
    employees = employeesWeWantToDelete;
    renderEmployeeList()



/// here i should make the function for click event submit

function addSubmit(){
    /// get input values
    let addFirst = $('#theFirstName').val()
    let addLast = $('#theLastName').val()
    let addID = $('#theID').val()
    let addTitle = $('#theTitle').Val()
    let addannualSalary = $('#theAnnualSalary').val()
// . add to array
let theEmployees = { 
    first: addFirst,
    last: addLast,
    id: Number(addID),
    title: addTitle,
    annualSalary: addannualSalary
}

// pushing employess into employee array

employees.push(theEmployees)



// render the new updates each time
renderEmployeeList()



//// rest the inputs nack into empty strings 
$('#theFirstName').val('')
$('#theLastName').val('')
$('#theID').val('')
$('#theTitle').val('')
$('#theAnnualSalary').val('')

}

}
