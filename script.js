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

