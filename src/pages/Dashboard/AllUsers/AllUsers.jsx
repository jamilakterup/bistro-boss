import {useQuery} from "@tanstack/react-query";
import {Helmet} from "react-helmet-async";
import {FaTrashAlt, FaUserShield} from "react-icons/fa";
import Swal from "sweetalert2";


const AllUsers = () => {
    const {data: users = [], refetch} = useQuery(['users'], async () => {
        const res = await fetch('http://localhost:5000/users')
        return res.json();
    });

    const handleMakeAdmin = user => {
        console.log(user);
        fetch(`http://localhost:5000/users/admin/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: `${user.name} is now an admin`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }

    const handleDelete = id => {
        console.log(id);
        fetch(`http://localhost:5000/users/admin/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    refetch();
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }

    return (
        <div className="w-full px-4">
            <Helmet>
                <title>Bistro Boss/All-users</title>
            </Helmet>
            <h3 className="text-3xl font-semibold">Total Users: {users.length}</h3>
            <div className="overflow-x-auto my-4">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            users.map((user, index) =>
                                <tr key={user._id}>
                                    <th>{index + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.role === 'admin' ? "admin" :
                                        <button onClick={() => handleMakeAdmin(user)} className="btn btn-ghost btn-sm bg-orange-600"><FaUserShield className="text-xl text-white" /></button>
                                    }</td>
                                    <td><button onClick={() => handleDelete(user._id)} className="btn btn-ghost btn-sm bg-red-600"><FaTrashAlt className="text-xl text-white" /></button></td>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;