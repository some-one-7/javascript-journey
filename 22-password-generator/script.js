const generateBtn = document.getElementById("generate");
const result = document.getElementById("result");

const chars =
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";

generateBtn.addEventListener("click", () => {
  const length = document.getElementById("length").value;

  if (!length || length <= 0) {
    result.innerText = "Enter valid length!";
    return;
  }

  let password = "";

  for (let i = 0; i < length; i++) {
    let randomIndex = Math.floor(Math.random() * chars.length);
    password += chars[randomIndex];
  }

  result.innerText = password;
});
