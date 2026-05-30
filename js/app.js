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


    const form = document.getElementById('contactForm');
    const formStatus = document.getElementById('formStatus');
    const submitBtn = document.getElementById('submitBtn');
    
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // گرفتن مقادیر
        const name = document.getElementById('userName').value;
        const email = document.getElementById('userEmail').value;
        const message = document.getElementById('userMessage').value;
        
        // نمایش وضعیت در حال ارسال
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        
        try {
            // ارسال به Formspree (ابتدا باید در سایت ثبت نام کنی)
            const response = await fetch('https://formspree.io/f/xzdwwqqq', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    name: name,
                    email: email,
                    message: message,
                    _replyto: email
                })
            });
            
            if (response.ok) {
                // موفقیت
                formStatus.className = 'mt-4 p-4 rounded-xl text-center transition-all duration-300 bg-green-500/20 border border-green-500 text-green-400';
                formStatus.innerHTML = '<i class="fas fa-check-circle"></i> پیام شما با موفقیت ارسال شد! به زودی با شما تماس میگیرم.';
                formStatus.classList.remove('hidden');
                form.reset();
                
                // مخفی کردن پیغام بعد از 5 ثانیه
                setTimeout(() => {
                    formStatus.classList.add('hidden');
                }, 5000);
            } else {
                throw new Error('ارسال ناموفق');
            }
        } catch (error) {
            // خطا
            formStatus.className = 'mt-4 p-4 rounded-xl text-center transition-all duration-300 bg-red-500/20 border border-red-500 text-red-400';
            formStatus.innerHTML = '<i class="fas fa-exclamation-triangle"></i> خطا در ارسال پیام. لطفاً دوباره تلاش کنید.';
            formStatus.classList.remove('hidden');
            
            setTimeout(() => {
                formStatus.classList.add('hidden');
            }, 5000);
        } finally {
            // برگشت دکمه به حالت اول
            submitBtn.disabled = false;
            submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Send Message';
        }
    });
