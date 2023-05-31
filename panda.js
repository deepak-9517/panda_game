// ----------------monster----------------
let imgs=['a.png','b.png','c.png','fire.png','d.png','e.png','fire.png']
i=0;
let lgth=0;
function start(){ 
     let top=-150;
     let rand=Math.round(Math.random()*1300);
     let img=document.createElement("img");
        img.className="image";
        img.src=imgs[i];
        img.style.left=`${rand}px`;
        img.style.top=`${top}px`;
        var acc=setInterval(()=>{
            let d=document.querySelectorAll('.image');
            for(let i=0; i<d.length; i++){
        if(d[i].offsetTop>800){
            document.getElementById('score').innerHTML=lgth++;
            d[i].style.display="none";
        }
        if(solder_left+100>d[i].offsetLeft && solder_top<d[i].offsetTop+100 && solder_left<d[i].offsetLeft+100 && solder_top+100>d[i].offsetTop){
            clearInterval(acc);
            clearInterval(sto);
            document.removeEventListener("keydown",move);
                gameover();
        }
      }
        },30)
    
        document.body.appendChild(img)
    if(i>=6){
        i=0;
    }
    i++;
 }
 let dragon;
 function dra(){
       dragon = setInterval(start,1000);
     }

     let sto=setInterval(()=>{
        let d=document.querySelectorAll('.image');
            for(let i=0; i<d.length; i++){
                let t=d[i].offsetTop;
                d[i].style.top=`${t+5}px`;
            }
     },30)
// ----------------------solder------------------
let solder_top=520;
let solder_left=550;
let solder;
    function move(k){
     solder=document.getElementById("solder");
    switch(k.key){
        case "ArrowRight":
            if(solder_left<=1370)
               solder.style.left=`${solder_left+=20}px`;
               break
        case "ArrowLeft":
            if(solder_left>=0)
               solder.style.left=`${solder_left-=20}px`;
            break
        case "ArrowUp":
            if(solder_top>=0)
               solder.style.top=`${solder_top-=20}px`;
            break
        case "ArrowDown":
            if(solder_top<=590)
               solder.style.top=`${solder_top+=20}px`;
            break
    }
}
document.addEventListener("keydown",move);

// ---------------time---------------
    let min=0;
    let sec=0;
    let back=['2.webp','1.webp','4.webp','back.jpg']
    let bk=0;
    function gettime(){
        if(sec==60){
            min++;
            sec=0;
        }
        if(sec==15 || sec==30 || sec==45 || sec==59){
            document.body.style.backgroundImage = `url(${back[bk]})`;
            bk++;
        }
        if(bk==4){
            bk=0;
        }
    document.getElementById('ti').innerHTML=`${min}:${sec}`
        sec++;
    }
    let time
    function panda(){
         time=setInterval(gettime,1000);
        }

// ---------------game over-----------------
    function gameover(){
        clearInterval(time);
        clearInterval(dragon);
        let div=document.createElement("div");
        div.setAttribute('id','hide');
        let html=`<div class="popup">
            <p>Game Over</p>
            <div class="action">
                <input type="button" class="restart" value="Restart"/>
                <input type="button" class="exit" value="Exit"/>
            </div>
        </div>`
        div.innerHTML=html;
        document.body.appendChild(div);
        let exit=div.querySelector('.exit');
        let restart=div.querySelector('.restart');
        exit.addEventListener('click',()=>{
            window.close();
        })
        restart.addEventListener('click',()=>{
            div.style.display="none";
            location.reload();
            panda();
            dra();
        })
    }

