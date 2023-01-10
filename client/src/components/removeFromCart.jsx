export default function RemoveFromCart({id}) {

    const removeItem = async () => {
        console.log(id);

        const response = await fetch(`http://localhost:5000/carts/mine/items/${id}`, {
            method: "DELETE",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(
                {cartId: localStorage.getItem("cartId")}
            )
        });

        location.reload();
    }

    return (
        <button className="bin-btn" onClick={removeItem}>
            <img className="bin-icon" src="src/assets/trash-bin.png" alt="bin"/>
        </button>
    );
}