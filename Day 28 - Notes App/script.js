let notes = JSON.parse(localStorage.getItem("notes")) || [];

const noteInput = document.getElementById("noteInput");
const notesContainer = document.getElementById("notesContainer");
const addBtn = document.getElementById("addBtn");

// Add Note
addBtn.addEventListener("click", () => {
  if (!noteInput.value.trim()) return;

  notes.push(noteInput.value);
  noteInput.value = "";

  saveAndRender();
});

// Save + Render
function saveAndRender() {
  localStorage.setItem("notes", JSON.stringify(notes));
  renderNotes();
}

// Render Notes
function renderNotes() {
  notesContainer.innerHTML = "";

  notes.forEach((note, index) => {
    const div = document.createElement("div");
    div.className = "note";

    div.innerHTML = `
      <p contenteditable="true" data-index="${index}">${note}</p>
      <button class="delete" data-index="${index}">Delete</button>
    `;

    notesContainer.appendChild(div);
  });
}

// Edit + Delete
notesContainer.addEventListener("click", (e) => {
  const index = e.target.dataset.index;

  if (e.target.classList.contains("delete")) {
    notes.splice(index, 1);
    saveAndRender();
  }
});

// Save edited text
notesContainer.addEventListener("input", (e) => {
  if (e.target.tagName === "P") {
    const index = e.target.dataset.index;
    notes[index] = e.target.innerText;
    localStorage.setItem("notes", JSON.stringify(notes));
  }
});

// Initial Load
renderNotes();
