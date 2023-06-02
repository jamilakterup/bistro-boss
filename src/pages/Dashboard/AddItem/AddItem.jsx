import {Helmet} from "react-helmet-async";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import {useForm} from 'react-hook-form';
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const image_hosting_token = import.meta.env.VITE_IMAGE_UPLOAD_TOKEN

const AddItem = () => {
    const [axiosSecure] = useAxiosSecure();

    const {register, handleSubmit, reset} = useForm();
    const image_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting_token}`

    const onSubmit = data => {
        const formData = new FormData();
        formData.append('image', data.image[0])

        fetch(image_hosting_url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                if (result.success) {
                    const imgUrl = result.data.display_url;
                    const {name, price, category, recipe} = data;
                    const newItem = {name, price: parseFloat(price), category, recipe, image: imgUrl}
                    axiosSecure.post('/menu', newItem)
                        .then(data => {
                            reset();
                            if (data.data.insertedId) {
                                Swal.fire(
                                    'Good job!',
                                    'You clicked the button!',
                                    'success'
                                )
                            }
                        })
                }
            })
    };


    return (
        <div className="px-6 mb-28">
            <Helmet>Bistro-BOss/Add-Item</Helmet>
            <SectionTitle subHeading="What's New" heading="Add an item" />
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Recipe Name*</span>
                    </label>
                    <input type="text" placeholder="Recipe name" {...register("name", {required: true, maxLength: 120})} className="input input-bordered w-full" />
                </div>
                <div className="flex gap-8 justify-between my-4">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Category*</span>
                        </label>
                        <select defaultValue="Pick One" className="select select-bordered" {...register("category", {required: true})}>
                            <option disabled>Pick One</option>
                            <option>Pizza</option>
                            <option>Soup</option>
                            <option>Salad</option>
                            <option>Drinks</option>
                            <option>Dessert</option>
                        </select>
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Price*</span>
                        </label>
                        <input type="number" placeholder="Recipe name" className="input input-bordered w-full" {...register("price", {required: true})} />
                    </div>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Recipe Detail</span>
                    </label>
                    <textarea className="textarea textarea-bordered h-24" placeholder="recipe" {...register("details", {required: true})}></textarea>
                </div>
                <div className="form-control w-full max-w-xs my-4">
                    <label className="label">
                        <span className="label-text">Item Image*</span>
                    </label>
                    <input type="file" className="file-input file-input-bordered w-full max-w-xs" {...register("image", {required: true})} />
                </div>
                <input className="btn btn-sm my-2" type="submit" value="Add Item" />
            </form>
        </div>
    );
};

export default AddItem;