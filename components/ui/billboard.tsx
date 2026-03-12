type BillboardProps = {
  data: Billboard;
};

const Billboard: React.FC<BillboardProps> = ({ data }) => {
  return (
    <div className="p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden">
      <div
        style={{ backgroundImage: `url(${data.imageUrl})` }}
        className="rounded-2xl relative isolate bg-center aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover shadow-[0_24px_80px_rgba(0,0,0,0.28)]"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/35 to-black/15" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/10" />
        <div className="relative h-full w-full flex flex-col justify-center items-center text-center gap-y-6 px-6 sm:px-10">
          <span className="rounded-full border border-white/25 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-white/85 backdrop-blur-sm sm:text-sm">
            Featured Collection
          </span>
          <div className="max-w-xs text-4xl font-extrabold tracking-tight text-white drop-shadow-[0_10px_24px_rgba(0,0,0,0.55)] sm:max-w-2xl sm:text-5xl lg:text-7xl">
            {data.label}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Billboard;
