// Required by Webpack - do not touch
require.context('../', true, /\.(html|json|txt|dat)$/i)
require.context('../images/', true, /\.(gif|jpg|png|svg|eot|ttf|woff|woff2)$/i)
require.context('../stylesheets/', true, /\.(css|scss)$/i)

// JavaScript
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

//TODO
import { movies } from './movies'

let featured_movie = document.querySelector('.featured')
for(let m of movies){
    let movies_thumb = document.getElementById('m' + m.id)
    movies_thumb.innerHTML = `
    <img src="${m.url}">
    `

    movies_thumb.onclick = function(){
        selectMovie(m)
    }
}

function selectMovie(m){
    featured_movie.innerHTML = `
    <img src="${m.url}" style="width: 100%;">
    <h2>${m.title}</h2>
    <p>${m.description}</p>
    `
}

function searchMovies(event){
    if(event){
        event.preventDefault()
    }

    for(let m of movies){
        let movies_thumb = document.getElementById('m' + m.id)
        if(m.title.toUpperCase().indexOf(input.toUpperCase()) == -1){
           // movies_thumb.classList.add('hidden')
           movies_thumb.style.display = 'none'
        } else{
           // movies_thumb.classList.remove('hidden')
           movies_thumb.style.display = 'block'
        }
    }
}
document.querySelector('button').onclick = searchMovies
document.forms[0].addEventListener('submit', searchMovies, false)