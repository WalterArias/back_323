import express from "express"; // importamos la libreria
import cors from "cors";
import rutausuario from './src/modules/usuario/usuario.routes.js'

// creamos una instancia de la libreria express en la constante app
const app = express(); //metodo constructor de la libreria
const PORT = 4100; //puerto donde desplegaremos el server
//middlewares
app.use(express.json()); // Para que el servidor entienda JSON en el body
app.use(cors()); //
// ruta para los endpoint de usuario
app.use("/api", rutausuario);

app.listen(PORT, () => {
  console.log(`Servidor Iniciado en el puerto ${PORT}`);
});
