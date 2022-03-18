
let hello = function msg() {
        alert('Opa!')
}

let squad = document.getElementById('quadrado')
squad.addEventListener('click', hello)

function changeColor(squad, color) {
        squad.style.backgroundColor = color;

}

squad.addEventListener('mouseover', function() {
        changeColor(squad, 'green')
})
squad.addEventListener('mouseout', function() {
        changeColor(squad, 'yellow')
});

squad.addEventListener('click', function() {
        changeColor(squad, 'blue')
})


