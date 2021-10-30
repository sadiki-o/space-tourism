//SELECT BUTTONS
let one = document.querySelector(".one")
let two = document.querySelector(".two")
let three = document.querySelector(".three")
let four = document.querySelector(".four")


//SELECT PLACEHOLDERS FOR CONTENT
let nm = document.querySelector("#worker-name")
let description = document.querySelector("#worker-description")
let img = document.querySelector(".worker-image")

//SECTION
let section = document.querySelector("#section")



//one
one.addEventListener("click", () => {
    if(!one.classList.contains("active")){
        section.style.opacity = ".5" 
        
        setTimeout(() => {
            m = [one, two, three, four];
            for(let i=0; i< m.length; i++){
                m[i].classList.contains("active") && m[i].classList.remove("active") 
            }
            one.classList.add("active")

            //CHANGE CONTENT OF THE WORKER
            nm.innerHTML = "Douglas Hurley"
            description.innerHTML = "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."
            img.src = "../assets/crew/image-douglas-hurley.png"
            section.style.opacity = "1"

            
        }, 400)
        
    }
})

//two
two.addEventListener("click", () => {
    if(!two.classList.contains("active")){
        section.style.opacity = ".5"  

        setTimeout(() => {
            m = [one, two, three, four]
            for(let i=0; i< m.length; i++){
                m[i].classList.contains("active") && m[i].classList.remove("active")
            }
            two.classList.add("active")

            //CHANGE CONTENT OF THE WORKER
            nm.innerHTML = "Victor Glover   "
            description.innerHTML = "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. "
            img.src = "../assets/crew/image-victor-glover.png"
            section.style.opacity = "1"

        }, 300)

        
    }
})

//three
three.addEventListener("click", () => {
    if(!three.classList.contains("active")){
        section.style.opacity = ".5" 
       
        setTimeout(() => {
            m = [one, two, three, four]
            for(let i=0; i< m.length; i++){
                m[i].classList.contains("active") && m[i].classList.remove("active")
            }
            three.classList.add("active")

            //CHANGE CONTENT OF THE WORKER
            nm.innerHTML = "Anousheh Ansari"
            description.innerHTML = "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. "
            img.src = "../assets/crew/image-anousheh-ansari.png"
            section.style.opacity = "1"

        }, 300)
        
        
    }
})

//four
four.addEventListener("click", () => {
    if(!four.classList.contains("active")){
        section.style.opacity = ".5" 
        
        setTimeout(() => {
            m = [one, two, three, four]
            for(let i=0; i< m.length; i++){
                m[i].classList.contains("active") && m[i].classList.remove("active")
            }
            four.classList.add("active")

            //CHANGE CONTENT OF THE WORKER
            nm.innerHTML = "MARK SHUTTLEWORTH"
            description.innerHTML = "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist."
            img.src = "../assets/crew/image-mark-shuttleworth.png"
            section.style.opacity = "1"
             
        }, 300)
        
    }
})