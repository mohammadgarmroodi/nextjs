import React from 'react'
import Link from 'next/link'

export default function listItem(props) {
    console.log('aaaa',props.item.id)
    return (
       <div>
           <p>test</p>
           <Link href={`/description?id=${props.item.id}`} as={`/description?obj`}>
                 <a>{props.item.title}</a>
                 </Link>
       </div>
    )
}
