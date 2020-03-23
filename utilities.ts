export function openForm(){
    document.getElementsByClassName("container")[0].classList.add("active");  
}

export function closeForm(){
    document.getElementsByClassName("overlay")[0].classList.remove("active");
}
export function disableEditing() {
    (<HTMLInputElement>document.getElementById("password")).disabled = true;
    (<HTMLInputElement>document.getElementById("username")).disabled = true;
    (<HTMLInputElement>document.getElementById("confirmpass")).style.visibility = "hidden";
}
export function myFunction(){
    document.getElementById('register').style.visibility = "visible";
    let backDrop = document.getElementById('backDrop');
    backDrop.style.visibility = "visible";
    document.getElementById('main').style.visibility = "hidden";
backDrop.addEventListener('click', () => {
            document.getElementById('register').style.visibility = "hidden";
let backDrop = document.getElementById('backDrop').style.visibility = "hidden";
document.getElementById('main').style.visibility = "visible";
})
}

