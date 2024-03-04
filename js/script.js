$('.searchLayer').hide();

$('.btnopenSite').click(function(){
    $('.btnopenSite').toggleClass('active')
    $('.siteList').slideToggle();
});


$('.btnSearch').click(function(){
    const th=$(this).next();
    $('.searchLayer').fadeIn("fast");
})
$('.btnsearchClose').click(function(){
    $('.searchLayer').fadeOut("fast");        
});

// section01 슬라이드

//javascript로 #section01 슬라이더 만들기
const $slideWrap=document.querySelector('.sliderWrap');
const $slideContainer=document.querySelector('.sliderWrap .slidedragg');
const $slide=document.querySelectorAll('.sliderWrap .slidedragg .slideImg');
const $stopBtn=document.querySelector('.stop_btn a')
const $overBtn=document.querySelector('.arrowBtn')
const $prev=document.querySelector('.swiperBtnPrev')
const $next=document.querySelector('.swiperBtnNext')
const $pager=document.querySelectorAll('.indicator')
const $pagerBtn=document.querySelectorAll('.indicator li')
let $currentIndex=0;
const $slideCount=$slide.length;
let $timer=undefined;
let $isAutoSlideOn =true;
const $stopBtnImg=document.querySelector('.stop_btn a img');
const $imgOn=$stopBtnImg.getAttribute('src')
const $imgOff=$imgOn.replace('Stop','Play')


for(let i=0; i<$slideCount; i++){
    $slide[i].style.left=i*100+'%';
}

//슬라이드 함수
function goToSlide(idx){
    $slideContainer.classList.add('animate')
    $slideContainer.style.left=-100*idx+'%';
    $currentIndex=idx; 

    updatePagerButtons(idx)
}
goToSlide(0)

function updatePagerButtons(index) {
    $pagerBtn.forEach((btn, i) => {
        btn.classList.toggle('active', i === index);
    });
}
$next.addEventListener('click',function(){
        goToSlide(($currentIndex+1) % $slideCount)
})
$prev.addEventListener('click',function(){
    goToSlide(($currentIndex-1 + $slideCount) % $slideCount)
})

//자동 슬라이드
startAutoSlide()
function startAutoSlide(){
    $timer=setInterval(()=>{
        let nextIdx=($currentIndex+1) % $slideCount;
        goToSlide(nextIdx)
    },5000)
}
function stopAutoSlide(){
    clearInterval($timer)
}

$stopBtn.addEventListener('click', function(){
    if($isAutoSlideOn){
        stopAutoSlide();
        $stopBtnImg.src=$imgOff

    }else{
        startAutoSlide()
        $stopBtnImg.src=$imgOn
    }
    $isAutoSlideOn=!$isAutoSlideOn;
})

//넘기기 버튼 mouseover시 슬라이드 멈춤
/* $overBtn.addEventListener('mouseover', function(){
    stopAutoSlide();
})
$overBtn.addEventListener('mouseout', function(){
    startAutoSlide()
})
 */
$pagerBtn.forEach((btn, idx) =>{
    btn.addEventListener('click', () =>{
        goToSlide(idx)
    })
})

/* $pagerBtn.forEach(btn =>{
    btn.addEventListener('mouseenter', stopAutoSlide)
    btn.addEventListener('mouseleave', startAutoSlide)
}) 

 */
//section02 slide
//상단
const slideBanner21=$('#section02 .boardSlide .slidedragg');
const slideBannerList21=$('#section02 .boardSlide .slick_slide');
const slideWidth21=slideBannerList21.width();
let setIntervalId21;


section021slide()
function section021slide(){
    setIntervalId21=setInterval(() =>{
        slideBanner21.stop().animate({left:-(slideWidth21+20)},500,function(){
            $('#section02 .boardSlide .slick_slide:first').insertAfter('#section02 .boardSlide .slick_slide:last');
            slideBanner21.css({left: 0})
        })
    },5000)
}
/* $('#section02 .slick').on('mouseover', function(){
    clearInterval(setIntervalId21)
});
$( '#section02 .slick').on('mouseout', function(){
    section021slide()
}); */
function rightBtn21(){
    slideBanner21.stop().animate({left:-(slideWidth21+20)},500,function(){
        $('#section02 .boardSlide .slick_slide:first').insertAfter('#section02 .boardSlide .slick_slide:last');
        slideBanner21.css({left: 0})
    })
}
$('#section02 .boardSlide .swiperBtnNext').click(function(){
    rightBtn21()
});
function leftBtn21(){
    $('#section02 .boardSlide .slick_slide:last').insertBefore('#section02 .boardSlide .slick_slide:first');
    slideBanner21.css({left:-(slideWidth21+20)}).stop().animate({left:0},500)
}

$('#section02 .boardSlide .swiperBtnPrev').click(function(){
    leftBtn21()
});

$('#section02 .boardSlide .mainpause').on({click:function(){
    clearInterval(setIntervalId21) 
    $('#section02 .boardSlide .mainplay').css('display', 'block')
    $('#section02 .boardSlide .mainpause').css('dislpay', 'none')
}}) 

$('#section02 .boardSlide .mainplay').on({click:function(){
    section021slide()
    $('#section02 .boardSlide .mainplay').css('display', 'none')
    $('#section02 .boardSlide .mainpause').css('dislpay', 'block')
}})  


//하단
const slideBanner22=$('#section02 .popslide .slick_dragg');
const slideBannerList22=$('#section02 .popslide .slick_slide');
const slideWidth22=slideBannerList22.width();
let setIntervalId22;


section022slide()
function section022slide(){
    setIntervalId22=setInterval(() =>{
        slideBanner22.stop().animate({left:-(slideWidth22+28)},500,function(){
            $('#section02 .popslide .slick_slide:first').insertAfter('#section02 .popslide .slick_slide:last');
            slideBanner22.css({left: 0})
        })
    },5000)
}
/* $('#section02 .popboard').on('mouseover', function(){
    clearInterval(setIntervalId22)
});
$( '#section02 .popboard').on('mouseout', function(){
    section022slide()
}); */
function rightBtn22(){
    slideBanner22.stop().animate({left:-(slideWidth22+28)},500,function(){
        $('#section02 .popslide .slick_slide:first').insertAfter('#section02 .popslide .slick_slide:last');
        slideBanner22.css({left: 0})
    })
}
$('#section02 .popslideWrap .swiperBtnNext').click(function(){
    rightBtn22()
});
function leftBtn22(){
    $('#section02 .popslideWrap .slick_slide:last').insertBefore('#section02 .popslideWrap .slick_slide:first');
    slideBanner22.css({left:-(slideWidth22+28)}).stop().animate({left:0},500)
}

$('#section02 .popslideWrap .swiperBtnPrev').click(function(){
    leftBtn22()
});

$('#section02 .popslideWrap .mainpause').on({click:function(){
    clearInterval(setIntervalId22) 
    $('#section02 .popslideWrap .mainplay').css('display', 'block')
    $('#section02 .popslideWrap .mainpause').css('dislpay', 'none')
}}) 

$('#section02 .popslideWrap .mainplay').on({click:function(){
    section022slide()
    $('#section02 .popslideWrap .mainplay').css('display', 'none')
    $('#section02 .popslideWrap .mainpause').css('dislpay', 'block')
}}) 


//section03 slide
const slideBanner3=$('#section03 .slickdragg');
const slideBannerList3=$('#section03 .slick_slide');
const slideWidth3=slideBannerList3.width();
let setIntervalId3;


section03slide()
function section03slide(){
    setIntervalId3=setInterval(() =>{
        slideBanner3.stop().animate({left:-(slideWidth3+30)},500,function(){
            $('#section03 .slick_slide:first').insertAfter('#section03 .slick_slide:last');
            slideBanner3.css({left: 0})
        })
    },5000)
}
/* $('#section03 .slickList').on('mouseover', function(){
    clearInterval(setIntervalId3)
});
$( '#section03 .slickList').on('mouseout', function(){
    section03slide()
}); */
function rightBtn3(){
    slideBanner3.stop().animate({left:-(slideWidth3+30)},500,function(){
        $('#section03 .slick_slide:first').insertAfter('#section03 .slick_slide:last');
        slideBanner3.css({left: 0})
    })
}
$('#section03 .swiperBtnNext').click(function(){
    rightBtn3()
});
function leftBtn3(){
    $('#section03 .slick_slide:last').insertBefore('#section03 .slick_slide:first');
    slideBanner3.css({left:-(slideWidth3+30)}).stop().animate({left:0},500)
}


$('#section03 .swiperBtnPrev').click(function(){
    leftBtn3()
});

$('#section03 .mainpause').on({click:function(){
    clearInterval(setIntervalId3) 
    $('#section03 .mainplay').css('display', 'block')
    $('#section03 .mainpause').css('dislpay', 'none')
}}) 

$('#section03 .mainplay').on({click:function(){
    section03slide()
    $('#section03 .mainplay').css('display', 'none')
    $('#section03 .mainpause').css('dislpay', 'block')
}}) 



// section04
const twoslide=$('#section04 .slideContain');
const twoslideWidth=twoslide.width();
const twoslideLi=$('#section04 .twoslide_drag')

/* $('#section04 .slickBtn').on({click:function(){
    twoslideLi.stop().animate({left:-(twoslideWidth)},500)
    $('#section04 .slickBtn').delay(1000).addClass('next')
}})  */
/* $('#section04 .slickBtn.next').on({click:function(){
    $('#section04 .slickBtn').delay(1000).removeClass('next')
    twoslideLi.stop().animate({left:(twoslideWidth)},500)
}}) 
 */
$("#section04 .slickBtn").click(function(){
    if($(this).hasClass("next")) {
        twoslideLi.css({left:-(twoslideWidth)}).stop().animate({left:0},500)
        setTimeout(() => {
            $(this).removeClass("next");
        }, 500);
    } else {
        setTimeout(() => {
            $(this).addClass("next");
        }, 500);
        
        twoslideLi.stop().animate({left:-(twoslideWidth)},500)
        twoslideLi.css({left: 0})
    }
});



//section05 slide
const slideBanner5=$('#section05 .notidragg');
const slideBannerList5=$('#section05 .notimold .notiSlick');
const slideWidth5=slideBannerList5.width();
let setIntervalId5;

bannerSlide()
function bannerSlide(){
    setIntervalId5=setInterval(() =>{
        slideBanner5.stop().animate({left:-(slideWidth5+20)},500,function(){
            $('#section05 .notimold .notiSlick:first').insertAfter('#section05 .notimold .notiSlick:last');
            slideBanner5.css({left: 0})
        })
    },5000)
}
/* $('#section05 .swiperBtnPrev, #section05 .swiperBtnNext').on('mouseover', function(){
    clearInterval(setIntervalId5)
});
$(' #section05 .swiperBtnPrev,#section05 .swiperBtnNext ').on('mouseout', function(){
    bannerSlide()
}); */
function rightBtn(){
    slideBanner5.stop().animate({left:-(slideWidth5+20)},500,function(){
        $('#section05 .notimold .notiSlick:first').insertAfter('#section05 .notimold .notiSlick:last');
        slideBanner5.css({left: 0})
    })
}
$('#section05 .swiperBtnNext').click(function(){
    rightBtn()
});
function leftBtn(){
    $('#section05 .notimold .notiSlick:last').insertBefore('#section05 .notimold .notiSlick:first');
    slideBanner5.css({left:-(slideWidth5+20)}).stop().animate({left:0},500)
}


$('#section05 .swiperBtnPrev').click(function(){
    leftBtn()
});

$('#section05 .mainpause').on({click:function(){
     clearInterval(setIntervalId5) 
    $('#section05 .mainplay').css('display', 'block')
    $('#section05 .mainpause').css('dislpay', 'none')
}}) 

$('#section05 .mainplay').on({click:function(){
    bannerSlide()
   $('#section05 .mainplay').css('display', 'none')
   $('#section05 .mainpause').css('dislpay', 'block')
}}) 



// header fixed 작동 안하게 하기
$(window).scroll(function(){ 
    const height = $(document).scrollTop(); //실시간으로 스크롤의 높이를 측정
    if(height > 0){ 
      
        $('#wrap').removeClass('fp-view-0'); 
    }else if(height == 0){ 
        $('#wrap').addClass('fp-view-0'); 
    } 
  });
  
//   스크롤 top 이동
window.scrollTo(0, 0);
$(".btnTop").click(function() {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
  });

    

