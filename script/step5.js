
let funnel = document.querySelector("#funnel")
let neflask1 = document.querySelector("#neflask1")
let nesol1 = document.querySelector("#nesol1")

let im1 = document.querySelector("#im1")
let im2 = document.querySelector("#im2")
let im3 = document.querySelector("#im3")
let im4 = document.querySelector("#im4")
let im5 = document.querySelector("#im5")





let imselector = im1
let pdishselector = pdish1

let pdishleft = "45%"
let pdishleft2 = "40%"
let funnelleft = "36.9%"
let imleft = "37.7%"
let imleft2 = "45%"









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
                    nesol1.style.opacity="100%"
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
                                        pdishselector.style.left=pdishleft
                                        pdishselector.style.top="83%"
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


function funnel1(){
    if(f==46){
        f=47
        funnel.style.top="40%"
        imselector.style.top="41.1%"
        setTimeout(function(){
            funnel.style.left=funnelleft
            imselector.style.left=imleft
            setTimeout(function(){
                funnel.style.top="74%"
                imselector.style.top="75.1%"
                setTimeout(function(){
                    funnel.style.rotate="45deg"
                    imselector.style.left=imleft2
                    imselector.style.top="83%"
                    imselector.style.width="8%"
                    setTimeout(function(){
                        funnel.style.rotate=""
                        setTimeout(function(){
                            funnel.style.top="40%"
                            imselector.style.left=pdishleft2
                            pdishselector.style.left=pdishleft2
                            setTimeout(function(){
                                funnel.style.left="19.9%"
                                setTimeout(function(){
                                    funnel.style.top=""
                                    setTimeout(function(){
                                        funnel.style.left=""
                                        neflask1.style.left=""
                                        nesol1.style.left=""
                                        setTimeout(function(){
                                            flaskpourverify()
                                            if(flaskselector!="none"){
                                                setTimeout(function(){
                                                    funnel.style.left="19.9%"
                                                    neflask1.style.left="20%"
                                                    nesol1.style.left="20%"
                                                    f=44
                                                },1000)
                                            }
                                        },1000)
                                    },1000)
                                },1000)
                            },1000)
                        },1000)
                    },1000)
                    
                },1000)
            },1000)
        },1000)
    }
}




function flaskpourverify(){
    nesol1.style.opacity="0%"
    if(flaskselector==flask1){
        flaskselector=flask2
        solselector=sol2
        imselector=im2
        pdishselector=pdish2
        pdishleft = "55%"
        funnelleft = "46.9%"
        imleft = "47.7%"
        imleft2 = "55%"
        pdishleft2 = "50%"
        ins.innerText="Click on second left flask to pour its solution and filter it."
    }
    else if(flaskselector==flask2){
        flaskselector=flask3
        solselector=sol3
        imselector=im3
        pdishselector=pdish3
        pdishleft = "65%"
        funnelleft = "56.9%"
        imleft = "57.7%"
        imleft2 = "65%"
        pdishleft2 = "60%"
        ins.innerText="Click on middle one flask to pour its solution and filter it."
    }
    else if(flaskselector==flask3){
        flaskselector=flask4
        solselector=sol4
        imselector=im4
        pdishselector=pdish4
        pdishleft = "75%"
        funnelleft = "66.9%"
        imleft = "67.7%"
        imleft2 = "75%"
        pdishleft2 = "70%"
        ins.innerText="Click on second right flask to pour its solution and filter it."
    }
    else if(flaskselector==flask4){
        flaskselector=flask5
        solselector=sol5
        imselector=im5
        pdishselector=pdish5
        pdishleft = "85%"
        funnelleft = "76.9%"
        imleft = "77.7%"
        imleft2 = "85%"
        pdishleft2 = "80%"
        ins.innerText="Click on first right flask to pour its solution and filter it."
    }
    else if(flaskselector==flask5){
        flaskselector="none"
        imselector=im1
        pdishselector=pdish1
        startbutton.style.visibility="visible"
        startbutton.innerText="NEXT"
        ins.innerText="Press NEXT button."
        f=49
    }
}

