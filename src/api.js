const BASE_URL = `https://module5.7t33n.ru`;

const fetchData = async (api) => {
  const response = await fetch(`${BASE_URL}${api}`);
  const data = await response.json();
  return data;
};

export const fetchBanners = async () => await fetchData("/banners");

export const fetchLocationSorted = async () => {
  const data = await fetchData("/hotel/location");
  data.sort((a, b) => {
    return a.name > b.name ? 1 : -1;
  });
  return data;
};

export const fetchHotelDetailId = async (id) => await fetchData(`/hotel/detail/${id}`);

export const fetchLatest = async () => await fetchData("/latest");

export const fetchFeatured = async () => await fetchData("/featured");

export const postForm = async (data) => {
  const response = await fetch(`${BASE_URL}/hotel/filter`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(data),
  });
  const result = await response.text();
  console.log(result);
};
