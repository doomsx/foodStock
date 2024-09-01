
function ProductRow({ product }) {
    const name = product.stocked ? product.name :
        <span className="text-red-600">
            {product.name}
        </span>
    return (
        <tr>
            <td className="pr-10 p-2">{name}</td>
            <td className="pr-10 p-2">{product.price}</td>
        </tr>
    )
}

export default ProductRow
