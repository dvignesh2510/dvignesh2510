var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["fullName"] = document.getElementById("fullName").value;
    formData["age"] = document.getElementById("age").value;
    formData["dob"] = document.getElementById("dob").value;
    formData["contact"] = document.getElementById("contact").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("profile").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.fullName;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.age;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.dob;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.contact;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = `<a class="edit" onClick="onEdit(this)">Edit /</a>
                       <a class="delete" onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("fullName").value = "";
    document.getElementById("age").value = "";
    document.getElementById("dob").value = "";
    document.getElementById("contact").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("fullName").value = selectedRow.cells[0].innerHTML;
    document.getElementById("age").value = selectedRow.cells[1].innerHTML;
    document.getElementById("dob").value = selectedRow.cells[2].innerHTML;
    document.getElementById("contact").value = selectedRow.cells[3].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.fullName;
    selectedRow.cells[1].innerHTML = formData.age;
    selectedRow.cells[2].innerHTML = formData.dob;
    selectedRow.cells[3].innerHTML = formData.contact;
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("profile").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("fullName").value == "") {
        isValid = false;
        document.getElementById("fullNameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("fullNameValidationError").classList.contains("hide"))
            document.getElementById("fullNameValidationError").classList.add("hide");
    }
    return isValid;
}


function preback(){window.history.forward();}
setTimeout("preback()", 0);
window.onunload=function() {null};




const sign = e => {
    let fullName = document.getElementById('fullName').value,
        age = document.getElementById('age').value,
        dob = document.getElementById('dob').value,
        contact = document.getElementById('contact').value;
       

  
    let formD = JSON.parse(localStorage.getItem('formD')) || [];
  
    let exist = formD.length && 
        JSON.parse(localStorage.getItem('formD')).some(data => 
            data.fullName.toLowerCase() == fullName.toLowerCase() &&
            data.age.toLowerCase() == age.toLowerCase()
        );
  
    if(!exist){
        formD.push({ fullName,age, dob, contact });
        localStorage.setItem('formD', JSON.stringify(formD));
        document.querySelector('form').reset();
        document.getElementById('fullName').focus();
     
  
    }
    else{
        
    }
    e.preventDefault();
  }