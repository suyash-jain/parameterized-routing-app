import fetch from 'isomorphic-unfetch'

module.exports = {
    getPathMap: function () {
     //return await getPathMap();
    
     return {
         '/': {page: '/'}
     }

    //   return 
    //     '/': { page: '/' },
    //     '/blog/first': { page: '/blog', query: { id: "first" }},
    //     '/blog/second': { page: '/blog', query: { id: "second" } },
    //     '/blog/third': { page: '/blog', query: { id: "third" } },
    //     '/blog/listing': { page: '/blog', query: { id: "listing" } }
      }
    }