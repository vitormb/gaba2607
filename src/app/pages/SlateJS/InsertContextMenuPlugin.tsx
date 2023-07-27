import React from "react";
import {
  Plugin,
  MenuItem,
  TableMenuItem,
  AlertMenuItem,  
  HeadingMenuItem,
} from "@mpkelly/react-editor-kit";

export const InsertContextMenuPlugin: Plugin = {
  name: "InsertContextMenuPlugin",
  contextMenu: [
    {
      //No trigger - always allowed
      items: [
        <MenuItem text={"Inserir"}>
          <MenuItem text="Tipo de item">
            <HeadingMenuItem type="h1" text="Título 1" />
            <HeadingMenuItem type="h2" text="Título 1" />
            <HeadingMenuItem type="p" text="Parágrafo" />
          </MenuItem>
          <div className="rek-h-divider" />
          <TableMenuItem text="Tabela" />          
          <div className="rek-h-divider" />
          <MenuItem text="Alerts">
            <AlertMenuItem type="info-alert" text="Info" />
            <AlertMenuItem type="warning-alert" text="Warning" />
            <AlertMenuItem type="error-alert" text="Error" />
          </MenuItem>
        </MenuItem>
      ]
    }
  ]
};
