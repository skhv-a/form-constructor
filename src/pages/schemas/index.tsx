import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "components/Navbar/Navbar";
import Button from "components/Button/Button";
import SchemasList from "components/schemas/List/List";
import useGetSchemas from "hooks/schemas/useGetSchemas";
import "pages/styles/schemas/index.css";

function SchemasPage() {
  const [state, getSchemas] = useGetSchemas();

  useEffect(() => {
    getSchemas();
  }, []);

  const schemas = state.response ?? [];

  return (
    <div className="schemas-page">
      <Navbar />
      <div className="content">
        <h2 className="heading-2">Мои схемы</h2>
        {state.isLoading ? (
          <p>Загрузка...</p>
        ) : (
          <SchemasList
            schemas={schemas}
            className="schemas-page__schemas-list"
          />
        )}
        <Link to="schemas/new">
          <Button>Создать схему</Button>
        </Link>
      </div>
    </div>
  );
}

export default SchemasPage;
