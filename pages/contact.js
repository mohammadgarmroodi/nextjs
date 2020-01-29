import React from 'react'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch';
import ListItem from './listItem';

export default function contact(props) {
    return (
        <div>
                <p>contact</p>

                <button>
                 <Link href="/">
                 <a>home</a>
                 </Link>
                 </button>

                 {props.shows.map((obj,index)=><ListItem key={index} item={obj} />
          )}


        </div>
    )
}

contact.getInitialProps = async function() {
    const res = await fetch('http://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
  
  
    return {
      shows: data.map(entry => entry)
    };
  };
