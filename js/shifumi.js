let papier = document.getElementById("papier")
let caillou = document.getElementById("caillou")
let decoupage = document.getElementById("decoupage")
let resj = document.getElementById("resj")
let resb = document.getElementById("resb")
let res = document.getElementById("res")

let aah = document.getElementById("aah")

papier.addEventListener('click', () => {
    jouer("papier")
})

caillou.addEventListener('click', () => {
    jouer("pierre")
})

decoupage.addEventListener('click', () => {
    jouer("ciseaux")
})

function jouer(rep){
    let bot = Math.floor(Math.random() *3)
    
    let botfpc
    switch(bot){
        case 0:
            botfpc = "pierre"
            break;
        case 1:
            botfpc = "papier"
            break;
        case 2: 
            botfpc = "ciseaux"           
            break;
        default:
            console.log("la mort", bot)
            break;
    }
    console.log("you:", rep)
    console.log("bot:", botfpc)
    console.log(whoWins(rep, botfpc))

}

function whoWins(j1, j2){
    resj.textContent = j1
    resb.textContent = j2
    aah.classList.remove("ghost")

    if(j1 == j2) res.textContent = "egalite" 
    else{
        if((j1 == "pierre" && j2 == "ciseaux") ||
            (j1 == "ciseaux" && j2 == "papier") || 
            (j1 == "papier" && j2 == "pierre")) {
                res.textContent = "you win"
            }
        else{
            res.textContent = "you lose" 
        }
    }
}