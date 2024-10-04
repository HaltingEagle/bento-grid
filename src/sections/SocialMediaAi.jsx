import image from '../assets/images/illustration-five-stars.webp';
function SocialMediaAi() {
    return (
        <div className="flex flex-col items-center justify-center p-5 max-lg:order-1 lg:col-span-4 lg:row-span-3 bg-custom-purple rounded-xl">
            <div className='max-lg:w-[47%]'>
                <p className="mb-5 text-5xl tracking-tight text-center text-white">Social Media <span className="text-custom-yellow">10x</span> <span className="italic">Faster</span> with AI</p>
            </div>
            <img className="w-40 size-xl max-lg:py-2" src={image} alt="five stars" />
            <p className="font-light text-white">Over 4,000 5-star reviews</p>
    </div>
    )
}

export default SocialMediaAi