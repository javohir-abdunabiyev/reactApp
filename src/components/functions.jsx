function HeaderFunc() {
    return (
        <div className="header">
            <nav className="headerNav">

                <div className="options">
                    <span>SHOP</span>
                    <span>EXPLORE</span>
                </div>

                <img className="logo" src="/imgs/logo.png" alt="" />

                <div className="cart">MY CART</div>

            </nav>
        </div>
    )
}



function DeskSystemSection() {
    return (
        <div className="deskSystem">

            <img className="deskImg" src="/imgs/desk.png" alt="" />
            
            <div className="description">
                <h1>The Desk Shelf System</h1>
                <p>Available in Walnut or Maple</p>
                <p>LEARN MORE</p>
            </div>

        </div>
    )
}


function DevicesSection({device}) {
    return (
        <div className="devicesBlock">
            <img className="deviceImg" src={device.img} alt="" />
            <p className="deviceName">{device.name}</p>
            <p className="more">{device.more}</p>
        </div>
    )
}


function ProductsFunc({product}) {
    return (
        <div className="productBlock">
            <img className="productsImg" src={product.img} alt="" />
            <p className="productName">{product.name}</p>
            <p className="productCost">{product.cost}</p>
        </div>
    )
}

function OfficeInspiration() {
    return (
        <div className="deskSystem officeSystem">

            <img className="deskImg" src="/imgs/office.png" alt="" />
            
            <div className="description">
                <h1>Home Office Inspiration</h1>
                <p>Working from home can be a challenge—see some creative solutions to get it just right.</p>
                <p>LEARN MORE</p>
            </div>

        </div>
    )
}


export {HeaderFunc, DeskSystemSection, DevicesSection, ProductsFunc, OfficeInspiration};
