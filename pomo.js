let timeleft = 1500;
let interval;

const updatetimer = () =>
{
    const minutes = Math.floor(timeleft/60);
    const seconds = timeleft % 60;
    timer.innerHTML = `${minutes.toString().padStart(2,"0")}
    :
    ${seconds.toString().padStart(2,"0")}`;
};

const starttimer = () =>{
    interval = setInterval(() =>{
        timeleft--;
        updatetimer();
        if(timeleft === 0)
            {
                clearInterval(interval);
                alert("times up")
                timeleft=1500;
                updatetimer();
            }
    },1000);
};
const stoptimer= ()=>clearInterval(interval);

const resettimer = ()=> {
    clearInterval(interval);
    timeleft=1500;
    updatetimer();
}
