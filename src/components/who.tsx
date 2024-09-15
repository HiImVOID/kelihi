import { Check } from 'lucide-react'

export default function WhoYouAre() {
    return (
        <section className='flex flex-col gap-10 items-center justify-around min-h-screen text-slate-600 w-full'>
            <div className='flex flex-col items-center gap-8'>
                <h2 className='text-5xl font-bold text-primary'>Who You Are</h2>
                <p className='text-lg font-semibold text-center'>
                    Wondering if you&apos;re the right fit for Kelihi? Check out the below requirements --
                    these are the basic items that all applicants must meet in order to be considered.
                </p>
            </div>
            <div className='flex flex-col md:flex-row justify-between items-start gap-4'>
                <div className='flex flex-col w-1/2 text-lg font-semibold w-full'>
                    <span className='text-2xl font-bold text-primary mb-8'>Demographics</span>
                    <div className='flex gap-2 items-start'>
                        <Check />
                        <p >Be low-income (Classe C, D, or E)</p>
                    </div>
                    <div className='flex gap-2 items-start'>
                        <Check />
                        <p >Be at least 18 years old</p>
                    </div>
                    <div className='flex gap-2 items-start'>
                        <Check />
                        <p>Have at least a B1 level of English (conversational)</p></div>
                    <div className='flex gap-2 items-start'>
                        <Check />
                        <p >
                            Have at least a high school diploma or equivalent
                        </p>
                    </div>

                </div>
                <div className='flex  flex-col w-1/2  text-lg font-semibold w-full'>
                    <span className='text-2xl font-bold text-primary mb-8'>Traits</span>
                    <div className='flex gap-2 items-start'>
                        <Check />
                        <p >Have a basic level of comfort with numbers and math concepts</p></div>
                    <div className='flex gap-2 items-start w-full'>
                        <Check />
                        <p >Willing to live in shared (free) junior analyst housing in São Paulo (capital) for the length of the program (approx 6 months)</p></div>
                    <div className='flex gap-2 items-start'>
                        <Check />
                        <p >Be curious (you like to learn!) and open to feedback</p></div>
                    <div className='flex gap-2 items-start'>
                        <Check />
                        <p >
                            Believe that you have the ability to change your life - you just need the right opportunity
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}