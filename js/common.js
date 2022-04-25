$(function(){


    $('.hdr').load('../inc/header.html', function(){
        var bars = $('.hdrWrap nav h4').last();
        var menu = $('.hdrWrap .bar')
        var hdrFlag = true;
        bars.click(function(){
            if(hdrFlag){
                menu.css('opacity', 1);
            }else{
                menu.css('opacity', 0);
            }
            hdrFlag = !hdrFlag;
        });
    });


    $('.ftr').load('../inc/footer.html', function(){
        var ftrBtn = $('footer nav li:nth-child(1)');
        var wd = $(window).width();
        if(wd > 480 && wd <= 1024){
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
        }
    });

    
});