const apiKey = 'api_key=52ce15e5de1d4b3dcb38c61f0e6f4b20';
const baseUrl = 'https://api.themoviedb.org/3';
const imgUrl = 'https://image.tmdb.org/t/p/original/';


const requests = {
    fetchTrending : `${baseUrl}/trending/all/week?${apiKey}&language=en-US`,
}


console.log(requests.fetchTrending)


fetch(requests.fetchTrending)
.then((res)=>res.json())
.then((data)=>{
    console.log(data.results)
    const movies = data.results

    movies.forEach((movie, index)=> {
        const trendSlide = document.querySelector('.swiper-wrapper');
        const div = document.createElement('div');
        div.classList.add('swiper-slide');
        
        div.innerHTML= `
        <img src="${imgUrl + movie.poster_path}" alt="">
        <h1>${index + 1}</h1>
        `
        div.addEventListener('click', () => {
            window.location.href = `../movieShow/movieShow.html?id=${movie.id}`;
        });
        trendSlide.appendChild(div)
    });



})


// accordion ---------------------

const acc = document.querySelectorAll('.accordion');
let i;
for ( i = 0; i < acc.length; i++) {
    
    acc[i].addEventListener("click", function(){
        this.classList.toggle("active");
        const panel = this.nextElementSibling;

        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        }else{
            panel.style.maxHeight = panel.scrollHeight +"px";
        }

    })
    
}











