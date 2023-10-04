// fixed nave
let to_top = document.querySelector(`.top`);



function fixednave ()
{
    var showpagehieght = window.scrollY;
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


// show  class showcollapse in small screen

let toggle = document.querySelector(`#navbar-toggler`);
toggle.addEventListener(`click`, () =>
{
    document.querySelector(`.collapse`).classList.toggle(`showcollapse`);
    document.querySelector(`.collapse`).classList.toggle(`text-center`);
});
// hide collapse when click at link
let navlink = document.querySelectorAll(`.nav-link`);
navlink.forEach(k =>
{
    k.addEventListener(`click`, () =>
    {
        document.querySelector(`.collapse`).classList.remove(`showcollapse`);
        document.querySelector(`.collapse`).classList.toggle(`text-center`);
    });
});
let start = false;
window.addEventListener(`scroll`, () =>
{
    /* active class */
    let sections = document.querySelectorAll(`.section`);
    sections.forEach(sec =>
    {
        let stop = window.scrollY;
        let offset = sec.offsetTop;
        let id = sec.getAttribute(`id`);
        if (stop >= (offset - 100))
        {
            cuurentsection = id;
        }
    });
    navlink.forEach(li =>
    {
        if (li.href.includes(cuurentsection))
        {
            document.querySelector(`.active`).classList.remove(`active`);
            li.classList.add(`active`);
        }
    });
    let counter_h2 = document.querySelectorAll(`.counter h2`);
    let fact_top = document.querySelector(`.fact .row`);
    // counter
    if (window.scrollY >= fact_top.offsetTop)
    {
        if (!start)
        {
            counter_h2.forEach(h =>
            {
                let goal = h.dataset.goal;
                let counter = setInterval(() =>
                {
                    h.textContent++;
                    if (h.textContent == goal)
                    {
                        clearInterval(counter);
                    }
                }, 1000 / goal);

            });
            start = true;
        }
    }

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

    // anmation about
    if (showpagehieght >= (about.offsetTop - 150))
    {
        about.classList.add(`anmation`);
        about.style.opacity = 1;
       
    }
    /* feature */
    document.querySelectorAll(`.f-col`).forEach(col =>
    {
        if (window.scrollY >= (col.offsetTop - 200))
        {
            col.classList.add(`no-translate`);
        } else
        {
            col.classList.remove(`no-translate`);
        }
    })


}
);

// change backgroud
let landing = document.querySelector(`.landing`);
let landingimg = [ `carousel-1.jpg`, `carousel-2.jpg` ];
setInterval(() =>
{
    let rondomtime = Math.floor(Math.random() * landingimg.length);
    landing.style.backgroundImage = `url(${landingimg[ rondomtime ]})`;
}, 1000);
// end
