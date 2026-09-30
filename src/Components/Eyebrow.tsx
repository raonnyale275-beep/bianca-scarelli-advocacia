export default function Eyebrow({
  text,
  center = false,
}: {
  text: string;
  center?: boolean;
}) {
  return (
    <div
      className={`border-gold mb-4 flex w-fit items-center justify-center rounded-full border-2 px-4 py-1.5 ${
        center ? "mx-auto" : ""
      }`}
    >
      <p className="text-gold text-sm font-bold">{text}</p>
    </div>
  );
}
