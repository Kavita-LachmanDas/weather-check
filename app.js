
var userInput = prompt("ENTER CURRENT WEATHER:\nCloudy\nRainy\nHot\nCold\nFall");


if(userInput === "Cloudy"){
  document.write(` 
     <div class="con" style="background-image: url(https://media.tenor.com/f14xUacYc1oAAAAM/storm-world-meteorological-day.gif);">
     <h2 style="color: black;">Weather information service</h2>
    <br><hr> 
    <div class="card">
  <img src="https://jocular-truffle-af613b.netlify.app/images/cloudy.gif" alt="" >
        <div class="container">
          <h4>It's CLOUDY Today</h4>
          <p>Go for a walk, or bike ride; the cooler temperatures can make for a pleasant outing☁️🌧.</p>
        </div>
      </div>
      </div>`)
}


else if(userInput === "Hot"){
  document.write(` 
     <div class="con" style="background-image: url(https://www.icegif.com/wp-content/uploads/2022/07/icegif-873.gif);">
    <h2 style="color: white;">Weather information service</h2>
    <br><hr> 
    <div class="card">
  <img src="https://jocular-truffle-af613b.netlify.app/images/summer.gif" alt="" >
        <div class="container">
          <h4>It's HOT Today</h4>
          <p>Avoid midday sun and Wear sunscreen. Stay hydrated and cool indoors.🌞🏖️</p>
        </div>
      </div>
      </div>`)
}


else if(userInput === "Cold"){
  document.write(` 
     <div class="con" style="background-image: url(https://cdn.pixabay.com/animation/2022/09/13/02/18/02-18-02-177_512.gif);">
      <h2 >Weather information service</h2>
    <br><hr> 
    <div class="card">
  <img src="https://jocular-truffle-af613b.netlify.app/images/winter.gif" alt="" >
        <div class="container">
          <h4>It's COLD Today</h4>
          <p>Protect your skin, moisturize. Stay active to keep warm and layer up!❄️☃️</p>
        </div>
      </div>
      </div>`)
}

else if(userInput === "Rainy"){
  document.write(` 
  <div class="con" style="background-image: url(https://www.icegif.com/wp-content/uploads/2021/10/icegif-453.gif);">
<h2 >Weather information service</h2>
    <br><hr> 
    <div class="card">
  <img src="https://jocular-truffle-af613b.netlify.app/images/rainy.gif" alt="" >
        <div class="container">
          <h4>It's RAINY Today</h4>
          <p>Embrace the coziness of rainy days; it’s a great time for reflection and relaxation.⛈️☔</p>
        </div>
      </div>
      </div>
      `)
}

else if(userInput === "Fall"){
  document.write(` 
     <div class="con" style="background-image: url(https://i.pinimg.com/originals/70/e2/3b/70e23b6f69a76243f08fb412ac95a2ee.gif);">
    <h2 style="color: black;">Weather information service</h2>
    <br><hr> 
    <div class="card">
  <img src="https://jocular-truffle-af613b.netlify.app/images/autumn.gif" alt="" >
        <div class="container">
          <h4>It's FALL</h4>
          <p>Perfect time for boots and scarves. Layer up for cozy comfort🍁🧣</p>
        </div>
      </div>
      </div>`)
}else{
  document.write(`
    
     <div class="main">
    <h1 class="hi">Weather information service</h1>
    <br><hr> <br><br>
    <p>Please do input from given examples!</p>
  </div> `)
}

