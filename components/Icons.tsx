import { SocialIcon } from 'react-social-icons';

export default function Icons(){
    return(
        <div className='flex flex-wrap justify-center gap-2'>
            <SocialIcon url="https://www.linkedin.com/in/rodriguezfabio" fgColor='white' bgColor='gray' target='_blank'/>               
            <SocialIcon url='https://github.com/frodri13' fgColor='white' bgColor='gray' target='_blank'/>
            <SocialIcon url='https://frontendmasters.com/u/frodri13/' fgColor='white' bgColor='gray' target='_blank'/>
            <SocialIcon url="https://twitter.com/fabio50298777" fgColor='white' bgColor='gray' target='_blank'/>
            <SocialIcon url="https://www.instagram.com/fabsrocco/" fgColor='white' bgColor='gray' target='_blank'/>
        </div>
    )
}