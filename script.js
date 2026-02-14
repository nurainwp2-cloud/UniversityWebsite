let select1 = document.getElementById("sub")
let studyTxt = document.getElementById("studyTxt")
let select2 = document.getElementById("level")
let studyTxt2 = document.getElementById("studyTxt2")
let studyLink = document.getElementById("study");
let campusLink = document.getElementById("campus");
let lifeLink = document.getElementById("life");
let connectLink = document.getElementById("connect");
let studyDropdown = document.getElementById("studyDropdown");
let studyDropdown2 = document.getElementById("studyDropdown2");
let campusDropdown = document.getElementById("campusDropdown");
let campusDropdown2 = document.getElementById("campusDropdown2");
let lifeDropdown = document.getElementById("lifeDropdown");
let lifeDropdown2 = document.getElementById("lifeDropdown2");
let connectDropdown = document.getElementById("connectDropdown");
let connectDropdown2 = document.getElementById("connectDropdown2");
let bottomNav = document.getElementById("bottomNav")
let body = document.getElementById("body")
let aboutLink = document.getElementById("aboutLink");
let researchLink = document.getElementById("researchLink");
let lifelongLink = document.getElementById("lifelongLink");
let enterpriseLink = document.getElementById("enterpriseLink");
let partnersLink = document.getElementById("partnersLink");
let logo = document.getElementById("logo")
let studyDropdownul = document.getElementById("studyDropdownul")
let coursesdropdownul = document.getElementById("coursesDropDown")
let coursesLink = document.getElementById("coursesLink")
let scholarshipDropDown = document.getElementById("scholarshipsDropDown")
let APUDMUDropDown = document.getElementById("APU-DMUDropDown")
let universityDropdown = document.getElementById("universityDropdown")
let awardsDropdown = document.getElementById("awardsDropdown")
let sustainDropdown = document.getElementById("sustainDropdown")
let lifeDropdownul = document.getElementById("lifeDropdownul")
let residenceul = document.getElementById("residenceul")
let transportul = document.getElementById("transportul")

function showresidenceul(){
    residenceul.style.visibility = "visible"
    sustainDropdown.style.zIndex = "2"
}
function closereseidenceul(){
    residenceul.style.visibility = "hidden"
    sustainDropdown.style.zIndex = "2"
}


function opensustainabilityDropdown(){
    sustainDropdown.style.visibility = "visible"
    sustainDropdown.style.zIndex = "2"
}
function closesustainabilityDropdown(){
    sustainDropdown.style.visibility = "hidden"
    sustainDropdown.style.zIndex = "2"
}
function showAwardsDropdown(){
    awardsDropdown.style.visibility = "visible"
    awardsDropdown.style.zIndex = "2"
}

function showUniversityDropdown(){
    universityDropdown.style.visibility = "visible"
    universityDropdown.style.zIndex = "2"
}
function closeUniversityDropdown(){
    universityDropdown.style.visibility = "hidden"
    universityDropdown.style.zIndex = "2"
}
function closawardsDropdown(){
    awardsDropdown.style.visibility = "hidden"
    awardsDropdown.style.zIndex = "2"
}

function showapuDropdown(){
    APUDMUDropDown.style.visibility = "visible"
    APUDMUDropDown.style.zIndex = "2"
}
function closeapuDropdown(){
    APUDMUDropDown.style.visibility = "hidden"
}

function showScholarshipDropdown(){
    scholarshipDropDown.style.visibility = "visible"
    scholarshipDropDown.style.zIndex = "2"
}
function closeScholarshipDropdown(){
    scholarshipDropDown.style.visibility = "hidden"
}



function showCourseDropdown(){
    coursesdropdownul.style.visibility = "visible"
    coursesdropdownul.style.zIndex = "2"
}
function closeCourseDropdown(){
    coursesdropdownul.style.visibility = "hidden"
}

function closeDropdown(){
    residenceul.style.visibility = "hidden"
    sustainDropdown.style.visibility = "hidden"
    sustainDropdown.style.zIndex = "2"
    awardsDropdown.style.visibility = "hidden"
    APUDMUDropDown.style.visibility = "hidden"
    campusDropdownul.style.visibility = "hidden"
    scholarshipDropDown.style.visibility = "hidden"
    coursesdropdownul.style.visibility = "hidden"
    studyDropdownul.style.visibility = "hidden"
     universityDropdown.style.visibility = "hidden"
    studyDropdown.style.height = "0px"
    studyDropdown2.style.height = "0px"
    campusDropdown.style.height = "0px"
    campusDropdown2.style.height = "0px"
    lifeDropdown.style.height = "0px"
    lifeDropdown2.style.height = "0px"
    connectDropdown.style.height = "0px"
    connectDropdown2.style.height = "0px"
    studyLink.style.color = "white"
    campusLink.style.color = "white"
    lifeLink.style.color = "white"
    connectLink.style.color = "white"
    aboutLink.style.color = "white"
    researchLink.style.color = "white"
    lifelongLink.style.color = "white"
    enterpriseLink.style.color = "white"
    partnersLink.style.color = "white"
    logo.src = "Images/ApuLogoDark.png"
     lifeDropdownul.style.visibility = "hidden"
    
    
}
function dropdown1(){
    APUDMUDropDown.style.visibility = "hidden"
    campusDropdownul.style.visibility = "hidden"
    studyDropdown.style.height = "150px"
    studyDropdown2.style.height = "700px"
    campusDropdown.style.height = "0px"
    campusDropdown2.style.height = "0px"
    lifeDropdown.style.height = "0px"
    lifeDropdown2.style.height = "0px"
    connectDropdown.style.height = "0px"
    connectDropdown2.style.height = "0px"
    studyLink.style.color = "blue"
    campusLink.style.color = "black"
    lifeLink.style.color = "black"
    connectLink.style.color = "black"
    aboutLink.style.color = "black"
    researchLink.style.color = "black"
    lifelongLink.style.color = "black"
    enterpriseLink.style.color = "black"
    partnersLink.style.color = "black"
    logo.src = "Images/navbar-logo.png"
    studyDropdownul.style.visibility = "visible"
    lifeDropdownul.style.visibility = "hidden"
}
function dropdown2(){
    scholarshipDropDown.style.visibility = "hidden"
    coursesdropdownul.style.visibility = "hidden"
    studyDropdownul.style.visibility = "hidden"
    studyDropdown.style.height = "150px"
    studyDropdown2.style.height = "700px"
    campusDropdown.style.height = "0px"
    campusDropdown2.style.height = "0px"
    lifeDropdown.style.height = "0px"
    lifeDropdown2.style.height = "0px"
    connectDropdown.style.height = "0px"
    connectDropdown2.style.height = "0px"
    studyLink.style.color = "black"
    campusLink.style.color = "blue"
    lifeLink.style.color = "black"
    connectLink.style.color = "black"
    aboutLink.style.color = "black"
    researchLink.style.color = "black"
    lifelongLink.style.color = "black"
    enterpriseLink.style.color = "black"
    partnersLink.style.color = "black"
    logo.src = "Images/navbar-logo.png"
    campusDropdownul.style.visibility = "visible"
    lifeDropdownul.style.visibility = "hidden"
}
function dropdown3(){
    lifeDropdownul.style.visibility = "visible"
    studyDropdown.style.height = "0px"
    studyDropdown2.style.height = "0px"
    campusDropdown.style.height = "0px"
    campusDropdown2.style.height = "0px"
    lifeDropdown.style.height = "150px"
    lifeDropdown2.style.height = "700px"
    connectDropdown.style.height = "0px"
    connectDropdown2.style.height = "0px"
     studyLink.style.color = "black"
    campusLink.style.color = "black"
    lifeLink.style.color = "blue"
    connectLink.style.color = "black"
    aboutLink.style.color = "black"
    researchLink.style.color = "black"
    lifelongLink.style.color = "black"
    enterpriseLink.style.color = "black"
    partnersLink.style.color = "black"
    logo.src = "Images/navbar-logo.png"
}
function dropdown4(){
    studyDropdown.style.height = "0px"
    studyDropdown2.style.height = "0px"
    campusDropdown.style.height = "0px"
    campusDropdown2.style.height = "0px"
    lifeDropdown.style.height = "0px"
    lifeDropdown2.style.height = "0px"
    connectDropdown.style.height = "150px"
    connectDropdown2.style.height = "700px"
     studyLink.style.color = "black"
    campusLink.style.color = "black"
    lifeLink.style.color = "black"
    connectLink.style.color = "blue"
    aboutLink.style.color = "black"
    researchLink.style.color = "black"
    lifelongLink.style.color = "black"
    enterpriseLink.style.color = "black"
    partnersLink.style.color = "black"
    logo.src = "Images/navbar-logo.png"
}



select1.addEventListener("change", () => {
    if (select1.value === "1") {
        studyTxt.innerText = "Accounting & Finance"
    }
     if (select1.value === "2") {
        studyTxt.innerText = "Business Management"
    }
     if (select1.value === "3") {
        studyTxt.innerText = "Marketing & Advertising"
    }
     if (select1.value === "4") {
        studyTxt.innerText = "Economics & Policy"
    }
     if (select1.value === "5") {
        studyTxt.innerText = "Computercience & IT"
    }
     if (select1.value === "6") {
        studyTxt.innerText = "Physics & Astronomy"
    }

})
select2.addEventListener("change", () => {
    if (select2.value === "1") {
        studyTxt2.innerText = "Pre-University"
    }
     if (select2.value === "2") {
        studyTxt2.innerText = "Undergraduate"
    }
     if (select2.value === "3") {
        studyTxt2.innerText = "Post-Graduate"
    }
})

