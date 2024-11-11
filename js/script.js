let banner = document.querySelector("#banner")
let outerimg = document.querySelector(".outerimg")
let imgmove =document.querySelector(".imgmove")
let pera = document.querySelector(".pera")
let about = document.querySelector("#about")
let main = document.querySelector(".main")
let service = document.querySelector("#service")
let box = document.querySelector(".box")
let box2 = document.querySelector(".box2")
let mission = document.querySelector("#mission")
let missionLeft = document.querySelector(".missionLeft")
let missionRight = document.querySelector(".missionRight")
let missionTitle = document.querySelector(".missionTitle")
let testimonials = document.querySelector("#testimonials")
let testimonialsBox = document.querySelector(".testimonialsBox")
let testimonialsBox2 = document.querySelector(".testimonialsBox2")
let testimonialsBox3 = document.querySelector(".testimonialsBox3")
let testimonialsBox4 = document.querySelector(".testimonialsBox4")
let testimonialsBox5 = document.querySelector(".testimonialsBox5")
let testimonialsBox6 = document.querySelector(".testimonialsBox6")
let testimonialsBox7 = document.querySelector(".testimonialsBox7")
let testimonialsBox8 = document.querySelector(".testimonialsBox8")
let testimonialsBox9 = document.querySelector(".testimonialsBox9")
let join = document.querySelector("#join")
let joinFirst = document.querySelector(".joinFirst")
let joinLast = document.querySelector(".joinLast")
let Contact = document.querySelector("#Contact")
let ContactLeft = document.querySelector(".ContactLeft")
let ContactRight = document.querySelector(".ContactRight")
let ContactTitle = document.querySelector(".ContactTitle")
let footer = document.querySelector("#footer")
let footerBox = document.querySelector(".footerBox")
let footerBottom = document.querySelector(".footerBottom")



banner.addEventListener("mousemove",function(event){
    
    outerimg.style.transform = `translate(-${event.clientX/100}px,-${event.clientY/100}px)`
    pera.style.transform = `translate(-${event.clientX/100}px,-${event.clientY/100}px)`
  
})

outerimg.addEventListener("mousemove",function(event){
    imgmove.style.transform = `translate(-${event.clientX/100}px,-${event.clientX/100}px)`

})


about.addEventListener("mousemove",function(event){
    main.style.transform = `translate(-${event.clientX/170}px,-${event.clientX/170}px)`
})

service.addEventListener("mousemove",function(event){
    box.style.transform = `translate(-${event.clientX/170}px,-${event.clientX/170}px)`
    box2.style.transform = `translate(-${event.clientX/170}px,-${event.clientX/170}px)`
})

mission.addEventListener("mousemove",function(event){
    missionTitle.style.transform = `translate(-${event.clientX/190}px,-${event.clientX/190}px)`
    missionLeft.style.transform = `translate(-${event.clientX/190}px,-${event.clientX/190}px)`
    missionRight.style.transform = `translate(-${event.clientX/190}px,-${event.clientX/190}px)`
    
})

testimonials.addEventListener("mousemove",function(event){
    testimonialsBox.style.transform = `translate(-${event.clientX/190}px,-${event.clientX/190}px)`
    testimonialsBox2.style.transform = `translate(-${event.clientX/190}px,-${event.clientX/190}px)`
    testimonialsBox3.style.transform = `translate(-${event.clientX/190}px,-${event.clientX/190}px)`
    testimonialsBox4.style.transform = `translate(-${event.clientX/190}px,-${event.clientX/190}px)`
    testimonialsBox5.style.transform = `translate(-${event.clientX/190}px,-${event.clientX/190}px)`
    testimonialsBox6.style.transform = `translate(-${event.clientX/190}px,-${event.clientX/190}px)`
    testimonialsBox7.style.transform = `translate(-${event.clientX/190}px,-${event.clientX/190}px)`
    testimonialsBox8.style.transform = `translate(-${event.clientX/190}px,-${event.clientX/190}px)`
    testimonialsBox9.style.transform = `translate(-${event.clientX/190}px,-${event.clientX/190}px)`
    
    
})

join.addEventListener("mousemove",function(event){
    joinFirst.style.transform = `translate(-${event.clientX/190}px,-${event.clientX/190}px)`
    joinLast.style.transform = `translate(-${event.clientX/190}px,-${event.clientX/190}px)`
    
})
Contact.addEventListener("mousemove",function(event){
    ContactLeft.style.transform = `translate(-${event.clientX/190}px,-${event.clientX/190}px)`
    ContactRight.style.transform = `translate(-${event.clientX/190}px,-${event.clientX/190}px)`
    
})

ContactRight.addEventListener("mousemove",function(event){
    ContactTitle.style.transform = `translate(-${event.clientX/80}px,-${event.clientX/80}px)`
   
    
})

footer.addEventListener("mousemove",function(event){
    footerBox.style.transform = `translate(-${event.clientX/100}px,-${event.clientX/100}px)`
    footerBottom.style.transform = `translate(-${event.clientX/100}px,-${event.clientX/100}px)`
   
    
})
