const getId = (id) => {
    return document.getElementById(`${id}`)
}

const valueRemover = (val) => {
    return getId(val).value = ''
}


// Random Background Color 
const opacity = '0.15' 
const randomColor = () => {
    let color = [];
    for (let i = 0; i < 3; i++) {
        color.push(Math.floor(Math.random() * 256));
    }
    console.log()
    return 'rgb(' + color.join(', ') + ', '+ opacity + ')'
}

const cardbox = document.getElementsByClassName('bg');

for (let i = 0; i < cardbox.length; i++) {
    cardbox[i].addEventListener('mouseenter', function () {
        this.style['background-color'] = randomColor()
        this.style['transition'] = '0.5s'
    })
    cardbox[i].addEventListener('mouseleave', function () {
        this.style['background-color'] = '#fff'
    })


}



// Number Validation 
const numberValidation = value => {
    if (isNaN(value)) {
        alert("Please enter Numeric value")
        return;
    } else if (value < 0) {
        alert("Please enter Positive Numeric value")
        return;
    } else {
        return value;
    }
}

// Remove Dom Element
const removePera = (item1, item2, pera) => {

    getId(item1).removeAttribute("readonly");
    getId(item2).removeAttribute("readonly");
    getId(pera).classList.add('d-none')

}


