const Hero = () => {
  return (
    <div
      className="relative bg-cover bg-no-repeat "
      style={{
        "background-image": `url(
          images/offer-banner.png
        )`,
        height: "800px",
      }}
    >
      <div className="absolute bottom-[280px] left-[260px] text-7xl font-bold text-white">
        <p className="mb-6">Super Flash Sale</p>
        <p>50% Off</p>
      </div>
    </div>
  );
};
export default Hero;
