export default function LayoutStructure({ children, background, title }) {
 
  return (
    <div
      className={`w-full flex flex-col justify-center items-center
      p-5 lg:p-10 text-md lg:text-lg ${background} bg-no-repeat bg-cover`}
    >
      <div className="title">{title}</div>
      <div>
      {children}
      </div>
    </div>
  );
}
