let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")

let leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") )

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    renderLeads()
}

// Listen for double clicks on the delete button and delete database
deleteBtn.addEventListener("dblclick", function() {
    localStorage.clear()
    myLeads = []
    renderLeads()
})

inputBtn.addEventListener("dblclick", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    // Save the myLeads array to localStorage 
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    renderLeads()
})

function renderLeads() {
    // reduce DOM operation
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
    // Previously used for leads display
        // listItems += "<li><a target='blank' href='" + myLeads[i] +"'>" + myLeads[i] + "</a></li>"
        listItems += `
        <li>
            <a target='blank' href='${myLeads[i]}'>
                ${myLeads[i]} 
            </a>
        </li>`

    // alternative to innerHTML
        // const li = document.createElement("li")
        // li.textContent = myLeads[i]
        // ulEl.append(li)
    }

    ulEl.innerHTML = listItems
}
