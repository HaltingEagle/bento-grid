import image from '../assets/images/illustration-audience-growth.webp';
function AudienceGrowth() {

    return (
        <div className="max-lg:order-6 p-5 bg-white lg:row-span-2 lg:col-span-2 rounded-xl lg:h-[210px]">
            <h2 className="leading-tight lg:text-5xl max-lg:text-3xl text-custom-black">&gt;56%</h2>
            <p className="mt-1 mb-3 text-custom-black">faster audience growth</p>
            <img className="lg:w-40 lg:pt-3 max-lg:w-[50%]" src={image} alt="" />
        </div>
    );
}

export default AudienceGrowth;