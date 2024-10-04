import image from '../assets/images/illustration-create-post.webp';
function CreateQuick() {
    return (
        <div className="flex flex-col px-6 py-12 lg:items-center lg:justify-center max-lg:order-7 lg:row-span-4 lg:col-span-2 rounded-xl bg-custom-light-yellow">
            <p className="text-3xl text-start max-lg:w-[70%] max-lg:pb-4">Create and schedule content <span className="italic text-violet-600">quicker.</span></p>
            <img className="cursor-pointer lg:w-40 lg:mt-4 max-lg:w-[40%]" src={image} alt="create post" />
        </div>
    )
}

export default CreateQuick