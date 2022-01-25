$(function(){

    
    //nav
    navbarInit();
    function navbarInit(){

        $(".nav__tab:eq(0)").addClass('nav__tab--active');

        $(".nav__tab").click(function(e){
            var $target = e.target.classList.value.indexOf('nav__tab') > -1 ? $(e.target) : $(e.target).closest('.nav__tab');
            if(!$target.hasClass('nav__tab--active')) {
                $(".nav__tab.nav__tab--active").removeClass('nav__tab--active');
                $target.addClass('nav__tab--active')
            }

        })
    }
})