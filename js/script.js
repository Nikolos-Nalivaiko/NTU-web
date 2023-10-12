function Slider() {

    let sliders = $(".slider-reviews");

    sliders.each(function(index) {

        let slider = $(this);

        let CountItems = slider.find(".reviews__block").length; 

        let item = slider.find(".reviews__block");
        let container = slider.find(".reviews__slider");
    
        let SlideToShow = 2;
        let SlideToScroll = 1;    
    
        if(window.innerWidth <= 767) {
            SlideToShow = 1;
            SlideToScroll = 1;
        } 

        let margin = 30;

        // 26,6 ЦЕ ВІДСТУП ( ТОБТО (margin * (SlideToShow - 1)) / SlideToShow) !!!!!!
        
        let ItemWidth = (container.width() / SlideToShow) - (margin * (SlideToShow - 1)) / SlideToShow;
    
        let track = slider.find(".reviews__track");
    
        let  position = 0;
    
        let movePosition = SlideToScroll * ItemWidth;
    
        let next = slider.find(".reviews__right");
        let prev = slider.find(".reviews__left");

        item.each(function(index, item) {
            $(item).css ({
                minWidth: ItemWidth,
                marginRight: margin,
            })
        })
    
        if(item.length <= SlideToShow) {
            next.css('display','none');
            prev.css('display','none');
        }
    
        next.click(function() {
            moveRight();
        });
    
    
        prev.click(function() {
            moveLeft();
        });
    
        function moveRight() {
            ItemsLeft = CountItems - Math.round((Math.abs(position) + (SlideToShow * ItemWidth) + (SlideToScroll * margin)) / ItemWidth);
        
            movePosition = (SlideToScroll * ItemWidth) + (SlideToScroll * margin);
            
            position -= ItemsLeft > SlideToScroll ? movePosition : ( ItemsLeft * ItemWidth) + (ItemsLeft * margin);
        
            if(ItemsLeft == 0) {
                position = 0;
            }
        
            track.css({
                transform:`translateX(${position}px)`
            })
        }
        
        function moveLeft() {
            ItemsLeft = Math.round(Math.abs(position) / ItemWidth);
        
            movePosition = (SlideToScroll * ItemWidth) + (SlideToScroll * margin);
            
            position += ItemsLeft > SlideToScroll ? movePosition : ( ItemsLeft * ItemWidth) + (ItemsLeft * margin);
        
        
            track.css({
                transform:`translateX(${position}px)`
            })
        }

    });
  
} 