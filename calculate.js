const triangle_fn = () => {
    let base = numberValidation(getId("triangle-b").value)
    const height = numberValidation(getId("triangle-h").value)

    if (base && height) {

        const result = 0.5 * base * height

        valueRemover("triangle-b")
        valueRemover("triangle-h")

        getId("triangle-b").setAttribute("readonly", "true");
        getId("triangle-h").setAttribute("readonly", "true");

        const formula = getId("triangleFormula")

        const remov = getId("remv1")
        remov.classList.remove('d-none')
        formula.innerHTML = `b = ${base}cm; h = ${height}cm`

        domPrint(result, 'Triangle')


    } else if (base || height) {
        alert("Please enter Both value")
        return;
    } else {
        return
    }

}

const removeTrianglel = () => {
    removePera("triangle-h", "triangle-b", "remv1")
}

const rectangle_fn = () => {
    const widht = numberValidation(getId("rectangle-w").value)
    const length = numberValidation(getId("rectangle-l").value)

    if (widht && length) {

        const result = widht * length

        valueRemover("rectangle-w")
        valueRemover("rectangle-l")

        getId("rectangle-w").setAttribute("readonly", "true");
        getId("rectangle-l").setAttribute("readonly", "true");

        const formula = getId("rectangleFormula")
        const remov = getId("remv2")
        remov.classList.remove('d-none')
        formula.innerHTML = `w = ${widht}cm; l = ${length}cm`

        domPrint(result, 'Rectangle')

    } else if (widht || length) {
        alert("Please enter Both value")
        return;
    } else {
        return
    }
}

const removeRectangle = () => {
    removePera("rectangle-w", "rectangle-l", "remv2")
}

const parallelogram_fn = () => {
    const base = numberValidation(getId("parallelogram-b").value)
    const height = numberValidation(getId("parallelogram-h").value)

    if (base && height) {
        const result = base * height
        valueRemover("parallelogram-b")
        valueRemover("parallelogram-h")

        getId("parallelogram-b").setAttribute("readonly", "true");
        getId("parallelogram-h").setAttribute("readonly", "true");

        const formula = getId("parallelogramFormula")
        const remov = getId("remv3")
        remov.classList.remove('d-none')
        formula.innerHTML = `b = ${base}cm; h = ${height}cm`

        domPrint(result, 'Parallelogram')

    } else if (base || height) {
        alert("Please enter Both value")
        return;
    } else {
        return
    }
}

const removeParallelogram =() =>{
    removePera("parallelogram-b", "parallelogram-h", "remv3")
}


// Result Print    <button type="button"  class="ms-1 btn btn-primary btn-sm">Covert to m<sup>2</sup></button>
const domPrint = (result, type) => {
    const parent = getId("calc-print")
    var newChild = '<li class="list-group-item"> ' + (++parent.children.length) + '. ' + type + " - " + result + ' cm<sup>2</sup></li>';

    parent.insertAdjacentHTML('beforeend', newChild)



}