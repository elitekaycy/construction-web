
//js function for navbar fixed scrolling 

window.addEventListener('scroll', () => {
    const target = document.querySelector('.infoNav')
   if(document.body.scrollTop >  10 || document.documentElement.scrollTop > 10)
       {
        // console.log('scroll event here...')
        target.classList.add('fixedScroll')
       }
    else
       {
        //    console.log('scroll event uncalled')
           target.classList.remove('fixedScroll')
       }
})