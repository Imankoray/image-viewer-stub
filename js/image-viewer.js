// Get a DOM reference to the main image 
let heroImage= document.getElementById("hero-image");
// get a DOM ref to the collection of menu items 
let links = document.getElementsByClassName("menu-item");
// set the initial selection index
let selectedIndex = 3;
// load initial image into hero image 
heroImage.src=links[selectedIndex].dataset.image;
// listen to the transition end 
heroImage.ontransitionend = onTransitionEnd;
// loop through all of the menu items 
for(let i = 0; i < links.length; i++){
    // assign the click handler for each
links[i].onclick= handleClick;
}
// click handler
function handleClick(event){
    // Get the index of the clicked item
    let newIndex = returnItemIndex(links, event.currentTarget);
    // if the index is different from the existing selection
    if(newIndex != selectedIndex){
        // update the index selection
        selectedIndex = newIndex;
        // fade out the heroImage (requires CSS transition)
        heroImage.style.opacity = 0;
    }
// heroImage.src=event.currentTarget.dataset.image;
}
// handle end of transition
function onTransitionEnd(){
    // update the heroimage with a newly selected image 
    // dataset
    heroImage.src =  links[selectedIndex].dataset.image;
    // revert the opacity of the heroimage to make it visible 
    heroImage.style.opacity = 1;
    // console.log("transition ended")
}
// find the index of an item in a given collection
function returnItemIndex(collection,item){
    // loop through the collection
    for(let i= 0; i < collection.length; i++){
        // if the current item== tjr item we are looking for, a match was found
        if(collection[i]==item){
            return i;
        }
        // the loop will only run until the index is found
    }
    // if the item was not found, the next line will execute 
    console.error("cannot find item in collection");
}