import React, { useContext } from "react";
import CatalogComponent from "../components/catalog/CatalogComponent.tsx";
import { ThemeContext } from "../context/ThemeContext.tsx";
import { TopicProvider } from "../context/TopicContext.tsx";
import { IdProvider } from "../context/IdContext.tsx";
export default function Catalog() {
  const { theme } = useContext(ThemeContext);
  return (
    <div style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
      <IdProvider>
        {" "}
        <TopicProvider>
          <CatalogComponent />
        </TopicProvider>
      </IdProvider>
    </div>
  );
}
