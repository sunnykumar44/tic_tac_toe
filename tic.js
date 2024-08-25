let boxes=document.querySelectorAll(".box")

let resetbtn=document.querySelector("#rset_btn")

let new_btn=document.querySelector("#new_btn")
let msg_container=document.querySelector(".msg_container")

let turn_o=true

const win_patterns=[
[0,1,2],
[0,3,6],
[0,4,8],
[1,4,7],
[2,5,8],
[2,4,6],
[3,4,5],
[6,7,8]
]
const reset_game=()=>{

    turn0=true
    enable_boxes()
msg_container.classList.add("hide")
}





boxes.forEach((box)=>{
box.addEventListener("click",()=>{
    
    if(turn_o){
        box.innerText="O"
        turn_o=false
    }
    else{
        box.innerText="X"
        turn_o=true
}
    box.disabled=true

    check_winner()
}
)
}
)

const disable_boxes=()=>{
    for (let box of boxes){
        box.disabled=true
    }
}


const enable_boxes=()=>{
    for (let box of boxes){
        box.disabled=false
        box.innerText=""
    }
}

const show_winner=(winner)=>{
    msg.innerText=`Congractulations!,Winner is ${winner}`
    msg_container.classList.remove("hide")
    disable_boxes()
}



const check_winner=()=>{
    for( pattern of win_patterns){
       let pos1=boxes[pattern[0]].innerText
       let pos2=boxes[pattern[1]].innerText
       let pos3=boxes[pattern[2]].innerText

       if (pos1 !="" && pos2!="" && pos3 !=""){
        if (pos1===pos2 && pos2===pos3){
            
            show_winner(pos1)
        }
       }
    }
}
new_btn.addEventListener("click",reset_game)
rset_btn.addEventListener("click",reset_game)


