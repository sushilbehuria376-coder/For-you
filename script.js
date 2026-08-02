const screens = document.querySelectorAll(".screen");

const typing = document.getElementById("typing");
const enterBtn = document.getElementById("enterBtn");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const openLetter = document.getElementById("openLetter");
const nextBtn = document.getElementById("nextBtn");

const envelope = document.getElementById("envelope");
const music = document.getElementById("bgMusic");

const message = "Hey BISWA ❤️";

let index = 0;

function typeWriter(){

if(index < message.length){

typing.innerHTML += message.charAt(index);

index++;

setTimeout(typeWriter,120);

}

}

typeWriter();

function showScreen(id){

screens.forEach(screen=>screen.classList.remove("active"));

document.getElementById(id).classList.add("active");

}

enterBtn.onclick=()=>{

music.play().catch(()=>{});

showScreen("question");

};

noBtn.addEventListener("mouseover",()=>{

const x=Math.random()*220-110;

const y=Math.random()*220-110;

noBtn.style.transform=`translate(${x}px,${y}px)`;

});

yesBtn.onclick=()=>{

showScreen("envelopeScreen");

};

openLetter.onclick=()=>{

envelope.classList.add("open");

setTimeout(()=>{

showScreen("letterScreen");

},1500);

};

nextBtn.onclick=()=>{

showScreen("finalScreen");

startConfetti();

};

function createHeart(){

const heart=document.createElement("div");

heart.className="heart";

heart.innerHTML="❤️";

heart.style.left=Math.random()*100+"vw";

heart.style.fontSize=(18+Math.random()*20)+"px";

heart.style.animationDuration=(5+Math.random()*5)+"s";

document.getElementById("hearts").appendChild(heart);

setTimeout(()=>{

heart.remove();

},9000);

}

setInterval(createHeart,300);
// ===== Confetti Animation =====

const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

resizeCanvas();
window.addEventListener("resize", resizeCanvas);

let confetti = [];

function startConfetti() {

    confetti = [];

    for (let i = 0; i < 180; i++) {

        confetti.push({
            x: Math.random() * canvas.width,
            y: -20 - Math.random() * canvas.height,
            r: 3 + Math.random() * 6,
            dx: (Math.random() - 0.5) * 4,
            dy: 2 + Math.random() * 4,
            color: `hsl(${Math.random()*360},100%,60%)`
        });

    }

    animateConfetti();
}

function animateConfetti() {

    ctx.clearRect(0,0,canvas.width,canvas.height);

    confetti.forEach(c => {

        ctx.beginPath();
        ctx.fillStyle = c.color;
        ctx.arc(c.x,c.y,c.r,0,Math.PI*2);
        ctx.fill();

        c.x += c.dx;
        c.y += c.dy;

        if(c.y > canvas.height){
            c.y = -20;
            c.x = Math.random() * canvas.width;
        }

    });

    requestAnimationFrame(animateConfetti);

}

// ❤️ Final floating hearts

setInterval(() => {

    if(document.getElementById("finalScreen").classList.contains("active")){

        for(let i=0;i<4;i++){

            createHeart();

        }

    }

},500);

// ❤️ Console message

console.log("Made With ❤️ By Sushil");

// ===== End =====