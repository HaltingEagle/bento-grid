import image from '../assets/images/illustration-consistent-schedule.webp';
function ConsistentSchedule() {

    return (
        <div className="max-lg:order-3 flex flex-col p-5 overflow-hidden bg-yellow-400 lg:pb-0 lg:row-span-3 lg:col-span-2 rounded-xl lg:h-[230px] max-lg:h-[260px]">
            <p className="lg:mb-2 text-3xl tracking-normal leading-[30px] text-custom-black max-lg:pb-4 max-lg:w-[80%]">Maintain a consistent posting schedule.</p>
            <img className="w-60" src={image} alt="consistent schedule" />
        </div>
    );
}

export default ConsistentSchedule;