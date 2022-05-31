document.querySelector(".carousel-control-prev").addEventListener("click", (e)=>{
    var targetElement = e.target;
    let active = document.querySelector(`${targetElement.getAttribute("target")} .carousel-item.active`)
    let prev = active.previousElementSibling
    if(prev) {
        prev.classList.add("active","carousel-item-prev","carousel-item-left")
        active.classList.add("carousel-item-left")
    } else {
        prev = document.querySelector(`${targetElement.getAttribute("target")} .carousel-item:last-child`)
        prev.classList.add("active","carousel-item-prev","carousel-item-left")
        active.classList.add("carousel-item-left")
    }
    setTimeout(()=>{
        active.classList.remove("carousel-item-left","active")
        prev.classList.remove("carousel-item-prev","carousel-item-left")
    },0)
})
document.querySelector(".carousel-control-next").addEventListener("click", (e)=>{
    e.preventDefault()
    var targetElement = e.target;
    let active = document.querySelector(`${targetElement.getAttribute("target")} .carousel-item.active`)
    let next = active.nextElementSibling
    if(next) {
        next.classList.add("active","carousel-item-next","carousel-item-right")
        active.classList.add("carousel-item-right")
    } else {
        next = document.querySelector(`${targetElement.getAttribute("target")} .carousel-item`)
        next.classList.add("active","carousel-item-next","carousel-item-right")
        active.classList.add("carousel-item-right")
    }
    setTimeout(()=>{
        active.classList.remove("carousel-item-right","active")
        next.classList.remove("carousel-item-next","carousel-item-right")
    },0)
})

// if (direction === Direction.NEXT) {
//     directionalClassName = ClassName.LEFT;
//     orderClassName = ClassName.NEXT;
//     eventDirectionName = Direction.LEFT;
//   } else {
//     directionalClassName = ClassName.RIGHT;
//     orderClassName = ClassName.PREV;
//     eventDirectionName = Direction.RIGHT;
//   }

// var ClassName = {
//     CAROUSEL: 'carousel',
//     ACTIVE: 'active',
//     SLIDE: 'slide',
//     RIGHT: 'carousel-item-right',
//     LEFT: 'carousel-item-left',
//     NEXT: 'carousel-item-next',
//     PREV: 'carousel-item-prev',
//     ITEM: 'carousel-item'
//   };