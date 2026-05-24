export const FooterNav = () => {
  return (
    <div className="items-start border-y border-zinc-800 box-border caret-transparent flex flex-col justify-between gap-y-14 pt-8 pb-4 px-4 md:items-center md:flex-row md:gap-y-0 md:pb-8 md:px-8">

      {/* Left Links */}
      <div className="flex flex-col justify-start gap-x-8 gap-y-4 md:flex-row md:items-center">

        <a
          href="/projects"
          className="font-medium underline underline-offset-[5px] decoration-[1.5px] decoration-transparent hover:text-white hover:decoration-white"
        >
          Projects
        </a>

        <a
          href="/about"
          className="font-medium underline underline-offset-[5px] decoration-[1.5px] decoration-transparent hover:text-white hover:decoration-white"
        >
          About
        </a>

        <a
          href="/blog"
          className="font-medium underline underline-offset-[5px] decoration-[1.5px] decoration-transparent hover:text-white hover:decoration-white"
        >
          Blog
        </a>

        <a
          href="/contact"
          className="font-medium underline underline-offset-[5px] decoration-[1.5px] decoration-transparent hover:text-white hover:decoration-white"
        >
          Contact
        </a>

        <a
          href="/templates/style-guide"
          className="font-medium underline underline-offset-[5px] decoration-[1.5px] decoration-transparent hover:text-white hover:decoration-white"
        >
          Style Guide
        </a>

        <a
          href="/templates/changelog"
          className="font-medium underline underline-offset-[5px] decoration-[1.5px] decoration-transparent hover:text-white hover:decoration-white"
        >
          Changelog
        </a>

        <a
          href="/templates/licenses"
          className="font-medium underline underline-offset-[5px] decoration-[1.5px] decoration-transparent hover:text-white hover:decoration-white"
        >
          Licenses
        </a>

      </div>

      {/* Right Links */}
      <div className="flex flex-wrap items-center justify-start gap-x-6 gap-y-3 w-full md:w-auto md:justify-end">

        <a
          href="https://www.behance.net/nyazkui"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[15.2px] leading-[22.8px] font-chivo-mono hover:text-white"
        >
          BE
        </a>

        <div className="text-[15.2px] leading-[22.8px] font-chivo-mono">
          /
        </div>

        <a
          href="https://dribbble.com/clonifylibrary"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[15.2px] leading-[22.8px] font-chivo-mono hover:text-white"
        >
          DR
        </a>

        <div className="text-[15.2px] leading-[22.8px] font-chivo-mono">
          /
        </div>

        <a
          href="https://x.com/ClonifyLibrary"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[15.2px] leading-[22.8px] font-chivo-mono hover:text-white"
        >
          X
        </a>

        <div className="text-[15.2px] leading-[22.8px] font-chivo-mono">
          Powered By{" "}
          <a
            href="https://webflow.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium underline underline-offset-[5px] decoration-[1.5px] decoration-transparent hover:text-white hover:decoration-white"
          >
            Webflow
          </a>
        </div>

      </div>
    </div>
  );
};