function getCat(url, callback) {
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        console.log('responseText:' + xmlhttp.responseText);
        try {
          var data = JSON.parse(xmlhttp.responseText);
        } catch (err) {
          console.log(err.message + " in " + xmlhttp.responseText);
          return;
        }
        callback(data);
      }
    };
  
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
  }
  function refreshCat(){
  getCat('https://api.thecatapi.com/v1/images/search?size=full', function(data) {

    let html = '<img src="' + data[0]["url"] + '">';
    document.getElementById("cat").innerHTML = html;
  });
}
  

  let catButton = document.getElementsByTagName("button")[1]
catButton.addEventListener("click", refreshCat)


  
  function getDog(url, callback) {
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        console.log('responseText:' + xmlhttp.responseText);
        try {
         var data = JSON.parse(xmlhttp.responseText);
        } catch (err) {
          console.log(err.message + " in " + xmlhttp.responseText);
          return;
        }
        callback(data);
      }
    };
  
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
  }
  
  function refreshDog(){
  getDog('https://api.thedogapi.com/v1/images/search?size=full', function(data) {

    let html = '<img src="' + data[0]["url"] + '">';
    document.getElementById("dog").innerHTML = html;
  });
  }

let dogButton = document.getElementsByTagName("button")[0]
dogButton.addEventListener("click", refreshDog)
