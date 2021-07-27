let sec = $('.counter'); //document.querySelector('.counter');
 
 let sibl = sec.prevAll();
 
 let fullheiht = 0;
 
 $.each(sibl, function (index, els) { 
    fullheiht +=  $(els).outerHeight();
 });
 
let check = 0;



     window.addEventListener("scroll", function(){
         if(check == 0 ){
        if(fullheiht <  (this.scrollY) + 200){
        
        let  Num   = document.querySelectorAll('.txt');
    
        Num.forEach((el) => {
            let max = el.getAttribute('data-max');
            
            setInterval(() => {
                if(Number(max) > Number(el.innerText)){
                     el.innerText =  Number(el.innerText) + 1;
                }
               
            }, 50);
     
        })
      
        }  
        check = 1;
 
    }
     });


     $(".filltr").click(function (e) { 
        e.preventDefault();
        let sel = $(this).data('filter');
     
    
    
        
        if(sel == ".all"){
    
    
            $('.fils').css({
            "transition":"all 0.6s",
            "transform":"scale(0)",
        });  
    
    
            setTimeout( function() {
         
          
         $('.fils').css({
     "display": "block",
     "transition":"all 0.6s",
     "transform":"scale(1)",
    });
    
    }, 700);
    
    setTimeout( function() {
        $('.fils').css("display", "block"); }, 600);
    
        }else{
            $('.fils').css({
            "transition":"all 0.6s",
            "transform":"scale(0)",
        });  
    
        setTimeout( function() {
          $('.fils').css({"display": "none"});   }, 600);
       
         
     
           
            
            setTimeout( function() {
         
          
                $(sel).css({
            "display": "block",
            "transition":"all 0.6s",
            "transform":"scale(1)",
        });
           
           }, 700);
    
    
           setTimeout( function() {
            $(sel).css("display", "block"); }, 600);
     
        }
       
    });

$('.btn1').click(function(){
    alert(" Sorry Server is under Maintenance!.")
})