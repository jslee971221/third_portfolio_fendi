$(function(){
    var bars = $('.hdrWrap nav h4').last();
    var menu = $('.hdrWrap .bar')
    var hdrFlag = true;
    var cnt01Pbtn = $('.cnt01 .paging li');
    var cnt01artGroup = $('.cnt01 .artGroup');
    var cnt01Index;
    var cnt04Btn = $('.cnt04 .btns i');
    var cnt04artGroup = $('.cnt04 .artGroup');
    var ftrBtn = $('footer nav li:nth-child(1)');
    var wd = $(window).width;

    bars.click(function(){
        if(hdrFlag){
            menu.css('opacity', 1);
        }else{
            menu.css('opacity', 0);
        }
        hdrFlag = !hdrFlag;
    }); 
    cnt01Pbtn.click(function(){
        cnt01Index = $(this).index();
        cnt01artGroup.css({
            marginLeft : cnt01Index * -100 + '%'
        });
        cnt01Pbtn.removeClass('show');
        $(this).addClass('show');
    });
    cnt04artGroup.find('.artFamily:last').prependTo(cnt04artGroup);
    cnt04artGroup.css({marginLeft: '-100%'});
    cnt04Btn.first().click(function(){
        cnt04artGroup.animate({
            marginLeft : '-0%'
        }, 500, function(){
            cnt04artGroup.find('.artFamily:last').prependTo(cnt04artGroup);
            cnt04artGroup.css({marginLeft: '-100%'}); 
        });
    });
    cnt04Btn.last().click(function(){
        cnt04artGroup.animate({
            marginLeft : '-200%'
        }, 500, function(){
            cnt04artGroup.find('.artFamily:first').appendTo(cnt04artGroup);
            cnt04artGroup.css({marginLeft: '-100%'}); 
        });
    });
    
    //tablet footer
    if(wd > 480 && wd <= 1024){
        ftrBtn.click(function(){
            var th = $(this);
            var i = th.parent().index();
            if($(this).find('i').attr('class') == 'xi-caret-down'){
                $('footer ul').eq(i).css('height', '360px'); 
                th.find('i').attr('class','xi-caret-up');
            }else{
                $('footer ul').eq(i).css('height', '40px'); 
                th.find('i').attr('class','xi-caret-down');
            }
        });
    }
});