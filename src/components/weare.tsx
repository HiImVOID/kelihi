import Image from 'next/image'
import Photo from '@/../../src/public/assets/photo3.jpeg'
import Photo1 from '@/../../src/public/assets/photo4.webp'
import Photo2 from '@/../../src/public/assets/photo5.webp'
import Photo3 from '@/../../src/public/assets/photo6.webp'
import { Camera } from 'lucide-react'

export default function WhoWeAre() {
    return (
        <section className='flex flex-col gap-4 items-center py-8  text-slate-600'>

            <h3 className='text-5xl font-bold text-primary '>Who We Are</h3>
            <div className='flex flex-col md:flex-row gap-4 h-full  '>
                <Image
                    src={Photo}
                    height='640'
                    widht='480' />
                <div className='flex flex-col gap-4 min-h-max justify-between py-4 ' >
                    <span className='text-xl font-medium'>Our passion is empowering others</span>
                    <span className='text-lg font-medium'>Kelihi was founded in 2021 by friends and former colleagues, Sma Chu and Janeesa Hollingshead. Driven by a shared passion for alleviating poverty through sustainable means, we aim to provide low-income individuals with access to high-wage technical careers -- without the steep costs and barriers associated with traditional education.</span>
                    <span className='text-lg font-medium'>Additionally, we seek to improve local economies by focusing on remote work contracts from US companies. This allows Kelihi graduates to increase earnings while continuing to contribute to their local communities' economies and mentor future analysts. </span>
                    <span className='text-lg font-medium'>With backgrounds in high-growth companies like Uber and Startups.com, we've spent our careers working toward providing opportunities for others. We've now spent the last few years building a company that can achieve this mission in a sustainable, systematic method. </span>
                    <span className='text-lg font-medium'>The team has since grown to include leaders from well-funded startups or industry leaders like Intel to coach, lead, and teach analysts through their transformations.</span>
                </div>
            </div>
            <div className='flex flex-col md:flex-row gap-2 text-white text-xl '>
                <div className='bg-zinc-800 flex flex-col gap-8 p-8  items-center'>

                    <Image
                        src={Photo1}
                        height='150'
                        widht='100'
                    />


                    <span className='text-2xl'>Sma Chu</span>
                    <span  className='text-2xl'>Co-founder</span>
                    <span>Sma has been passionate about serving the poor since he was a child when he first saw the plight of the homeless in his hometown of Chicago. To live out this passion, he's worked for companies ranging from startups to Fortune 500 companies that provide innovative solutions for low-income workers to earn more. During his 7 years in data analytics and data science, he started training and teaching his colleagues where he found his greatest joy in empowering others to new careers by learning technical skills.</span>

                </div>
                <div className='bg-zinc-800 flex flex-col gap-8 p-8  items-center'>
                    <Image
                        src={Photo2}
                        height='150'
                        widht='150' />
                    <span  className='text-2xl'>Janeesa Hollingshead </span>
                    <span  className='text-2xl'>Co-founder</span>
                    <span>Janeesa grew up in Appalachia, where she first developed an intimate understanding of how poverty directly impacts access to opportunities. Janeesa has since focused on work that improve social mobility for others, including nearly 6 years at Uber launching markets and products. In 2020, Janeesa founded a growth agency to assist startups in scaling their operations and marketing. Janeesa is also a purpose-driven angel investor and a Limited Partner in One Way Ventures, which invests exclusively in immigrant-founded companies.</span>

                </div>
                <div className='bg-zinc-800 flex flex-col gap-8 p-8 items-center'>
                    <Image
                        src={Photo3}
                        height='150'
                        widht='150' />
                    <span  className='text-2xl'>Kolby Devery</span>
                    <span  className='text-2xl'>Analytics Director</span>
                    <span>Kolby has always felt a passion for using data to create positive change. His journey in data analytics began with investigating weather-related power outages, aimed at uncovering how different regions in the U.S. are disproportionately impacted by climate change. His professional experience at Intel solidified his commitment to ethical data usage and today, Kolby’s focus is on one of the most pressing issues in underprivileged regions: expanding access to opportunity.</span>
                </div>
            </div>
        </section>
    )
}