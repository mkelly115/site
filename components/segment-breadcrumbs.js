
import Link from "next/link";

export default function SegmentBreadcrumbs({ segments, startingSegment }){

<>
{
    segments.map((segment, i) =>{
        const href = `${startingSegment}/${segments.slice(0, i + 1).join('/')}`;
        console.log('href', href);

        return <Link href={href}>{segment}</Link>
    })
}
</>

}