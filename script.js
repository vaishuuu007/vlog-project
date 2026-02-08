function addPost() {
  const username = document.getElementById("username").value;
  const thought = document.getElementById("thought").value;

  if (username === "" || thought === "") {
    alert("Please enter your name and thoughts.");
    return;
  }

  const postDiv = document.createElement("div");
  postDiv.className = "post";

  postDiv.innerHTML = `
    <h4>${username}</h4>
    <p>${thought}</p>
  `;

  document.getElementById("posts").prepend(postDiv);

  document.getElementById("username").value = "";
  document.getElementById("thought").value = "";
}
