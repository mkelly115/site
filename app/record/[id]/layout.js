import LayoutStructure from "@/components/layout-structure";
import { RECORDS, RECORDS_MAP } from "./data";

export async function generateStaticParams() {
    
  return RECORDS.map((record) => ({
    id: record.id,
    
  }));
}  // IT WAS AN ASYNC ISSUE IDIOT

export default async function Layout({ children, params }) {
  const { id } = await params;
  const { title, background } = RECORDS_MAP[id];

  return (
    <LayoutStructure title={title} background={background}>
      {children}
    </LayoutStructure>
  );
}
