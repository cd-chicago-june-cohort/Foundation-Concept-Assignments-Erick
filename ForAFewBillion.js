var penny = 0.01;

for(var k = 1; k <= 30; k++){
    penny *= 2;
    console.log('Day ' + k + ' earnings: $' + penny);
    if(penny > 10000 && penny < 20000)
    {
        console.log('Servant just made $10,000+ in ' + k + ' days!');
    }
    else if(k == 30)
    {
        console.log('Servant made $' + penny + ' dollars in ' + k + ' days!');
    }
}