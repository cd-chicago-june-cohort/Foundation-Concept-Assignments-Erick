function printRange(start, end, skipAmount){
    
    for(var k=start; k < end; k+=skipAmount){

        console.log(k);
    }

}

printRange(2, 10, 2);