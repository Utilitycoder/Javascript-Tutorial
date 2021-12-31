let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    renderLeads()
})

function renderLeads() {
    // reduce DOM operation
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
        listItems += "<li><a target='blank' href='" + myLeads[i] +"'>" + myLeads[i] + "</a></li>"
        // alternative to innerHTML
        // const li = document.createElement("li")
        // li.textContent = myLeads[i]
        // ulEl.append(li)
    }

    ulEl.innerHTML = listItems
}
