import { URL_PRE, URL_PRE_ITEM } from "../../constants";

const MenuItem = ({params}) => {
    const item = params?.card?.info
    return (
        <div className="grid grid-cols-10 p-5 pb-8 border-b border-b-neutral-300">
            <div className="flex col-span-7 flex-col  ">
                {item?.itemAttribute?.vegClassifier==='VEG'?
                (<img className="h-4 w-4" src="https://toppng.com/uploads/preview/veg-11550711253oulno8mnhz.png" alt='veg'></img>):
                (<img className="h-3 w-3" src="https://www.vhv.rs/dpng/d/437-4370761_non-veg-icon-non-veg-logo-png-transparent.png" alt='nonveg'></img>)}
                <p className="font-semibold">{item?.name}</p>
                <h1 className="font-semibold">{item?.defaultPrice/100 || item?.price/100}</h1>
                <p className="font-sembold">{item?.ratings?.aggregatedRating?.rating}</p>
                <p className="text-sm text-neutral-700">{item?.description}</p>
            </div>
            <div className=" col-span-3 ml-20 mb-5 w-35 h-35 ">
                <img className="justify-end rounded-2xl w-full shadow-sm" src={URL_PRE_ITEM+item?.imageId}></img>
                <button className="mt-[-10px] ml-5 p-1 bg-white cursor-pointer rounded-2xl border border-neutral-300 text-green-500 font-bold w-25 h-10">ADD</button>
            </div>
        </div>
    )
}
export default MenuItem;