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

tabBtn.addEventListener("click", function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)
    })
})

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

inputBtn.addEventListener("click", function() { 
    myLeads.push(inputEl.value) // save the input value into an array. 
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads)) // Save the myLeads array to localStorage 
    render(myLeads)  
})
