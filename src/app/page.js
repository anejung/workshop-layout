import Image from "next/image";

export default function Home() {
  return (
  <div className="wrapper p-[16px]">
    <header className="flex justify-between 
    items-center mb-[16px]">
    </header>
    <main className="flex flex-col gap-[16px]">
      <input 
      type="text" 
      placeholder="Search" 
      className="p-[16px] pl-[24px] border-gray-500 border-[1px] rounded-[100px] w-[100%]"/>
      <img clessName="db rounded-[24px] w-[100%]" src="/img1.png" />
      <img className="db rounded-[24px] w-[100%]" src="/img2.png" />


    </main>

  </div>

  );
}
