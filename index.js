const db = firebase.firestore();

const todoForm = document.getElementById("todo_form");

const crearAlumno = (nombre, apellidos, email) =>
  db.collection("Alumnos").doc().set({
    nombre,
    apellidos,
    email,
  });

  todoForm.addEventListener("submit", async(e)=> {
    e.preventDefault();
    const nombre = todoForm["todo_nombre"].value;
    const apellidos = todoForm["todo_apellidos"].value;
    const email = todoForm["todo_email"].value;

    await crearAlumno(nombre, apellidos, email);

    todoForm.reset();

    const actualizarAlumno=(id, nombre, apellidos, email) =>
    db.collection("Alumnos").doc().update({

  });
});

//Leer datos
db.collection("Alumnos").onSnapshot((querySnapshot) => {
  tabla.innerHTML = "";
  querySnapshot.forEach((doc) => {
    tabla.innerHTML +=`
    <tr>
    <th scope="row">${doc.id}</th>
    <td>${doc.data().nombre}</td>
    <td>${doc.data().apellidos}</td>
    <td>${doc.data().email}</td>

    <td> <button class="btn btn-primary" onclick="eliminar('${doc.id}')">Delete</button></td>
    <td> <button class="btn btn-secondary" onclick="editar('${doc.id}', '${doc.data().nombre}', '${doc.data().apellidos}', '${doc.data().email}')">Edit</button></td>
    </tr>
    `;

  });
});

//Borrar datos
function eliminar(id) {
  db.collection("Alumnos").doc(id).delete();
};

//Editar datos
function editar(id, nombre, apellidos, email) {
  todoForm['todo_nombre'].value=nombre;
  todoForm['todo_apellidos'].value=apellidos;
  todoForm['todo_email'].value=email;
};

