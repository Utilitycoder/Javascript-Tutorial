let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"]
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    console.log(myLeads)
})

// reduce DOM operation
let listItems = ""
for (let i = 0; i < myLeads.length; i++) {
    listItems += "<li>" + myLeads[i] + "</li>"
    // alternative to innerHTML
    // const li = document.createElement("li")
    // li.textContent = myLeads[i]
    // ulEl.append(li)
}

ulEl.innerHTML = listItems