import {FaTrashAlt} from "react-icons/fa";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const ManageItems = () => {
    const [menu, , refetch] = useMenu();
    const [axiosSecure] = useAxiosSecure();

    const handleDelete = (item) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/menu/${item._id}`)
                    .then(res => {
                        console.log(res.data);
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            );
                        }
                    })
            }
        })
    }
    return (
        <div>
            <SectionTitle subHeading='Hurry Up' heading='Manage All Items' />
            <div className="overflow-x-auto px-4">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Item</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {menu.map((item, i) => <tr key={item._id}>
                            <th>{i + 1}</th>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div className="font-bold">
                                        {item.name}
                                    </div>
                                </div>
                            </td>
                            <td>
                                {item.category}
                            </td>
                            <td className="text-right">${item.price}</td>
                            <th>
                                <button className="btn btn-ghost btn-xs">details</button>
                            </th>
                            <th>
                                <button onClick={() => handleDelete(item)} className="btn btn-ghost btn-lg bg-red-600"><FaTrashAlt className="text-xl text-white" /></button>
                            </th>
                        </tr>)}

                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default ManageItems;