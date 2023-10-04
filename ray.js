for(let i=1000; i>=0; i=i-2){
 console.log(i);   
}
for(let r=0; r<=10000; r++){
    if(r==2500){
        alert("A quarter of the way there!")
    }else if(r== 5000){
        alert("Halfway there!")
    }else if( r== 10000){
        alert("The loop is done!")
    }

}

   const tvShows = ["One piece", "Attack on titan",
                         "Breaking bad", "The Originals", "Arcane"]
            console.log(tvShows);
            
        for(s=0; s<tvShows.length; s++){
      
            console.log("My # "+(s+1) + " Favorite tv show is " + tvShows[s])
        }

