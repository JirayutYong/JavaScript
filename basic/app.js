let me = prompt("กรอกเลขที่ต้องการซื้อ (2 หลัก) : ")
console.log(me)
let a = Math.floor(Math.random()*100)
console.log(a)
document.getElementById("buy").innerHTML = me
document.getElementById("result").innerHTML = a

sad = ("xxxx เสียใจด้วยคุณไม่ได้รับรางวัล xxxx")
yes = ("! ----- ดีใจด้วยนะคุณถูกรางวัล ---- !")

if(me == a)
{
    document.getElementById("wish").innerHTML = yes
}
else
{
    document.getElementById("wish").innerHTML = sad
}



