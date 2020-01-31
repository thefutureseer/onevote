const form = document.getElementById('vote-form');

form.addEventListener('submit', (e) => {

  //get checked value
  const choice = document.querySelector("input[name=vote]:checked").value;
  //variable data for the data sent along with post request
  const data = {vote: choice};

//with fetch two dot thens
fetch('http://localhost:3000/poll', {
  method: 'post',
  body: JSON.stringify(data),
  headers: new Headers({
    'Content-Type': 'application/jason'
  })
}).then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.log(err) );

e.preventDefault();
});