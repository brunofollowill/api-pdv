const {
  getAllDatas,
  getDataId,
  insertData,
  modificationData,
  deleteDataId,
} = require("./services");

function getDatas(req, res) {
  try {
    const datas = getAllDatas();
    res.send(datas);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

function getData(req, res) {
  try {
    const id = req.params.id;

    if (id && Number(id)) {
      const data = getDataId(id);
      if (data) {
        res.send(data);
      } else {
        res.status(404).send("Dados não encontrados");
      }
    } else {
      res.status(422).send("ID inválido");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
}

function postData(req, res) {
  try {
    const newdata = req.body;

    if (newdata ) {
      insertData(newdata);
      res.status(201).send("Dado inserido com sucesso!");
    } else {
      res.status(422).send("Campo obrigatório ausente!");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
}

function patchData(req, res) {
  try {
    const id = req.params.id;

    if (id && Number(id)) {
      const body = req.body;
      modificationData(body, id);
      res.send("Dado modificado com sucesso!");
    } else {
      res.status(422).send("ID inválido");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
}

function deleteData(req, res) {
  try {
    const id = req.params.id;

    if (id && Number(id)) {
      deleteDataId(id);
      res.send("Dado deletado com sucesso!");
    } else {
      res.status(422).send("ID inválido");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
}

module.exports = {
  getDatas,
  getData,
  postData,
  patchData,
  deleteData,
};
