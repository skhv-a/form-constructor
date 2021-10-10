import Button from "components/Button/Button";
import Navbar from "components/Navbar/Navbar";
import NewSchemaForm from "components/schemas[new]/NewSchemaForm/NewSchemaForm";

function NewSchemaPage() {
  return (
    <>
      <Navbar />
      <div className="content">
        <NewSchemaForm
          onSubmit={console.log}
          controls={<Button>Сохранить схему</Button>}
        />
      </div>
    </>
  );
}

export default NewSchemaPage;
