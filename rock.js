let user_score=0
let comp_score=0

const choices=document.querySelectorAll(".choice")
const msg=document.querySelector("#msg")

const user_score1=document.querySelector("#user_score")
const comp_score1=document.querySelector("#comp_score")



const gencomp_choice=()=>{
    const options=["rock","paper","scissor"]
const rand_idx=Math.floor(Math.random()*3)

return options[rand_idx]
}
const draw_game=()=>{

    console.log("game is draw")
    msg.innerText="Game was Draw .Play Again."
    msg.style.backgroundColor="#599ae4"


}

const show_winner=(user_win, user_choice,comp_choice )=>{
    if(user_win){
        user_score++
        user_score1.innerText=user_score
        msg.innerText=`You Win!. your ${user_choice} beats ${comp_choice}`
        msg.style.backgroundColor="green "
      
    }
    else{
      
       comp_score++
       comp_score1.innerText=comp_score
        msg.innerText=`You Lost!. ${comp_choice} beats your ${user_choice}`
        msg.style.backgroundColor="red"
      

    }
}

const playgame=(user_choice)=>{

const comp_choice=gencomp_choice()
   

if(user_choice===comp_choice){
    draw_game()

}
else{
    let user_win=true
    if(user_choice==="rock"){
        user_win=comp_choice==="paper"?false:true
    }
    else if(user_choice==="paper"){
        user_win=comp_choice==="scissor"?false:true
    }
    else {
        user_win=comp_choice==="rock"?false:true
    }
show_winner(user_win,user_choice,comp_choice)
}

}


choices.forEach((choice)=>{
   
    choice.addEventListener("click",()=>{
        const user_choice=choice.getAttribute("id")

playgame(user_choice)

    })
})