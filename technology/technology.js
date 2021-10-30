//SELECT BUTTONS
let one = document.querySelector(".one")
let two = document.querySelector(".two")
let three = document.querySelector(".three")


//SELECT PLACEHOLDERS FOR CONTENT
let title = document.querySelector("#title")
let description = document.querySelector("#description")
let img = document.querySelector("#img")

//SECTION
let section = document.querySelector("#section")



//one
one.addEventListener("click", () => {
    if(!one.classList.contains("active")){
        section.style.opacity = ".5" 
        
        setTimeout(() => {
            m = [one, two, three];
            for(let i=0; i< m.length; i++){
                m[i].classList.contains("active") && m[i].classList.remove("active") 
            }
            one.classList.add("active")

            //CHANGE CONTENT OF THE TECH
            title.innerHTML = "LAUNCH VEHICLE"
            description.innerHTML = "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"
            img.src = "../assets/technology/image-launch-vehicle-landscape.jpg"
            section.style.opacity = "1"

            
        }, 400)
        
    }
})

//two
two.addEventListener("click", () => {
    if(!two.classList.contains("active")){
        section.style.opacity = ".5"  

        setTimeout(() => {
            m = [one, two, three]
            for(let i=0; i< m.length; i++){
                m[i].classList.contains("active") && m[i].classList.remove("active")
            }
            two.classList.add("active")

            //CHANGE CONTENT OF THE TECH
            title.innerHTML = "SPACE CAPSULE"
            description.innerHTML = "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."
            img.src = "../assets/technology/image-space-capsule-landscape.jpg"
            section.style.opacity = "1"

        }, 400)

        
    }
})

//three
three.addEventListener("click", () => {
    if(!three.classList.contains("active")){
        section.style.opacity = ".5" 
       
        setTimeout(() => {
            m = [one, two, three]
            for(let i=0; i< m.length; i++){
                m[i].classList.contains("active") && m[i].classList.remove("active")
            }
            three.classList.add("active")

            //CHANGE CONTENT OF THE TECH
            title.innerHTML = "LAUNCH VEHICLE"
            description.innerHTML = "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"
            img.src = "../assets/technology/image-spaceport-landscape.jpg"
            section.style.opacity = "1"

        }, 400)
        
        
    }
})
