'use client'
import { motion } from 'framer-motion'
import Image from 'next/image';

type SkillProps = {
    directionLeft?: boolean;
    skill: {
        title: string,
        url: string,
        percentage: number,
    }
}

export default function Skill({directionLeft, skill}: SkillProps) {
    
    return(
        <div className="group relative flex cursor-pointer">
            <Image
            width={50}
            height={50}
            src={skill.url}
            alt={`Icon of ${skill.title}`}     
            className='rounded-full border border-gray-500 object-cover
            w-24 h-24 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out'       
            />
            <div className='absolute opacity-0 group-hover:opacity-80
            transition duration-300 ease-in-out group-hover:bg-white h-24 w-24
            md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0'>
                <div className='flex items-center justify-center h-full'>
                    <p className='text-3xl font-bold text-violet-500 dark:text-orange-500'>{skill.percentage.toString()}%</p>
                </div>
            </div>
        </div>
    )
}