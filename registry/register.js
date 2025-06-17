let participantCount = 1;

document.querySelector("#addParticipant").addEventListener("click", () => {
  participantCount++;
  const template = participantTemplate(participantCount);
  const addBtn = document.querySelector("#addParticipant");
  addBtn.insertAdjacentHTML("beforebegin", template);
});

document.querySelector("#registerForm").addEventListener("submit", submitForm);

function participantTemplate(count) {
  return `
    <section class="participant${count}">
      <label for="name${count}">Name:</label>
      <input type="text" id="name${count}" required />

      <label for="age${count}">Age:</label>
      <input type="number" id="age${count}" required />

      <label for="fee${count}">Fee:</label>
      <input type="number" id="fee${count}" required />
    </section>
  `;
}

function totalFees() {
  let feeElements = [...document.querySelectorAll("[id^=fee]")];
  return feeElements.reduce((sum, el) => sum + Number(el.value || 0), 0);
}

function submitForm(event) {
  event.preventDefault();
  const total = totalFees();
  const name = document.querySelector("#adultName").value;
  const summary = document.querySelector("#summary");
  const form = document.querySelector("#registerForm");

  form.classList.add("hide");
  summary.classList.remove("hide");
  summary.innerHTML = successTemplate({
    name: name,
    participants: participantCount,
    total: total,
  });
}

function successTemplate(info) {
  return `
    <h2>Registration Complete</h2>
    <p>Thank you ${info.name} for registering.</p>
    <p>You have registered ${info.participants} participants and owe $${info.total} in fees.</p>
  `;
}

