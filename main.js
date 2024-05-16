clicks = 0
showClicks = "Clicks: " + clicks

cpcI1Cost = 10
cpcI2Cost = 40

cpcI1Amount = 0
cpcI2Amount = 0

cpsI1Cost = 100
cpsI2Cost = 1200
cpsI3Cost = 17000
cpsI4Cost = 17000

cpsI1Amount = 0
cpsI2Amount = 0
cpsI3Amount = 0
cpsI4Amount = 0

cpc = 1
cps = 0

function clickMe(){
    clicks = clicks + cpc
    console.log(clicks)
    showClicks = "Buttons: " + Math.floor(clicks)
    document.getElementById("clicks").innerHTML = showClicks
}

function cpcIncrease1(){
    if(clicks > (cpcI1Cost - 1)){
        clicks = clicks - cpcI1Cost
        cpc = cpc + 1
        cpcI1Cost = Math.floor(cpcI1Cost * 1.75)
        cpcI1Amount = cpcI1Amount + 1
        showClicks = "Buttons: " + Math.floor(clicks)
        document.getElementById("costA1").innerHTML = "Cost: "+cpcI1Cost+" buttons"
        document.getElementById("amountA1").innerHTML = cpcI1Amount
        document.getElementById("clicks").innerHTML = showClicks
    }
}

function cpcIncrease2(){
    if(clicks > (cpcI2Cost - 1)){
        clicks = clicks - cpcI2Cost
        cpc = cpc + 3
        cpcI2Cost = Math.floor(cpcI2Cost * 1.75)
        cpcI2Amount = cpcI2Amount + 1
        showClicks = "Buttons: " + Math.floor(clicks)
        document.getElementById("amountA2").innerHTML = cpcI2Amount
        document.getElementById("costA2").innerHTML = "Cost: "+cpcI2Cost+" buttons"
        document.getElementById("clicks").innerHTML = showClicks
    }
}

function cpsIncrease1(){
    if(clicks > (cpsI1Cost - 1)){
        clicks = clicks - cpsI1Cost
        cps = cps + 1
        cpsI1Cost = Math.floor(cpsI1Cost * 1.75)
        console.log(cpsI1Cost)
        cpsI1Amount = cpsI1Amount + 1
        showClicks = "Buttons: " + Math.floor(clicks)
        document.getElementById("costB1").innerHTML = "Cost: "+cpsI1Cost+" buttons"
        document.getElementById("amountB1").innerHTML = cpsI1Amount
        document.getElementById("clicks").innerHTML = showClicks
    }
}

function cpsIncrease2(){
    if(clicks > (cpsI2Cost - 1)){
        clicks = clicks - cpsI2Cost
        cps = cps + 3
        cpsI2Cost = Math.floor(cpsI2Cost * 1.75)
        cpsI2Amount = cpsI2Amount + 1
        showClicks = "Buttons: " + Math.floor(clicks)
        document.getElementById("costB2").innerHTML = "Cost: "+cpsI2Cost+" buttons"
        document.getElementById("amountB2").innerHTML = cpsI2Amount
        document.getElementById("clicks").innerHTML = showClicks
        console.warn(cpsI2Amount)
        console.warn(cpsI2Cost)
    }
}

function cpsIncrease3(){
    if(clicks > (cpsI3Cost - 1)){
        clicks = clicks - cpsI3Cost
        cps = cps + 34
        cpsI3Cost = Math.floor(cpsI3Cost * 1.75)
        cpsI3Amount = cpsI3Amount + 1
        showClicks = "Buttons: " + Math.floor(clicks)
        document.getElementById("costB3").innerHTML = "Cost: "+cpsI3Cost+" buttons"
        document.getElementById("amountB3").innerHTML = cpsI3Amount
        document.getElementById("clicks").innerHTML = showClicks
    }
}

function cpsIncrease4(){
    if(clicks > (cpsI4Cost - 1)){
        clicks = clicks - cpsI4Cost
        cps = cps + 238
        cpsI4Cost = Math.floor(cpsI4Cost * 1.75)
        cpsI4Amount = cpsI4Amount + 1
        showClicks = "Buttons: " + Math.floor(clicks)
        document.getElementById("costB4").innerHTML = "Cost: "+cpsI4Cost+" buttons"
        document.getElementById("amountB4").innerHTML = cpsI4Amount
        document.getElementById("clicks").innerHTML = showClicks
    }
}

// the CPS loop
setInterval(() => {
    makeCPS()
}, 100)

function makeCPS(){
    clicks = clicks + cps/10
    console.log(clicks)
    showClicks = "Buttons: " + Math.floor(clicks)
    document.getElementById("cps").innerHTML = "Buttons per Second: "+cps
}

setInterval(() => {
    document.getElementById("clicks").innerHTML = showClicks
}, 1)


