
let funnel = document.querySelector("#funnel")
let neflask1 = document.querySelector("#neflask1")

let im1 = document.querySelector("#im1")
let im2 = document.querySelector("#im2")
let im3 = document.querySelector("#im3")
let im4 = document.querySelector("#im4")
let im5 = document.querySelector("#im5")





let imselector = im1












function flaskpour(){
    if(f==44){
        f=45
        flaskselector.style.top="45%"
        solselector.style.bottom="28%"
        setTimeout(function(){
            flaskselector.style.left="28%"
            solselector.style.left="28%"
            imselector.style.visibility="visible"
            setTimeout(function(){
                flaskselector.style.rotate="-45deg"
                solselector.style.rotate="-45deg"
                solselector.style.bottom="29.8%"
                solselector.style.left="29.8%"
                setTimeout(function(){
                    imselector.style.opacity="100%"
                    solselector.style.opacity="0%"
                    setTimeout(function(){
                        flaskselector.style.rotate=""
                        solselector.style.rotate=""
                        setTimeout(function(){
                            solselector.style.visibility="hidden"
                            flaskselector.style.left=""
                            setTimeout(function(){
                                flaskselector.style.top=""
                                setTimeout(function(){
                                    flaskselector.style.opacity="0%"
                                    setTimeout(function(){
                                        flaskselector.style.visibility="hidden"
                                        ins.innerText="Click on funnel to transfer that Insoluble matter in a pre-weight petri-dish."
                                        f=46
                                    },1000)                                    
                                },1000)
                            },1000)
                        },1000)
                    },1000)
                },3000)
            },1000)
        },1000)
    }
}