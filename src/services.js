const fs = require("fs");

function getAllDatas() {
  return JSON.parse(fs.readFileSync("data.json"));
}

function getDataId(id) {
  const datas = JSON.parse(fs.readFileSync("data.json"));
  const filterData = datas.filter((data) => data.id === id)[0];
  return filterData;
}

function insertData(newdata) {
  const datas = JSON.parse(fs.readFileSync("data.json"));
  const newlistDado = [...datas, newdata];
  fs.writeFileSync("data.json", JSON.stringify(newlistDado));
}

function modificationData(modification, id) {
  let currentDatas = JSON.parse(fs.readFileSync("data.json"));
  const indiceModification = currentDatas.findIndex((data) => data.id === id);

  const changedDado = { ...currentDatas[indiceModification], ...modification };
  currentDatas[indiceModification] = changedDado;

  fs.writeFileSync("data.json", JSON.stringify(currentDatas));
}

function deleteData(id) {
  const datas = JSON.parse(fs.readFileSync("data.json"));

  const filterData = datas.filter((data) => data.id !== id);
  fs.writeFileSync("data.json", JSON.stringify(filterData));
}

module.exports = {
  getAllDatas,
  getDataId,
  insertData,
  modificationData,
  deleteData,
};
