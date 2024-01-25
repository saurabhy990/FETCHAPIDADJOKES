 var btn = document.getElementById("btn");
btn.addEventListener("click", clickHandler);
//  document.getElementById("#btn")
//var p = document.querySelector("div > p");
var p = document.getElementById("jokes");
   function clickHandler(){

    let joke = "";
      //fetching the joke via api
      const xhr = new XMLHttpRequest();
      xhr.open('GET', 'https://api.api-ninjas.com/v1/dadjokes?limit=1');
      xhr.setRequestHeader('X-Api-Key', 'GPl36W36vSgyVf52ndFLBn8ePtjzKLwisLzUVjwe');
      xhr.send();
     
      btn.innerText = "Fetching Joke...."

      xhr.onload = function(){
          if(xhr.status === 200){
             // console.log(xhr.responseText);
            const result = JSON.parse(xhr.responseText);
            joke = result[0].joke;
            console.log(joke);

             //updating jokes inside  DOM 
             p.innerText = joke;

             btn.innerText = "Tell Me a Joke";
            
            
            //   p.appendChild(joke);
            
          }
      };

     


   }