const APPLICATION_KEY = "6ad5ebfe2960cfb87880cd94eb6c616dc8b43438ade44b60016f01725b557d3b";
const CLIENT_KEY = "2011eff1aa705b7a23a8461cff12af303709fe253c3c74d8d359931978a138db";
const ncmb = new NCMB(APPLICATION_KEY,CLIENT_KEY);
const DBName = "TestClass";

let TestClass = ncmb.DataStore(DBName);
let timer = null;

const Max=3;

let scores =0;
function init() {
  if (timer == null) {
    start = new Date();
    time();
    gameStart();
  }
}

function gameStart() {
  let size =5;
  let qNum =Math.floor(Math.random()*q.length);

  for(let i=0; i<size*size ;i++){
    let s=document.createElement("span");
    s.textContent =q[qNum][0];
    s.setAttribute("id","num"+i);
    s.addEventListener('click',function(){
      if(this.textContent ==q[qNum][1]){
        //alert("正解");
        correct.play();
        scores++;
        while (cells.firstChild) {
          cells.removeChild(cells.firstChild);
        }

        if (scores==Max) {

          let key = "message";
          let test = new TestClass();


          test.set(key,parseInt(timer));
          test.save()
          .then(function(){
            console.log("成功");
          })
          .catch(function(err){
            console.log("エラー発生："+err);
          });
          TestClass.order("message")
          .fetchAll()
          .then(function(results){
            for(let i=0;i<results.length;i++){
              console.log(results[0].message);
              if(timer<=results[0].message){
                alert("Game Clear!");
                return alert("High Score:"+timer);
              }else{
                return alert("Game Clear!");
              }
            }
          })
          .catch(function(err){
            console.log("error");
          });

        }


        gameStart();

      }else{
        wrong.play();
      }


    });
    cells.appendChild(s);
    if(i%size ==size-1){
      const br =document.createElement("br");
      cells.appendChild(br);
    }
  }
  let p =Math.floor(Math.random()*size*size);

  let ans = document.getElementById("num"+p);
  ans.textContent=q[qNum][1];

}

function time() {
  let now = new Date();
  let eTime = parseInt((now.getTime() -
  start.getTime())/1000);
  score.textContent = eTime;
  timer = setTimeout("time()",1000);
  if (scores==Max) {
    clearTimeout(timer);
  }
}



  // データの保存
