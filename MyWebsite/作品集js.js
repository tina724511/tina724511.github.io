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
    
    pic[0].style.width = "1300px";
    pic[0].style.margin = "25px" ;
    pic[1].style.width = "1300px";
    pic[1].style.margin = "25px" ;
    pic[2].style.width = "400px";
    pic[2].style.margin = "23px" ;
    pic[3].style.width = "400px";
    pic[3].style.margin = "23px" ;
    pic[4].style.width = "400px";
    pic[4].style.margin = "23px" ;
    pic[5].style.width = "400px";
    pic[5].style.margin = "23px" ;
    pic[6].style.width = "400px";
    pic[6].style.margin = "23px" ;
    pic[7].style.width = "400px";
    pic[7].style.margin = "23px" ;
    pic[8].style.width = "400px";
    pic[8].style.margin = "23px" ;
    pic[9].style.width = "400px";
    pic[9].style.margin = "23px" ;
    pic[10].style.width = "400px";
    pic[10].style.margin = "23px" ;
    pic[11].style.width = "400px";
    pic[11].style.margin = "23px" ;
    pic[12].style.width = "400px";
    pic[12].style.margin = "23px" ;
    pic[13].style.width = "400px";
    pic[13].style.margin = "23px" ;
   

} 
  
else if(cur_id == "i-2"){
   
    inner.innerHTML = ` 
    

    <div class="girls3">

    <img class="girls" src="導出/作品_210322.jpg" alt="好時代封面">
    
    <img class="girls" src="導出/好時代(原始黨)-伍穎琛-張瑀倩-32.png" alt="好時代封底">
    
    <img id="Gtime" src="導出/好時代標題.png" alt="好時代封底">
    
    <p id="GTP">
    好時代這個名子是雙關詞，
    其中的「好」可以看成「女子」兩個字，
    同時表達女子時代亦是好時代。
    與本雜誌的主題「女力」
    息息相關。<br>
    </p>
    
    <p id="GTP2">
    書名 / 好時代<br>
    頁數 / 60P<br>
    尺寸 / B5(257 mm × 182 mm)<br>
    裝訂方式 / 左翻書，膠裝<br>
    </p>
    </div>

    
    <img class="girls2" src="導出/好時代(原始黨)-伍穎琛-張瑀倩-3.png" alt="好時代1">
    <img class="girls2" src="導出/好時代(原始黨)-伍穎琛-張瑀倩-4.png" alt="好時代1">
    <img class="girls2" src="導出/好時代(原始黨)-伍穎琛-張瑀倩-9.png" alt="好時代1">
    <img class="girls2" src="導出/好時代(原始黨)-伍穎琛-張瑀倩-10.png" alt="好時代1">
    <img class="girls2" src="導出/好時代(原始黨)-伍穎琛-張瑀倩-12.png" alt="好時代1">
    <img class="girls2" src="導出/好時代(原始黨)-伍穎琛-張瑀倩-14.png" alt="好時代1">
    <img class="girls2" src="導出/好時代(原始黨)-伍穎琛-張瑀倩-15.png" alt="好時代1">
    <img class="girls2" src="導出/好時代(原始黨)-伍穎琛-張瑀倩-16.png" alt="好時代1">
    <img class="girls2" src="導出/好時代(原始黨)-伍穎琛-張瑀倩-23.png" alt="好時代1">
    <img class="girls2" src="導出/好時代(原始黨)-伍穎琛-張瑀倩-24.png" alt="好時代1">
    <img class="girls2" src="導出/好時代(原始黨)-伍穎琛-張瑀倩-25.png" alt="好時代1">
    <img class="girls2" src="導出/好時代(原始黨)-伍穎琛-張瑀倩-26.png" alt="好時代1">
    <img class="girls2" src="導出/好時代(原始黨)-伍穎琛-張瑀倩-27.png" alt="好時代1">
    <img class="girls2" src="導出/好時代(原始黨)-伍穎琛-張瑀倩-28.png" alt="好時代1">
    

`;}  

else if(cur_id == "i-3"){
    inner.innerHTML = ` 


     <div class="ybox1">
        <img class="yoga" src="導出/靜.jpg" alt="靜">
        

        <div class="ybox3">
          <p class="yogap">
          作品名稱 : 靜<br>
          作品概念 :
          靜-是瑜珈的主軸，透過冥想沉澱心靈。
          </p>
      
  
  
          <div class="ybox2">
  
             <div class="ypic">
             <img id="yoga1-1" src="導出/647f78969807b753d5bda24170359fb7.jpg" alt="靜1">
             </div>
      
             <div class="ypic">
             <img id="yoga1-2" src="導出/f7d3070455161b06e1a5b1e6296b586e.jpg" alt="靜2">
             </div>
      
             <div class="ypic">
             <img id="yoga1-3" src="導出/f39245b82f872ceb04c21bef89a05390.jpg" alt="靜3">
             </div>
      
             <div class="ypic">
             <img id="yoga1-4" src="導出/6e154e037630e6b29bc9e4745b0e3c80.jpg" alt="靜4">
             </div>
  
          </div>


        </div>

     </div>





     <div class="ybox1">
     <img class="yoga" src="導出/衡心.jpg" alt="衡心">
     

     <div class="ybox3">
       
       <p class="yogap">
       作品名稱 : 衡心<br>
       作品概念 :
       樹式-維持身體的平衡，也能調節心靈。
       </p>
   


       <div class="ybox2">

          <div class="ypic">
          <img id="yoga2-1" src="導出/d8ea38edbf4b26026d0cef86bcad7a41.jpg" alt="衡心1">
          </div>
   
          <div class="ypic">
          <img id="yoga2-2" src="導出/1b5fbc0bd6ca7b10f231c478eb7db29d.jpg" alt="衡心2">
          </div>
   
          <div class="ypic">
          <img id="yoga2-3" src="導出/96454b40c8d993ca168452c8494f462e.jpg" alt="衡心3">
          </div>
   
          <div class="ypic">
          <img id="yoga2-4" src="導出/90d19e6f3405061391aba201c3c707c2.jpg" alt="衡心4">
          </div>

       </div>


     </div>



  </div>

`;} 

  
  
else if(cur_id == "i-4"){
    inner.innerHTML = `

    <img id="cup" src="導出/A3彩色-社畜海報_page-0001.jpg" alt="社畜日常">

`;}


else if(cur_id == "i-5"){
  inner.innerHTML = `

  <img id="bunny" src="導出/兔子.jpg" alt="Curious Bunny">
  
  <h1 id="bunnyh1" >Curious Bunny</h1>

  <div class="bunny">

    <p class="bunnyp">
    設計理念 :<br>
    兔子是歐洲常見的野生動物極家寵，因此以兔子為設計主題，作為花園擺飾。此作品展現好奇的兔寶寶遇上美麗的蝴蝶接觸的一瞬間。<br>
    <br>
    得獎紀錄 :<br>
    2020 泉州海峽兩岸大學生設計工作坊杰豐專場入圍獎<br>
    <br>
    指導老師 :<br>
    林信宏教授 / 亞洲大學<br>
    羅日生教授 / 國立台中教育大學
    </p>
  
    <img id="bunny2" src="導出/LINE_P2020104_231746.jpg" alt="Curious Bunny">

  </div>

  <img class="bunny3" src="導出/兔子5.png" alt="Curious Bunny">
  <img class="bunny3" src="導出/兔子6.png" alt="Curious Bunny">




`;}

else if(cur_id == "i-6"){
  inner.innerHTML = `

  <img id="Mushroom" src="導出/蘑菇.jpg" alt="蘑菇">
  
  <h1 id="bunnyh1" >Mushroom Lamp</h1>

  <div class="bunny">

    <p class="bunnyp">
    設計理念 :<br>
    外觀採用蘑菇的形狀，頂部結合彩色玻璃的概念。底部採簍空設計，讓光線更透亮。<br>
    <br>
    得獎紀錄 :<br>
    2020 泉州海峽兩岸大學生設計工作坊杰豐專場 銅獎<br>
    <br>
    指導老師 :<br>
    林信宏教授 / 亞洲大學<br>
    羅日生教授 / 國立台中教育大學
    </p>
  
    <img id="Mushroom2" src="導出/蘑菇草圖.jpg" alt="蘑菇草圖">

  </div>

  <img class="Mushroom3" src="導出/蘑菇燈1.png" alt="蘑菇">
  <img class="Mushroom3" src="導出/蘑菇2.png" alt="蘑菇">



`;}


else if(cur_id == "i-7"){
  inner.innerHTML = `

  <img id="Metalworkingall" src="導出/合照金工.jpg" alt="合照金工">

  <h1 id="Metalh1" >Bionic design Goldfish </h1>


  <div id="metalbox1">
    <p class="Metalp">
    設計理念: <br>
    這次我選擇仿生設計的主題是金魚，因為我覺得金魚在游泳時的身體律動以及尾巴擺盪時的線條很有流動性，非常好看。
    </p>
  
    <img id="fish" src="導出/作品_210322_13.jpg" alt="金魚">
  </div>



  <div class="metalbox2">
    <img class="metal1" src="導出/戒指.jpg" alt="戒指">
    <img class="metal2"  src="導出/20210322-IMG_1565.jpg" alt="戒指">
    
    <p class="metalp2" >
    金魚游動的身體曲線做成戒指，
    尾巴部分做成簍空設計。   
    </p>
  </div>


  <div class="metalbox2">
    <img class="metal1" src="導出/修過的_210320_0.jpg" alt="項鍊">
    <img class="metal2"  src="導出/20210322-IMG_1569.jpg" alt="項鍊">
    
    <p class="metalp2" >
    將金魚的外輪廓做成吊墜搭配水波紋的鍊子，
    呈現金魚在水中游動的感覺。
    </p>
  </div>


  <div class="metalbox2">
    <img class="metal1" src="導出/修過的_210320_2.jpg" alt="耳環">
    <img class="metal2"  src="導出/20210322-IMG_1578.jpg" alt="耳環">
    
    <p class="metalp2" >
    將金魚游動時的姿態，以扭曲
    的方式呈現，
    整體為薄片以減輕重量。   
    </p>
  </div>

  <div class="metalbox2">
    <img class="metal1" src="導出/修過的_210320_3.jpg" alt="項鍊">
    <img class="metal2"  src="導出/20210322-IMG_1575.jpg" alt="項鍊">
    
    <p class="metalp2" >
    採用草寫的方式將字母LS，以上下串聯
    相較於一般並排的字母鎖骨鍊，
    這種結合方式看起來更抽象，
    更有圖示的感覺。  
    </p>
  </div>


  <img class="metal3"  src="導出/BB05F95B-25E0-4D95-B19B-310308992F2D.jpg" alt="墜子">
  <img class="metal3"  src="導出/C9EC73EA-EEAA-444D-A8BD-9FAF6DFCFA8B.jpg" alt="湯匙">
  <img class="metal3"  src="導出/112F5BC9-10B4-447C-B62A-92D1BA4E4D38.jpg" alt="刀叉">

`;}


else if(cur_id == "i-8"){
  inner.innerHTML = `

  <img id="reindeer"  src="導出/LINE_ALBUM_愛麗絲系列_220504_1.jpg" alt="合照">
  
  <div class="reindeerbox1">

   <h1 id="reindeerh1" >REINDEER</h1>
   <a id="reindeera"  href="https://xppx8448.wixsite.com/reindeer">前往官方網站看更多</a>
  
  </div>

  <p class="reindeerp" >
  在這十分在意他人眼光、盲目跟隨潮流的社會影響下，許多人都失去了真正的自己，並且在愛一個人的同時，也忘了要好好的愛自己。因此我們希望透過童話故事的寓意，去傳達成為特別的人並不可怕，唯有富有特色的你、懂得愛自己的你，才是真正值得被人所愛以及能夠愛別人的人。
  </p>


  <img class="reindeerimg"  src="導出/LINE_ALBUM_愛麗絲系列_220504_6.jpg" alt="胸針">
  <img class="reindeerimg"  src="導出/LINE_ALBUM_愛麗絲系列_220511_2.jpg" alt="耳環">
  <img class="reindeerimg"  src="導出/LINE_ALBUM_愛麗絲系列_220511_4.jpg" alt="戒指">

`;}


else if(cur_id == "i-9"){
  inner.innerHTML = `

  <img id="ktall"  src="導出/Asia 12th-1068.png" alt="縷行全部">
  <img class="w1300px"  src="導出/展版4.jpg" alt="縷行">
  <img class="w1300px"  src="導出/676786.jpg" alt="縷行">
  <img class="w1300px"  src="導出/展版2.jpg" alt="縷行">
  <img class="w1300px"  src="導出/16075906786995.jpg" alt="縷行">
  
  
  <img class="ktalljpg"  src="導出/Asia 12th-1088.png" alt="縷行3">
  <img class="ktalljpg"  src="導出/Asia 12th-1096.png" alt="縷行4">
  <img class="ktalljpg"  src="導出/Asia 12th-1104.png" alt="縷行2">
  <img class="ktalljpg"  src="導出/Asia 12th-1079.jpg" alt="縷行2">
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








