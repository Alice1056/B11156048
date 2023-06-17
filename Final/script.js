window.onload = function() {
    var image1 = document.getElementById('image-container1');
    var textContainer1 = document.getElementById('text-container1');
    var text1 = document.getElementById('text1');
    
    var image2 = document.getElementById('image-container2');
    var textContainer2 = document.getElementById('text-container2');
    var text2 = document.getElementById('text2');
    
    // 第一組圖片移動到網頁左邊的位置
    setTimeout(function() {
      image1.style.left = '0';
    }, 2000);
    
    // 第一組文字慢慢顯示
    setTimeout(function() {
      textContainer1.style.opacity = '1';
      text1.innerHTML = '《魔導少年劇場版：鳳凰巫女》（日語：劇場版 FAIRY TAIL 鳳凰の巫女）是一部2012年日本動畫電影，由藤森雅也執導、十川誠志編劇，改編自漫畫家真島浩創作的漫畫《FAIRY TAIL魔導少年》。電影於2012年8月18日在日本上映。';
    }, 4000);
    
    // 第二組圖片移動到網頁左邊的位置
    setTimeout(function() {
      image2.style.left = '0';
    }, 5000);
    
    // 第二組文字慢慢顯示
    setTimeout(function() {
      textContainer2.style.opacity = '1';
      text2.innerHTML = '《魔導少年劇場版：龍之淚》（日語：劇場版 FAIRY TAIL -DRAGON CRY-）是一部2017年日本動畫電影，由南川達馬執導、米村正二編劇，改編自漫畫家真島浩創作的漫畫《FAIRY TAIL魔導少年》。電影於2017年5月6日在日本上映。';
    }, 7000);
  };
  
