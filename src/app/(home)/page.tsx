import Image from "next/image";

export default function Home() {
  return (
    <div className="p-4">
      <Image
        src="/banner-55off.png"
        height={0}
        width={0}
        className="h-auto w-full"
        sizes="100vw"
        alt="até 55% off"
      />
    </div>
  );
}
