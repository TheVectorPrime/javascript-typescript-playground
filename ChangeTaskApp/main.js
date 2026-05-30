const text = document.querySelector('#text')
const btn_add = document.querySelector('#btn-add')
const btn_delete = document.querySelector('#btn-delete')
const task = document.querySelector('#task-list');

btn_add.addEventListener('click', () => {
    if (text.value === null) return;

    const li = document.createElement('li');
    li.textContent = text.value;

    const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
    li.style.borderLeft = `5px solid ${randomColor}`;

    task.appendChild(li);
    text.value = "";
})

btn_delete.addEventListener('click', () => {
    const targetText = text.value; // Input'a yazdığın ismi al

    // UL içindeki tüm LI elemanlarını al
    const allTasks = task.querySelectorAll('li');

    // Tüm görevleri tek tek gez
    allTasks.forEach(li => {
        // Eğer LI'nın içindeki yazı yazdığın isimle aynıysa
        if (li.textContent === targetText) {
            li.remove(); // Sil!
        }
    });

    text.value = ""; // Input'u temizle
});