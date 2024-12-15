export async function fetchData(url: string): Promise<void> {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(`Error fetching data by url (${url}) :`, error);
  }
}
