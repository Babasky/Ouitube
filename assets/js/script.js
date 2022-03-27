// le code javascript 

window.onload = () =>{
    var menu = document.getElementById("menu");
    var nav = document.getElementById("nav");


    if(menu){
        menu.addEventListener("click", ()=>{
            console.log('Menu');
            if(nav.style.display === "block"){
                nav.style.display = 'none'
            }else{
                nav.style.display = "block";

            }
            
        
        });
        
    }




}
