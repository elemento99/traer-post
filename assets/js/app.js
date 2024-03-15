const boton = document.querySelector("#boton")
const dataHtml = document.querySelector("#dataListaHtml")

const API_URL = "https://jsonplaceholder.typicode.com/posts"


const displayData = (data) => {
data.forEach((element)=> {          
    dataHtml.innerHTML += `<li>${element.title}<br>${element.body}</li>` 
})
}

const getData = async() => {
    const res = await fetch(API_URL)  
    console.log(res)

if(!res.ok){
    console.log("la appi falló")
    console.log("código de error:", res.status)
    return 
}


//procesar el json
//destructuring de objetos //´podemos renombrarlo y pintarlo en la consola que el nombre con el que llamamos a la propiedad
// const { results: database } = await res.json()  //await manda a que se resuelva la respuesta, si vemos "pendient promise" nos falta el await o -then
// for (const { title, body } of database) {
//     console.log(`title: ${title}, body: ${body}`);
//   }
//   displayData(database)
// console.log(database)

const database = await res.json()
  displayData(database)
 console.log(database)
}

boton.addEventListener("click", getData)