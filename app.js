const h1 = document.getElementById("title");
const buttonChange = document.getElementById("change");

buttonChange.addEventListener("click", () => {
  h1.textContent = "Hello Docker";
});
// docker build -t docker-html .
// docker run --name docker-html -p 8080:80 -d docker-html
