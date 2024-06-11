function Life(i,name,minLife,maxLife,min_weight,max_weight,general_health,numLifeScale){
  fill(0);
  stroke(0);
  translate(width*0.42,height/4);
  rotate(i*TWO_PI/61);

  scale(1.1);

  let n = 1;
  if (i == activeSlice){
    n=3;
    fill(240,200,60);
    stroke(240,200,60);
  }
  
  // circle(0,(-100/1600*height/2-minLife)*numLifeScale,min_weight/2*numLifeScale);
  circle(0,(-100/1600*height/2-0.045*width)*numLifeScale,1.5*general_health/numLifeScale);
  circle(0,(-100/1600*height/2-maxLife)*numLifeScale,2*general_health/numLifeScale);
  
  strokeWeight(general_health/2*numLifeScale);
  // line(0,(-100/1600*height/2-minLife)*numLifeScale,0,(-100/1600*height/2-maxLife)*numLifeScale);
  line(0,(-100/1600*height/2-0.045*width)*numLifeScale,0,(-100/1600*height/2-maxLife)*numLifeScale);


  // 名称
  
  
  fill(100);
  textFont(font);
  let textsize = 7*n;
  textAlign(CENTER, CENTER);
  textSize(textsize);
  strokeWeight(0.4);
  // text(`${name}`, 0, (-205-(n-1)*30)/800*height/2);
}