import Image from 'next/image'
import Photo1 from '@/../../src/public/assets/photo1.webp'
export default function Bootcamp() {
    return (
        <section className='flex flex-col gap-2 w-full my-8  '>
            <div className='flex flex-col md:flex-row  gap-4 justify-between items-center '>
                <div className='flex flex-col md:w-2/3 items-start  text-lg gap-4 text-lg font-semibold text-slate-600'> 
                    <h1 className='text-5xl font-black text-black'>Not another bootcamp</h1>
                    <span >Kelihi goes beyond technical classes once or twice a week. In this program, you&apos;ll live in analyst housing for 6 months with an intensive course load spanning technical skills, professional-level English, budgeting, time management, and more. </span>
                    <span>Prepare to be challenged in ways you may not have been before -- because transforming your life is not easy.</span>
                    <span>Our goal is to transform you into a top-notch analyst that we can hire into our consulting firm</span>
                    <span>This is not for the faint of heart or people who aren&apos;t willing to work both hard and smart. Becoming a top-notch data analyst in a very condensed timeframe will be one of the most difficult things you&apos;ve ever done, if not THE most difficult thing you&apos;ve ever done. If you have doubts about whether or not you&apos;re willing to dedicate the level of effort needed for this type of transformation, we would urge you not to apply.</span>
                    <span className='text-xl font-bold'>To 5-10x your income, you need to 5-10x your effort. Are you ready?</span>
                </div>
                <div className='flex  '>
                    <Image
                        src={Photo1}
                        width='350'
                        height='350'
                        className='flex'
                        alt='photo'
                    />
                </div>

            </div>
            <div className='flex flex-col md:flex-row w-full gap-4 text-slate-600'>
                <div className=' w-full md:w-1/3 px-12 text-justify'>
                    <p className='text-xl text-primary'>Learn via real work</p>
                    <p className='text-xl '>No useless lectures or rote memorization. You&apos;ll learn by solving real data analytics problems from top US companies</p>
                </div>
                <div className='w-full md:w-1/3 px-12 text-justify'>
                    <p className='text-xl text-primary'>Get 1:1 expert mentorship</p>
                    <p className='text-xl '>You&apos;ll have direct mentorship from expert managers with backgrounds at Uber, Startups.com, and Intel</p>
                </div>
                <div className='w-full md:w-1/3 px-12 text-justify'>
                    <p className='text-xl text-primary'>Build a career</p>
                    <p className='text-xl '>Unlike boot camps and colleges,  Kelihi isn&apos;t designed to increase your chances of securing a job -- you&apos;ll do real work and have a salary from day 1.</p>
                </div>

            </div>
        </section>
    )

}