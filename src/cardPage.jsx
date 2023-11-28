import "./cardPage.css"
import hands from "./assets/hands.png"
import flowers from "./assets/flowers.png"
import { motion } from "framer-motion"
import { useState, useRef, useEffect } from "react"

function CardPage () {
    const [daysCount, setdays] = useState(0);
    const [hoursCount, setHours] = useState(0);
    const [minutesCount, setMinutes] = useState(0);
    const [secondsCount, setSeconds] = useState(0);

    let interval = useRef();

    const timer = () => {
        const countDown = new Date('January 8, 2024 00:00:00').getTime();
        interval = setInterval(()=>{
            const now = new Date().getTime();
            const distance = countDown - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
            const minutes = Math.floor((distance % (1000 * 60 * 60 )) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            const convertDays = days < 10? `${0}${days}` : days;
            const convertHours = hours < 10? `${0}${hours}` : hours;
            const convertMinutes = minutes < 10? `${0}${minutes}` : minutes;
            const convertSeconds = seconds < 10? `${0}${seconds}` : seconds;

            if (distance < 0){
                clearInterval(interval.current);
            } else {
                setdays(convertDays);
                setHours(convertHours);
                setMinutes(convertMinutes);
                setSeconds(convertSeconds);
            }
        }, 1000)
    };

    useEffect(()=> {
        timer();
        return () => {
            clearInterval(interval.current);
        }
    },[]);


    console.log({"days": daysCount, "hours": hoursCount, "minutes": minutesCount, "seconds": secondsCount });
    return (
        <div className="h-screen relative w-screen flex flex-col">
            <img className="min-w-[1700px] z-0 fixed object-cover" src={flowers} alt="flowers" />
            <div className="flex w-screen justify-center gap-1 font-sans text-[1.5em] text-[white] font-extralight z-40 py-[10px] bg-[#0d5d82]">
                        <span className="drop-shadow-lg bg-[#0d5d82] py-3 text-center rounded-l-full min-w-[70px] w-[100px]">{daysCount}<p className="text-[.5em]">Days</p></span>
                        <span className="drop-shadow-lg bg-[#0d5d82] py-3 text-center w-[100px] min-w-[70px]">{hoursCount}<p className="text-[.5em]">Hrs</p></span>
                        <span className="drop-shadow-lg bg-[#0d5d82] py-3 text-center w-[100px] min-w-[70px]">{minutesCount}<p className="text-[.5em]">Mins</p></span>
                        <span className="drop-shadow-lg bg-[#0d5d82] py-3 text-center rounded-r-full w-[100px] min-w-[70px]">{secondsCount}<p className="text-[.5em]">Secs</p></span>
            </div>
            <div className="z-30 relative min-w-[1700px] desktop:min-w-full laptop:w-screen">
             <div className="absolute w-screen mt-52 z-20">
                <motion.div
                    initial={{ opacity: 0, y:"-200px"}}
                    whileInView={{ opacity: 1 , y:0}}
                    transition={{
                    duration: 3,
                    delay: 0.2,
                    ease: [0, 0.71, 0.2, 1.01]
                  }}
                 className="w-full h-[20%] text-center justify-center items-center">
                    <span className="font-light px-2 font-serif text-3xl laptop:text-6xl desktop:6xl mobile:text-5xl text-white tracking-widest">JACOB</span>
                    <span className="font-normal px-2 font-serif text-2xl laptop:text-4xl desktop:4xl mobile:text-xl text-white">&</span>
                    <span className="font-light  px-2 font-serif text-3xl laptop:text-6xl desktop:6xl mobile:text-5xl text-white tracking-widest">JOY</span>
                    <motion.p
                    initial={{ opacity: 0,}}
                    whileInView={{ opacity: 1}}
                    transition={{
                    duration: 4,
                    delay: 2,
                    ease: [0, 0.71, 0.2, 1.01]
                  }}
                     className="font-thin mt-5 md:mt-2 font-sans text-2xl laptop:text-4xl desktop:4xl mobile:text-xl text-white tracking-widest">PSALM 118:24</motion.p>
                </motion.div>
                </div>
                <img className="z-10 ml-[-40em] laptop:ml-[-30px] desktop:ml-[0px] tablet:ml-[-20em]" src={hands} alt="holding hands" />
            </div>
            {/* bg-[#0d5d82] */}
            <div className="flex w-full flex-col mobile:gap-40 laptop:gap-0 tablet:gap-0">
                <div className="flex grow z-30 justify-start">
                <motion.div  
                  initial={{ opacity: 0, x:"-500px"}}
                  whileInView={{ opacity: 1 , x:0}}
                transition={{
                    duration: 3,
                    delay: 0.2,
                    ease: [0, 0.71, 0.2, 1.01]
                  }}
                className={`flex min-w-[50%] flex-col text-center items-center text-white bg-[#0d5d82] p-[5%]`} >
                            <p className="font-normal font-serif text-7xl mb-5">Wedding Details</p>
                            <p className="font-normal text-2xl">Date</p>
                            <p className="font-light text-xl">January 8th. 2023</p>
                            <p className="font-light text-xl mb-3">2:00 PM - 5:00 PM</p> 
                            <p className="font-normal text-2xl">Reception Location</p>
                            <p className="font-light text-xl mb-3">Gem&apos;s Hotel Antipolo City</p>
                            <p className="font-normal text-2xl">Attire</p>
                            <p className="font-light text-xl">Formal</p>
                </motion.div>
                </div>

                <motion.div 
                    initial={{ opacity: 0, x:"500px"}}
                    whileInView={{ opacity: 1 , x:0}}
                    transition={{
                         duration: 3,
                         delay: 0.2,
                         ease: [0, 0.71, 0.2, 1.01]
                        }}
                className="flex grow z-30 justify-end">
                <div className="flex min-w-[50%] flex-col text-center items-center text-white bg-[#0d5d82] p-[5%]">
                            <p className="font-normal font-serif text-7xl mb-5">Guests Attire</p>
                            <p className="font-light text-xl pb-10">Formal</p>
                            <p className="font-normal text-2xl">Color Motif</p>
                            <div className="flex flex-row pt-5">
                                <div className="h-[40px] w-[40px] rounded-full bg-[#a66869]" />
                                <div className="h-[40px] w-[40px] rounded-full bg-[#c5adad]" />
                                <div className="h-[40px] w-[40px] rounded-full bg-[#e0e1dc]" />
                                <div className="h-[40px] w-[40px] rounded-full bg-[#aba7a8]" />
                                <div className="h-[40px] w-[40px] rounded-full bg-[#807c7d]" />
                                <div className="h-[40px] w-[40px] rounded-full bg-[#80655c]" />
                            </div>
                </div>
                </motion.div>
            </div>
            <motion.div
                    initial={{ opacity: 0}}
                    whileInView={{ opacity: 1}}
                    transition={{
                         duration: 2.5,
                         delay: 0.2,
                         ease: [0, 0.71, 0.2, 1.01]
                        }}
             className="flex w-full flex-col grow z-30 min-w-[50%] text-center items-center text-white bg-[#1b3544] p-[5%]">
            <p className="font-thin font-serif text-4xl pb-5">A Note from Bride and Groom</p>
                    <p className="font-light text-lg leading-8">In this celebration of love&apos;s sweet reign,
                            We invite you to join and share our joyous train.
                            Should you desire to gift us on this special day,
                            Cash presents would light our paths bright array.
                            </p>
                            <p className="font-light text-lg leading-8">
                            Gcash: 09353111839 / 09227374929
                            </p>
            </motion.div>
        </div>
    )
}
export default CardPage;