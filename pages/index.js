const MyHeader = () => {
  return (
    <header className="w-full min-h-20  flex flex-row">
      <div className="w-3/4">
        <img
          src="/favicon.ico"
          alt="Vercel Logo"
          className="w-16 h-16 mx-10 my-5 "
        />
      </div>
      <div className="w-1/4  grid grid-cols-2 center gap-4 ">
        <a
          href="www.google.com"
          className="bg-[#ef8354] m-auto px-8 py-2 text-white rounded-md capitalize cursor-pointer hover:py-[10px] "
        >
          login
        </a>

        <span className="bg-[#ef8354] m-auto px-8 py-2 text-white rounded-md capitalize cursor-pointer">
          singup
        </span>
      </div>
    </header>
  );
};

export default function Home() {
  return (
    <div className="flex flex-col h-screen font-Nunito bg-[#e5e5e5] text-[#000000]">
      <MyHeader />

      <div className="shrink h-full m-10 ">
        <h1>page title</h1>
        <h6>page subtitle</h6>
        <p>
          <a href="https://www.google.com">google</a>
          <a href="https://www.yahoo.com">yahoo</a>
        </p>
        <section>
          <h2>section title</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            dignissim quam vel congue elementum. Donec blandit risus turpis, ac
            tristique ante rutrum sed. Sed faucibus sit amet dolor id consequat.
            Quisque viverra leo dui, vitae aliquet augue facilisis eget. Fusce
            elementum, urna non vestibulum sodales, ipsum velit placerat nibh,
            eu ullamcorper urna libero et dolor. Nulla eu nulla non ligula
            suscipit ornare. Sed nec ornare nisl, a cursus justo. Mauris rutrum
            vulputate lectus, quis pellentesque tortor pellentesque et. Maecenas
            eu dictum elit, sed laoreet felis. Quisque venenatis tincidunt
            turpis, ut ornare orci lobortis ac. Cras ultricies sagittis laoreet.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            dignissim quam vel congue elementum. Donec blandit risus turpis, ac
            tristique ante rutrum sed. Sed faucibus sit amet dolor id consequat.
            Quisque viverra leo dui, vitae aliquet augue facilisis eget. Fusce
            elementum, urna non vestibulum sodales, ipsum velit placerat nibh,
            eu ullamcorper urna libero et dolor. Nulla eu nulla non ligula
            suscipit ornare. Sed nec ornare nisl, a cursus justo. Mauris rutrum
            vulputate lectus, quis pellentesque tortor pellentesque et. Maecenas
            eu dictum elit, sed laoreet felis. Quisque venenatis tincidunt
            turpis, ut ornare orci lobortis ac. Cras ultricies sagittis laoreet.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            dignissim quam vel congue elementum. Donec blandit risus turpis, ac
            tristique ante rutrum sed. Sed faucibus sit amet dolor id consequat.
            Quisque viverra leo dui, vitae aliquet augue facilisis eget. Fusce
            elementum, urna non vestibulum sodales, ipsum velit placerat nibh,
            eu ullamcorper urna libero et dolor. Nulla eu nulla non ligula
            suscipit ornare. Sed nec ornare nisl, a cursus justo. Mauris rutrum
            vulputate lectus, quis pellentesque tortor pellentesque et. Maecenas
            eu dictum elit, sed laoreet felis. Quisque venenatis tincidunt
            turpis, ut ornare orci lobortis ac. Cras ultricies sagittis laoreet.
          </p>
        </section>
      </div>
      <footer className="w-full h-20 ">footer</footer>
    </div>
  );
}
