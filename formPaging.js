const formPage1 = document.getElementById("form-page1");
const formPage2 = document.getElementById("form-page2");
const formPage3 = document.getElementById("form-page3");
const formPage4 = document.getElementById("form-page4");
const formPage5 = document.getElementById("form-page5");

const progressBar = document.querySelector("progress");

const summaryName = document.getElementById("summary-name");


const formData = document.getElementById("collected-data");



function showPage(pageNumber) {
    switch (pageNumber) {
        case 1:
            formPage1.style.display = 'block';
            formPage2.style.display = 'none';
            formPage3.style.display = 'none';
            formPage4.style.display = 'none';
            formPage5.style.display = 'none';
            progressBar.value=20;
            break;
        
        case 2:
            formPage1.style.display = 'none';
            formPage2.style.display = 'block';
            formPage3.style.display = 'none';
            formPage4.style.display = 'none';
            formPage5.style.display = 'none';
            progressBar.value=40;
            break;
        
        case 3:
            formPage1.style.display = 'none';
            formPage2.style.display = 'none';
            formPage3.style.display = 'block';
            formPage4.style.display = 'none';
            formPage5.style.display = 'none';
            progressBar.value=60;
            break;

        case 4:
            formPage1.style.display = 'none';
            formPage2.style.display = 'none';
            formPage3.style.display = 'none';
            formPage4.style.display = 'block';
            formPage5.style.display = 'none';
            progressBar.value=80;
            break;

        case 5: 
            formPage1.style.display = 'none';
            formPage2.style.display = 'none';
            formPage3.style.display = 'none';
            formPage4.style.display = 'none';
            formPage5.style.display = 'block';
            progressBar.value=100;
            updateSummary();
            break;
        
        default:
            break;

    }
}

function getFormData() {
    const fName = document.getElementById("name-first").value;
    const lName = document.getElementById("name-last").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone-number").value;
    const facilitiesRadio = document.querySelector('input[name="cooking"]:checked');
    const gear = document.querySelector("select").value;
    const color = document.getElementById("color-picker").value;
    
    

    const agreeCheckbox = document.getElementById("agreeCheckbox");
    const agreement = agreeCheckbox ? agreeCheckbox.checked : false;

    
    let facilitiesValue = "";
    if (facilitiesRadio) {
        facilitiesValue = facilitiesRadio.value;
    }


    return data = {
        name: fName + " " + lName,
        email: email,
        phone: phone,
        facilities: facilitiesValue,
        agreement: agreement,
        gear: gear,
        color: color,
        
    };
}

function updateSummary() {
    const data = getFormData();
    
    summaryName.innerHTML = data.name;
    email1.innerHTML = data.email;
    phone.innerHTML = data.phone;
    facilities.innerHTML = data.facilities;
    agreement.innerHTML = data.agreement;

    const dateSummary = document.getElementById("summary-date");
    const datePicker = document.getElementById("date-picker");
    dateSummary.innerHTML = datePicker.value;

    const timeSummary = document.getElementById("summary-time");
    const timePicker = document.getElementById("time-picker");
    timeSummary.innerHTML = timePicker.value;

    const guestsSummary = document.getElementById("summary-guests");
    const guestsInput = document.getElementById("guests");
    guestsSummary.innerHTML = guestsInput.value;

    const colorSummary = document.getElementById("color-summary");
    colorSummary.innerHTML = data.color;
    
    const gearSummary = document.getElementById("gear-summary");
    gearSummary.innerHTML = data.gear;



}

function submitData() {
    const dataRow = document.createElement("tr");
    const cellName = document.createElement("td");
    const cellPhone = document.createElement("td");
    const cellEmail = document.createElement("td");
    const cellFacilities = document.createElement("td");
    const cellAgreement = document.createElement("td");
    const cellGear = document.createElement("td");
    const cellColor = document.createElement("td");

    dataRow.appendChild(cellName);
    dataRow.appendChild(cellEmail);
    dataRow.appendChild(cellPhone);
    dataRow.appendChild(cellFacilities);
    dataRow.appendChild(cellAgreement);
    dataRow.appendChild(cellGear);
    dataRow.appendChild(cellColor);


    const data = getFormData();

    cellName.innerHTML = data.name;
    cellEmail.innerHTML = data.email;
    cellPhone.innerHTML = data.phone;
    cellFacilities.innerHTML = data.facilities;
    cellAgreement.innerHTML = data.agreement;
    cellGear.innerHTML = data.gear;
    cellColor.innerHTML = data.color;
    

    formData.appendChild(dataRow);
}

function startIfChecked() {
    const agreeCheckbox = document.getElementById("agreeCheckbox");
    const startButton = document.getElementById("startButton");

    if (agreeCheckbox.checked) {
        showPage(2);
    } else {
        alert("Please confirm that you have read and agree to the terms.");
    }
}