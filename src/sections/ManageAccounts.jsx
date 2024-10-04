import image from '../assets/images/illustration-multiple-platforms.webp';

function ManageAccounts() {
    return (
        <div className="max-lg:order-2 flex flex-col bg-white lg:p-5 lg:row-span-3 lg:col-span-2 rounded-xl lg:h-[230px] overflow-hidden  max-lg:p-5">
            <img className="lg:object-fill max-lg:w-full max-lg:h-full lg:pt-4 lg:pb-2 max-lg:size-[100%]" src={image} alt="multiple platforms" />
            <p className="lg:pr-5 lg:text-3xl max-lg:text-4xl leading-[30px] tracking-tighter text-custom-black max-lg:pt-4 max-lg:w-[90%]">Manage multiple accounts and platforms.</p>
        </div>
    );
}

export default ManageAccounts;
