var btn=document.querySelectorAll(".InputBtn");
var infoModal=document.querySelector("#infoModal");
var close=document.querySelector("#close");
var inner=document.querySelector(".inner")

for (var i=0;i<btn.length;i++)
{ 
  console.log("btn ID:" +  btn[i].id);
  btn[i].addEventListener("click", ShowPicture);
  
}

function ChangPicStyle(cur_id){
  var pic = document.querySelectorAll(".worksitem");
if(cur_id == "i-1"){
    
  inner.innerHTML = ` 
    
  <img class="w397px" src="導出/IMG_20180323_223115.jpg" alt="素描">
  <img class="w397px" src="導出/IMG_20180323_222617.jpg" alt="素描">
  <img class="w397px" src="導出/IMG_20180323_223921.jpg" alt="素描">
  <img class="w397px" src="導出/IMG_20180323_223015.jpg" alt="素描">
  <img class="w397px" src="導出/IMG_20180315_214338.jpg" alt="素描">
  <img class="w397px" src="導出/IMG_20180315_215450.jpg" alt="素描">
  <img class="w620px" src="導出/IMG_20180323_223539.jpg" alt="素描">
  <img class="w620px" src="導出/IMG_20180323_222857.jpg" alt="素描">

  <img class="w620px" src="導出/S__21889032.jpg" alt="素描">
  <img class="w620px" src="導出/S__21889031.jpg" alt="素描">
  <img class="w620px" src="導出/S__21889030.jpg" alt="素描">
  <img class="w620px" src="導出/S__21889028.jpg" alt="素描">

`;} 
  
else if(cur_id == "i-2"){
   
    inner.innerHTML = ` 
    
    <img class="w620px" src="導出/IMG_20180323_222337.jpg" alt="水彩">
    <img class="w620px" src="導出/IMG_20180323_223225.jpg" alt="水彩">

    <img class="w620px" src="導出/IMG_20180323_223457.jpg" alt="水彩">
    <img class="w620px" src="導出/IMG_20180315_220102.jpg" alt="水彩">
    <img class="w620px" src="導出/IMG_20180323_223348.jpg" alt="水彩">
    <img class="w620px" src="導出/IMG_20180323_224519.jpg" alt="水彩">
    


`;}  

else if(cur_id == "i-3"){
    inner.innerHTML = ` 

    <img class="w1300px" src="導出/img26.jpg" alt="麥克筆">

    <img class="w620px" src="導出/img29.jpg" alt="麥克筆">
    <img class="w620px" src="導出/img38.jpg" alt="麥克筆">
    <img class="w620px" src="導出/img59.jpg" alt="麥克筆">
    <img class="w620px" src="導出/img56.jpg" alt="麥克筆">

    <img class="w397px" src="導出/img62.jpg" alt="麥克筆">
    <img class="w397px" src="導出/img68.jpg" alt="麥克筆">
    <img class="w397px" src="導出/img41.jpg" alt="麥克筆">

    <img class="w397px" src="導出/img47.jpg" alt="麥克筆">
    <img class="w397px" src="導出/img50.jpg" alt="麥克筆">
    <img class="w397px" src="導出/img53.jpg" alt="麥克筆">

    <img class="w397px" src="導出/img44.jpg" alt="麥克筆">
    <img class="w397px" src="導出/img65.jpg" alt="麥克筆">
    <img class="w397px" src="導出/img71.jpg" alt="麥克筆">

    <img class="w397px" src="導出/img22.jpg" alt="麥克筆">
    <img class="w397px" src="導出/img32.jpg" alt="麥克筆">
    <img class="w397px" src="導出/img35.jpg" alt="麥克筆">

    

`;} 

  
  
else if(cur_id == "i-4"){
    inner.innerHTML = `

    <img class="w1300px" src="導出/車1.jpg" alt="車車">
    <img class="w1300px" src="導出/車爆炸圖1.jpg" alt="車車">
    <img class="w1300px" src="導出/水泥車1.jpg" alt="水泥車">
    <img class="w1300px" src="導出/水泥車爆炸1.jpg" alt="水泥車爆炸">


`;}


else if(cur_id == "i-5"){
  inner.innerHTML = `
  <h1 class="innerh1" >萬聖節小黃鴨</h1>

  <p class="innerp">
  運用Rhino建模後，再以Blender做燈光渲染，最後用Photoshop做裝飾修圖。
  </p>
  
  <img class="w1300px" src="導出/作品_210322_16.jpg" alt="鴨鴨">

  <h1 class="innerh1" >書精靈擺件</h1>

  <p class="innerp">
  運用Rhino建模後，再以Blender做燈光及材質渲染。
  </p>


  <img class="w1300px" src="導出/書精靈.png" alt="書精靈">
  

`;}

else if(cur_id == "i-6"){
  inner.innerHTML = `
  
  <div class="clubbox4">
    <img class="w1300px" src="導出/S__19136514.jpg" alt="  桌游">
    <img id="clublogo" src="導出/4.png" alt="桌游">
  </div>

  <div class="clubbox1">
    <p class="innerp"  id="clubp">
    品牌理念:<br>
    克拉伯，是由英文的俱樂部 (CLUB) 直翻而成的。而俱樂部是  具有    某種相同興趣的人聚在一起通歡的地方，因此我們想  要營造出可以    向俱樂部一樣讓人們相聚而歡的品牌。<br>
    <br>
    核心概念 :<br>
    在產品上以插畫呈現童趣可愛的風格；包裝設計上結合零食及  桌遊    的方式，達成玩食合一的目的。
    </p>

    <img id="club1" src="導出/名片1-Mockup.jpg" alt="桌游">
  </div>

  <img id="club3" src="導出/海報C.png" alt="桌游">
  <img id="club2" class="w790px" src="導出/S__19136515.jpg" alt="桌游">

  
  <div class="clubbox2">
   <img class="w397px" src="導出/海報萌系江湖.jpg" alt=" 桌游">
 

     <div class="clubbox3">

       <h1 class="innerh1" >設計遊戲 : 萌系江湖</h1>
    
       <p class="innerp" id="clubp2" >
       遊戲介紹 :<br>
       由包裝盒拆下的吹牛遊戲，內容物包含 64 張卡牌 (盒上拆下)，一份遊戲說明書，以及 40 顆巧克力，提供給2~6 人使用的派對禮包，讓人們在食用零食時，也能一起遊玩，進而互相增進感情，達到我們玩食合一的目的。
       </p>

     </div>


  </div>


  <img class="w397px" src="導出/睡衣派對海報.png" alt=" 桌游">
  <img id="club4" src="導出/S__19136527.jpg" alt="桌游">

  <h1 class="innerh1" >設計遊戲 : 睡衣派對</h1>

  <p class="innerp" >
  遊戲介紹 :<br>
  一款版圖遊戲，配合著枕頭造型棉花糖的搶地盤遊戲，包裝盒上能  拆下四種花色棉被共 60 張，一張地盤，一隻棋子，一個骰子，以及 40 顆棉花糖，給 2~4 人小型派對最好的選擇。
  </p>



`;}


else if(cur_id == "i-7"){
  inner.innerHTML = `
  <img class="w620px"  src="導出/GYM2.jpg" alt="海報">
  <img class="w620px"  src="導出/GYM3.6.jpg" alt="海報">


`;}


else if(cur_id == "i-8"){
  inner.innerHTML = `

  <img class="w1300px"  src="導出/紙盒包裝.png" alt="紙盒包裝">
  <img class="w1300px"  src="導出/馬卡龍色包裝.png" alt="包裝">
  <img class="w1300px"  src="導出/包裝(黃).png" alt="包裝">

`;}


else if(cur_id == "i-9"){
  inner.innerHTML = `

  <img class="w1300px"  src="導出/雨傘架展版.png" alt="雨傘架展版">
  

`;}

}


function ShowPicture(){
  // console.log("btn ID:" + this.id);
  ChangPicStyle(this.id);
  infoModal.showModal(); 
}



/*

for 每一個btn
{

btn[編號]的addEventListener


更換infoModal裡面照片
infoModal.showModal();
要秀出對應的照片

}



*/

// pic[1].style.display="none"; 隱藏

// infoModal.innerHTML = ` <p class="blue">1234哇哇553325</p> `; 

close.addEventListener("click", function(){
  infoModal.close();
})








