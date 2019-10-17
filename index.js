
window.addEventListener('load',()=>{
  let long;
  let lat;

  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(position=>{
    long = position.coords.longitude;
    lan = position.coords.latitude;

    })
  }else{
    h1.textContent = "Hey please give allow for your define"+
     +"geolocation for define weather for you <3 ";
  }
});
