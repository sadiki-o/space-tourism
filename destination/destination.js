//SELECT BUTTONS
let btn_moon = document.querySelector(".moon")
let btn_mars = document.querySelector(".mars")
let btn_europa = document.querySelector(".europa")
let btn_titan = document.querySelector(".titan")


//SELECT PLACEHOLDERS FOR CONTENT
let planet_image = document.querySelector(".planet-image")
let planet_name = document.querySelector("#planet-name")
let planet_description = document.querySelector("#planet-description")
let planet_dist = document.querySelector(".dis")
let planet_tim = document.querySelector(".tim")

//SECTION
let section = document.querySelector("#section")



//MOON
btn_moon.addEventListener("click", () => {
    if(!btn_moon.classList.contains("active")){
        section.style.opacity = ".5" 
        
        setTimeout(() => {
            m = [btn_moon, btn_mars, btn_europa, btn_titan];
            for(let i=0; i< m.length; i++){
                m[i].classList.contains("active") && m[i].classList.remove("active") 
            }
            btn_moon.classList.add("active")

            //CHANGE CONTENT OF THE PLANET
            planet_image.src = "../assets/destination/image-moon.png"
            planet_name.innerHTML = "MOON"
            planet_description.innerHTML = "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites. "
            planet_dist.innerHTML = "384,400 KM"
            planet_tim.innerHTML = "3 DAYS"
            section.style.opacity = "1"
        }, 400)
        
    }
})

//MARS
btn_mars.addEventListener("click", () => {
    if(!btn_mars.classList.contains("active")){
        section.style.opacity = ".5"  

        setTimeout(() => {
            m = [btn_moon, btn_mars, btn_europa, btn_titan];
            for(let i=0; i< m.length; i++){
                m[i].classList.contains("active") && m[i].classList.remove("active")
            }
            btn_mars.classList.add("active")

            //CHANGE CONTENT OF THE PLANET
            planet_image.src = "../assets/destination/image-mars.png"
            planet_name.innerHTML = "MARS"
            planet_description.innerHTML = "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!"
            planet_dist.innerHTML = "225 MIL. KM"
            planet_tim.innerHTML = "9 MONTHS"
            section.style.opacity = "1"
        }, 300)

        
    }
})

//EUROPA
btn_europa.addEventListener("click", () => {
    if(!btn_europa.classList.contains("active")){
        section.style.opacity = ".5" 
       
        setTimeout(() => {
            m = [btn_moon, btn_mars, btn_europa, btn_titan];
            for(let i=0; i< m.length; i++){
                m[i].classList.contains("active") && m[i].classList.remove("active")
            }
            btn_europa.classList.add("active")

            //CHANGE CONTENT OF THE PLANET
            planet_image.src = "../assets/destination/image-europa.png"
            planet_name.innerHTML = "EUROPA"
            planet_description.innerHTML = "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin."
            planet_dist.innerHTML = "628 MIL. KM"
            planet_tim.innerHTML = "3 YEARS"
            section.style.opacity = "1"
        }, 300)
        
        
    }
})

//TITAN
btn_titan.addEventListener("click", () => {
    if(!btn_titan.classList.contains("active")){
        section.style.opacity = ".5" 
        
        setTimeout(() => {
           m = [btn_moon, btn_mars, btn_europa, btn_titan];
            for(let i=0; i< m.length; i++){
                m[i].classList.contains("active") && m[i].classList.remove("active")
            }
            btn_titan.classList.add("active")

            //CHANGE CONTENT OF THE PLANET
            planet_image.src = "../assets/destination/image-titan.png"
            planet_name.innerHTML = "TITAN"
            planet_description.innerHTML = "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn."
            planet_dist.innerHTML = " 1.6 BIL. KM"
            planet_tim.innerHTML = "7 YEARS"
            section.style.opacity = "1" 
        }, 300)
        
    }
})