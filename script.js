const Words=document.querySelector(".word")
const Hints=document.querySelector(".hint span")
const Input=document.querySelector(".txt")
const Timer=document.querySelector(".time b")
const Refresh=document.querySelector(".refresh")
const Check=document.querySelector(".check")
const Points=document.querySelector(".marks span")
let ans,timer,points=0

const starttimer=maxTime=>{
    clearInterval(timer)
    timer=setInterval(()=>{
        if(maxTime>0){
            maxTime--
            return Timer.innerHTML=maxTime
        }
        clearInterval(timer)
        alert(`Time off!! ${ans.toUpperCase()} was correct`)
        start()

    },1000)
}


const start =()=>{
    starttimer(30)
    let random=words[Math.floor(Math.random() * words.length)]
    let array=random.word.split("").sort(() => Math.random() - 0.5).join('')
    Words.innerHTML=array
    Hints.innerHTML=random.hint
    ans=random.word.toLowerCase()
    Input.value=""
    Input.setAttribute("maxlength",ans.length)
    console.log(random)
}
start()

const checkword=()=>{
    let userword= Input.value.toLowerCase()
    if(!userword) 
            { alert(`Please enter a valid word`)
                return;
            }
    if(userword!==ans)     
            { alert(`Sorry ${userword} is incorrect. Try again!!`)}
     else{
        points++
        Points.innerHTML=points
        alert(`congrats!! ${userword.toUpperCase()} is correct`);
        start()
       }
    }

Refresh.addEventListener("click",start)
Check.addEventListener("click",checkword)

