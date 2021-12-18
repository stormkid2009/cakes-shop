import Image from 'next/image'
import list from './list'
//we need to get some data from list 
//so we can use it to construct our hot offers component
export default function HotOffers() {
    return (
        <div>
            <Image src="/images/girls-cake.jpg" width={100} height={100}/>
            <h4>Girls cake</h4>
            <del>250 L.E </del><br />
            <span>200 L.E</span>
        </div>
    )
}
