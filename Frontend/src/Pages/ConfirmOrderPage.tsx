import AppBarNav from "../Components/AppBarNav";
import { Button } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import StickyHeadTable from "../Components/StickyHeaderTable";
import { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { CartContext } from "../Context/CartContext";

const ConfirmOrderPage = () => {
    let pathname =
        "http://wa.me/918114430657?text=Hello!%0AI%20want%20to%20order%20the%20following%20items%20from%20your%20store%0A%0A";

    const { cart } = useContext(CartContext);

    function handleOrderConfirmation() {
        console.log("Whatsapp order done!!");
        window.location.href = pathname;
    }

    const toPascalCase = (text: string, trimSpace = false) =>
        text
            .split(" ")
            .map((t) => t[0].toUpperCase() + t.slice(1).toLowerCase())
            .join(trimSpace ? "" : " ");

    const columns = [
        {
            id: "name",
            label: "Items",
            minWidth: 150,
        },
        {
            id: "category",
            label: "Category",
            minWidth: 100,
        },
        {
            id: "quantity",
            label: "Quantity",
            minWidth: 80,
        },
        {
            id: "unit",
            label: "Units",
            minWidth: 50,
        },
    ];

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "end",
                alignItems: "center",
                gap: "1rem",
            }}
        >
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "5.5rem",
                    width: "100%",
                }}
            >
                <div
                    className="navbar"
                    style={{
                        position: "relative",
                        width: "100%",
                        overflow: "hidden",
                        height: "10%",
                    }}
                >
                    <AppBarNav />
                </div>
                <div>{StickyHeadTable(cart, columns)}</div>
            </div>

            <Button
                title="Confirm Order"
                sx={{
                    padding: "0.75rem",
                    width: "max-content",
                    borderRadius: "0.75rem",
                    backgroundColor: "#0099ff",
                    color: "#fff",
                    fontWeight: "bolder",
                    ":hover": { backgroundColor: "#0033cc", scale: "1.1" },
                }}
                onClick={() => {
                    handleOrderConfirmation();
                }}
            >
                <WhatsAppIcon /> Send to Whatsapp
            </Button>
        </div>
    );
};

export default ConfirmOrderPage;
