
const burgerMenu = document.querySelector('.mobile-menu')
const burgerButton = document.querySelector('.hamburger-button')


// init burger


// burgerButton.addEventListener('click',(e) => {
//     e.defaultPrevented
//     e.target.classList.toggle('active')

//     if (e.target.classList.contains('active')){
//         gsap.to(burgerMenu, {
//             height: '100vh',
//             padding: "5%",
//         })
//     } else {
//         gsap.to(burgerMenu, {
//             height: '0vh',
//             padding: '0',
//         })
//     }
// })



gsap.set(".mobile-menu a", {
    x: -300,
    opacity:0,
});

burgerButton.addEventListener('click',(e) => {
    e.defaultPrevented
    e.target.classList.toggle('active')

    if (e.target.classList.contains('active')){

        let tl = gsap.timeline({duration: '.5' });
        tl.to(burgerMenu, {
            height: 'auto',
            padding: "5%",
        }).to('.mobile-menu a', {
            opacity:1,
            x: 0,
            stagger: .25
        },.25)


    } else {
        let tl = gsap.timeline({duration: '.5' });
        tl.to('.mobile-menu a', {
            opacity:0,
            x: 300,
            stagger: .25,
            reversed:true,
        }).to(burgerMenu, {
            height: '0',
            padding: "0%",
            duration: 1.5
        },"-=.75")
        tl.set(".mobile-menu a", {
            x: -300,});
    }
})




