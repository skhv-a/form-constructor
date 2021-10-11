import { ApiSchema } from "types/schema";

export const getSchemasFromLocalStorage = () => {
  const rawLocalSchemas = localStorage.getItem("schemas") ?? "[]";
  return JSON.parse(rawLocalSchemas) as ApiSchema[];
};

export const setSchemasToLocalStorage = (schema: ApiSchema) => {
  const schemas = getSchemasFromLocalStorage();
  const updatedSchemas = [...schemas, schema];

  localStorage.setItem("schemas", JSON.stringify(updatedSchemas));
};
