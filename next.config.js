const fetch = require('isomorphic-unfetch')

module.exports = {
    exportPathMap: async function () {
        const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
        const data = await res.json();
        //console.log(data);
        // tranform the list of shows into a map of pages with the pathname `/show/:id`
        
        const pages = data.reduce( 
            (pages, val) => {
                console.log('------------------------------------------------------------------');
                console.log(val.show.id + ' - ' + val.show.name);
                Object.assign({}, pages, {
                    [`/show?id=${val.show.id}`]: {page: '/show', query: { id: val.show.id }}
                }) 
                Object.assign({}, pages, {
                    [`/show/${val.show.id}`]: {page: '/show', query: { id: val.show.id }}
                })               
            }, 
            {}
        )
  
      // combine the map of show pages with the home
      return Object.assign({}, pages, {
        '/': { page: '/' }
      });
    }
}
