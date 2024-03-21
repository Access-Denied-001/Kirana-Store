import AppBarNav from "../Components/OrderPageComp/AppBarNav";
import { Button } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import StickyHeadTable from "../Components/StickyHeaderTable";
import { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";

const ConfirmOrderPage = () => {
    const { state } = useContext(ShopContext);

    function handleOrderConfirmation() {
        console.log("Whatsapp order done!!");
    }

    function constructProductsRow(state: any): any[] {
        const rows: any[] = [];
        state?.map((category: any) => {
            return category.products?.map((product: any) => {
                if (product.quantity > 0) {
                    const productItem = {
                        name: product.name + "-" + category.name,
                        quantity: product.quantity,
                        unit: product.unit,
                    };
                    rows.push(productItem);
                }
            });
        });
        return rows;
    }

    const columns = [
        {
            id: "name",
            label: "Items",
            minWidth: 150,
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

    const rows = constructProductsRow(state);

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
                <div>{StickyHeadTable(rows, columns)}</div>
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