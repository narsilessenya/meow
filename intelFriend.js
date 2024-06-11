function intelFriend(i,intelligence,family_friendly){
  translate(width/2,height/4);
  let n = 1;
  let r = 270;
  if (i == activeSlice){
    n=2
    r = 350;
  }

  let numIntelScale = 1 //位置
  let numIntelScale2 = 1 //大小
  // let d1 = dist(mouseX,mouseY,400,400);
  // if (d1 >= maxLifeReference/2 && d1 <= 400){
  //   numIntelScale = 1.2;
  //   numIntelScale2 = 1.5;

  // }
  // else if (d1 >= minLifeReference/2 && d1 <= maxLifeReference/2) {
  //   numIntelScale = 1.2;
  //   numIntelScale2= 0.8;
  // }
  scale(numIntelScale);


  
  
  
  fill(180,180,50,80);
  noStroke();
  
  rotate(i*TWO_PI/61);
  circle(0,(-270-(n-1)*40)/800*height/2,intelligence*10*n*numIntelScale2);
  fill(238,204,103,80);
  circle(0,(-r-(n-1)*40)/800*height/2,family_friendly*10*n*numIntelScale2);

}