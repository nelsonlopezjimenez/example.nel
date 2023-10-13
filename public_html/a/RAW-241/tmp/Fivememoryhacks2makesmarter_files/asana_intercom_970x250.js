
function start_ad(){
    var banner_end = false,
    	load = document.getElementById('loading'),
    	clearTL = new TimelineMax,
    	heartTL = new TimelineMax,
        textTL = new TimelineMax();


    function clearStage(){
    	var clearNow = new TimelineMax();

    	clearNow
    		.set('#cta_cont', {transformOrigin: '50% 50%'})
            .set('#txt1, #txt2', {transformOrigin: '50% 50%'})
            .set('.bubbles', {transformOrigin: '0% 50%'})
            .set('#mc', {force3D: true})
            .set('#main_bkg, #img_overlay, .img_shadow', {transformOrigin: '28% 50%'})
    		
    	;

    	return clearNow;

    }
    
    function img1(){
        var img1_TL = new TimelineMax();

        img1_TL
        	.set('.show',{autoAlpha:1})
        	.to(load, 2, {opacity: 0})

            .add('bkg_ani', '-=2')
            .fromTo('#main_bkg, #img_overlay, .img_shadow', 2, {scale: 0.55}, {scale: 0.5, ease:Power2.easeOut}, 'bkg_ani')

            .add('bubble_ani', '-=1.5')
            .staggerFromTo('.bubbles', 0.65, {x:'-450'}, {x: '0', ease: CustomEase.create("myEase", "M0,0,C0.036,0.516,0.102,0.672,0.304,0.87,0.425,0.989,0.818,1.001,1,1")}, 0.15, 'bubble_ani')
            .staggerFromTo('#clip1, #clip2', 1, {opacity: 0}, {opacity: 1}, 0.15, 'bubble_ani+=0.1')

            .add('txt_ani', '+=0.25')
            // .staggerFromTo('#txt1, #txt2', 1.75, {x:'-5', opacity: '0'}, {x:'0', opacity: '1', ease:Power4.easeOut}, 1.5, 'txt_ani')
            .staggerFromTo('.t1_in', 2.25, {x:'-8', opacity: 0}, {x:'0', opacity: 1, ease:Power4.easeOut}, 0.0125, 'txt_ani')
            .staggerFromTo('.t2_in', 2.25, {x:'-8', opacity: 0}, {x:'0', opacity: 1, ease:Power4.easeOut}, 0.0125, 'txt_ani')
        	
            

            .add('cta_ani', '-=1')
            .fromTo('#cta_cont', 1.25, {opacity: 0}, {opacity: 1, ease:Power4.easeOut, onComplete: bannerDone}, 'cta_ani')
            .to('#cta_over', 2, {opacity: 0, ease:Power4.easeOut}, 'cta_ani+=0.15')
        	
            ;
        return img1_TL;
    };

	function bannerDone(){

        banner_end = true;
	};

	//CLICK TAG
    bgExit.addEventListener('mouseover', function() {
        if(banner_end){
            var cta_TL = new TimelineMax();

         cta_TL
            .add('ctaOver')
            .to('#cta_over', 0.5, {opacity: 1, ease:Power4.easeOut}, 'ctaOver')
            
            ;
            return cta_TL;
     }
    } );

    bgExit.addEventListener('mouseout', function() {
        if(banner_end){
            var cta_TL = new TimelineMax();
         cta_TL
            .add('ctaOut')
            .to('#cta_over', 1, {opacity: 0, ease:Power4.easeOut}, 'ctaOut')

            return cta_TL;
     }
    } );

    function init(){
        //WAIT FOR PAGE LOAD TO DISPLAY ELEMENTS

        clearTL
        	.add(clearStage(), 'clear_tl');

        textTL
            .add(img1(), 'image1')
            ;
        
        // heartTL.seek('image1+=11')
        // heartTL.pause();    

        // textTL.seek('image1+=11')
        // textTL.pause();

    };	    
    init();
}
    
window.onload = function ()
{ 
    start_ad();
}
