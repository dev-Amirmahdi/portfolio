const cards = document.querySelectorAll(
".glass-card,.project-card,.skill"
);

const observer = new IntersectionObserver(
(entries)=>{
entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});
},
{
threshold:0.2
}
);

cards.forEach(card=>{
observer.observe(card);
});


//Cursor Glow Effect

const cursor =
document.getElementById("cursor");

document.addEventListener(
"mousemove",
e=>{

cursor.style.left =
e.clientX + "px";

cursor.style.top =
e.clientY + "px";

});


//Dark / Light Toggle

// const toggle =
// document.getElementById(
// "themeToggle"
// );

// toggle.addEventListener(
// "click",
// ()=>{

// document.body.classList.toggle(
// "light-mode"
// );

// });
const toggleBtn = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");

if(localStorage.theme === "light"){
    document.documentElement.classList.remove("dark");
    themeIcon.className = "fas fa-sun";
}else{
    document.documentElement.classList.add("dark");
    themeIcon.className = "fas fa-moon";
}

toggleBtn.addEventListener("click",()=>{

    document.documentElement.classList.toggle("dark");

    if(document.documentElement.classList.contains("dark")){

        localStorage.theme = "dark";
        themeIcon.className = "fas fa-moon";

    }else{

        localStorage.theme = "light";
        themeIcon.className = "fas fa-sun";

    }

});



