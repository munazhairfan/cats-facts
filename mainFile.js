let facts = fetch(`https://meowfacts.herokuapp.com/?count=90`);
facts.then((value)=>{
  return value.json()
}).then((value)=>{
  for(let i=0;i<90;i++){
    html= (`
         <div class="card" style="width: 18rem; margin:1%;">
            <div class="card-body" style=";>
              <h6 class="card-subtitle mb-2 text-muted">${i+1}</h6>
              <p class="card-text">${value.data[i]}</p>
            </div>
          </div>`)
          document.getElementsByClassName("container")[0].innerHTML+=html
 }
})

