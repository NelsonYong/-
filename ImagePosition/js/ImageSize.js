function ImageSize() {

  let containW = document.getElementsByClassName("mark")[0].offsetWidth;
  let containH = document.getElementsByClassName("mark")[0].offsetHeight;
  var imgSrc = $(".mark").children('img').attr("src");
  getImageWidth(imgSrc, function (w, h) {
    ComputeSize({
      width: containW,
      height: containH
    }, {
      width: w,
      height: h
    })
  });

}

function getImageWidth(url, callback) {
  var img = new Image();
  img.src = url;

  // 如果图片被缓存，则直接返回缓存数据
  if (img.complete) {
    callback(img.width, img.height);
  } else {
    // 完全加载完毕的事件
    img.onload = function () {
      callback(img.width, img.height);
    }
  }
}

function ComputeSize(con, child) {
  console.log(con,child)
  const child_pre=child.width/child.height
  const con_pre=con.width/con.height

  //计算图片缩放比例
  if(child_pre>con_pre){

    SetImagesize( con.width,(con.width*child.height)/child.width)
    ComputePre(con.width/child.width,((con.width*child.height)/child.width)/child.height)
  }

 

  if(child_pre==con_pre){
   
    SetImagesize( con.width,con.height)
    ComputePre(con.width/child.width,con.height/child.height)

  }
  if(child_pre<con_pre){

   
    SetImagesize((child.width/child.height)*con.height,con.height)
    ComputePre(((child.width/child.height)*con.height)/child.width,con.height/child.height)

  }

  console.log(child_pre,con_pre)

}


function ComputePre(pre1,pre2){

  pre_w=pre1
  pre_h=pre2
}

function SetImagesize(w,h){

  $(".mark").children('img').css({
    'width':w+'px',
    'height':h+'px'
  })
  $(".mark1").children('img').css({
    'width':w+'px',
    'height':h+'px'
  })

}