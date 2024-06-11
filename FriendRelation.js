function FriendRelation(){
    const settings = {
        strokeColor: '#EDC26B', // 射线的颜色
        strokeWeight: 2, // 射线的粗细
        dashedCircleStrokeColor: '#CCCCCE', // 虚线圆的颜色
        dashedCircleStrokeWeight: 4, // 虚线圆的粗细
        lineSettings: [
          { name: 'Manx', color: '#FFDA76', size: 12, length: 180 },  // 第1根线
          { name: 'Persian', color: '#FFDA76', size: 12, length: 180 },  // 第2根线
          { name: 'Aegean', color: '#FFDA76', size: 10, length: 300 },  // 第3根线
          { name: 'American Shorthair', color: '#FFDA76', size: 12, length: 300 },  // 第4根线
          { name: 'American Wirehair', color: '#FFDA76', size: 15, length: 300 },  // 第5根线
          { name: 'Arabian Mau', color: '#FFDA76', size: 16, length: 300 },  // 第6根线
          { name: 'Australian Mist', color: '#FFDA76', size: 15, length: 300 },  // 第7根线
          { name: 'Bambino', color: '#FFDA76', size: 9, length: 300 },  // 第8根线
          { name: 'British Longhair', color: '#FFDA76', size: 18, length: 300 },  // 第9根线
          { name: 'California Spangled', color: '#FFDA76', size: 15, length: 300 },  // 第10根线
          { name: 'Chantilly-Tiffany', color: '#FFDA76', size: 12, length: 300 },  // 第11根线
          { name: 'Lykoi', color: '#FFDA76', size: 7, length: 300 },  // 第12根线
          { name: 'Nebelung', color: '#FFDA76', size: 15, length: 300 },  // 第13根线
          { name: 'Oriental Bicolor', color: '#FFDA76', size: 12, length: 300 },  // 第14根线
          { name: 'Turkish Angora', color: '#FFDA76', size: 12, length: 300 },  // 第15根线
          { name: 'Turkish Van', color: '#FFDA76', size: 9, length: 300 },  // 第16根线
          { name: 'York Chocolate', color: '#FFDA76', size: 18, length: 300 },  // 第17根线
          { name: 'American Bobtail', color: '#FFDA76', size: 18, length: 300 },  // 第18根线
          { name: 'Aphrodite Giant', color: '#FFDA76', size: 13, length: 420 },  // 第19根线
          { name: 'Asian', color: '#FFDA76', size: 24, length: 420 },  // 第20根线
          { name: 'Bombay', color: '#FFDA76', size: 10, length: 420 },  // 第21根线
          { name: 'Brazilian Shorthair', color: '#FFDA76', size: 15, length: 420 },  // 第22根线
          { name: 'Burmese', color: '#FFDA76', size: 22, length: 420 },  // 第23根线
          { name: 'Burmilla', color: '#FFDA76', size: 12, length: 420 },  // 第24根线
          { name: 'Chausie', color: '#FFDA76', size: 13, length: 420 },  // 第25根线
          { name: 'Colorpoint Shorthair', color: '#FFDA76', size: 30, length: 420 },// 第26根线
          { name: 'Cyprus', color: '#FFDA76', size: 10, length: 420 },// 第27根线
          { name: 'Devon Rex', color: '#FFDA76', size: 16, length: 420 },// 第28根线
          { name: 'Donskoy', color: '#FFDA76', size: 10, length: 420 },// 第29根线
          { name: 'European Shorthair', color: '#FFDA76', size: 15, length: 420 },// 第30根线
          { name: 'Foldex', color: '#FFDA76', size: 15, length: 420 },// 第31根线
          { name: 'German Rex', color: '#FFDA76', size: 14, length: 420 },// 第32根线
          { name: 'Javanese', color: '#FFDA76', size: 8, length: 420 },// 第33根线
          { name: 'Khao Manee', color: '#FFDA76', size: 10, length: 420 },// 第34根线
          { name: 'Kurilian Bobtail', color: '#FFDA76', size: 10, length: 420 },// 第35根线
          { name: 'Mekong Bobtail', color: '#FFDA76', size: 15, length: 420 },// 第36根线
          { name: 'Peterbald', color: '#FFDA76', size: 10, length: 420 },// 第37根线
          { name: 'Pixie-Bob', color: '#FFDA76', size: 10, length: 420 },// 第38根线
          { name: 'Ragdoll Cats', color: '#FFDA76', size: 17, length: 420 },// 第39根线
          { name: 'Russian Blue', color: '#FFDA76', size: 20, length: 420 },// 第40根线
          { name: 'Scottish Fold', color: '#FFDA76', size: 15, length: 420 },// 第41根线
          { name: 'Serengeti', color: '#FFDA76', size: 13, length: 420 },// 第42根线
          { name: 'Siamese Cat', color: '#FFDA76', size: 15, length: 420 },// 第43根线
          { name: 'Siberian', color: '#FFDA76', size: 14, length: 420 },// 第44根线
          { name: 'Singapura', color: '#FFDA76', size: 17, length: 420 },// 第45根线
          { name: 'Snowshoe', color: '#FFDA76', size: 7, length: 420 },// 第46根线
          { name: 'Sokoke', color: '#FFDA76', size: 12, length: 420 },// 第47根线
          { name: 'Tonkinese', color: '#FFDA76', size: 10, length: 420 },// 第48根线
          { name: 'Toyger', color: '#FFDA76', size: 12, length: 420 },// 第49根线
          { name: 'Ukrainian Levkoy', color: '#FFDA76', size: 15, length: 420 },// 第50根线
          { name: 'Abyssinian', color: '#FFDA76', size: 12, length: 420 },// 第51根线
          { name: 'Bengal Cats', color: '#FFDA76', size: 10, length: 540 },// 第52根线
          { name: 'Birman', color: '#FFDA76', size: 17, length: 540 },// 第53根线
          { name: 'British Shorthair', color: '#FFDA76', size: 12, length: 540 },// 第54根线
          { name: 'Cornish Rex', color: '#FFDA76', size: 17, length: 540 },// 第55根线
          { name: 'Highlander', color: '#FFDA76', size: 10, length: 540 },// 第56根线
          { name: 'Japanese Bobtail', color: '#FFDA76', size: 20, length: 540 },// 第57根线
          { name: 'Maine Coon', color: '#FFDA76', size: 10, length: 540 },// 第58根线
          { name: 'Savannah', color: '#FFDA76', size: 18, length: 540 },// 第59根线
          { name: 'Somali', color: '#FFDA76', size: 20, length: 540 },// 第60根线
          { name: 'Sphynx', color: '#FFDA76', size: 10, length: 540 },   // 第61根线
          { name: 'Turkish Angora', color: '#FFDA76', size: 12, length: 540 } ,  // 第62根线
        
        
        ]
      };
}

function drawDashedCircles() {
    let initialDashes = 20; // 中间圆的虚线段数量
    for (let i = 0; i < radii.length; i++) {
      let numDashes = initialDashes + i * 10; // 每个圆的虚线段数量递增
      drawDashedCircle(0, 0, radii[i] * 2, numDashes); // 画虚线圆，直径为半径的两倍
    }
  }
  
  // 绘制虚线圆的具体实现
  function drawDashedCircle(x, y, diameter, numDashes) {
    let angleStep = TWO_PI / numDashes;
    let dashLength = diameter * PI / numDashes / 2; // 虚线段的长度
  
    for (let i = 0; i < numDashes; i++) {
      let angle1 = i * angleStep;
      let angle2 = angle1 + angleStep / 2;
      let x1 = x + cos(angle1) * diameter / 2;
      let y1 = y + sin(angle1) * diameter / 2;
      let x2 = x + cos(angle2) * diameter / 2;
      let y2 = y + sin(angle2) * diameter / 2;
      stroke(settings.dashedCircleStrokeColor); // 设置虚线圆的描边颜色
      line(x1, y1, x2, y2);
    }
  }
  
  // 预计算所有线条的终点
  function prepareLines() {
    let angleStep = TWO_PI / settings.lineSettings.length; // 计算每条线的角度步长
    for (let i = 0; i < settings.lineSettings.length; i++) {
      let { name, color, size, length } = settings.lineSettings[i];
      let angle = -HALF_PI + i * angleStep; // 使第一条线垂直向上
      let x2 = cos(angle) * length;
      let y2 = sin(angle) * length;
      lines.push({ x2, y2, color, size }); // 保存线条终点和属性
    }
  }
  
  // 绘制所有线条
  function drawAllLines() {
    for (let i = 0; i < lines.length; i++) {
      let { x2, y2, color, size } = lines[i];
      stroke(settings.strokeColor); // 设置射线颜色
      strokeWeight(settings.strokeWeight); // 设置射线宽度
      line(0, 0, x2, y2); // 从中心点画射线
    }
  }
  
  // 绘制射线末端的圆
  function drawCircles() {
    for (let i = 0; i < lines.length; i++) {
      let { x2, y2, color, size } = lines[i];
      fill(color); // 设置圆的填充颜色
      noStroke(); // 圆形无描边
      ellipse(x2, y2, size * 2, size * 2); // 画圆
      noFill(); // 恢复无填充状态
    }
  }