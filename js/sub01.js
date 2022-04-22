$(function(){
    //변수
    var bars = $('.hdrWrap nav h4').last();
    var menu = $('.hdrWrap .bar')
    var hdrFlag = true;
    var mainBtn = $('.main .btns div');
    var cnt02Btn = $('.cnt02 section .btns i');
    var cnt02Article = $('.cnt02 article');
    var cnt02ArtCnt = [];
    var cnt03Btn = $('.cnt03 .btn');
    var cnt03ArtGroup = $('.cnt03 .artGroup');
    var cnt03Ml = 0;
    var cnt04Btn = $('.cnt04 .btn');
    var ftrBtn = $('footer nav li:nth-child(1)');
    var wd = $(window).width();
    function screenHeart(){
        var heart = $('.heart');
        heart.animate({
            opacity : 1,
            color : '#000'
        }, 500, function(){
           heart.animate({
               opacity: 0,
               color: '#fff'
           }, 1000);
        })
    }
    
    mainBtn.click(function(){
        var ind = $(this).index() + 1;
        var offset = $('.cnt0' + ind).offset();
        $('html, body').animate({scrollTop : offset.top - 40}, 500);
    });

    
    $('.cnt01 .menu').find('h4:last').click(screenHeart);
    cnt04Btn.click(screenHeart);

    //drag
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
    
    //아티클 이동
    cnt02Btn.first().click(function(j){
        //article 저장     
        for(var i = 0; i < cnt02Article.length; i++){
            cnt02ArtCnt[i] = cnt02Article.eq(i).html();
        }
        var j = cnt02Article.length - 1;
        for(var i = 0; i < cnt02Article.length; i++){
            cnt02Article.eq(j).html(cnt02ArtCnt[i]);      
            j++;
            if(j >= cnt02Article.length - 1){
            j = 0;
            }
        } 
    });
    cnt02Btn.last().click(function(j){
        //article 저장     
        var j = cnt02Article.length - 1;
        for(var i = 0; i < cnt02Article.length; i++){
            cnt02ArtCnt[i] = cnt02Article.eq(i).html();
        }
        for(var i = 0; i < cnt02Article.length; i++){
            cnt02Article.eq(i).html(cnt02ArtCnt[j]);      
            j++;
            if(j >= cnt02Article.length - 1){
            j = 0;
            }
        } 
    });
    $('.cnt02').on('click', '.artGroup article', function(){
        var current = $(this).index();
        var j = cnt02Article.length - 1;
        for(var i = 0; i < cnt02Article.length; i++){
            cnt02ArtCnt[i] = cnt02Article.eq(i).html();
        }
        for(var i = 0; i < cnt02Article.length; i++){
            cnt02Article.eq(j).html(cnt02ArtCnt[current]);      
            j++;
            current++;
            if(j >= cnt02Article.length - 1){
                j = 0;
            }
            if(current >= cnt02Article.length){
                current = 0;
            }
        } 
        
    });


    cnt03ArtGroup.first().css('margin-left', '-20%');
    cnt03ArtGroup.first().find('article:first').appendTo(cnt03ArtGroup.first());
    cnt03Btn.first().click(function(){
        cnt03ArtGroup.first().animate({
            marginLeft :  -40 + '%'
        }, 500, function(){
            cnt03ArtGroup.first().css('margin-left', '-20%');
            cnt03ArtGroup.first().find('article:first').appendTo(cnt03ArtGroup.first());
        });
    });


    cnt03ArtGroup.last().css('margin-right', '-20%');
    cnt03ArtGroup.last().find('article:first').appendTo(cnt03ArtGroup.last());
    cnt03Btn.last().click(function(){
        cnt03ArtGroup.last().animate({
            marginRight : -40 + '%'
        }, 500, function(){
            cnt03ArtGroup.last().find('article:first').appendTo(cnt03ArtGroup.last());
            cnt03ArtGroup.last().css('margin-right', '-20%');
        });
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