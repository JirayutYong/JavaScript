var age = prompt("กรุณาบอกอายุก่อนเข้า Club ของเรา : ")
var ok =("คุณอายุมากกว่า 18 ซึ่งเข้าเงื่อนไขของ Club เรา")
var n =("คุณอายุน้อยกว่า 18 ซึ่งไม่เข้าเงื่อนไขของ Club เรา")
var myImage = new Image(700, 500);
myImage.src = 'club.gif';

if(age>18)
{
 document.getElementById("ok").innerHTML = ok
 document.getElementById("vdo").innerHTML = "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/bVPUc87jQws\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
 document.body.appendChild(myImage);
}
else
{
    document.getElementById("no").innerHTML= n
}
