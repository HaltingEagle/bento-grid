import image from '../assets/images/illustration-ai-content.webp';

function WriteAi() {
    return (
        <div className="max-lg:order-8 flex flex-col p-5 bg-custom-light-yellow lg:row-span-5 lg:col-span-2 rounded-xl lg:mt-3 lg:h-[370px] max-lg:">
            <h2 className="lg:mb-4 text-3xl lg:w-[140px] lg:leading-tighter lg:tracking-tight lg:text-start text-custom-black max-lg:w-[70%]">Write your content using AI.</h2>
            <img className="lg:pt-4 lg:mx-2 lg:w-52 max-lg:w-60 max-lg:pt-6" src={image} alt="" />
        </div>
    );
}

export default WriteAi