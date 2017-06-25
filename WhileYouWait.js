var daysUntilMyBirthday = 60;

for(var k = daysUntilMyBirthday; k >= 0; k--){
    if(k > 30){
        console.log(k + ' days until my birthday. Such a long time... :(');
    }
    if(k <= 30 && k > 5){
        console.log(k + ' days until my birthday. Almost there!');
    }
    if(k <= 5 && k >= 1){
        console.log(k + ' DAYS UNTIL MY BIRTHDAY!!!');
    }
    if(k == 0){
        console.log('♪ღ♪*•.¸¸¸.•*¨¨*•.¸¸¸.•*•♪ღ♪¸.•*¨¨*•.¸¸¸.•*•♪ღ♪•*');
        console.log('♪ღ♪░H░A░P░P░Y░ B░I░R░T░H░D░A░Y░░♪ღ♪');    
        console.log('*•♪ღ♪*•.¸¸¸.•*¨¨*•.¸¸¸.•*•♪¸.•*¨¨*•.¸¸¸.•*•♪ღ♪•«');          
    }
}