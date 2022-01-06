// massiv anlayisi 
const siyahi = ["kagiz.png","das.png","scissors.png"]

//DOM Document Object Model

const kagiz = document.getElementById('kagiz')
const das = document.getElementById('das')
const qayci = document.getElementById('qayci')

const komputerinSecimi = document.getElementById('komputer-secim')
const neticeniYaz = document.getElementById('netice')

//klikleme hadisesi burada qeyde alinir
kagiz.onclick = seciminiEle
das.onclick = seciminiEle
qayci.onclick = seciminiEle

function seciminiEle() {
    const komputer = randomSecim()
    const menimSecimim = this.dataset.id

    if(menimSecimim ==0 && komputer ==0) {
        netice = 'Try again'

    }
    if(menimSecimim ==1 && komputer ==1) {
        netice = 'Try again'
    }
    if(menimSecimim ==2 && komputer ==2){
        netice = 'Try again'
    }

    else if(menimSecimim ==0 && komputer ==1) {
        netice = 'Qazandiniz! Kagiz dasi bukur'
    }
    else if(menimSecimim ==0 && komputer ==2){
        netice = 'Meglub oldun! Komputer qazandi! Qayci kagizi kesir'
    }
    else if(menimSecimmim ==2 && komputer ==1){
        netice = 'Meglub oldun! Das qaycini qirar'
    }
    
    neticeniYaz.innerHTML = netice

}

function randomSecim() {
    const say = Math.round(Math.random()*2)
    // Math.round(Math.random())for me
    komputerinSecimi.src = `img/${siyahi[say]}`

    return say

}