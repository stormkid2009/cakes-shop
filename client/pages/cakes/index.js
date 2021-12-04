import Cake from '../../components/cake'





export default function CakesList({cakes}) {
    
    return (
        <div >
            {cakes.map((cake)=>{
                return(
                    <div  key={cake.id}>
                        <Cake cake={cake}/>
                    </div>
                )
            })}
        </div>
    )
}

export async function getStaticProps(){
    //I have to make demo database on mongodb atlas to serve my cakes details
    //demo works here with this array of objects
    const cakes=[{
        id:1,
        name:"vanilla-cake",
        description:"some kind of cake",
        image:"/images/vanilla-cake",
        link:"cakes/details"
    
    }, {
        id:2,
        name:"fancy-cake",
        description:"some kind of cake",
        image:"/images/fancy-cake",
        link:"cakes/details"
    
    },
    {
        id:3,
        name:"flowers-cake",
        description:"some kind of cake",
        image:"/images/flowers-cake",
        link:"cakes/details"
    
    }];
    return {
        props:{
            cakes
        }
    }
}


