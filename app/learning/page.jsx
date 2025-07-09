import style from "./page.module.css";

export default function Learning() {
  return (
    <main className="flex justify-center items-center flex-col h-[80dvh] relative overflow-hidden z-[-10]">
      <p className="text-3xl font-bold max-sm:text-[1rem]">
        Page under maintance!
      </p>
      <img src="/skeleton.gif" alt="Come back later!" className="my-10" />
      {/* skeleton 2 will cross the page */}
      <img
        src="/skeleton2.gif"
        alt="Come back later!"
        title="You should come back later"
        className={style.walkingSkelly}
      />
      <p className="text-3xl font-semibold max-sm:text-[1rem]">
        Come back.. erm, maybe later I guess..
      </p>
    </main>
  );
}
