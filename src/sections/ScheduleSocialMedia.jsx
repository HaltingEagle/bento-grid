import image from '../assets/images/illustration-schedule-posts.webp';

function ScheduleMedia() {
    return (
        <div className="max-lg:order-4 flex flex-col justify-start lg:p-5 max-lg:p-7 lg:row-span-6 lg:col-span-2 md:justify-center lg:justify-start md:pr-0 bg-custom-light-purple rounded-xl lg:h-[505px] overflow-hidden max-lg:justify-center max-lg:items-center">
            <p className="text-3xl leading-tight tracking-tighter text-left lg:pr-5 lg:pt-5 text-custom-black max-lg:pb-4">Schedule to social media.</p>
            <div className="lg:relative lg:h-full lg:my-2 lg">
                <img className="object-cover lg:absolute lg:h-full lg:max-w-none" src={image} alt="schedule posts" />
            </div>
            <p className="tracking-tighter text-xl lg:leading-5 lg:pr-5 max-lg:text-center max-lg:pt-4 max-lg:w-[70%]">Optimize post timings to publish content at the perfect time for your audience</p>
        </div>
    );
}

export default ScheduleMedia;
