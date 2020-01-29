import React,{useState} from 'react'
import { useRouter } from 'next/router';

export default function description(props) {
    const[isShow,setShow]=useState(false)
    const router = useRouter();
    console.log(';sad',props)
    return (
        <div>
            <button onClick={()=>{
                     setShow(!isShow)
                 }}>
                 show desc
                 </button>

             <p>{isShow?'Show':'Hide'}</p>

             {isShow && <p>{props.obj.body}</p>}
        </div>
    )
}
description.getInitialProps = async function(context) {
    console.log('fi0',context)
    const { id } = context.query;
console.log(id)
    const res = await fetch(`http://jsonplaceholder.typicode.com/posts/${id}`);
    console.log('res',res)
    const data = await res.json();
  
    console.log('data',data)

    return {
      obj: data
    };
  };
