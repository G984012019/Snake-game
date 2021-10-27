ctx.fillStyle="lime";
ctx.fillRect(canv.width/2, canv.height/2, 20, 20);
setInterval(function(){
  ctx.fillStyle="black";
  ctx.fillRect(0, 0, canv.width, canv.height);
  ctx.fillStyle="lime";
  px += xd;
  py += yd;
  snake.push({x:px, y:py});
  for(let i=0;i<snake.length-1;i++){

    ctx.fillRect(snake[i].x*SIZE, snake[i].y*SIZE, SIZE-2, SIZE-2);
    if(snake[i].x == px && snake[i].y == py){
      tail = MIN;

    }
  }
  while (snake.length>tail) {
    snake.shift();
  }

  if(appleX == px && appleY == py){
    tail++;
    appleX=Math.floor(Math.random()*canv.width/SIZE);
    appleY=Math.floor(Math.random()*canv.height/SIZE);
    score=Math.random();

  }
  ctx.fillStyle= "red";
  ctx.fillRect(appleX*SIZE, appleY*SIZE, SIZE-2, SIZE-2);
  if(score>=0.75){
    if(demoX == px && demoY == py){
      tail=tail+6;
      alert("Congratulations!bonus apple!")
      demoX=Math.floor(Math.random()*canv.width/SIZE);
      demoY=Math.floor(Math.random()*canv.height/SIZE);
      score=Math.random();
    }
    ctx.fillStyle= "yellow";
    ctx.fillRect(demoX*SIZE, demoY*SIZE, SIZE-2, SIZE-2);
  }


},1000/FPS);
