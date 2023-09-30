export const addTolocalStorage = function (data) {
  if (!localStorage.getItem("data")) {
    localStorage.setItem("data", "[]");
  }
  const reciveData = JSON.parse(localStorage.getItem("data"));
  reciveData.push(data);
  console.log(reciveData);
  localStorage.setItem("data", JSON.stringify(reciveData));
};
