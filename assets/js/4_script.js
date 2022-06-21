const box1 = document.getElementById('box1')
const box2 = document.getElementById('box2')
const box3 = document.getElementById('box3')
const box4 = document.getElementById('box4')

var color = "";

document.addEventListener('keydown', function (event) {
    if (event.key === 'a') {
        color = "blue"
    }
    else if (event.key === 's') {
        color = "red"
    }
    else if (event.key === 'd') {
        color = "green"
    }
    else {
        color = ""
    }
}
)

function colorMod(elem) {
    elem.style.backgroundColor = color
}

box1.addEventListener('click', function () {
    colorMod(box1)
})

box2.addEventListener('click', function () {
    colorMod(box2)
})

box3.addEventListener('click', function () {
    colorMod(box3)
})

box4.addEventListener('click', function () {
    colorMod(box4)
})
