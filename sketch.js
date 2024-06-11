
let cats;// 表格

let imgCatSize = [];
let numCatSize = 3;

let imgMap = [];

let imgFriendlyRelation;

let img4;

let img0_1;
let img0_2;
let img1_1;
let img1_2;
let img3_1;
let img3_2;

let imgVocal1;
let imgVocal2;
let imgVocal3;

let imgMedal;

let imgMark;

let imgLeft;



let angles = [];// 创建一个包含所有角度的数组
let activeSlice = -1; 

let sinMouse,cosMouse;//眼睛跟随

// let cat;

let cat = [];
let numCat = 61;  // 猫头图片



//瞳色
let colors = {
  1: [77, 152, 95],  // #4D985F
  2: [238, 204, 103],  // #EECC67
  3: [54, 113, 174],  // #3671AE
  4: [225, 135, 73], // #E18749
  5: [93, 86, 40] // #5D5628
};

let numDimensions = 6;
let dimensionNames = ['适应', '耐心', '体能', '活力', '亲和', '智力'];
// let values = [3, 4, 5, 2, 1, 4]; // 修改该数组以设置每个维度的值

let values = [3,3,3,3,3,3];


function preload(){

  cats = loadTable('cat62.csv', 'csv', 'header');

  font = loadFont('Love-is-free/Love-is-free-2.ttf'); //english字体
  font_zh = loadFont('ALiMaMaFangYuanTi/AlimamaFangYuanTiVF-Thin-2.ttf')

  img = loadImage("fish1.svg");//鼠标鱼矢量图

  imgFriendlyRelation = loadImage("img/FriendRelation.png");//FriendlyRelation

  img4 = loadImage("img/page2.png");

  img0_1 = loadImage("img/category1.png");
  img0_2 = loadImage("img/category1_dark.png");
  img1_1 = loadImage("img/category2.png");
  img1_2 = loadImage("img/category2_dark.png");
  img2_1 = loadImage("img/category3.png");
  img2_2 = loadImage("img/category3_dark.png");

  imgVocal1 = loadImage("img/vocal1.png");
  imgVocal2 = loadImage("img/vocal2.png");
  imgVocal3 = loadImage("img/vocal3.png");

  imgMedal = loadImage("img/medal.png");

  imgMark = loadImage("img/mark.png");

  imgLeft = loadImage("img/left.png");

  // cat = loadImage("Abyssinian.png");

  cat[0] = loadImage("cat_img/cat.png");

  imgCatSize[0] = loadImage("img/0.png");
  imgCatSize[1] = loadImage("img/1.png");
  imgCatSize[2] = loadImage("img/2.png");
  imgCatSize[3] = loadImage("img/3.png");

  imgMap[0] = loadImage("img/map/1.jpg");

  // for (let i = 1; i <= numCat; i++) {
  //   let name = cats.getString(i-1,'name');
  //   // cat[i] = loadImage('cat_img/' + `${name}` + '.png'); 
  //   cat[i] = loadImage(`cat_img/${i}.png`); 
  // }

  for (let i = 1; i <= numCat; i++) {
    cat[i] = loadImage(`cat_img/${i}.png`);

  }

  for (let i = 1; i <= 19; i++) {

    imgMap[i] = loadImage(`img/map/${i}.jpg`);
  }
}


function setup() {
  // createCanvas(1600, 1600);
  createCanvas(windowWidth, windowHeight*2);
  // createCanvas(800, 800);

  // const canvas = createCanvas(windowWidth, windowHeight);
  // canvas.parent('main-content');


  // 计算每一部分的角度
  let angle = 360 / 61;

  // 将计算得到的角度填充到angles数组中
  for(let i = 0; i < 61; i++){
    angles[i] = angle; 
  }
}

function draw() {
  background(255,252,242);
  textSize(70);
  textFont(font_zh);
  textAlign(CENTER);
  fill(137,123,72);
  text("优秀猫猫荣誉墙",0.82*width,90);
  push();
  scale(0.65);
  image(imgMark,1.05*width,200);
  pop();

  push();
  scale(0.5);
  image(imgLeft,0,height*4/9);
  pop();

  //地图
  push();
  fill(0);
  translate(0.71*width,height/5-10);
  scale(0.8);
  // rect(0,0,400,300);
  image(imgMap[0],0,0);
  pop();

  push();
  fill(0);
  translate(width/8,height/2-height/8);
  textSize(20);
  textFont(font_zh);
  textAlign(CENTER);
  noStroke();
  fill(100);
  text("体型",200,200);
  scale(0.5);
  pop();
  noStroke();
  let minLifeReference = 300/1600*height/2;
  let maxLifeReference = 460/1600*height/2;

  
  let numLifeScale = 1
  // if (d1 >= minLifeReference/2 && d1 <= maxLifeReference/2){
  //   numLifeScale = 1.2;
  // }
  // else if (d1 >= maxLifeReference/2 && d1 <= 400) {
  //   numLifeScale = 1.2;
  // }

  //寿命参考线
  // noFill();
  // stroke(180);
  // push();
  // translate(width/2,height/4);
  // scale(1.5);
  // circle(0,0,minLifeReference*numLifeScale);
  // circle(0,0,maxLifeReference*numLifeScale);
  // pop();
  
  


  push();
    fill(0);
    translate(width/8,height/2-height/8);
    scale(0.5);
    // rect(0,0,400,300);
    image(imgCatSize[0],0,0);
    pop();

  for (let i = 0; i < angles.length; i++) {
    let family_friendly = cats.getNum(i,'family_friendly');
    let rFamily = family_friendly*8;

    let children_friendly = cats.getNum(i,'children_friendly');
    let rChildren = children_friendly*8;

    let other_pets_friendly = cats.getNum(i,'other_pets_friendly');
    let rOtherpet = other_pets_friendly*8;  

    push();
    angleMode(DEGREES);
    Friendly(rFamily,rChildren,rOtherpet,i,360 / 61);
    pop();
    angleMode(RADIANS);

    
    textSize(20);
    textFont(font_zh);
    textAlign(CENTER);
    noStroke();
    fill(100);
    image(img0_2,0.55*width,0.8*height/2);
    text("好体质",0.58*width,0.92*height/2);
    image(img1_2,0.6*width,0.73*height/2);
    text("好打理",0.63*width,0.85*height/2);
    image(img2_2,0.64*width,0.63*height/2);
    text("好性格",0.67*width,0.75*height/2);

    

  }


  // 定义开始绘制饼图的角度
  let start = -HALF_PI-PI/61;  // 初始角度设定为y轴负半轴
  activeSlice = -1; 
  
  noStroke();

  //猫眼跟随
  // catEye();
  
  fill(0);
  let catX = 0.42*width;
  // let cat0 = 0.42*width + 60;
  let catY = height/4-50;
  let catEyeX = 5;
  let catEyeY = 8;
  
  let d1 = dist(mouseX,mouseY,catX,catY);

  
  sinMouse = (mouseY-catY+20)/sqrt(sq(mouseX-catX+60)+sq(catY+20));
  cosMouse = (mouseX-catX+60)/sqrt(sq(mouseX-catX+60)+sq(catY+20));
  if(d1 > catX){
    sinMouse = (mouseY-catY+20)/catX;
    cosMouse = (mouseX-catX+60)/catX;
  }
  let catEyeX1 = catX-25+catEyeX*cosMouse;
  let catEyeY1_2 = height/4+catEyeY*sinMouse+5
  let catEyeX2 = catEyeX1+48;
  ellipse(catEyeX1,catEyeY1_2,2*catEyeX,2*catEyeY);
  ellipse(catEyeX2,catEyeY1_2,2*catEyeX,2*catEyeY);
  // sinMouse = (mouseY-394/800*height/2)/sqrt(sq(mouseX-375/800*width)+sq(mouseY/800*height/2-394));
  // cosMouse = (mouseX-375/800*width)/sqrt(sq(mouseX-375/800*width)+sq(mouseY/800*height/2-394));
  // ellipse(catX-25+5*cosMouse,400/800*height/2+5*sinMouse+5,10,16);
  // ellipse(catX+19+5*cosMouse,400/800*height/2+5*sinMouse+5,10,16);
 
  image(cat[0],catX-60,catY);

  // 遍历angles数组
  for (let i = 0; i < angles.length; i++) {

    
    noFill();
    let angleEnd = start + radians(angles[i]);
    let adjustedAngleEnd = angleEnd > TWO_PI ? angleEnd - TWO_PI : angleEnd;
        
    

    let name = cats.getString(i,'name');
    let length = cats.getNum(i,'length');
    let origin = cats.getString(i,'origin');

    let min_life_expectancy = cats.getNum(i,'min_life_expectancy');
    let minLife = map(min_life_expectancy,7,17,50,80);

    let max_life_expectancy = cats.getNum(i,'max_life_expectancy');
    let maxLife = map(max_life_expectancy,10,20,100,130);

    let min_weight = cats.getNum(i,'min_weight');
    let max_weight = cats.getNum(i,'max_weight');


    let family_friendly = cats.getNum(i,'family_friendly');
    let rFamily = family_friendly*10;

    let shedding = cats.getNum(i,'shedding');
    let general_health = cats.getNum(i,'general_health');
    let playfulness = cats.getNum(i,'playfulness');
    let children_friendly = cats.getNum(i,'children_friendly');
    let rChildren = children_friendly*10;

    let grooming = cats.getNum(i,'grooming');
    let intelligence = cats.getNum(i,'intelligence');

    let other_pets_friendly = cats.getNum(i,'other_pets_friendly');
    let rOtherpet = other_pets_friendly*10;

    let eye_color = cats.getNum(i,'eye_color');

    let category = cats.getNum(i,'category');

    


    // push();
    // angleMode(DEGREES);
    // Friendly(rFamily,rChildren,rOtherpet,i,360 / 61);
    // pop();
    // angleMode(RADIANS);
    
    if(isPointInsideArc(mouseX, mouseY, catX, height/4, start, adjustedAngleEnd, 400)) {
      fill(0);
      activeSlice = i;
      textSize(40);
      textFont(font);
      // text(`${name}`,80/800*width,60/800*height/2);
      textSize(20);
      textFont(font);
      textAlign(CENTER);
      text(`${name}`,catX,height/4+70);//center name

      push();
      fill(0);
      translate(0.71*width,height/5-10);
      scale(0.8);
      // rect(0,0,400,300);
      image(imgMap[origin],0,0);
      pop();

      let vocality = cats.getNum(i,'vocality');
      let t = 135;
      let t1 = 210;
      push();
      scale(0.7);
      if (vocality <= 30){
        image(imgVocal1,0.42*width-t,height/4-t1);
      }
      else if(vocality>30 && vocality<=60){
        image(imgVocal2,0.42*width-t,height/4-t1);
      }
      else if(vocality>60){
        image(imgVocal3,0.42*width-t,height/4-t1);
      }
      pop();

      if (category == 0){

        image(img0_1,0.55*width,0.8*height/2);
        image(img1_2,0.6*width,0.73*height/2);
        image(img2_2,0.64*width,0.63*height/2);

        
      }
      else if (category == 1){

        image(img0_2,0.55*width,0.8*height/2);
        image(img1_1,0.6*width,0.73*height/2);
        image(img2_2,0.64*width,0.63*height/2);
        
      }
      else if (category == 2){

        image(img0_2,0.55*width,0.8*height/2);
        image(img1_2,0.6*width,0.73*height/2);
        image(img2_1,0.64*width,0.63*height/2);
        
      }


      //体型图
      push();
      fill(0);
      translate(width/8,height/2-height/8);
      textSize(20);
      textFont(font_zh);
      textAlign(CENTER);
      noStroke();
      fill(100);
      text("体型",200,200);
      scale(0.5);
      // rect(0,0,400,300);
      image(imgCatSize[length],0,0);
    
      pop();
      
      // let r = 450;
      // let a = 360 / 61;
      // push();
      // translate(width / 2, height / 4);  
      // scale(1.1)
      // fill(255,213,150,100);
      // arc(0, 0, (rChildren+rOtherpet+rFamily)*2+r, (rChildren+rOtherpet+rFamily)*2+r, i*a-a/2-90, (i+1)*a-a/2-90); 

      // fill(255,228,131,90);
      // arc(0, 0, (rChildren+rOtherpet)*2+r, (rChildren+rOtherpet)*2+r,i*a-a/2-90, (i+1)*a-a/2-90); 

      // fill(255,196,162,80);
      // arc(0, 0, rOtherpet*2+r, rOtherpet*2+r, i*a-a/2-90, (i+1)*a-a/2-90); 
      // pop();
      // fill(255);
      // circle(width/2,height/4,r);


      values[0] = family_friendly; 
      values[1] = children_friendly; 
      values[2] = general_health; 
      values[3] = playfulness; 
      values[4] = other_pets_friendly; 
      values[5] = intelligence; 



      if (sq(mouseX-375/800*width)+sq(mouseY-394/800*height/2)<=sq(5)) {
        fill(colors[eye_color]);
        ellipse(mouseX,mouseY,10,16);
        ellipse(mouseX+44/800*width,mouseY,10,16);
      }
      else {
        fill(colors[eye_color]);
        // sinMouse = (mouseY-394/800*height/2)/sqrt(sq(mouseX-375/800*width)+sq(mouseY/800*height/2-394));
        // cosMouse = (mouseX-375/800*width)/sqrt(sq(mouseX-375/800*width)+sq(mouseY/800*height/2-394));
        // ellipse(catX-25+5*cosMouse,400/800*height/2+5*sinMouse+5,10,16);
        // ellipse(catX+19+5*cosMouse,400/800*height/2+5*sinMouse+5,10,16);
        sinMouse = (mouseY-catY+20)/sqrt(sq(mouseX-catX+60)+sq(catY+20));
        cosMouse = (mouseX-catX+60)/sqrt(sq(mouseX-catX+60)+sq(catY+20));
        let catEyeX1 = catX-25+catEyeX*cosMouse;
        let catEyeY1_2 = height/4+catEyeY*sinMouse+5
        let catEyeX2 = catEyeX1+48;
        ellipse(catEyeX1,catEyeY1_2,2*catEyeX,2*catEyeY);
        ellipse(catEyeX2,catEyeY1_2,2*catEyeX,2*catEyeY);
      }

      if (activeSlice>= 0 ) {
        image(cat[i+1],catX-60,height/4-50);
            // console.log("鼠标所在区域为第 " + activeSlice + " 个区域。");
      }


      
  
    }else{
      // push();
      // scale(0.7)
      // image(imgVocal1,0.42*width-135,height/4-210);
      // pop();
      
      
    }

    
    //这是扇形不填充，但画一下用来识别鼠标位置
    noFill();
    arc(catX, height/4, width, height/2, start, angleEnd);
    start = angleEnd > TWO_PI ? angleEnd - TWO_PI : angleEnd;


    //外层 智力和家庭友好的圆
    push();
    // intelFriend(i,intelligence,family_friendly);
    pop();

    //内层 寿命体重健康
    push();
    fill(0);
    Life(i,name,minLife,maxLife,min_weight,max_weight,general_health,numLifeScale);
    pop();

    // for (let i = 0; i < angles.length; i++) {
    //   let vocality = cats.getNum(i,'vocality');
  
    //   if (vocality <= 30){
    //     image(imgVocal1,width/2-806,height/4-419);
    //   }
    //   else if(vocality>30 && vocality<=60){
    //     image(imgVocal2,width/2-806,height/4-419);
    //   }
    //   else if(vocality>60){
    //     image(imgVocal3,width/2-806,height/4-419);
    //   }
    // }
    
    

    
  }
    
  if (activeSlice >= 0) {
    // image(cat[activeSlice],340,350);
        // console.log("鼠标所在区域为第 " + activeSlice + " 个区域。");
  }

  

  //鼠标鱼
  

  // image(cat[0],340,350);

  // //体型图
  // push();
  // fill(0);
  // translate(width/20,120);
  // // rect(0,0,400,300);
  // image(imgCatSize[0],0,0);
  // pop();

  

  //雷达图
  push();
  angleMode(DEGREES);
  
  push();
  translate(0,0);
  scale(0.5);
  image(imgMedal,0.025*width,0.17*height/2);
  pop();
  translate(0.12*width, 0.15*width);
  let radarSize = 0.01*width;
  for (let i = 1; i <= 5; i++) {
    drawPolygon(6, i * radarSize, 'gray'); // 画格子，可以自行调整大小
  }
  drawPolygon(6, radarSize*5, 'black'); // 画边框，可以自行调整大小
  
  stroke(255,135,82);
  strokeWeight(3);
  fill(255,135,82,80);
  beginShape();
  for (let i = 0; i < numDimensions; i++) {
    let level = values[i];
    let x = level * radarSize * cos(i * 360 / numDimensions - 90);
    let y = level * radarSize * sin(i * 360 / numDimensions - 90);
    vertex(x, y);
  }
  endShape(CLOSE);
  
  for (let i = 0; i < numDimensions; i++) {
    textSize(20);
    textFont(font_zh);
    textAlign(CENTER);
    noStroke();
    fill(100);
    text(dimensionNames[i], 7*radarSize * cos(i * 360 / numDimensions - 90), 7*radarSize * sin(i * 360 / numDimensions - 90));
  }
  pop();
  angleMode(RADIANS);

  push();
  scale(0.28);
  image(imgFriendlyRelation,2.55*width,1.05*height);
  pop();

  

  push();
  translate(0,windowHeight);
  // scale(0.65);
  // image(img4, 0, 0);s
  pop();

  mouseFish();

  
}


// 检查给定的点是否在圆弧内的自定义函数
function isPointInsideArc(pointX, pointY, centerX, centerY, angleStart, angleEnd, radius) {
  // 计算给定的点到圆心的距离
  let d = dist(pointX, pointY, centerX, centerY);
  // 计算给定的点的角度
  let angle = atan2(pointY - centerY, pointX - centerX);

  if (angle < -HALF_PI-PI/61) angle = TWO_PI + angle; // 控制角度始终在 0-2π 范围内

  if (angleEnd < angleStart) {
    return d <= radius && (angle >= angleStart && angle <= TWO_PI || angle >= 0 && angle <= angleEnd);
  } else {
    return d <= radius && angle >= angleStart && angle <= angleEnd;
  }
}




