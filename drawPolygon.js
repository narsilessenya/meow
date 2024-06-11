function drawPolygon(numSides, size, color) {
    push();
    stroke(color);
    noFill();
    beginShape();
    for (let i = 0; i < numSides; i++) {
      let x = size * cos(i * 360 / numSides - 90);
      let y = size * sin(i * 360 / numSides - 90);
      vertex(x, y);
    }
    endShape(CLOSE);
    pop();
  }