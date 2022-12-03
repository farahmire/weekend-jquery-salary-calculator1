$(document).ready(onReady);

/// set template array with object values
let employees = [ 
{
    first: "Farah",
    last: "Mire",
    id: 828864,
    title: "Software Engineer",
    annualSalary: 70000
},
{
    first: "John",
    last: "Doe",
    id: 65324,
    title: "Firefighter",
    annualSalary: 60000
},
{
    first: "Justin",
    last: "Louie",
    id: 20289,
    title: "Doctor",
    annualSalary: 15500
}
]
// set on ready function for DOM
// make click handler events for when add employee button/ delete is pressed
function onReady(){
    // render here as well
    renderEmployeeList()
    console.log('DOM IS READY')
    $('#addSubmit').on('click', addEmployee)
    $('body').on('click','.deleteEmployee', deleteEmployees)
    



}

//// render function
function renderEmployeeList() {
    $('#employeeList').empty();
    // $('#forecastList').append(`
    //   <li>${forecasts[0].date}: ${forecasts[0].lowTemp} to ${forecasts[0].hiTemp} degrees</li>
    // `)
    for (let i = 0; i < employees.length; i++) {
    
        $('#employeeList').append(`
          <li> <span class="idSpan">
            ${employees[i].id}</span>: ${employees[i].first} ${employees[i].last} ${employees[i].title} ${employees[i].annualSalary} 
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

function addEmployee(){
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



//// rest the inputs nack into empy strings 
$('#theFirstName').val()
$('#theLastName').val()
$('#theID').val()
$('#theTitle').val()
$('#theAnnualSalary').val()

}

