$(function(){
    //변수
    var bars = $('.hdrWrap nav h4').last();
    var menu = $('.hdrWrap .bar')
    var hdrFlag = true;

    var ftrBtn = $('footer nav li:nth-child(1)');
    var wd = $(window).width();
    //함수
    function infiSlide(j){
        cnt04artGroup.animate({
            marginLeft : j + '%'
        }, 500, function(){
            if(j == 0){
                cnt04artGroup.find('.artFamily:last').prependTo(cnt04artGroup);
            }else{
                cnt04artGroup.find('.artFamily:first').appendTo(cnt04artGroup);
            }
            cnt04artGroup.css({marginLeft: '-100%'}); 
        });
    }
    $('.cnt01 .btn:first').draggable({
        containment : 'parent',
        drag: function(){
            var barWd = $('.cnt01 .menu .ovrGrid').width();
            var currentX = $(this).css('left').slice(0, -2);
            var x =  Number(currentX) / barWd * 100; 
            console.log(x);
            $('.cnt01 .artGroup:first').css('marginLeft', (-100 + x) + '%');
            $('.shadow:first').css('width', 100-x + '%')
        }
    });
    $('.cnt01 .btn:last').draggable({
        containment : 'parent',
        drag: function(){
            var barWd = $('.cnt01 .menu .ovrGrid').width();
            var currentX = $(this).css('left').slice(0, -2);
            var x =  Number(currentX) / barWd * 100; 
            console.log(x);
            $('.cnt01 .artGroup:last').css('marginRight', -x + '%');
            $('.shadow:last').css('width', x + 1.2 + '%')
        }
    });
    
    //PC
    if(wd > 1024){
        //헤더 햄버거
        bars.click(function(){
            if(hdrFlag){
                menu.css('opacity', 1);
            }else{
                menu.css('opacity', 0);
            }
            hdrFlag = !hdrFlag;
        }); 

       
    //TABLET    
    }else if(wd > 480 && wd <= 1024){

        //푸터 더보기 버튼
        ftrBtn.click(function(){
            var th = $(this);
            var i = th.parent().index();
            if($(this).find('i').attr('class') == 'xi-caret-down'){
                $('footer ul').eq(i).css('height', 'min(9rem, 360px)'); 
                th.find('i').attr('class','xi-caret-up');
            }else{
                $('footer ul').eq(i).css('height', 'min(1rem, 40px)'); 
                th.find('i').attr('class','xi-caret-down');
            }
        });
    //MOBILE
    }else if(wd <= 480){
    }

});