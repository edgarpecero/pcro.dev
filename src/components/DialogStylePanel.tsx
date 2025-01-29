"use client";

import { useTheme } from "@/app/context/ThemeContext";
import { Brand } from "@/app/resources/enums";
import { Dialog, Flex, IconButton } from "@/once-ui/components";
import classNames from "classnames";
import styles from "./DialogStylePanel.module.scss";

interface DialogStylePanelProps {
  isDialogOpen: boolean;
  toggleDialog: () => void;
}

export const DialogStylePanel = ({ isDialogOpen, toggleDialog }: DialogStylePanelProps) => {
  const { brandColor, setBrandColor } = useTheme();
  const brandColors = Object.values(Brand);

  return (
    <Dialog
      isOpen={isDialogOpen}
      onClose={toggleDialog}
      title="Customize"
    >
      <Flex
        direction="row"
        paddingY="12"
        horizontal="center"
        wrap={true}
      >
        {brandColors.map((color, _) => (
          <Flex
            marginRight="2"
            key={color}
            horizontal="center"
            vertical="center"
            className={classNames(styles.select, brandColor === color ? styles.selected : "")}
            onClick={() => {
              setBrandColor(color);
            }}
          >
            <IconButton variant="ghost" size="m">
              <div className={`${styles[color]} ${styles.swatch}`}></div>
            </IconButton>
          </Flex>
        ))}
      </Flex>
    </Dialog>
  )
}