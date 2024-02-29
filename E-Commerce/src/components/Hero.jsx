const Hero = () => {
  return (
    <div
      className="relative bg-contain bg-no-repeat h-[1000px] xl:h-[800px] lg:h-[600px]"
      style={{
        "background-image": `url(
          ./images/offer-banner.png
        )`,
      }}
    >
      <div className="absolute bottom-[480px] left-[260px] text-7xl lg:text-6xl xl:text-6xl lg:left-[80px] lg:bottom-[220px] xl:left-[120px] xl:bottom-[380px] font-bold text-white">
        <p className="mb-6">Super Flash Sale</p>
        <p>50% Off</p>
      </div>
    </div>
  );
};
export default Hero;
