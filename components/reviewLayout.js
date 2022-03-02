import ReviewNav from './reviewNav'


export default function ReviewLayout({children}){
    return (
        <>
        <ReviewNav />
        <main>{children}</main>
        </>
    )
}