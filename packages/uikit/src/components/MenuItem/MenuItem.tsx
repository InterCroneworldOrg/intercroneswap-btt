import React, { useContext } from "react";
import { MenuContext } from "../../widgets/Menu/context";
import StyledMenuItem, { StyledMenuItemContainer } from "./styles";
import { MenuItemProps } from "./types";

const MenuItem: React.FC<MenuItemProps> = ({
  children,
  href,
  isActive = false,
  variant = "default",
  statusColor,
  ...props
}) => {
  const { linkComponent } = useContext(MenuContext);

  return (
    <StyledMenuItemContainer $isActive={isActive} $variant={variant}>
      {href ? (
        <StyledMenuItem
          as={linkComponent}
          href={href}
          $isActive={isActive}
          $variant={variant}
          $statusColor={statusColor}
          {...props}
        >
          {children}
        </StyledMenuItem>
      ) : (
        <StyledMenuItem as="div" $isActive={isActive} $variant={variant} $statusColor={statusColor} {...props}>
          {children}
        </StyledMenuItem>
      )}
    </StyledMenuItemContainer>
  );
};

export default MenuItem;
