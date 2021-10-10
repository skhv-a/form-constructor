import { Link } from "react-router-dom";
import { ApiSchema } from "types/schema";
import { joinClassNames } from "utils/utils";
import "./styles.css";

type Props = {
  className?: string;
  schemas: ApiSchema[];
};

const SchemasList = ({ className, schemas }: Props) => {
  return (
    <div className={joinClassNames("schemas-list", className)}>
      {schemas.map((schema) => (
        <div key={schema.id} className="schemas-list__item">
          <Link to={`/schemas/${schema.id}`}>{schema.name}</Link>
        </div>
      ))}
    </div>
  );
};

export default SchemasList;
