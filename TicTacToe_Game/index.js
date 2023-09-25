console.log("hihii");
let nextturn=new Audio('ting.mp3')
let gameover=new Audio('music.mp3')
let nobody=new Audio('gameover.mp3')
let GameBlock=Array.from(document.getElementsByClassName('GameBlock'))
let excited=document.querySelector('.excited')
let Reset=document.querySelector('.Reset')
let ResetText=document.querySelector('.ResetText')
let turn='X'
let count=0



let nextTurn=()=>{
    return turn==='X'?'0':'X'
}

let CheckWin=()=>{
    let wins=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]

    wins.forEach((e)=>{
        let text=document.getElementsByClassName('Text')
        if((text[e[0]].innerText)===(text[e[1]].innerText) && (text[e[1]].innerText)===(text[e[2]].innerText) && (text[e[0]].innerText)!==''){
            document.getElementsByClassName('ResultText')[0].innerHTML="Player "+(text[e[0]].innerText)+" Wins"
            gameover.play()
            excited.style.width="120px"
            
        }
        
    })
    
}

let NoBody=()=>{
    if(count>=9){
        document.getElementsByClassName('ResultText')[0].innerHTML="NoBody Won "
        excited.style.width="0px"
        nobody.play()
    }
}


GameBlock.forEach((e)=>{
    // console.log(e);
    let text=e.querySelector('.Text')
    e.addEventListener('click',(element)=>{
        count++
        console.log(count);
        text.innerText=turn
        turn=nextTurn()
        let ResultText=document.getElementsByClassName('ResultText')[0]
        ResultText.innerHTML="Turn For "+turn
        nextturn.play()
        CheckWin()
        NoBody()


    })

})


Reset.addEventListener('click',(ele)=>{
    GameBlock.forEach((e)=>{
        let text=e.getElementsByClassName('Text')[0].innerHTML=''
        turn='X'
        document.getElementsByClassName('ResultText')[0].innerHTML="Turn For "+turn
        excited.style.width="0px"
        gameover.pause()
        count=0       
    })
})

