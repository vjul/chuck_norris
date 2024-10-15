const getDatos = async () => {
  const result = await fetch("https://api.chucknorris.io/jokes/random");
  const json = await result.json();
  return json;
};

const render = async () => {
  const data = await getDatos();
  document.querySelector("#frase").innerHTML = data.value;
};

render();

document.querySelector("button").addEventListener("click", () => {
  render();
});
