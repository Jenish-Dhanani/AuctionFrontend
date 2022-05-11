import { ProductCard } from './ProductCard';

const CardGroup=({products,role,handleOnDeleteBtnClick,notify})=>{
    // console.log(products)
    return (
        <div className="container d-flex justify-content-center align-items-center flex-wrap p-3 mb-4" style={{gap:"40px"}}>
            {products && products.map((product, index)=>{
                return <ProductCard product={product} key={index} notify={notify} role={role} handleOnDeleteBtnClick={handleOnDeleteBtnClick} />
            })}
        </div>
    )
}

export {CardGroup}