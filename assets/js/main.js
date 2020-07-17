const $ = document;

$querySelector("#contactForm").addEventListener("submit", async (event) => {
  event.preventDefault();
  const data = {
    firstname: document.querySelector("#firstname").value,
    lastname: document.querySelector("#lastname").value,
    email: document.querySelector("#email").value,
    message: document.querySelector("#message").value,
  };
  console.log(data);

  const response = await axios.post(" https://efcdec521ba2.ngrok.io", data);
  console.log(response);
});
