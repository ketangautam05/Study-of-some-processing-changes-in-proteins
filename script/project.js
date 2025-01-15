
let startbutton = document.querySelector("#start")
let ins = document.querySelector("#text")
let stp1 = document.querySelector("#stp1")
let stp2 = document.querySelector("#stp2")
let stp3 = document.querySelector("#stp3")




let statuses = 0
let f=0



function start(){
    if(statuses==0){
        statuses=1
        startbutton.style.visibility="hidden"
        ins.innerText="Turn on the wheighing scale . Press ON button !"
        f=1
    }
    else if(f==12){
        stp1.style.visibility="hidden"
        cflasks.style.visibility="visible"
        startbutton.style.visibility="hidden"
        setTimeout(function(){
            stp2.style.visibility="visible"
            powder=sample1
            f=20
            phall.style.visibility="visible"
            ins.innerText="Click on buffer solution bottle to pour 100ml pH 3.0 solution into first left conical flask. "
        },1000)
    }
    else if(f==22){
        f=23
        bufferbottle.style.visibility="hidden"
        buffersol.style.visibility="hidden"
        phcap.style.visibility="hidden"
        stp2.style.visibility="hidden"
        startbutton.style.visibility="hidden"
        setTimeout(function(){
            ins.innerText="Press ON/OFF button on flask shaker machine."
            stp3.style.visibility="visible"
            flaskshakerplace()
        },1000)
    }
    else if(f==32){
        f=33
        startbutton.style.visibility="hidden"
        flaskshakerreverse()
    }
    else if(f==42){
        f=43
        machine.style.left="-100%"
        reading.style.left="-100%"
        tare.style.left="-100%"
        on.style.left="-100%"
        pdish1.style.left="-100%"
        filter1.style.left="-100%"
        startbutton.style.visibility="hidden"
        
        setTimeout(function(){
            f=44
            funnel.style.left="19.9%"
            neflask1.style.left="20%"
            ins.innerText="Click on first left flask to pour its solution and filter it."
            flaskselector=flask1
            solselector=sol1

            // 
            // flaskpour()
        },2000)
    }



}



start()

