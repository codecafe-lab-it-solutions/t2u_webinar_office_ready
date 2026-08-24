import Image from "next/image";

type ProfileCardProps = {
  name: string;
  title: string;
  imageSrc: string;
  imageAlt?: string;
};

export function ProfileCard({ name, title, imageSrc, imageAlt }: ProfileCardProps) {
  return (
    <div className="w-full overflow-hidden rounded-3xl bg-white shadow-lg transition-transform duration-700 ease-out hover:scale-[1.02]">
      <div className="group relative overflow-hidden">
        <Image
          src={imageSrc}
          alt={imageAlt ?? name}
          width={800}
          height={800}
          priority
          className="aspect-square w-full object-cover object-[center_18%] transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/30 to-transparent" />
        <div className="absolute left-6 top-6">
          <h2 className="text-2xl font-medium text-white drop-shadow-lg">{name}</h2>
        </div>
      </div>

      <div className="flex items-center gap-3 p-4">
        <div className="h-8 w-8 shrink-0 overflow-hidden rounded-full ring-2 ring-gray-200 transition-transform duration-500 ease-out hover:scale-110">
          <Image
            src={imageSrc}
            alt={imageAlt ?? name}
            width={64}
            height={64}
            className="h-full w-full object-cover object-[center_18%]"
          />
        </div>
        <div className="transition-transform duration-500 ease-out hover:translate-x-1">
          <div className="text-sm text-gray-700">{title}</div>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
