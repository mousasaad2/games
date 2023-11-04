
let qustion = document.querySelector(".qustion")
let btn = document.querySelector(".btn")
let spanNumber = document.querySelector('.span-number')
let allQus = document.querySelector(".All-qusiton")
let result = document.querySelector(".result span")
let cont = 0
let count2 = 0
let leng;
function plye(){
    if(cont >= qus2.length){
        cont = 0
        count2 = 0
        result.textContent = 0
    }
    qustion.innerHTML = qus2[cont].qustion
    spanNumber.textContent = cont+1
    leng = qus2.length
    let q = qus2[cont] 
    resultFun(q, leng)
}

plye()

btn.onclick = function(){
    let titel = qus2[cont].titel
    cont++
    checked(titel, leng)
    plye()
}


function resultFun(q, leng){
    allQus.innerHTML = ""
    for(let i = 1; i <= 4; i++){
        let div = document.createElement("div")
        let inp = document.createElement("input")
        inp.type = "radio"
        inp.name = "inp"
        inp.id = `ra${i}`
        inp.dataset.an = q[`ans${i}`]
        if(i === 1){
            inp.checked = true
        }
        let label = document.createElement("label")
        label.htmlFor = `ra${i}`
        label.appendChild(document.createTextNode(q[`ans${i}`]))
        div.appendChild(inp)
        div.appendChild(label)
        allQus.appendChild(div)
    }
}

function checked(t, l){
    let name = document.getElementsByName("inp")
    let res;
    for(let i = 0; i < name.length; i++){
        if(name[i].checked){
            res = name[i].dataset.an
        }
    }

    if(res === t){
        count2++
        result.textContent = count2
    }

}