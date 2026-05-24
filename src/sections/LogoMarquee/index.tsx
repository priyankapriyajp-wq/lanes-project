export const LogoMarquee = () => {
  return (
    <section className="border-b border-t border-zinc-800 box-border caret-transparent opacity-60 outline-[3px]">
      <div className="box-border caret-transparent max-w-[1520px] outline-[3px] w-full mx-auto px-4 md:px-8">
        
        <div className="relative flex items-center justify-start gap-x-16 overflow-hidden py-6 md:py-12">

          {/* First Row */}
          <div className="flex shrink-0 items-center justify-start gap-x-16 animate-marquee-left">

            <img
              src="https://c.animaapp.com/mpa3ncljorJ212/assets/69ddbc7a9bd87002dbca307b_partner-logo-gray-01.svg"
              alt="Partner logo"
              className="shrink-0 max-w-full"
            />

            <img
              src="https://c.animaapp.com/mpa3ncljorJ212/assets/69ddbcbe1f4512d5603dc048_partner-logo-gray-02.svg"
              alt="Partner logo"
              className="shrink-0 max-w-full"
            />

            <img
              src="https://c.animaapp.com/mpa3ncljorJ212/assets/69ddbcbe0ef4ea5aeff7e4ec_partner-logo-gray-03.svg"
              alt="Partner logo"
              className="shrink-0 max-w-full"
            />

            <img
              src="https://c.animaapp.com/mpa3ncljorJ212/assets/69ddbcbeee7cde616edadb1b_partner-logo-gray-04.svg"
              alt="Partner logo"
              className="shrink-0 max-w-full"
            />

            <img
              src="https://c.animaapp.com/mpa3ncljorJ212/assets/69ddbcbe88f7e752e75aacfa_partner-logo-gray-05.svg"
              alt="Partner logo"
              className="shrink-0 max-w-full"
            />

            <img
              src="https://c.animaapp.com/mpa3ncljorJ212/assets/69ddbcbe9b20078070852bf2_partner-logo-gray-06.svg"
              alt="Partner logo"
              className="shrink-0 max-w-full"
            />

            <img
              src="https://c.animaapp.com/mpa3ncljorJ212/assets/69ddbcbeac8f5b88acac4838_partner-logo-gray-07.svg"
              alt="Partner logo"
              className="shrink-0 max-w-full"
            />

            <img
              src="https://c.animaapp.com/mpa3ncljorJ212/assets/69ddbcbecc831110aea8d89f_partner-logo-gray-08.svg"
              alt="Partner logo"
              className="shrink-0 max-w-full"
            />
          </div>

          {/* Duplicate Row */}
          <div
            className="flex shrink-0 items-center justify-start gap-x-16 animate-marquee-left"
            aria-hidden="true"
          >
            <img
              src="https://c.animaapp.com/mpa3ncljorJ212/assets/69ddbc7a9bd87002dbca307b_partner-logo-gray-01.svg"
              alt="Partner logo"
              className="shrink-0 max-w-full"
            />

            <img
              src="https://c.animaapp.com/mpa3ncljorJ212/assets/69ddbcbe1f4512d5603dc048_partner-logo-gray-02.svg"
              alt="Partner logo"
              className="shrink-0 max-w-full"
            />

            <img
              src="https://c.animaapp.com/mpa3ncljorJ212/assets/69ddbcbe0ef4ea5aeff7e4ec_partner-logo-gray-03.svg"
              alt="Partner logo"
              className="shrink-0 max-w-full"
            />

            <img
              src="https://c.animaapp.com/mpa3ncljorJ212/assets/69ddbcbeee7cde616edadb1b_partner-logo-gray-04.svg"
              alt="Partner logo"
              className="shrink-0 max-w-full"
            />

            <img
              src="https://c.animaapp.com/mpa3ncljorJ212/assets/69ddbcbe88f7e752e75aacfa_partner-logo-gray-05.svg"
              alt="Partner logo"
              className="shrink-0 max-w-full"
            />

            <img
              src="https://c.animaapp.com/mpa3ncljorJ212/assets/69ddbcbe9b20078070852bf2_partner-logo-gray-06.svg"
              alt="Partner logo"
              className="shrink-0 max-w-full"
            />

            <img
              src="https://c.animaapp.com/mpa3ncljorJ212/assets/69ddbcbeac8f5b88acac4838_partner-logo-gray-07.svg"
              alt="Partner logo"
              className="shrink-0 max-w-full"
            />

            <img
              src="https://c.animaapp.com/mpa3ncljorJ212/assets/69ddbcbecc831110aea8d89f_partner-logo-gray-08.svg"
              alt="Partner logo"
              className="shrink-0 max-w-full"
            />
          </div>

          {/* Gradient Overlay */}
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgb(14,14,15),rgba(0,0,0,0)_6%,rgba(0,0,0,0)_94%,rgb(14,14,15))]" />
        
        </div>
      </div>
    </section>
  );
};