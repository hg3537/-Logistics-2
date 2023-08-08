// fixed nave
let to_top = document.querySelector(`.top`);

function startCount (el)
{
    let goal = el.dataset.goal;
    let counter = setInterval(() =>
    {
        el.textContent++;
        if (el.textContent === goal)
        {
            clearInterval(counter);
        }
    }, 1000 / goal);
}


function fixednave ()
{
    const showpagehieght = window.scrollY;
    // fixeed nave
    if (showpagehieght >= 180)
    {
        document.querySelector(`.navbar`).classList.add(`fexednave`);
    } else
    {
        document.querySelector(`.navbar`).classList.remove(`fexednave`);
    }
    let about = document.querySelector(`.about .container`);
    // icon return to top
    if (showpagehieght > 400)
    {
        document.querySelector(`.top`).classList.add(`showtop`);
    } else
    {
        document.querySelector(`.top`).classList.remove(`showtop`);

    }
    // anmation about
    if (showpagehieght >= about.offsetTop)
    {
        about.classList.add(`anmation`);
        about.style.opacity = 1;
    }
}
window.onscroll = () => fixednave();

// show  class showcollapse in small screen

let toggle = document.querySelector(`#navbar-toggler`);
toggle.addEventListener(`click`,  () =>
{
    document.querySelector(`.collapse`).classList.toggle(`showcollapse`);
    document.querySelector(`.collapse`).classList.toggle(`text-center`);
});
// hide collapse when click at link
let navlink = document.querySelectorAll(`.nav-link`);
navlink.forEach(k =>
{
    k.addEventListener(`click`, () => {
        document.querySelector(`.collapse`).classList.remove(`showcollapse`);
        document.querySelector(`.collapse`).classList.toggle(`text-center`); 
    })
})
let start = false;
window.addEventListener(`scroll`, () =>
{
    let counter_h2 = document.querySelectorAll(`.counter h2`);
    let fact_top = document.querySelector(`.fact`).offsetTop;
    let fact_outhieht = document.querySelector(`.fact`).offsetHeight;
    // counter
    if (window.scrollY === fact_top);
    {
        
        if (!start)
        {
            counter_h2.forEach((n) => startCount(n));
        }
        start = true;
    }
});
// change backgroud
let landing = document.querySelector(`.landing`);
let landingimg = [ `carousel-1.jpg`, `carousel-2.jpg`, `landing.jpg` ];
setInterval(() =>
{
    let rondomtime = Math.floor(Math.random() * landingimg.length);
    landing.style.backgroundImage = `url(${landingimg[ rondomtime ]})`;
}, 1000);