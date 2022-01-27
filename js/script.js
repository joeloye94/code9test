$(function(){

    
    //nav
    navbarInit();
    function navbarInit(){

        $(".nav__tab:eq(0)").addClass('nav__tab--active');
        $('.maincontent').eq(0).show();
        
        $(".nav__tab").click(function(e){
            var $target = e.target.className.indexOf('nav__tab') > -1 ? $(e.target) : $(e.target).closest('.nav__tab');
            if(!$target.hasClass('nav__tab--active')) {
                $(".nav__tab.nav__tab--active").removeClass('nav__tab--active');
                $target.addClass('nav__tab--active')
                $('.maincontent').hide();
                $('.maincontent').eq($target.index()).show();
            }
        })
    }

    //refresh status
    var vaccination = ["Not vaccinated", "Vaccinated", "Not applicable", "Anti Vax-er"],
        testStatuses = ["No test status", "Covid Positive", "Covid Negative", "ICU", "RIP"],
        loadingStatus = false;
    $('#refreshStatus').click(function(){
        
        if(loadingStatus === true) return false;
        loadingStatus = true;

        $('#refreshStatus').addClass('refreshing');

        setTimeout(function(){
            $('#refreshStatus').removeClass('refreshing');
            var newVaxStatus = randomStatus(vaccination);
            newTestStatus = randomStatus(testStatuses);
            $("#vaccinationStatus").text(newVaxStatus);
            $("#testStatus").text(newTestStatus);
            loadingStatus = false;

        },2000)
        
    })
    function randomStatus(ary){
        return ary[Math.floor(Math.random() * ary.length)]
    }

    //safeEntry
    safeEntryInit();
    function safeEntryInit(){
        var checkedIn = true;
        
        $(".safeentry__tab").click(function(e){
            var $target = e.target.className.indexOf('safeentry__tab') > -1 ? $(e.target) : $(e.target).closest('.safeentry__tab');
            if(!$target.hasClass('safeentry__tab--active')) {
                $(".safeentry__tab--active").removeClass('safeentry__tab--active');
                $target.addClass('safeentry__tab--active')
                $('.safeentry__infobox').hide();
                $('.safeentry__infobox').eq($target.index()).show();
            }
        })

        $('#safeEntryBtn').click(function(){
            checkedIn = checkedIn == true ? false : true;

            if(checkedIn == true){
                $('.safeentry__content:eq(0)').html('<p>最后登记入场的QR码</p><h6>Giant Paya Lebar SQ</h6><a href="javascript:;">查看通行证</a>');
                $('#safeEntryBtn').text('离场');
            }else{
                $('.safeentry__content:eq(0)').html('<p>Checked out</p>');
                $('#safeEntryBtn').text('进场');
            }

        })
        
    }

})