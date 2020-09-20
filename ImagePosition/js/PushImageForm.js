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
    //url: "http://localhost/myphp/Demo/demo.php",
    //url: 'http://172.23.196.181:8070/face',
    type: 'post',
    processData: false,
    contentType: false,
    data: formdata,
    timeout: 5000,
    success: function (data) {
      // console.log(JSON.parse(data))
      let testarr = GetAllFacePosition(data)
      console.log(testarr)

      //单脸
      arr = testarr[0]
      console.log(arr)
      RealImgSize(arr)

    }

  })
})


function RealImgSize(arrs) {
  // console.log(pre_w, pre_h)
  let [...arr] = [arrs[0] * pre_w, arrs[1] * pre_h, arrs[2] * pre_w, arrs[3] * pre_h]
  // console.log(arr)
  $(".mark1").css({
    'clip': 'rect(' + arr[1] + 'px,' + arr[2] + 'px,' + arr[3] + 'px,' + arr[0] + 'px)',
    'position': 'absolute'
  })
  let result = document.getElementsByClassName('mark1')[0];
  result.classList.remove('disable')
}


function GetAllFacePosition(data) {

  let testarr =[]

  Object.keys(JSON.parse(data)).forEach(function (key) {
    testarr.push(JSON.parse(data)[key])
  })

  return testarr


}