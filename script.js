let colors = [ 'red', 'green', 'blue', 'crimson', 'indigo', 'violet', 'pink', 'yellow', 'orange', 'black' ]

const canvas = document.getElementById("canvas")

function setColor(){
    const index = parseInt((Math.random() *colors.length)+1)

    canvas.style.backgroundColor = `${colors[index]}`

    return {index};
}

// const {index} = setColor()
// document.getElementById("show").innerHTML = `string:${index}`