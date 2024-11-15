
const Footer = () => {
    return (
        <div className="w-10/12 mx-auto grid grid-cols-3 gap-4 justify-center py-12">
            <div className="col-span-3 text-center border-b-2 py-4">
                <h1 className="text-4xl font-bold mb-2">Gadget Heaven</h1>
                <p className="text-lg">Loading the way is cutting-edge technology and innovation.</p>
            </div>
            
            <div className="text-center flex flex-col gap-1">
                <h1 className="text-xl font-bold mb-2">Service</h1>
                <p>Product Support</p>
                <p>Order Tracking</p>
                <p>Shipping & Delivery</p>
                <p>Returns</p>
            </div>
            <div className="text-center flex flex-col gap-1">
                <h1 className="text-xl font-bold mb-2">Company</h1>
                <p>About Us</p>
                <p>Carries</p>
                <p>Contacts</p>
            </div>
            <div className="text-center flex flex-col gap-1">
                <h1 className="text-xl font-bold mb-2">Legal</h1>
                <p>Terms of Service</p>
                <p>Privacy Policy</p>
                <p>Cookie Policy</p>
            </div>

        </div>
    );
};

export default Footer;