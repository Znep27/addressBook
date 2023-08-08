let arrayOfUsers = []


window.onload = function() {
    getUser()
  }

const getUser = () => {
    return fetch('https://randomuser.me/api?results=10')
        .then(res => res.json())
        .then(users => {console.log(users)
        arrayOfUsers = users.results})
        .then(setTimeout(() => {
            console.log(arrayOfUsers)}, "1000"))
}

const displayUsers = () => {
    const allUsers = document.getElementById('addressBook')
    arrayOfUsers.map((index) => {
        const li = document.createElement('li')
        li.innerHTML += `<img src = ${index.picture.large}></img><br> Name: ${index.name.first} ${index.name.last} <br> 
            DOB: ${index.dob.date} <br>Cell#: ${index.cell}`
        allUsers.append(li)
    })
}