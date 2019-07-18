function random() {
   var options = ["別想了你今天要加班","廢在家追劇","七夕是蝦餃？","看電影","準備中元普渡","大餐吃一波","收涎","露營","分手","襪子","手機殼","托特包","紅酒","急救藥箱","口琴","拼圖","檯燈","藍芽喇叭","三明治機","觸控手套","電影票","鑄鐵鍋","睡袋","護手霜","不鏽鋼吸管","桌遊","維他命","吹風機","皮夾","行動電源","啤酒一手","威士忌","手錶","隨身咖啡機","電鍋","滑板","多肉植物","懶人手機架","名片夾","著色本","隨身卡拉OK","圍裙","安全帽","雨衣","牛排","拖鞋","麵包","太陽眼鏡","體重計","懶人毯"];
   document.getElementById('randomSelector').innerHTML = options[getRndInteger(0,50)];}

function getRndInteger(min, max) { return Math.floor(Math.random() * (max - min)) + min;}
