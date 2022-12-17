import './less/index.less'

// Your code goes here!
console.log("hello")
// Your code goes here!
Array.from(document.links).forEach(link => 
    link.addEventListener("mouseover",(event) => {
        link.style.color ="blue"
    }));

    Array.from(document.links).forEach(link => 
        link.addEventListener("mouseleave",(event) => {
            link.style.color ="black";
        }));

        addEventListener("load",(event) =>{
            console.log("Page is loaded");
        } 
        )

        addEventListener("wheel",(event) => {
            if(event.type === "wheel"){
                console.log('User is scrolling')
            }

        });

        const mainImage = document.querySelector(".intro img");
        mainImage.addEventListener("dblclick",(event) => {
            mainImage.src ="https://cdn.dribbble.com/users/3593902/screenshots/8852136/day_bus.gif"
        })

        addEventListener("keydown",(event)=> {
            if(event.key == "p"){
                document.body.innerHTML = "<h1>Sorry you pressed p, refresh page</h1>";

            }
        })

        addEventListener("resize",(event) => {
            console.log(`Your window width is :${window.innerWidth} 
            Your window height is : ${window.innerHeight}`)
        })

        const lowerButton = document.querySelectorAll('.btn');
        console.log(lowerButton);

        lowerButton.forEach(button =>
            button.addEventListener("mouseenter",(event) => {
                button.style.backgroundColor ="blue";
                button.style.color ="white";
            }))

            lowerButton.forEach(button =>
                button.addEventListener("mouseleave",(event) => {
                    button.style.backgroundColor ="#17A2B8";
                }))

                const boatImg = document.querySelector(".content-destination img")
                console.log(boatImg);
                boatImg.addEventListener("click",(event) => {
                    boatImg.src = "https://media4.giphy.com/media/UuYwihkHeDptzuEkrG/giphy.gif";
                })
                const clickHere = document.querySelector(".content-destination")
                // console.log(clickHere)
                const tag = document.createElement("p");
                const text = document.createTextNode("Click Image");
                tag.appendChild(text);
                clickHere.appendChild(tag);

                const images = document.querySelectorAll("img");
                // console.log(images)
                images.forEach(image => image.addEventListener("drag",(event) => {
                    image.src = "";
                    image.alt = ''
                }))


                const paragraphs = document.querySelectorAll("p");
                paragraphs.forEach(paragraph => paragraph.addEventListener("copy",(event)=>{
                    console.log(paragraph.innerText);
                }))

                const firstLink = document.querySelector('.nav-link');
                firstLink.addEventListener("click",(event) => {
                
                    event.preventDefault();
                    
                })
                firstLink.href = "facebook.com";
                console.log(firstLink);


                