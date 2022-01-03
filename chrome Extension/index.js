let myLeads = []
let oldLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const tabBtn = document.getElementById("tab-btn")
let leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") )

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}
// a function to render what is saved.
function render(leads) {
    let listItems = ""
    for (let i = 0; i < leads.length; i++) {
    // Previously used for leads display
        // listItems += "<li><a target='blank' href='" + myLeads[i] +"'>" + myLeads[i] + "</a></li>"
        listItems += `
        <li>
            <a target='blank' href='${leads[i]}'>
                ${leads[i]} 
            </a>
        </li>`

    // alternative to innerHTML
        // const li = document.createElement("li")
        // li.textContent = myLeads[i]
        // ulEl.append(li)
    }

    ulEl.innerHTML = listItems
}

// Listen for double clicks on the delete button and delete database
deleteBtn.addEventListener("dblclick", function() {
    localStorage.clear()
    myLeads = []
    render(myLeads)
})

tabBtn.addEventListener("click", function() {
    console.log(tab[0].url)
})

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    // Save the myLeads array to localStorage 
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
})
