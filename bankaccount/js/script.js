//Magdalena Wollin

// DOM handler function
const $ = (id) => document.getElementById(id)
// initialize variables
let custName = ""
let deposit = 0
let withdraw = 0
let balance = 0
let customerCount = 0

function getName() {
  let custName = prompt("Please enter your name");
  $('name').innerHTML = custName
  $('name').value= custName
  $('name').focus()
}
function getDeposit() {
  let deposit = prompt("Please enter your deposit", 0);
  $('deposit').innerHTML = deposit
  $('deposit').value = deposit
  balance = balance + deposit;
  $('balance').innerHTML = balance
  $('balance').value = balance
  $('deposit').focus()
}
function getWithdraw() {
  let withdraw = prompt("Please enter your withdraw", 0);
  $('withdraw').innerHTML = withdraw
  $('withdraw').value = withdraw
  balance = balance - withdraw;
  $('balance').innerHTML = balance
  $('balance').value = balance
}

//$('balance').focus()


//initializing values

//let custName = $('name').value
//let deposit = $('deposit').value
//let withdraw = $('withdraw').value
//let balance = $('balance').value

//custName = prompt('What is the customer\'s name?');
//deposit = prompt('Deposit?');
//withdraw = prompt('Withdraw?');
balance = deposit - withdraw;

$('name').innerHTML = custName
$('deposit').innerHTML = deposit
$('withdraw').innerHTML = withdraw
$('balance').innerHTML = balance
$('name').focus()

// GET CUSTOMER INFO FROM THE DOM
//let customerCount = 0
let form = document.getElementById('addForm')
let customerList = document.getElementById('customer')

// SET A COUNT VARIABLE TO DISPLAY NEXT TO CUSTOMERS HEADER
let custCount = 0;
console.log('custCount: ', custCount)
$('custCount').value = custCount;
$('custCount').innerHTML = $('custCount').value
//$('custCount').value = custCount;

// ADD CUSTOMER
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault()
    // GET THE VALUES FROM THE TEXT BOXES
    let custName = $('name').value
    let deposit = $('deposit').value
    let withdraw = $('withdraw').value
    let balance = $('balance').value

    //Create delete button
    //let deleteBtn = document.createElement('button')
    //deleteBtn.className = 'btn btn-danger btn-sm float-end delete'
    //let textDelete = document.createTextNode('X')
    //deleteBtn.appendChild(textDelete)

    // INSERT A NEW ROW AT THE END OF THE CUSTOMERS TABLE

    // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW

    let custTable = document.getElementById("custTable");
    let row = custTable.insertRow(0);
    let cell1 = row.insertCell(0);   //name
    let cell2 = row.insertCell(1);   //deposit
    let cell3 = row.insertCell(2);   //withdraw
    let cell4 = row.insertCell(3);   //balance
    // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS
    cell1.innerHTML = custName;
    cell2.innerHTML = deposit;
    cell3.innerHTML = withdraw;
    cell4.innerHTML = balance;
    //const deleteCustomer = "<button class='deleteButton' onclick='deleteCustomer()'>X</button>";
    //cell6.innerHTML = deleteCustomer;

    //add customer  to table
    custTable.appendChild(row);

    //reset form values 
    //$('addForm').resetForm
    $('name').value = ""
    $('deposit').value = ""
    $('withdraw').value = ""
    $('balance').value = ""
    //$('balance').innerHTML = ""

    //set focus back to id text box
    $('name').focus()

      // Reset form and set focus back to id text box
      const resetForm = () => {
        console.log('resetting form....');
        $('name').value = ""
        $('deposit').value = ""
        $('withdraw').value = ""
        $('balance').value = ""
        $('id').focus()
      } 


})

const updateCount = () => {
    //console.log('updating count...');
    customerCount = customerCount + 1;
    $('custCount').value = customerCount;
    $('custCount').innerHTML = $('custCount').value
    $('custCount').innerHTML= $('custCount').innerHTML ;
    console.log('increment customer count 2: ' + $('custCount').value);

  }


const deleteCustomer = (e) => {
    console.log('delete customer...');
    //alert(document.getElementById("custTable").childNodes[1].childElementCount);
    //alert(e.rowIndex)
    //alert(getElementById("custTable").row)
    if (confirm('Are you sure you want to delete this customer?')) {
        // remove customer
        //deleteRow(e.target.custTable.rowIndex)
        document.getElementById("custTable").deleteRow(1);
        //decrement customer count
        customerCount = customerCount - 1;
        $('custCount').value = customerCount;
        $('custCount').innerHTML = $('custCount').value
        $('custCount').innerHTML= $('custCount').innerHTML ;
        console.log('decrement customer count 2: ' + $('custCount').value);
    }
  }

//console.log('addForm event listener....');      
$('process').addEventListener('click', updateCount)
//$('deleteButton').addEventListener('click', deleteCustomer)

// DELETE CUSTOMER
// HANDLE THE CLICK EVENT OF THE DELETE BUTTON
custTable.addEventListener('click', (e) => {
    // CHECK AND SEE IF THE DELETE BUTTON WAS CLICKED
    if (e.target.classList.contains('delete')) {
        // DISPLAY CONFIRMATION OF THE DELETE TO THE USER
        if (confirm('Are you sure you want to delete this customer?')) {
            // remove the selected customer
            //row.removeChild(e.target.parentElement)
            customerCount = customerCount - 1;
            $('custCount').value = customerCount;
            $('custCount').innerHTML = $('custCount').value
            $('custCount').innerHTML= $('custCount').innerHTML ;
            console.log('increment customer count 2: ' + $('custCount').value);
            console.log('customerCount 2: ' + customerCount)
        }
    }
})
