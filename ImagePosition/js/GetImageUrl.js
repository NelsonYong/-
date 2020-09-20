  //获取上传文件的路径
  function getImgURL(node) {
    let imgURL = "";
    try {
      let file = null;
      if (node.files && node.files[0]) {
        file = node.files[0];
      } else if (node.files && node.files.item(0)) {
        file = node.files.item(0);
      }
      try {
        imgURL = file.getAsDataURL();
      } catch (e) {
        imgRUL = window.URL.createObjectURL(file);
      }
    } catch (e) {
      if (node.files && node.files[0]) {
        let reader = new FileReader();
        reader.onload = function (e) {
          imgURL = e.target.result;
        };
        reader.readAsDataURL(node.files[0]);
      }
    }
    creatImg(imgRUL);
    
    return imgURL;
  }

  function creatImg(imgRUL) { //根据指定URL创建一个Img对象
    RemoveChild()
    let textHtml = "<img src='" + imgRUL + "'/>";
    $(".mark").append(textHtml);
    $(".mark1").append(textHtml);
     //获取容器宽高
     ImageSize()

    let result = document.getElementsByClassName('mark1')[0];
    result.classList.add('disable')

   

  }


  function RemoveChild() {
    $(".mark").empty()
    $(".mark1").empty()
  }