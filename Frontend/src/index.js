import "./style.css"
import "bootstrap/dist/css/bootstrap.css"
import "./jokeFacade"
import userFacade from "./userFacade"
import jokeFacade from "./jokeFacade"

/* 
  Add your JavaScript for all exercises Below or in separate js-files, which you must the import above
*/

/* JS For Exercise-1 below */
function makeList(){
const jokes = jokeFacade.getJokes();
let jokeList = jokes.map(joke => "<li>" + joke + "</li>");
const listAsString = jokeList.join("\n");
document.getElementById("jokes").innerHTML = listAsString; 
}
makeList()

//find med id
findMedIDbtn.addEventListener("click", (evt) => {
  evt.preventDefault()
  let findMedID = document.getElementById("findMedID").value
  let iidd = (jokeFacade.getJokeById(findMedID));
  document.getElementById("jokeFundet").innerHTML = iidd; 

  
})

//Lav ny joke
addJoke.addEventListener("click", (evt) => {
  evt.preventDefault()
  let newJoke = document.getElementById("nyJoke").value
  let neew = (jokeFacade.addJoke(newJoke));
  makeList()

  
})



/* JS For Exercise-2 below */
function fetchQuote() {
  let url = "https://studypoints.info/jokes/api/jokes/period/hour";
  
  return fetch(url).then(res => res.json())
}

hej.addEventListener("click", (evt) => {
  evt.preventDefault()
  fetchQuote().then(data => document.getElementById("farvel").innerHTML = data.joke);
  
})

//same origin policy does not apply to HTML tags.

//forstår ikke opgave 6, ændrer quoten sig ikke allerede på den side jeg fetcher fra hver time?



/* JS For Exercise-3 below */
function getBrugere(){
userFacade.getUsers()
.then(users => {
  const userRows = users.map(user => `
  <tr>
    <td>${user.id}</td>
    <td>${user.age}</td>
    <td>${user.name}</td>
    <td>${user.gender}</td>
    <td>${user.email}</td>
  </tr>  
    `
    )
    const rowsAsString = userRows.join("");
    document.getElementById("allUserRows").innerHTML = rowsAsString
})
}
getBrugere()

//find bruger med id
findBMedIDbtn.addEventListener("click", (evt) => {
  evt.preventDefault()
  let findBMedID = document.getElementById("findBMedID").value
  userFacade.getUserById(findBMedID).then(user => document.getElementById("brugerFundet").innerHTML = JSON.stringify(user))
  
  

  
})

//tilføj bruger
addUser.addEventListener("click", (evt) => {
  evt.preventDefault()
  let brugerAge = document.getElementById("nyBrugerAge").value
  let brugerName = document.getElementById("nyBrugerName").value
  let brugerGender = document.getElementById("nyBrugerGender").value
  let brugerEmail = document.getElementById("nyBrugerEmail").value
  
  const newBruger = {
    age: brugerAge,
    name: brugerName,
    gender: brugerGender,
    email: brugerEmail
  }

  userFacade.addUser(newBruger).catch(err => {
    if (err.status){
      err.fullError.then(e=>console.log(e.msg))
    }
    else{console.log("Network error");}
    }
  )
  getBrugere()

  
})

//rediger bruger
redUser.addEventListener("click", (evt) => {
  evt.preventDefault()
  let redBrugerID = document.getElementById("redBrugerID").value
  let redBrugerAge = document.getElementById("redBrugerAge").value
  let redBrugerName = document.getElementById("redBrugerName").value
  let redBrugerGender = document.getElementById("redBrugerGender").value
  let redBrugerEmail = document.getElementById("redBrugerEmail").value
  
  const redBruger = {
    age: redBrugerAge,
    name: redBrugerName,
    gender: redBrugerGender,
    email: redBrugerEmail
  }

  userFacade.editUser(redBrugerID, redBruger).catch(err => {
    if (err.status){
      err.fullError.then(e=>console.log(e.msg))
    }
    else{console.log("Network error");}
    }
  )
  getBrugere()

  
})

//delete bruger

deleteUser.addEventListener("click", (evt) => {
  evt.preventDefault()
  let delBrugerID = document.getElementById("delBrugerID").value
 
  

  userFacade.deleteUser(delBrugerID).catch(err => {
    if (err.status){
      err.fullError.then(e=>console.log(e.msg))
    }
    else{console.log("Network error");}
    }
  )
  getBrugere()

  
})


/* 
Do NOT focus on the code below, UNLESS you want to use this code for something different than
the Period2-week2-day3 Exercises
*/

function hideAllShowOne(idToShow) {
  document.getElementById("about_html").style = "display:none"
  document.getElementById("ex1_html").style = "display:none"
  document.getElementById("ex2_html").style = "display:none"
  document.getElementById("ex3_html").style = "display:none"
  document.getElementById(idToShow).style = "display:block"
}

function menuItemClicked(evt) {
  const id = evt.target.id;
  switch (id) {
    case "ex1": hideAllShowOne("ex1_html"); break
    case "ex2": hideAllShowOne("ex2_html"); break
    case "ex3": hideAllShowOne("ex3_html"); break
    default: hideAllShowOne("about_html"); break
  }
  evt.preventDefault();
}
document.getElementById("menu").onclick = menuItemClicked;
hideAllShowOne("about_html");



