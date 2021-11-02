// Esta función permite obtener los valores por defecto para la paginación
export const getPagination = (size, page) => {
  const limit = size ? +size : 5;
  const offset = page ? page * limit : 0;
  return { limit, offset };
};
