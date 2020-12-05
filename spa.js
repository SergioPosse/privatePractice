document.addEventListener('DOMContentLoaded', function () {
    let vh = window.innerHeight * 0.01;
    let vw = window.innerWidth * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    document.documentElement.style.setProperty('--vw',`${vh}px`);
    //height: calc(var(--vh, 1vh) * 100)
    //USE THIS WAY for real viewport in mobile navigators
    //the comma in var(--vh, 1vh) is a fallback
    //in case that the --vh is not defined, the default value is 1vh
    // *100 = 100%, *50 = 50%, etc.


    const scrollToElement = (elementFrom,elementTo)=>{
        elementFrom.addEventListener("click",()=>{
            scroll({
                behavior: "smooth",   //smotth BETTER solution for scroll but not supported by some browsers in 2020
                top: elementTo.offsetTop
            }) 
        });
    }

    let especialidades = document.getElementById("especialidades");
    let three = document.getElementById("three");
    scrollToElement(especialidades,three);

    let nosotros = document.getElementById("nosotros");
    let one = document.getElementById("one");
    scrollToElement(nosotros,one);

    let contacto = document.getElementById("contacto");
    let footer = document.getElementById("footer");
    scrollToElement(contacto,footer);




   window.addEventListener('scroll',  () => {

        let heightContainer = document.getElementById('section-container').offsetHeight;
        let scrollVal = window.pageYOffset / (heightContainer - window.innerHeight);
        console.log(scrollVal);
        document.body.style.setProperty('--scroll',scrollVal);

        // let el2 = document.getElementById("marker");
        // elemento2 = el2.offsetTop;

        const watchScroll = async (elemento,claseString)=>{
            //the calcs was test and error thing trying and trying, no maths knowledge here
            // let posTop = parseInt(((window.scrollY + (elemento.clientHeight)*1.35 )/10));
            // console.log(elemento.getBoundingClientRect().top+window.scrollY);
            // console.log(scrollY);
            let reso = window.innerWidth;
            let coeficient = 500;
            if(reso>640){
                coeficient = 300;
            }
        
            let limitTop = elemento.getBoundingClientRect().top + window.scrollY; //less limit means that the add class happens more early cause the top limit is set to high
            
            if(scrollY+coeficient>limitTop ){ //
                   elemento.classList.add(claseString);
            }
            else{
                elemento.classList.remove(claseString);
            }
        }

        watchScroll(document.getElementById('nutricion'),'animation-fading');
        watchScroll(document.getElementById('psicologia'),'animation-fading');
        watchScroll(document.getElementById('alternativa'),'animation-fading');
        watchScroll(document.getElementById('odontologia'),'animation-fading');
        watchScroll(document.getElementById('benefitsSpin'),'animation-spin');

        var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        var scrolled = (winScroll / height) * 100;
        document.getElementById("bar").style.width = scrolled + "%";
        
    }, false);


    

    //sliderClass is the class name without the dot
    const setSlider = (sliderClass,duration)=>{
        let slides = document.getElementsByClassName(sliderClass);
        console.table(slides);
        let x = 0;
        slides[slides.length-1].style.display = "block";
        const startSlider = ()=>{
            slides[x].style.display = "block";
            Object.keys(slides).map((item)=>{
                if(item!=x){
                    slides[item].style.display = "none";
                }
            });
            if(x<slides.length){ x=x+1; };
            if(x>=slides.length){ x=0; };
        }
        setInterval(startSlider, duration); 
    };

    setSlider("mySlides",1500);

    setSlider("nav-carrousel",2500);

    
});

