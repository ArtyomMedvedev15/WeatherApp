
window.addEventListener('load',()=>{
  let long;
  let lat;
  let tempDescription = document.querySelector('.temp-description');
  let tempDegreen = document.querySelector('.temp-degree');
  let locationTimeZone = document.querySelector('.location-timezone');

  let tempSection = document.querySelector('.degree-section');
  const tempSpan = document.querySelector('.degree-section span');


  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(position=>{
    long = position.coords.longitude;
    lat = position.coords.latitude;

    const proxy = 'https://cors-anywhere.herokuapp.com/';
    const api = proxy + 'https://api.darksky.net/forecast/545110c34b10ac20ee77e19356307365/'+lat+','+long;

    fetch(api)
      .then(response=>{
        return response.json();
      })
      .then(data=>{
        console.log(data);
        const {temperature, summary,icon} = data.currently;

        //Set value for DOM elemtn from the darksky ape
        tempDegreen.textContent = temperature;
        tempDescription.textContent = summary;
        locationTimeZone.textContent = data.timezone;
        //Formulla for cellc
        let cells = (temperature - 32) * (5 / 9);
        //set icon
        setIcons(icon,document.querySelector('.icon'));

        //change temp for cels/farg
        tempSection.addEventListener('click',()=>{
          if(tempSpan.textContent === "F"){
            tempSpan.textContent = "C";
            tempDegreen.textContent = Math.floor(cells);
          }else{
            tempSpan.textContent = "F";
            tempDegreen.textContent = temperature;
          }
        });

      });
  });
  }

function setIcons(icon,iconID){
  const skycons = new Skycons({color: "white"});
  const currentIcons = icon.replace(/-/g,"_").toUpperCase();
  skycons.play();
  return skycons.set(iconID,Skycons[currentIcons]);
}

});
