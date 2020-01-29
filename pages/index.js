import React from 'react'
import Link from 'next/link'

export default function index() {
    return (
        <main>
        <h1>Sample Project</h1>
    
        <button>
            <Link href="/about">
            <a>About Page</a>
            </Link>
        </button>

         
        <button>
            <Link href="/contact">
            <a>contact Page</a>
            </Link>
        </button>



        <style jsx>{`
        h1{
            margin:50px;
            background-color:#fff888
        }

        button{
            background-color:#fff888;
         
        }

        h1:hover{
            background-color:#fff823
        }
        main{
            text-align:'center';
            background-color:#f54865

        }

        `
       } 
        </style>
</main>
    )
}
