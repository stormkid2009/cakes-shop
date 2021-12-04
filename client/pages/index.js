import Head from 'next/head'
import Image from 'next/image'
import flowersCake from '../public/images/flowers-cake.jpg';
import About from '../components/about'

export default function HomePage() {
    return (
        <>
            <Head>
                <title>Home Page</title>
            </Head>
            <About />
            <h3>Hot Offers</h3>
            <div className="imageContainer">
                <Image src={flowersCake} alt="flowers-cake"   />
            </div>
                    
            <div className="container">
            <span>Price </span>        
            <del > 200  </del>
            <span>  150 L.E</span>
            </div>
            
            <style jsx>{`
                           .container {
                             margin: 50px;
                             color:red;
                           }
                           p {
                             color: blue;
                           }
                           .imageContainer {
                               max-width:200px;
                               max-heigth:200px;
                           }
      `}</style>
                
            
        </>
    )
}
