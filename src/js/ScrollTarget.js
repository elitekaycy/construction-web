export default class ScrollTarget{
    constructor(element, coordX, coordY){
        this.coordX = coordX
        this.coordY = coordY
        this.element = element
    }

    scrollTo(){
     
        window.scrollTo({
            top: this.coordX,
            left: this.coordY,
            behavior: 'smooth'
          });
          
    }

    getTarget()
    {
        return this.element
    }
   
}