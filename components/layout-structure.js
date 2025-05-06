export default function LayoutStructure({ children }) {
 
  return (
    <div
      className={`w-full flex flex-col justify-center items-center
      p-5 lg:p-10 text-md lg:text-lg
      bg-gradient-to-b from-slate-100 to-pink-100`}
    >
      <div className="title">Let's hang around</div>
      <div>
      {children}
      </div>
    </div>
  );
}
