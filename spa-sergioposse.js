document.addEventListener('DOMContentLoaded', function () {

    let resow = window.innerWidth;
    let resoh = window.innerHeight;
            
            if(resow<resoh){
                // Get HTML head element 
                var head = document.getElementsByTagName('HEAD')[0];  
                // Create new link Element 
                var link = document.createElement('link'); 
                // set the attributes for link element  
                link.rel = 'stylesheet';  
                link.type = 'text/css'; 
                link.href = 'style-mobile.css';  
                // Append link element to HTML head 
                head.appendChild(link);

                //LOAD IMAGES DEPENDING DEVICE SIZE
                let rotor = document.getElementById("rotate");
                rotor.setAttribute("src","img/hearth-circle-small.png");
                let nutri = document.getElementById("nutricion");
                nutri.setAttribute("src", "img/AAA nutri.jpg");
                let odonto = document.getElementById("odontologia");
                odonto.setAttribute("src", "img/AAA odonto.jpg");
                let psico = document.getElementById("psicologia");
                psico.setAttribute("src", "img/AAA psico.jpg");
                let alter = document.getElementById("alternativa");
                alter.setAttribute("src", "img/AAA yoga.jpg");
                let navCarrousel = document.getElementsByClassName('nav-carrousel');
                let arrCarrousel = ["img/AAA work.jpg","img/AAA work2.jpg","img/AAA work3.jpg","img/AAA work4.jpg","img/AAA work5.jpg"];
                for(let i=0;i<navCarrousel.length;i++){
                    navCarrousel[i].setAttribute("src",arrCarrousel[i]);
                }
                let mySlides = document.getElementsByClassName('mySlides');
                let arrSlides = ["img/AAAone.jpg","img/AAA massage.jpg","img/AAA blood-presure.jpg","img/AAA two.jpg"];
                for(let i=0;i<mySlides.length;i++){
                    mySlides[i].setAttribute("src",arrSlides[i]);
                }
                let respoAnima = document.getElementsByClassName('respo-animation');
                let arrRespo = ["img/desktop-small.png","img/mobile-small.png","img/tablet-small.png"];
                for(let i=0;i<respoAnima.length;i++){
                    respoAnima[i].setAttribute("src",arrRespo[i]);
                }
            }
            else{
                //LOAD IMAGES DEPENDING DEVICE SIZE
                let rotor = document.getElementById("rotate");
                rotor.setAttribute("src","img/hearth-circle.png");
                let nutri = document.getElementById("nutricion");
                nutri.setAttribute("src", "img/nutri.jpg");
                let odonto = document.getElementById("odontologia");
                odonto.setAttribute("src", "img/odonto.jpg");
                let psico = document.getElementById("psicologia");
                psico.setAttribute("src", "img/psico.jpg");
                let alter = document.getElementById("alternativa");
                alter.setAttribute("src", "img/yoga.jpg");
                let navCarrousel = document.getElementsByClassName('nav-carrousel');
                let arrCarrousel = ["img/work.jpg","img/work2.jpg","img/work3.jpg","img/work4.jpg","img/work5.jpg"];
                for(let i=0;i<navCarrousel.length;i++){
                    navCarrousel[i].setAttribute("src",arrCarrousel[i]);
                }
                let mySlides = document.getElementsByClassName('mySlides');
                let arrSlides = ["img/one.jpg","img/massage.jpg","img/blood-presure.jpg","img/two.jpg"];
                for(let i=0;i<mySlides.length;i++){
                    mySlides[i].setAttribute("src",arrSlides[i]);
                }
                let respoAnima = document.getElementsByClassName('respo-animation');
                let arrRespo = ["img/desktop-large.png","img/mobile-large.png","img/tablet-large.png"];
                for(let i=0;i<respoAnima.length;i++){
                    respoAnima[i].setAttribute("src",arrRespo[i]);
                }
            }
    
    let vh = window.innerHeight * 0.01;
    let vw = window.innerWidth * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    document.documentElement.style.setProperty('--vw',`${vw}px`);
    document.documentElement.style.setProperty('--offsetTop',`${vh}px`);
    //height: calc(var(--vh, 1vh) * 100)
    //USE THIS WAY for real viewport in mobile navigators
    //the comma in var(--vh, 1vh) is a fallback
    //in case that the --vh is not defined, the default value is 1vh
    // *100 = 100%, *50 = 50%, etc.




    



    



        //pound must be 0 for no affect, otherwise need to try
    const scrollToElement = (elementFrom,elementTo,pound)=>{
        elementFrom.addEventListener("click",()=>{
            let distance = parseInt(elementTo.offsetTop)-parseInt(pound);
            scroll({
                behavior: "smooth",   //smotth BETTER solution for scroll but not supported by some browsers in 2020
                top: distance
            }) 
        });
    }

    let specialitiesButton = document.getElementById("especialidades");
    let specialities = document.getElementById("specialities");
    scrollToElement(specialitiesButton,specialities,150);

    let initButton = document.getElementById("nosotros");
    let init = document.getElementById("init");
    scrollToElement(initButton,init,100);

    let contactButton = document.getElementById("contacto");
    let contact = document.getElementById("contact");
    scrollToElement(contactButton,contact,100);

    let benefitsButton = document.getElementById("beneficios");
    let benefits = document.getElementById("benefits");
    scrollToElement(benefitsButton,benefits,100);


 

   window.addEventListener('scroll',  () => {
        let heightContainer = document.getElementById('section-container').offsetHeight;
        let scrollVal = window.pageYOffset / (heightContainer - window.innerHeight);
        // console.log("scrollval: "+scrollVal*100);
        // document.body.style.setProperty('--scrollRotor',parseInt(((scrollVal*100)+10))+"%");
        document.body.style.setProperty('--scroll',scrollVal);



        const addMultiplesClases = (clase)=>{
            Object.keys(clases).map((key)=>{
                clases[key].classList.add(clase);
                clases[key].style.visibility = "visible";
            })
        }
    
        const removeMultiplesClases = (clase)=>{
            let clases = document.getElementsByClassName('respo-animation');
            Object.keys(clases).map((key)=>{
                clases[key].classList.remove(clase);
                clases[key].style.visibility = "hidden";
            })
        }




        //elemento = al elemento que se le agrega la clase en scroll
        //claseString = la clase que se agrega
        //alAux = se define solo si necesito que la clase se agrege a un elemento pero se active con otro al scrollear
        //por ejemplo con un div que adentro tiene un h2, el auxiliar es el div ya que el h2 es muy chico su height para activar de forma smooth
        const watchScroll = async (elemento,claseString,elAux)=>{
            //the calcs was test and error thing trying and trying, no maths knowledge here
            // let posTop = parseInt(((window.scrollY + (elemento.clientHeight)*1.35 )/10));
            //responsive will take care of when the animation starts, in mobile start soon

            let elemTrigger

            if (elAux) {
                elemTrigger=elAux;
            }
            else{
                elemTrigger=elemento
            }

            
        
            let limitTop = elemTrigger.getBoundingClientRect().top + window.scrollY; //less limit means that the add class happens more early cause the top limit is set to high
            let elementHeight = elemTrigger.getBoundingClientRect().height;

            let coeficient = window.innerHeight*0.6;
            let resow = window.innerWidth;
            let resoh = window.innerHeight;
            
            if(resow>resoh){
                coeficient = window.innerHeight*0.6;
                
            }

            // console.log(limitTop);
            // console.log("elH: "+elementHeight);
            // console.log("scrollY+coef: "+scrollY+coeficient+" >  limitTop: "+limitTop);
            
            if((scrollY+coeficient>limitTop)&&(scrollY+coeficient<limitTop+elementHeight+coeficient) ){//
                if(elemento.length>0){
                    addMultiplesClases(claseString);
                }else{
                    elemento.style.visibility="visible";
                    elemento.classList.add(claseString);
                }
            }
            else{
                if(elemento.length>0){
                    removeMultiplesClases(claseString);
                }else{
                    elemento.classList.remove(claseString);
                    elemento.style.visibility="hidden";

                }
            }
            
        }

        watchScroll(document.getElementById('nutricion'),'animation-fading');
        watchScroll(document.getElementById('psicologia'),'animation-fading');
        watchScroll(document.getElementById('alternativa'),'animation-fading');
        watchScroll(document.getElementById('odontologia'),'animation-fading');

        //uso del elemento auxiliar para disparar la animacion con el scroll
        watchScroll(document.getElementById('benefitsSpin'),'animation-spin',document.getElementById('benefits'));
        watchScroll(document.getElementById('line-benefits'),'animation-grow-right',document.getElementById('benefits'));

        watchScroll(document.getElementById('h2-device-animation'),'animation-fading',document.getElementById('device-animation'));

        //cargando animacion a muchos elementos de la misma clase
        let clases = document.getElementsByClassName('respo-animation');
        watchScroll(clases,'slideDevices',document.getElementById('device-animation'));

        watchScroll(document.getElementById('emergency-img'),'slideDevices',document.getElementById('emergency'));
        watchScroll(document.getElementById('emergency-desc'),'animation-fading',document.getElementById('emergency'));          
        watchScroll(document.getElementById('check-respo'),'checked',document.getElementById('device-animation'));
                        

    

        //progress bar
        var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        var heightBar = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        var scrolled = (winScroll / heightBar) * 100;
        document.getElementById("bar").style.width = scrolled + "%";


        //100% vertical-bar = height2
        let el = document.getElementById("benefits-content");
        let heightBenefitsContent = el.getBoundingClientRect().height;

        var winScroll2 = window.pageYOffset-heightBenefitsContent;
        console.log("2: "+winScroll2);
        console.log("2: "+heightBenefitsContent);

            let resow = window.innerWidth;
            let resoh = window.innerHeight;
            let wepa = 0
            if(resow<resoh){
                wepa = 400; 
            }
        let progress=0;
        if(winScroll2>heightBenefitsContent+wepa){
            //start progress bar
            console.log("progress..");
            console.log("height: "+heightBenefitsContent);
            let scrollTop = parseInt(window.pageYOffset) - parseInt(heightBenefitsContent)*2-wepa;
            progress = parseInt((scrollTop*100)/heightBenefitsContent);
            console.log("scrollTop: "+scrollTop)
            if(wepa==400){
                console.log("wepa");
                console.log("progress: "+progress);
                // document.getElementById("vertical-bar").style.height= -12+progress+"%";
            }else{
                // document.getElementById("vertical-bar").style.height = progress+"%";
            }
            document.getElementById('vertical-bar-inside').style.height = progress+"%";

            document.getElementById('vertical-bar-inside').style.display = "block";


            // document.getElementById('vertical-bar').style.setProperty('border-radius','20%');


        }

        
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

