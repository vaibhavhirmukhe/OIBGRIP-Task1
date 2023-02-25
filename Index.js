let String = ""

let Buttons = document.querySelectorAll(".btn")

Array.from(Buttons).forEach((button)=>{
    button.addEventListener("click", (e)=>{
        // console.log(e);
        if(e.target.innerHTML == "="){
            String = eval(String);
            document.querySelector("#input").value = String; 
        }
        else if(e.target.innerHTML == "C"){
            String = "";
            document.querySelector("#input").value = String;
        }
        else{
            String = String + e.target.innerHTML;
            document.querySelector("#input").value = String;
        }   
    })
})