import LayoutStructure from "@/components/layout-structure";

export const metadata = { title: "Connect with David Kando" };

export default function Layout({ children }) {
  return (
    <LayoutStructure
    background='bg-gradient-to-b from-slate-100 to-pink-100'
    title='Lets hang around'
    >
      <div className="title">Let's hang around</div>
      <div>{children}</div>
    </LayoutStructure>
  );
}
