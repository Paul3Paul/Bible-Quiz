function startQuiz() {
  const name = document.getElementById("username").value.trim();
  if (name === "") {
    alert("Please enter your name.");
    return;
  }

  document.getElementById("name-entry").classList.add("hidden");
  document.getElementById("quiz-welcome").classList.remove("hidden");
  document.getElementById("displayName").textContent = name;
}

function loadQuiz() {
  const formURL = "https://docs.google.com/forms/d/e/1FAIpQLSfN2hC16iR54j3-mB1XhQxUW15f2ck7I1cE5UY_xiGWObJDZQ/viewform?usp=header";
  window.open(formURL, "_blank");

  document.getElementById("quiz-welcome").classList.add("hidden");

  setTimeout(() => {
    document.getElementById("thank-you").classList.remove("hidden");
  }, 50000); // 40 minutes
}
