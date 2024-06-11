function Friendly(rFamily, rChildren, rOtherpet,i,angle) {
    push();
    
    translate(width*0.42,height/4); 
    let r = 450;
    stroke(255);
    strokeWeight(0.5);
    fill(255,213,150,100);
    arc(0, 0, (rChildren+rOtherpet+rFamily)*2+r, (rChildren+rOtherpet+rFamily)*2+r, i*angle-angle/2-90, (i+1)*angle-angle/2-90); 

    fill(255,228,131,90);
    arc(0, 0, (rChildren+rOtherpet)*2+r, (rChildren+rOtherpet)*2+r,i*angle-angle/2-90, (i+1)*angle-angle/2-90); 

    fill(255,196,162,80);
    arc(0, 0, rOtherpet*2+r, rOtherpet*2+r, i*angle-angle/2-90, (i+1)*angle-angle/2-90); 

    // for (var a = 0; a < 61; a++) {
    //     fill(255,223,186);
    //     arc(0, 0, rOtherpet[a]*2, rOtherpet[a]*2, a*angle, (a+1)*angle); // Draw a sector
    // }

    // for (var a = 0; a < 61; a++) {
    //     fill(255,224,108);
    //     arc(0, 0, rChildren[a]*2, rChildren[a]*2, a*angle, (a+1)*angle); // Draw a sector
    // }

    // for (var a = 0; a < 61; a++) {
    //     fill(255,118,86);
    //     arc(0, 0, rFamily[a]*2, rFamily[a]*2, a*angle, (a+1)*angle); // Draw a sector
    // }
    pop();
    fill(255);
    circle(width*0.42,height/4,r);
    
}