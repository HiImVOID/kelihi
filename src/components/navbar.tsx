import Image from 'next/image'
import Logo from '@/../../src/public/assets/logo.webp'
import Link from 'next/link'

export default function Navbar() {
    return (
        <header className='flex flex-col md:flex-row justify-between h-[135px] items-center h-full'>
            <Image
                src={Logo}
                width={130}
                height={130}
                alt=''
            />
            <Link href='/pt-BR'>
                <button className='bg-primary p-3 uppercase text-white'>
                    VERSÃO EM PORTUGUÊS
                </button>
            </Link>
        </header>
    )
}

