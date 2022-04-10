function fetchSimpsonJSON() {

  const simpsonId = [0];

  const url = `https://pokeapi.co/api/v2/pokemon/${simpsonId}`;

  axios.get(url)

    .then(function(response) {

      return response.data; 

    })

    .then(function(simpson) {

      console.log('data decoded from JSON:', simpson);


      // Build a block of HTML

      const simpsonHtml = `

        <p><strong>${simpson.character}</strong></p>

        <img src="${simpson.image}" />
        <p>${simpson.quote}</p>

      `;

      document.querySelector('#simpsons-family').innerHTML = simpsonHtml;

    });

}


fetchSimpsonJSON();