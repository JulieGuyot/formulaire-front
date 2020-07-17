const $ = document;

$.querySelector("#contactForm").addEventListener("submit", async (event) => {
  event.preventDefault();
  const data = {
    firstname: $.querySelector("#firstname").value,
    lastname: $.querySelector("#lastname").value,
    email: $.querySelector("#email").value,
    message: $.querySelector("#message").value,
  };
  console.log(data);

  const response = await axios.post(
    "https://jovial-hawking-95d4e8.netlify.app",
    data
  );
  console.log(response.data);
});
