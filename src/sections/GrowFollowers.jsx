import image from '../assets/images/illustration-grow-followers.webp';
function GrowFollowers() {

    return (
        <div className="max-lg:order-5 flex flex-col items-center justify-center lg:row-span-2 lg:col-span-4 lg:flex-row lg:pt-4 lg:pb-2 bg-custom-purple rounded-xl lg:gap-x-2 lg:h-[210px] max-lg:py-6">
            <img className="h-40 w-44 lg:-mb-3" src={image} alt="followers" />
            <p className="text-3xl leading-tight tracking-tighter text-center text-white font-semi-bold lg:w-1/2 lg:text-start max-lg:w-[40%]" >Grow followers with non-stop content.</p>
        </div>
    );
}

export default GrowFollowers