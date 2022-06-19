const btn=document.querySelector('#btn');
const main = document.querySelector('#main');


const save = () => {
    const notes = document.querySelectorAll(".note textarea");
    console.log(notes);
    const data = [];
    notes.forEach(
            (note) => {
                data.push(note.value)
            }
        )
        // console.log(data)
    if (data.length === 0) {
        localStorage.removeItem("notes")
    } else {
        localStorage.setItem("notes", JSON.stringify(data))
    }
}

btn.addEventListener('click', function() {
  addNote();
});











const addNote = (text = "") => {
    const note = document.createElement("div");
    note.classList.add("note")
    note.innerHTML = `
    <div class="tool">
    <img class='save image' src="diskette.png" alt="">
    <img class='trash image' src="trash.png" alt="">
    </div>
    <textarea>${text}</textarea>
    `;

    note.querySelector(".trash").addEventListener(
        "click",
        function() {
            note.remove()
            save()
        }
    )
    note.querySelector(".save").addEventListener(
        "click",
        function() {
            save()
        }
    )
    note.querySelector("textarea").addEventListener(
        "focusout",
        function() {
            save()
        }
    )
    main.appendChild(note);
    save()
}




(
    function() {
        const lsNotes = JSON.parse(localStorage.getItem("notes"));
        if (lsNotes === null) {
            addNote()
        } else {
            lsNotes.forEach(
                (lsNote) => {
                    addNote(lsNote)
                }
            )
        }

    }
)()