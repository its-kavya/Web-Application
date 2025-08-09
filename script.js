function generateCalendar() {
  const calendar = document.getElementById("calendar");
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  for (let day = 1; day <= daysInMonth; day++) {
    const date = new Date(year, month, day);
    const dayDiv = document.createElement("div");
    dayDiv.classList.add("day");
    if (day === now.getDate()) {
      dayDiv.classList.add("today");
    }

    dayDiv.setAttribute("id", `day-${day}`);
    dayDiv.innerHTML = `${day}<br/><span id="mood-${day}">🌑</span>`;
    calendar.appendChild(dayDiv);
  }
}

function markToday() {
  const mood = document.getElementById("mood").value;
  const today = new Date().getDate();
  const moodSpan = document.getElementById(`mood-${today}`);
  if (moodSpan) {
    moodSpan.innerText = mood;
  }
}

generateCalendar();
