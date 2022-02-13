
function getPin() {
  var num = Math.round(Math.random()*10000);
  num += '';
  if(num.length == 4) {
    return num;
  }
  else {
    return getPin();
  }
}

document.getElementById('secret-button').addEventListener('click', function(){

  secretPin = getPin();

  document.getElementById('secret-pin').value = secretPin;
  document.getElementById('success').style.display = 'none';
  document.getElementById('fail').style.display = 'none';
});

document.getElementById('all-button').addEventListener('click', function(event){
  var keyPress = event.target.innerText;
  let guess = document.getElementById('guess-input');
  
  if(isNaN(keyPress)) {
    if(keyPress == 'C') {
      guess.value = '';
    }
    else {
      var str = guess.value;
      str += '';
      guess.value = str.slice(0, str.length-1);
    }
  }else {
    guess.value = guess.value + keyPress;
  }

});

document.getElementById('check-button').addEventListener('click', function(){
  const secret = document.getElementById('secret-pin').value;
  const guess = document.getElementById('guess-input').value;

  document.getElementById('secret-pin').value = '';
  document.getElementById('guess-input').value = '';

  console.log('submit clicked');
  console.log('pin ', secret);
  console.log('guess ', guess);

  if( secret == guess) {
    document.getElementById('success').style.display = 'block';
  }
  else {
    document.getElementById('fail').style.display = 'block';
  }
})