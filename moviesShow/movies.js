const apiKey = 'api_key=52ce15e5de1d4b3dcb38c61f0e6f4b20';
const baseUrl = 'https://api.themoviedb.org/3';
const imgUrl = 'https://image.tmdb.org/t/p/original/';


const requests = {
    fetchTrending : `${baseUrl}/trending/all/week?${apiKey}&language=en-US`,
    fetchPopularMovies : `${baseUrl}/movie/popular?${apiKey}&language=en-US&page=1`,
    fetchComedyMovies : `${baseUrl}/discover/movie?${apiKey}&with_genres=35&language=en-US`,
    fetchActionMovies : `${baseUrl}/discover/movie?${apiKey}&with_genres=28&language=en-US`,
    fetchDramaMovies : `${baseUrl}/discover/movie?${apiKey}&with_genres=18&language=en-US`,
    fetchTopRateMovies : `${baseUrl}/movie/top_rated?${apiKey}&language=en-US&page=1`,

}

fetch(requests.fetchTrending)
.then((res)=>res.json())
.then((data)=>{
    const movie = data.results[Math.floor(Math.random()*data.results.length-1)];
    console.log(movie)
    const header =document.querySelector('.header');
    const titel_movie = document.querySelector('.title');
    const des = document.querySelector('.showMoviePanner p');

    header.style.backgroundImage = `url(${imgUrl + movie.backdrop_path})`
    titel_movie.innerHTML = movie.title? movie.title: movie.name
    des.innerHTML = movie.overview.substr(0,160)

})

fetch(requests.fetchTrending)
.then((res)=>res.json())
.then((data)=>{
    console.log(data.results)
    const movieTrends = data.results
    
    movieTrends.forEach((movieTrend)=> {
        const trendSlide = document.querySelector('.swiper-wrapper');
        const div = document.createElement('div');
        div.classList.add('swiper-slide');
        let rateColor = "";
        if (movieTrend.vote_average < 5) {
            rateColor = "red";
        } else if (movieTrend.vote_average >= 5 && movieTrend.vote_average < 8) {
            rateColor = "orange";
        } else {
            rateColor = "green";
        }
        div.innerHTML= `
        <img  src="${imgUrl + movieTrend.poster_path}" alt="">
        <div class="detailsMovie">
            <h2>${movieTrend.title? movieTrend.title: movieTrend.name}</h2>
            <div class="rateDiv">
                <p class="rate" style="color:${rateColor};">${movieTrend.vote_average}</p>
                <p >vote count:${movieTrend.vote_count}</p>
            </div>
        </div>
        <div class="overview">
            <h3>overview</h3>
            <p>${movieTrend.overview.substr(0,200)}</p>
        </div>
        `
        div.addEventListener('click', () => {
            window.location.href = `../movieShow/movieShow.html?id=${movieTrend.id}`;
        });
        trendSlide.appendChild(div)
    });
})



fetch(requests.fetchPopularMovies)
.then((res)=>res.json())
.then((data)=>{
    console.log(data.results)
    const movieTrends = data.results

    movieTrends.forEach((movieTrend)=> {
        const trendSlide = document.querySelector('.popularSwiper');
        const div = document.createElement('div');
        div.classList.add('swiper-slide');
        let rateColor = "";
        if (movieTrend.vote_average < 5) {
            rateColor = "red";
        } else if (movieTrend.vote_average >= 5 && movieTrend.vote_average < 8) {
            rateColor = "orange";
        } else {
            rateColor = "green";
        }
        div.innerHTML= `
        <img  src="${imgUrl + movieTrend.poster_path}" alt="">
        <div class="detailsMovie">
            <h2>${movieTrend.title? movieTrend.title: movieTrend.name}</h2>
            <div class="rateDiv">
                <p class="rate" style="color:${rateColor};">${movieTrend.vote_average}</p>
                <p >vote count:${movieTrend.vote_count}</p>
            </div>
        </div>
        <div class="overview">
            <h3>overview</h3>
            <p>${movieTrend.overview.substr(0,200)}</p>
        </div>
        `
        div.addEventListener('click', () => {
            window.location.href = `../movieShow/movieShow.html?id=${movieTrend.id}`;
        });
        trendSlide.appendChild(div)
    });
})

fetch(requests.fetchComedyMovies)
.then((res)=>res.json())
.then((data)=>{
    console.log(data.results)
    const movieTrends = data.results
    
    movieTrends.forEach((movieTrend)=> {
        const trendSlide = document.querySelector('.ComedySwiper');
        const div = document.createElement('div');
        div.classList.add('swiper-slide');
        let rateColor = "";
        if (movieTrend.vote_average < 5) {
            rateColor = "red";
        } else if (movieTrend.vote_average >= 5 && movieTrend.vote_average < 8) {
            rateColor = "orange";
        } else {
            rateColor = "green";
        }
        div.innerHTML= `
        <img  src="${imgUrl + movieTrend.poster_path}" alt="">
        <div class="detailsMovie">
            <h2>${movieTrend.title? movieTrend.title: movieTrend.name}</h2>
            <div class="rateDiv">
                <p class="rate" style="color:${rateColor};">${movieTrend.vote_average}</p>
                <p >vote count:${movieTrend.vote_count}</p>
            </div>
        </div>
        <div class="overview">
            <h3>overview</h3>
            <p>${movieTrend.overview.substr(0,200)}</p>
        </div>
        `
        div.addEventListener('click', () => {
            window.location.href = `../movieShow/movieShow.html?id=${movieTrend.id}`;
        });
        trendSlide.appendChild(div)
    });
})

fetch(requests.fetchActionMovies)
.then((res)=>res.json())
.then((data)=>{
    console.log(data.results)
    const movieTrends = data.results
    
    movieTrends.forEach((movieTrend)=> {
        const trendSlide = document.querySelector('.actionSwiper');
        const div = document.createElement('div');
        div.classList.add('swiper-slide');
        let rateColor = "";
        if (movieTrend.vote_average < 5) {
            rateColor = "red";
        } else if (movieTrend.vote_average >= 5 && movieTrend.vote_average < 8) {
            rateColor = "orange";
        } else {
            rateColor = "green";
        }
        div.innerHTML= `
        <img  src="${imgUrl + movieTrend.poster_path}" alt="">
        <div class="detailsMovie">
            <h2>${movieTrend.title? movieTrend.title: movieTrend.name}</h2>
            <div class="rateDiv">
                <p class="rate" style="color:${rateColor};">${movieTrend.vote_average}</p>
                <p >vote count:${movieTrend.vote_count}</p>
            </div>
        </div>
        <div class="overview">
            <h3>overview</h3>
            <p>${movieTrend.overview.substr(0,200)}</p>
        </div>
        `
        div.addEventListener('click', () => {
            window.location.href = `../movieShow/movieShow.html?id=${movieTrend.id}`;
        });
        trendSlide.appendChild(div)
    });
})

fetch(requests.fetchDramaMovies)
.then((res)=>res.json())
.then((data)=>{
    console.log(data.results)
    const movieTrends = data.results
    
    movieTrends.forEach((movieTrend)=> {
        const trendSlide = document.querySelector('.dramaSwiper');
        const div = document.createElement('div');
        div.classList.add('swiper-slide');
        let rateColor = "";
        if (movieTrend.vote_average < 5) {
            rateColor = "red";
        } else if (movieTrend.vote_average >= 5 && movieTrend.vote_average < 8) {
            rateColor = "orange";
        } else {
            rateColor = "green";
        }
        div.innerHTML= `
        <img  src="${imgUrl + movieTrend.poster_path}" alt="">
        <div class="detailsMovie">
            <h2>${movieTrend.title? movieTrend.title: movieTrend.name}</h2>
            <div class="rateDiv">
                <p class="rate" style="color:${rateColor};">${movieTrend.vote_average}</p>
                <p >vote count:${movieTrend.vote_count}</p>
            </div>
        </div>
        <div class="overview">
            <h3>overview</h3>
            <p>${movieTrend.overview.substr(0,200)}</p>
        </div>
        `
        div.addEventListener('click', () => {
            window.location.href = `../movieShow/movieShow.html?id=${movieTrend.id}`;
        });
        trendSlide.appendChild(div)
    });
})

fetch(requests.fetchTopRateMovies)
.then((res)=>res.json())
.then((data)=>{
    console.log(data.results)
    const movieTrends = data.results
    
    movieTrends.forEach((movieTrend)=> {
        const trendSlide = document.querySelector('.topRateSwiper');
        const div = document.createElement('div');
        div.classList.add('swiper-slide');
        let rateColor = "";
        if (movieTrend.vote_average < 5) {
            rateColor = "red";
        } else if (movieTrend.vote_average >= 5 && movieTrend.vote_average < 8) {
            rateColor = "orange";
        } else {
            rateColor = "green";
        }
        div.innerHTML= `
        <img  src="${imgUrl + movieTrend.poster_path}" alt="">
        <div class="detailsMovie">
            <h2>${movieTrend.title? movieTrend.title: movieTrend.name}</h2>
            <div class="rateDiv">
                <p class="rate" style="color:${rateColor};">${movieTrend.vote_average}</p>
                <p >vote count:${movieTrend.vote_count}</p>
            </div>
        </div>
        <div class="overview">
            <h3>overview</h3>
            <p>${movieTrend.overview.substr(0,200)}</p>
        </div>
        `
        div.addEventListener('click', () => {
            window.location.href = `../movieShow/movieShow.html?id=${movieTrend.id}`;
        });
        trendSlide.appendChild(div)
    });
})

