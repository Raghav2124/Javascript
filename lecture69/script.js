let key=promp("Enter the key you want to set ")
let value=promp("Enter the value you want to set ")
localStorage.setItem(key,value)

console.log(localStorage.getItem(key,value))


console.log(`The value at ${key} is ${localStorage.getItem(key)}`)

if (key == "red" || key == "blue") {
        localStorage.removeItem(key)
}

if (key == 0) {
        localStorage.clear()
}
// sessionStorage.getItem("name")
// sessionStorage.clear()
// sessionStorage.removeItem("name")
// sessionStorage.setItem("name", "harry")
// sessionStorage.removeItem("name")


window.onstorage = (e) => {
    alert("changed")
    console.log(e)
}