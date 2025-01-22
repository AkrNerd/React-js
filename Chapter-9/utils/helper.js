export function filterData(searchText, restaurants) {
  const f_Data = restaurants.filter((restaurant) =>
    restaurant?.info?.name?.toLowerCase()?.includes(searchText.toLowerCase())
  );
  return f_Data;
}