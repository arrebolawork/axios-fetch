const URL_ = new URL("https://jsonplaceholder.typicode.com/users");
let users = [];
const btnGetUsers = document.getElementById("btnGetUsers");

axios.get(URL_).then((res) => console.log(res.data)); // Ejercicio 1

axios.get(URL_).then((res) => res.data.map((user) => console.log(user.name))); //Ejercicio 2

axios.get(URL_).then((res) => {
  users = res.data;
  console.log("valor asignado a la variable", users); // Ejercicio 3
});

axios.get(URL_).then((res) => {
  users = res.data;
  muestraUsers(); // Ejercicio 4
});

const muestraUsers = () => {
  console.log("desde la funcion", users);
  userRender(users);
};

btnGetUsers.addEventListener("click", muestraUsers); // Ejercicio 5

// Ejercicio 6
const userRender = (arrayList) => {
  const ul = document.createElement("ul");
  arrayList.map((user) => {
    const li = document.createElement("li");
    li.textContent = user.name;
    ul.appendChild(li);
  });
  document.body.appendChild(ul);
};
