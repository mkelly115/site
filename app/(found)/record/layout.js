"use client";

import { usePathname, useSelectedLayoutSegments } from "next/navigation";
import LayoutStructure from "@/components/layout-structure";
import { RECORDS_MAP, findIdByPathname } from "./[id]/data";
import SegmentBreadcrumbs  from "@/components/segment-breadcrumbs";

export default async function Layout({ children }) {
  const pathname = usePathname();
  const segments = useSelectedLayoutSegments();

  console.log('pathname', pathname)
  console.log('segments', segments)
  
  const id = findIdByPathname(pathname)
  const { background } = RECORDS_MAP[id];

  return (
    <LayoutStructure 
    title={<SegmentBreadcrumbs
       segments={segments}
       startingSegment='/record'/>} 
    background={background}>
      <div className="flex flex-col items-center">{children}</div>
    </LayoutStructure>
  );
}
