const button = document.querySelector('#btn')
const reset = document.querySelector('#reset-btn')
let colorCode;

button.addEventListener('click', () => {
    document.body.style.backgroundColor =
        colorCode = "#" + Math.floor(Math.random() * 16777215).toString(16);
        document.getElementById('text').innerHTML = colorCode
        document.getElementById('reset-btn').style.display = "block";
})

reset.addEventListener('click', () => {
    location.reload();
})