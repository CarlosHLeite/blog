
function pageTransition(){

    var tl = gsap.timeline();

    tl.to('.transition', {duration: .7, scaleY: 1, transformOrigin: "top left", ease: 'power4.out'})
    tl.to('.transition', {duration: .7, scaleY: 0, transformOrigin: "top left" , ease: 'power4.out', delay: .8})
}

function contentAnimation() {

    var tl = gsap.timeline();

    tl.from('.main-section', {duration: 2, translateY: 80, opacity: 0, delay: .8, ease: 'power4.out'})
    
    tl.to('.img', { duration: .8, clipPath: "polygon( 0 100%, 100% 100%, 100% 0, 0 0)"}, "-=1.1")

}

function delay(n) {
    n = n || 2000;

    return new Promise( done => {
        setTimeout(()=> {
            done();
        }, n);
    });
}




barba.init({

    sync: true,

    transitions: [{

        async leave(data){

            const done = this.async();

            pageTransition();
            await delay(1000);
            done();
            
        },

        async enter(data) {
            contentAnimation()
        },

        async once(data) {
            contentAnimation()
        }
    }],

    
    

})