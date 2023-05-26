import {Link} from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const MenuCategory = ({items, title, coverImg}) => {
    return (
        <>
            {
                (title && title !== "offered") && <Cover img={coverImg} title={title} />
            }
            <div className="grid md:grid-cols-2 gap-4 my-12">
                {
                    items.map(item => <MenuItem key={item._id} item={item} />)
                }
            </div>
            <div className="flex justify-center my-12">
                <Link to={`/order/${title}`} className='btn btn-outline border-0 border-b-4'>Order now</Link>
            </div>
        </>
    );
};

export default MenuCategory;