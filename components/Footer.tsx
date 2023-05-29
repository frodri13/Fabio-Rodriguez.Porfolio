import Icons from "./Icons";

export default function Footer() {
    return(
        <div className="py-5 text-center">
            <div className='container max-w-screen-lg mx-auto'>
               <Icons />       
            </div>
            <p className="text-sm mt-2  opacity-50 dark:opacity-80">
				&copy; {new Date().getFullYear()} Fabio Rodriguez. All rights reserved.
			</p>
        </div>
    )
}