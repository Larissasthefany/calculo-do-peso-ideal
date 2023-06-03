const frm = document.querySelector('form')
const res = document.querySelector('h3')

frm.addEventListener('submit', (e) => {
    e.preventDefault()
    const nome = frm.inNome.value
    const masculino = frm.inMasculino.cheked
    const altura = Number(frm.inAltura.value)

    let peso;
    if (masculino) {
        peso = 22 * Math.pow(altura, 2)
        res.innerText = `${nome} Seu peso ideal é ${peso.toFixed(3)} kg`

    } else {
        peso = 21 * Math.pow(altura, 2)
        res.innerText = `${nome} Seu peso ideal é ${peso.toFixed(3)} kg`
    }

    frm.addEventListener('rest', () => {
        res.innerText = ""
    })
})