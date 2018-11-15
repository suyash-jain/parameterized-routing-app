import Link from 'next/link'
import fetch from 'isomorphic-unfetch'

// export default () => (
//   <ul>
//     {/* <li><Link href='/blog?id=first' as='/story/first'><a>My first blog post</a></Link></li>
//     <li><Link href='/blog?id=second' as='/series/male-grooming/shavers-for-men/second'><a>My second blog post</a></Link></li>
//     <li><Link href='/blog?id=last' as='/series/serie-5/last'><a>My last blog post</a></Link></li> */}
//     <li><Link href='/blog?id=first' as='/blog/first'><a>My first blog post</a></Link></li>
//     <li><Link href='/blog?id=second' as='/blog/second'><a>My second blog post</a></Link></li>
//     <li><Link href='/blog?id=last' as='/blog/last'><a>My last blog post</a></Link></li> 
//   </ul>
// )

const Index = (props) => (
  <div>
    <h1>Batman TV Shows</h1>
    <ul>
      {props.shows.map(({show}) => (
        <li key={show.id}>
           <Link as={`/show/${show.name}`} href={`/show?id=${show.id}`}>
            <a>{show.name}</a>
          </Link>  
           {/* <Link href={`/show?id=${show.id}`}>
            <a>{show.name}</a>
          </Link>  */}
          {/* <a href={`/show?id=${show.id}`}>{show.name}</a> */}
        </li>
      ))}
    </ul>
    <style jsx>{`
      h1, a {
        font-family: "Arial";
      }

      ul {
        padding: 0;
      }

      li {
        list-style: none;
        margin: 5px 0;
      }

      a {
        text-decoration: none;
        color: blue;
      }

      a:hover {
        opacity: 0.6;
      }
    `}</style>
  </div>    
)

Index.getInitialProps = async function() {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
  const data = await res.json()

  console.log(`Show data fetched. Count: ${data.length}`)

  return {
    shows: data
  }
}

export default Index