interface ButtonProps {
  text: string;
}
export default function Button({ text }: ButtonProps) {
  return (
    <button className="bg-[#0B6AF0] text-white px-8 lg:px-6 xl:px-8 py-3 rounded-full w-fit cursor-pointer ">
      {text}
    </button>
  );
}
