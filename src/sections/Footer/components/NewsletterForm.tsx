export const NewsletterForm = () => {
    return (
        <div className="flex flex-col w-full max-w-full md:max-w-xs gap-y-3">

            {/* Heading */}
            <div className="flex flex-col gap-y-2">
                <div className="text-white text-[19.2px] font-medium tracking-[-0.192px] leading-[25.92px] md:text-2xl md:tracking-[-0.24px] md:leading-[32.4px]">
                    Weekly digest
                </div>
                <div className="text-[15.2px] box-border caret-transparent leading-[22.8px] min-h-[auto] min-w-[auto] outline-[3px] font-chivo_mono">
                    Curated by the team.
                </div>
            </div>
            <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px]">
                <form
                    name="wf-form-Newsletter-Form"
                    aria-label="Newsletter Form"
                    className="relative items-centernbox-border caret-transparent flex h-12 justify-center outline-[3px]"
                >
                    <input
                        name="email"
                        placeholder="Email"
                        type="email"
                        className="text-white bg-transparent border-b-zinc-888 box-border caret-transparent block h-12 min-h-[auto] min-w-[auto] outline-[3px] align-middle w-full p-8 border-t-black border-t-e border-x-black border-x-8 border-b"
                    />
                    <input
                        type="submit"
                        value="Join"
                        className="absolute text-white font-medium bg-transparent box-border cursor-pointer hover:text-zinc-300 transition"
                    />
                    <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px]">
                        <div className="box-border caret-transparent outline-[3px]">
                            <iframe
                                src="https://challenges.cloudflare.com/cdn-cgi/challenge-platform/h/b/turnstile/f/ov2/av0/rch2GyMD1KP4fVa8Je5TCCSXTu6kNNyxqmHmrWKy1NZjpw-1779041973-1.3.1.1-L0jvbYVSuZ6zAAoW2cejjyaqJJPtiXcwYr1YSHx9J_o/ptizd/0x4AAAAAAAQTptj2So4dx43e/auto/fbE/failure_retry/normal?lang=auto"
                                title="Widget containing a Cloudflare security challenge"
                            ></iframe>
                            <input
                                type="hidden"
                                name="cf-turnstile-response"
                                value=""
                                className="appearance-non text-black text-base bg-transparent box-border caret-transparent hidden leading-[normal] outline-[3px] p-0 font-times_new_roman"
                            />
                        </div>
                    </div>
                </form>
              <div
                role="region"
                aria-label="Newsletter Form success"
                className="text-white text-[15.2px] box-border caret-transparent hidden leading-[22.8px] outline-[3px] text-left pt-5 font-chivo_mono"
            >
                <div className="box-border caret-transparent outline-[3px]">
                Thank you! Your submission has been received!
            </div>
                    </div>
                    <div 
                role="region"
                aria-label="Newsletter Form failure"
                className="text-white text-[15.2px] box-border caret-transparent hidden leading-[22.8px] outline-[3px] mt-4 font-chivo_mono"
            >
                <div className="box-border caret-transparent outline-[3px]">
                Oops! Something went wrong while submitting the form.
            </div>
            </div>
            </div>
        </div>
    );
};