import { Badge, BadgeProps, IconButton, styled } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
    "& .MuiBadge-badge": {
        right: 0,
        top: 10,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: "0 4px",
    },
}));

interface CartIconProps {
    badgeContent: number;
    onClickHandler: () => void;
}

const CartIcon = ({ badgeContent, onClickHandler }: CartIconProps) => {
    return (
        <IconButton
            sx={{
                ":hover": {
                    backgroundColor: "#0033cc",
                },
            }}
            aria-label="cart"
            onClick={onClickHandler}
        >
            <StyledBadge color="info" max={9}>
                <ShoppingCartIcon sx={{ padding: "0 auto", color: "white" }} />
            </StyledBadge>
        </IconButton>
    );
};

export default CartIcon;
