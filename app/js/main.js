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




//Cookie banner language changer

window.addEventListener('DOMContentLoaded', () => {

    const cookieGermanBtn = document.getElementById('cookieGermanBtn');
    const cookieEnglishBtn = document.getElementById('cookieEnglishBtn');
    const cookieEnglish = document.getElementById('cookieEnglish');
    const cookieGerman = document.getElementById('cookieGerman');
  
  
    cookieGermanBtn.addEventListener('click', () => {
        cookieEnglish.style.display = 'block';
        cookieGerman.style.display = 'none';
    });
  
    cookieEnglishBtn.addEventListener('click', () => {
        cookieGerman.style.display = 'block';
        cookieEnglish.style.display = 'none';
    });
  
  });


  window.addEventListener('DOMContentLoaded', () => {
    const cookieStorage = {
      getItem: (key) => {
        const cookies = document.cookie
          .split(';')
          .map(cookie => cookie.split('='))
          .reduce((acc, [key, value]) => ({
            ...acc,
            [key.trim()]: value
          }), {});
  
        return cookies[key];
      },
      setItem: (key, value) => {
        document.cookie = `${key}=${value};expires=Sun, 17 Jul 3024 08:01:01 GMT`;
      }
    };
  
  
  
  
    const storageType = cookieStorage;
    const consentPropertyType = 'site_consent';
  
    let hasConsented = () => storageType.getItem(consentPropertyType) === "true" ? true : false;
    let toggleStorage = (prop) => storageType.setItem(consentPropertyType, prop);
    let isPopupVisible = false;
  
  
    const cookiePopup = document.getElementById('cookiePopup');
    const overlay = document.getElementById('overlay');
    const acceptCookiesBtns = document.querySelectorAll('.acceptCookiesBtn');
    const declineCookiesBtns = document.querySelectorAll('.declineCookiesBtn');
    const changeConsentBtn = document.querySelector('.change-consent-banner');
    const googleMapsIframe = document.querySelector('.map');
  
  
    function showGoogleMapsIframe() {
      googleMapsIframe.style.display = 'block';
    }

    function removeGoogleMapsIframe() {
      googleMapsIframe.style.display = 'none';
    }
  
  
    function showChangeConsent() {
      changeConsentBtn.style.display = 'block';
    }
  
    function showCookiePopup() {
      overlay.style.display = 'block';
      cookiePopup.style.display = 'block';
    }
  
    function hideCookiePopup() {
      overlay.style.display = 'none';
      cookiePopup.style.display = 'none';
    }
  
  
  
   
  
    if (hasConsented()) {
      showGoogleMapsIframe();
      changeConsentBtn.style.display = 'block';
    }
    else {
      showCookiePopup();
      removeGoogleMapsIframe();
    }
    if (storageType.getItem(consentPropertyType) === "false") {
      hideCookiePopup();
      removeGoogleMapsIframe();
      showChangeConsent();
    }
  
    acceptCookiesBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      toggleStorage(true);
      hideCookiePopup();
      window.location.reload();
  
    });
  });
  
  
    declineCookiesBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        toggleStorage(false);
        hideCookiePopup();
        showChangeConsent();
        window.location.reload();
      });
    });
  
  
    changeConsentBtn.addEventListener('click', () => {
      if (isPopupVisible) {
        hideCookiePopup();
      } else {
        showCookiePopup();
      }
      isPopupVisible = !isPopupVisible;
    });
  });