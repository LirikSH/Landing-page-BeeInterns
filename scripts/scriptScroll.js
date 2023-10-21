        // Скрипт прокрутки лекций
        // Прокрутка Базового уровня
 
        var lectureCardsSet01 = document.querySelector('#lectureCardsSet-01')   
        var style = window.getComputedStyle(lectureCardsSet01)
        

        function rightMove01() {
        xBlock = lectureCardsSet01.offsetLeft;
        deltaX = (xBlock-275)-305;
        lectureCardsSet01.style.left = deltaX + "px"
        }

        function leftMove01() {
        xBlock = lectureCardsSet01.offsetLeft;
        deltaX = (xBlock-275)+385;
        lectureCardsSet01.style.left = deltaX + "px"  
       
        }
       
        //  Прокрутка Профессионального уровня
        var lectureCardsSet02 = document.querySelector('#lectureCardsSet-02')
        var style = window.getComputedStyle(lectureCardsSet02)
        
        function rightMove02() {
        xBlock = lectureCardsSet02.offsetLeft;
        deltaX = (xBlock-275)-305;
        lectureCardsSet02.style.left = deltaX + "px"
        }

        function leftMove02() {
        xBlock = lectureCardsSet02.offsetLeft;
        deltaX = (xBlock-275)+385;
        lectureCardsSet02.style.left = deltaX + "px"
        }
     
        //  Прокрутка Профессионального уровня
        var lectureCardsSet03 = document.querySelector('#lectureCardsSet-03')
        var style = window.getComputedStyle(lectureCardsSet03)
        
        function rightMove03() {
        xBlock = lectureCardsSet03.offsetLeft;
        deltaX = (xBlock-275)-305;
        lectureCardsSet03.style.left = deltaX + "px"
        }

        function leftMove03() {
        xBlock = lectureCardsSet03.offsetLeft;
        deltaX = (xBlock-275)+385;
        lectureCardsSet03.style.left = deltaX + "px"
        }
        

        //  Прокрутка Всех лекций
        var lectureCardsSet04 = document.querySelector('#lectureCardsSet-04')
        var style = window.getComputedStyle(lectureCardsSet04)
        
        function rightMove04() {
        xBlock = lectureCardsSet04.offsetLeft;
        deltaX = (xBlock-275)-305;
        lectureCardsSet04.style.left = deltaX + "px"
        }

        function leftMove04() {
        xBlock = lectureCardsSet04.offsetLeft;
        deltaX = (xBlock-275)+385;
        lectureCardsSet04.style.left = deltaX + "px"
        }