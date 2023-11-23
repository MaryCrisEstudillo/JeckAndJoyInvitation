import hands from "./assets/hands.png"
import flowers from "./assets/flowers.png"
function CardPage () {
    return (
        <div className="h-screen w-screen bg-[white] flex flex-col">
        <div className="w-screen py-[30px] bg-[#0d5d82]">
        </div>
        <div className="min-h-screen relative min-w-[1700px] desktop:min-w-full laptop:w-screen">
             <div className="absolute w-screen mt-52 h-screen z-20">
                <div className="w-full h-[20%] text-center justify-center items-center">
                <span className="font-light px-2 font-serif text-3xl laptop:text-6xl desktop:6xl mobile:text-5xl text-white tracking-widest">JACOB</span>
                <span className="font-normal px-2 font-serif text-2xl laptop:text-4xl desktop:4xl mobile:text-xl text-white">&</span>
                <span className="font-light  px-2 font-serif text-3xl laptop:text-6xl desktop:6xl mobile:text-5xl text-white tracking-widest">JOY</span>
                <p className="font-thin mt-5 md:mt-2 font-sans text-2xl laptop:text-4xl desktop:4xl mobile:text-xl text-white tracking-widest">PSALM 118:24</p>
                </div>
            </div>
            <img className="ml-[-40em] laptop:ml-[-30px] desktop:ml-[0px] tablet:ml-[-20em]" src={hands} alt="holding hands" />
        </div>
        <div className="max-h-[250em] z-20 min-w-[1000px] ml-[-35em] laptop:ml-[0px] desktop:ml-[0px] tablet:ml-[-30em] pt-10 bg-[white]">
        <img className="w-full h-full" src={flowers} alt="flowers" />
        </div>
      </div>
    )
}
export default CardPage;