function generateCV() {
  document.getElementById("cv-output").style.display = "block";
  document.getElementById("cv-name").textContent = document.getElementById("name").value;
  document.getElementById("cv-email").textContent = document.getElementById("email").value;
  document.getElementById("cv-phone").textContent = document.getElementById("phone").value;
  document.getElementById("cv-summary").textContent = document.getElementById("summary").value;
  document.getElementById("cv-experience").textContent = document.getElementById("experience").value;
  document.getElementById("cv-education").textContent = document.getElementById("education").value;

  const skills = document.getElementById("skills").value.split(",");
  const skillList = document.getElementById("cv-skills");
  skillList.innerHTML = "";
  skills.forEach(skill => {
    if (skill.trim()) {
      const li = document.createElement("li");
      li.textContent = skill.trim();
      skillList.appendChild(li);
    }
  });
}