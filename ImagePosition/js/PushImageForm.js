$("#filebtn").click(function () {
  //获取上传文件对象
  let myfile = $("#file")[0].files[0]


  //表单封装图片信息
  let formdata = new FormData()
  formdata.append('name', $("#id_name").val())
  formdata.append('myfile', myfile)

  let arr = []
  //提交数据
  $.ajax({
    url:'',
    type: 'post',
    processData: false,
    contentType: false,
    data: formdata,
    timeout: 5000,
    success: function (data) {
      //console.log(data)
      const el = document.getElementById('result')
      el.innerHTML = data
      let testarr = GetAllFacePosition(data)
      console.log(testarr)
      GetAllFaceArray(testarr)
    }

  })
})

function GetAllFaceArray(Arrs){

  
  for (let index = 0; index < Arrs.length; index++) {
   test(Arrs[index],index)
  }

  for (let i = 0;; i++) {
    let result = document.getElementsByClassName('mark1')[i];
    result.classList.remove('disable')
  }

}

function test(arrs,index) {
  // console.log(pre_w, pre_h)
  let [...arr] = [arrs[0] * pre_w, arrs[1] * pre_h, arrs[2] * pre_w, arrs[3] * pre_h]
  console.log(arr)
  CreateElementDiv(arr,index)
}


function CreateElementDiv(arr,index) {
  $('.res').append("<div class='show1'><div class='mark1 disable'></div></div>")
  $(".mark1").append(localImage);
  ImageSize()
 
  $(".mark1:eq("+index+")").css({
    'position': 'relative',
    'left': -1 * arr[0],
    'top': -1 * arr[1],
    
  })
  $(".show1:eq("+index+")").css({
    'width': arr[2] - arr[0],
    'height': arr[3] - arr[1],
    'margin-right':'20px',
    'overflow': 'hidden'
  })

}


function RealImgSize(arrs) {
  // console.log(pre_w, pre_h)
  let [...arr] = [arrs[0] * pre_w, arrs[1] * pre_h, arrs[2] * pre_w, arrs[3] * pre_h]
  console.log(arr)
  $(".mark1").css({
    'clip': 'rect(' + arr[1] + 'px,' + arr[2] + 'px,' + arr[3] + 'px,' + arr[0] + 'px)',
    'position': 'absolute'
  })
  let result = document.getElementsByClassName('mark1')[0];
  result.classList.remove('disable')
}




function GetAllFacePosition(data) {

  let testarr = []

  Object.keys(JSON.parse(data)).forEach(function (key) {
    testarr.push(JSON.parse(data)[key])
  })

  return testarr


}