function loadMovies() {
    fetch('/movies')
        .then(response => response.json())
        .then(data => {
            const dataList = document.getElementById('data-list');
            dataList.innerHTML = '<h2>Movies</h2>';
            data.data.forEach(movie => {
                const div = document.createElement('div');
                div.classList.add('data-item');
                div.textContent = `MovieID: ${movie.MovieID}, Titulo: ${movie.Title}, Año: ${movie.Year}, Score: ${movie.Score}, Votos: ${movie.Votes}`;
                dataList.appendChild(div);
            });
        })
        .catch(error => console.error('Error:', error));
}

function loadActors() {
    fetch('/actors')
        .then(response => response.json())
        .then(data => {
            const dataList = document.getElementById('data-list');
            dataList.innerHTML = '<h2>Actors</h2>';
            data.data.forEach(actor => {
                const div = document.createElement('div');
                div.classList.add('data-item');
                div.textContent = `ActorID: ${actor.ActorId}, Nombre: ${actor.Name}`;
                dataList.appendChild(div);
            });
        })
        .catch(error => console.error('Error:', error));
}

function loadCastings() {
    fetch('/castings')
        .then(response => response.json())
        .then(data => {
            const dataList = document.getElementById('data-list');
            dataList.innerHTML = '<h2>Castings</h2>';
            data.data.forEach(casting => {
                const div = document.createElement('div');
                div.classList.add('data-item');
                div.textContent = `MovieID: ${casting.MovieID}, ActorID: ${casting.ActorId}, Ordinal: ${casting.Ordinal}`;
                dataList.appendChild(div);
            });
        })
        .catch(error => console.error('Error:', error));
}
