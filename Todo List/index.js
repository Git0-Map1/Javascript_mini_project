let items = []

const itemDiv = document.getElementById("items")
const input = document.getElementById("itemInput")
const storageKey = "items" //this is key for localStorage 

function renderItems(){
    itemDiv.innerHTML = null;

    for(const [idx, item] of Object.entries(items)){

        const div = document.createElement("div")
        div.style.marginBottom = "10px"

        const elem = document.createElement("p")
        elem.style.marginRight = "10px"
        elem.style.display = "inline"
        elem.textContent=item

        const button = document.createElement("button")
        button.textContent = "Delete"
        button.onclick = () => deleteItems(idx)
        
        div.appendChild(elem)
        div.appendChild(button)
        
        itemDiv.appendChild(div)
    }
}
function addItems(){
    const value = input.value
    if(!value) {
        alert("empty in the items field")
        return
    }
    items.push(value)
    renderItems()
    input.value =""
    saveItems()
}
function loadItems(){
    const oldItems = localStorage.getItem(storageKey)
    if(oldItems) items = JSON.parse(oldItems)
    renderItems();
}
function saveItems(){
    const strItems = JSON.stringify(items)
    localStorage.setItem(storageKey, strItems)
}
function deleteItems(idx){
    items.splice(idx,1)
    renderItems()
    saveItems()
}

document.addEventListener("DOMContentLoaded", loadItems)


