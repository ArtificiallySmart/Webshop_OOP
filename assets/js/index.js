function toggleLogin(){
    let buttons = document.getElementsByClassName('toggleMe');
    for(let button of buttons){
        button.classList.toggle("d-none");
    }
}