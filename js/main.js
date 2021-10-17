var app = new Vue({
  el: "#app",
  data: {
    title: null,
    image: null,
    location: null,
    alive: null,
    episodes: null,
    specie: null,
    gender: null,
    url: `https://rickandmortyapi.com/api/character/1`,
  },
  methods: {
    fetchApi: function () {
      fetch(this.url)
        .then((response) => response.json())
        .then((data) => {
          this.title = data.name;
          this.image = data.image;
          this.location = data.location.name;
          this.alive = data.status;
          this.episodes = data.episode.length;
          this.specie = data.species;
          this.gender = data.gender;
        })
        .catch((err) => console.error(err));
    },
  },
});

fetch("https://rickandmortyapi.com/api/character/1")
  .then((response) => response.json())
  .then((data) => console.log(data));
