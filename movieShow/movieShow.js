const urlParams = new URLSearchParams(window.location.search);
const movieId = urlParams.get('id');

const apiKey = 'api_key=52ce15e5de1d4b3dcb38c61f0e6f4b20';
const baseUrl = 'https://api.themoviedb.org/3';
const imgUrl = 'https://image.tmdb.org/t/p/original/';


const requests = {
    fetchTrending : `${baseUrl}/trending/all/week?${apiKey}&language=en-US`,
    fetchPopularMovies : `${baseUrl}/movie/popular?${apiKey}&language=en-US&page=1`,
    
}

// // console.log("Movie ID:", movieId);

// fetch(requests.fetchTrending)
//   .then(res => res.json())
//   .then(movie  => {
//       console.log(movie.results );
//       document.title = movie.name ? movie.name : movie.original_name;
//     //   const movieTrends = data.results

//     //   document.title = ${movieTrends.title? movieTrends.title: movieTrends.name}
//       // هنا تعرض التفاصيل بقى (بوستر، عنوان، overview ...)
//   });


    fetch(`${baseUrl}/movie/${movieId}?${apiKey}&language=en-US`)
    .then(res => res.json())
    .then(movie => {
        console.log("Movie details:", movie);

        let rateColor = "";
        if (movie.vote_average < 5) {
            rateColor = "red";
        } else if (movie.vote_average >= 5 && movie.vote_average < 8) {
            rateColor = "orange";
        } else {
            rateColor = "green";
        }

        document.title = movie.title ? movie.title : movie.name;

        document.querySelector('header').style.backgroundImage = `url('${imgUrl + movie.backdrop_path}')`;
        document.querySelector('.leftSide h1').innerHTML = `${movie.title ? movie.title : movie.name}`;
        document.querySelector('.rateMovie').innerHTML = `Rate : <span style="color:${rateColor};">${movie.vote_average}</span>`;
        document.querySelector('.cont').innerHTML = `Vote Count : ${movie.vote_count} `;
        document.querySelector('.leftSide h5').innerHTML = `Homepage : <a href="${movie.homepage}" target="_blank">${movie.homepage}</a>`;
        document.querySelector('h2').innerHTML =`Popularity : ${movie.popularity}`;
        document.querySelector('h4').innerHTML =`Revenue : ${movie.revenue} <span style="color:green;">$</span>`;
        document.querySelector('p').innerHTML =`<span style="color: white; font-weight:800; font-size:20px;">Overview :</span> ${movie.overview}`;

        document.querySelector('.rightSide').innerHTML=`<img src="${imgUrl + movie.poster_path}" alt="${movie.title ? movie.title : movie.name}">`

    })

