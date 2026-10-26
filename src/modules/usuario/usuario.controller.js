import { UserModel } from "./usuario.model.js";

export const obtenerUsuarios = async (req, res) => {
  try {
    const results = await UserModel.findALL();
    res.json({ results }); // serializa la respuesta en json
  } catch (error) {
    res.status(500).json({
      status: "error",
      error: `error al listar : ${error}`,
    });
  }
};
export const obtenerUsuarioId = async (req, res) => {
  // codigo protegido con try..catch
  try {
    const results = await UserModel.findById(req.params.id);
    res.json({ results });
  } catch (error) {
    res.status(500).json({
      error: `error al listar : ${error}`,
    });
  }
};
