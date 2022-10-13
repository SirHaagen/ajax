
let peticion = new XMLHttpRequest();

peticion.addEventListener("load", ()=>{
  if (peticion.status == 201) console.log(JSON.parse(peticion.response));
  //No olvidar deserializar la respuesta que viene en tipo string
});

peticion.open("POST", "https://reqres.in/api/users", true);

peticion.setRequestHeader("Content-type", "application/json;charset=UTF8");

peticion.send(JSON.stringify({
  "name": "morpheus",
  "job": "leader"
})
//No olvidar serializar el json para poder enviarlo, de lo contrario me dará error de cors
);