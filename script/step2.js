let phall = document.querySelector("#phall")
let phred = document.querySelector("#phred")
let ph8 = document.querySelector("#ph8")
let ph6 = document.querySelector("#ph6")
let ph4_5 = document.querySelector("#ph4_5")
let ph4 = document.querySelector("#ph4")
let ph3 = document.querySelector("#ph3")
let phcap = document.querySelector("#phcap")
let cyl = document.querySelector("#cyl")
let msol = document.querySelector("#msol")

let falsolc = document.querySelector("#fallingsolc")
let falsolr = document.querySelector("#fallingsolr")

let sol1 = document.querySelector("#sol1")
let sol2 = document.querySelector("#sol2")
let sol3 = document.querySelector("#sol3")
let sol4 = document.querySelector("#sol4")
let sol5 = document.querySelector("#sol5")

falsolc.style.opacity="70%"
falsolr.style.opacity="70%"

ph4.style.left="-50%"
ph4_5.style.left="-50%"
ph6.style.left="-50%"
ph8.style.left="-50%"
phred.style.left="-50%"




let solselector = sol1



let bufferbottle = ph3
let buffersol = phall

let cylleft = "42.5%"

let falsolselect = falsolc
let falsolleft="50.8%"

let cylins = "Click on measuring cylinder to pour measured buffer solution into first left conical flask."



function bufferpour(){
    if(f==20){
        f=21
        phcap.style.top="43.5%"
        setTimeout(function(){
            phcap.style.left="22.5%"
            setTimeout(function(){
                phcap.style.top="85%"
                setTimeout(function(){
                    bufferbottle.style.bottom="45%"
                    buffersol.style.bottom="45%"
                    setTimeout(function(){
                        bufferbottle.style.left="25%"
                        buffersol.style.left="25%"
                        setTimeout(function(){
                            bufferbottle.style.rotate="50deg"
                            buffersol.style.rotate="50deg"
                            buffersol.style.left="23%"
                            buffersol.style.bottom="47.1%"
                            falsolselect.style.visibility="visible"
                            falsolselect.style.left="37.3%"
                            setTimeout(function(){
                                falsolselect.style.height="64%"
                                buffersol.style.height="20%"
                                buffersol.style.left="21.8%"
                                buffersol.style.bottom="48.9%"
                                setTimeout(function(){
                                    msol.style.height="42%"
                                    setTimeout(function(){
                                        falsolselect.style.height="0%"
                                        falsolselect.style.top="89%"
                                        setTimeout(function(){
                                            bufferbottle.style.rotate=""
                                            buffersol.style.rotate=""
                                            buffersol.style.left="25%"
                                            buffersol.style.bottom="45.2%"
                                            setTimeout(function(){
                                                bufferbottle.style.left=""
                                                buffersol.style.left=""
                                                falsolselect.style.top=""
                                                setTimeout(function(){
                                                    bufferbottle.style.bottom=""
                                                    buffersol.style.bottom="12.2%"
                                                    setTimeout(function(){
                                                        phcap.style.top="43.5%"
                                                        setTimeout(function(){
                                                            phcap.style.left=""
                                                            setTimeout(function(){
                                                                phcap.style.top=""
                                                                f=200
                                                                ins.innerText=cylins
                                                            },1000)
                                                        },1000)
                                                    },1000)
                                                },1000)
                                            },1000)
                                        },500)
                                    },500)
                                },500)
                            },1000)
                        },1000)
                    },1000)

                },1000)
            },1000)
        },1000)
    }
}



function cylinder(){
    if(f==200){
        f=201
        cyl.style.bottom="52.7%"
        setTimeout(function(){
            cyl.style.left=cylleft
            setTimeout(function(){
                cyl.style.rotate="45deg"
                falsolselect.style.visibility="visible"
                falsolselect.style.left=falsolleft
                setTimeout(function(){
                    falsolselect.style.height="64%"
                    solselector.style.visibility="visible"
                    setTimeout(function(){
                        msol.style.height="0%"
                        powder.style.opacity="0%"
                        setTimeout(function(){
                            solselector.style.opacity="100%"
                            falsolselect.style.top="89%"
                            falsolselect.style.height="0%"
                            powder.style.visibility="hidden"
                            setTimeout(function(){
                                cyl.style.rotate=""
                                falsolselect.style.top=""
                                setTimeout(function(){
                                    cyl.style.left=""
                                    setTimeout(function(){
                                        cyl.style.bottom=""
                                        setTimeout(function(){
                                            bufferverify()
                                        },1000)
                                    },1000)
                                },1000)
                            },1000)
                        },500)
                    },500)
                },1000)
            },1000)
        },1000)
    }
}












function bufferverify(){
    if(bufferbottle==ph3){
        bufferout()
        bufferbottle=ph4
        buffersol=phred
        buffersol.style.height=""
        falsolleft="60.8%"
        cylleft = "52.5%"
        falsolselect=falsolr
        powder=sample2
        solselector=sol2
        setTimeout(bufferin,1500)
        ins.innerText="Click on buffer solution bottle to measure 100ml pH 4 solution into measuring cylinder. "
        cylins = "Click on measuring cylinder to pour measured buffer solution into second left conical flask."
        msol.src="images/sol-pink.png"
    }
    else if(bufferbottle==ph4){
        bufferout()
        bufferbottle=ph4_5
        buffersol=phall
        buffersol.style.height=""
        falsolleft="70.8%"
        cylleft = "62.5%"
        falsolselect=falsolc
        falsolc.src="images/PH - buffer - solutions-green.png"
        powder=sample3
        solselector=sol3
        setTimeout(bufferin,1500)
        ins.innerText="Click on buffer solution bottle to measure 100ml pH 4.5 solution into measuring cylinder. "
        cylins = "Click on measuring cylinder to pour measured buffer solution into middle one conical flask."
        setTimeout(function(){
            phall.src="images/PH - buffer - solutions-green.png"
            msol.src="images/sol-green.png"
        },500)
    }
    else if(bufferbottle==ph4_5){
        bufferout()
        bufferbottle=ph6
        buffersol=phall
        buffersol.style.height=""
        falsolleft="80.8%"
        cylleft = "72.5%"
        powder=sample4
        solselector=sol4
        falsolc.src="images/PH - buffer - solutions-yellow.png"
        setTimeout(bufferin,1500)
        ins.innerText="Click on buffer solution bottle to measure 100ml pH 6 solution into measuring cylinder. "
        cylins = "Click on measuring cylinder to pour measured buffer solution into second right conical flask."
        setTimeout(function(){
            phall.src="images/PH - buffer - solutions-yellow.png"
            msol.src="images/sol-yellow.png"
        },500)
    }
    else if(bufferbottle==ph6){
        bufferout()
        bufferbottle=ph8
        buffersol=phall
        buffersol.style.height=""
        falsolleft="90.8%"
        cylleft = "82.5%"
        powder=sample5
        solselector=sol5
        falsolc.src="images/PH - buffer - solutions-blue.png"
        setTimeout(bufferin,1500)
        ins.innerText="Click on buffer solution bottle to measure 100ml pH 8 solution into measuring cylinder. "
        cylins = "Click on measuring cylinder to pour measured buffer solution into first right conical flask."
        setTimeout(function(){
            phall.src="images/PH - buffer - solutions-blue.png"
            msol.src="images/sol-blue.png"
        },500)
    }
    else if(bufferbottle==ph8){
        ins.innerText="Press NEXT button."
        startbutton.innerText="NEXT"
        f=22
        startbutton.style.visibility="visible"
        corks()
    }
}











function bufferout(){
    bufferbottle.style.left="-50%"
    buffersol.style.left="-50%"
    phcap.style.left="-50%"
    bufferbottle.style.visibility="hidden"
    bufferbottle.style.visibility="hidden"
}

function bufferin(){
    bufferbottle.style.left=""
    buffersol.style.left=""
    phcap.style.left=""
    bufferbottle.style.visibility="visible"
    buffersol.style.visibility="visible"
    f=20
}







