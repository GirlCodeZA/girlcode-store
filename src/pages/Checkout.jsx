import MainLayout from "../layouts/MainLayout"

const Checkout = () => {
    const submitForm = (evt) => {
        evt.preventDefault()

        const form = evt.target

        const formData = new FormData(form)

        const cartArray = localStorage.getItem('cart')

        formData.append('cart', cartArray)

        fetch(`${import.meta.env.VITE_API_URL}/submit_cart`, {
            method: "POST",
            body: formData
        }).then(resp => {
            console.log(resp)
        }).catch (error => {
            console.log(error)
        })
    }

    return (
        <MainLayout>
            <section className="py-20">
                <div className="container mx-auto">
                    <form className="border-4 rounded py-4 px-3" onSubmit={submitForm} >
                        <h2 className="font-bold text-xl">Personal Information</h2>
                        <div className="mt-3">
                            <label htmlFor="fullname" className="font-bold">Full Name</label>
                            <input type="text" name="fullname" placeholder="Enter your full name" className="block w-full border-2 bg-gray-100 p-2 rounded" required />
                        </div>
                        <div className="mt-3">
                            <label htmlFor="emailaddress" className="font-bold">Email Address</label>
                            <input type="email" name="emailaddress" placeholder="Enter your email address" className="block w-full border-2 bg-gray-100 p-2 rounded" required />
                        </div>
                        <button type="submit" className="btn bg-girlcode-pink text-white text-lg mt-6">Complete Checkout</button>
                    </form>
                </div>
            </section>
        </MainLayout>
    )
}

export default Checkout
