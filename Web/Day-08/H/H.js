

document.getElementById('learn-more').addEventListener("click",function(){ //select learn-more by id, assign event listener -- this is what you do on this event
    let overlay = document.getElementById('banner-overlay'); 
    if(overlay){
        overlay.remove(); //remove overlay
    }
    let titleNode = document.getElementById('title'); //select title
    titleNode.innerHTML = "welcome to my flower shop" //change text using innerHTML
    titleNode.style.backgroundColor = 'blue'; //change styling
    this.innerHTML = "buy flowers";
    this.style.backgroundColor = 'red';
});

let icons = document.getElementsByClassName('icon-imgs'); // select all icons by class

for(let icon of icons){
    icon.addEventListener('mouseenter',function(){ //add event listener for each icon when the mouse enters do this
        this.style.height = "156px"; //get larger
        this.style.width  = "156px";
    });
    icon.addEventListener('mouseleave',function(){ //when mouse leaves do this
        this.style.height = "112px"; //make the icons smaller
        this.style.width  = "112px";
    });
}