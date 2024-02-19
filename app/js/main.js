$(function(){

    // slick slider

    $('.responses__slider, .mentors__slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 10000,
        speed: 1000,
        fade: true,
        pauseOnFocus: false, 
        pauseOnHover: false,
        cssEase: 'linear',
        dots: true,
        arrows: false,
    });


   
    function createSlick(){  

        $(".course__slider").not('.slick-initialized').slick({
        infinite: true, 
        slidesToShow:3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 10000,
        dots: true,
        arrows: false,
        responsive: [
            {
              breakpoint: 850,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                
              }
            },
            {
                breakpoint: 600,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  
                }
              }
          ]
         
    });
    }


    createSlick();
    
    //Now it will not throw error, even if called multiple times.
    $(window).on( 'resize', createSlick );





    //form

    $(function frmotpr(){
        var field = new Array("name_f", "surname_f", "contact_f", "check_f", "mssg_f", "tel_f");
        $("#file_f").submit(function(event) {
            var error=0;
            $("#file_f").find(":input").each(function() {
                for(var i=0;i<field.length;i++){
                    if($(this).attr("name")==field[i]){
                        if(!$(this).val()){
                            $(this).addClass('notvalid');
                            error=1;    
                        }
                        else{
                            $(this).removeClass('notvalid');
                        }
                    }                       
                }               
           })
            if(error==0){
                $("#success-message").fadeIn("slow"); 
                return true;
            } else {
                var err_text = "";
                if(error==1)  err_text="Field should be filled";
                $("#messenger").html(err_text); 
                $("#messenger").fadeIn("slow"); 
                return false;
            }
        })
    });
    
    $(document).ready(function() {
        $("#file_f").submit(function(event) {
            event.preventDefault(); 
            
            $("#success-message").fadeIn("slow");

            this.reset();
        });
    });


    //menu

    $('.header__btn-menu, .header__menu-items ul li a').click(function(event){
        $('.header__btn-menu, .header__menu-items ul').toggleClass('active');
        $('body').toggleClass('lock');
    });
   
});


