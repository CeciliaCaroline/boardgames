
export const fetchData = async () => {
  // simulate fetching data
  try {
    const response = await fetch('/data.json');
    if (!response.ok) {
      throw new Error('Network resquest failed');
    }
    return response.json();
  } catch (e) {
    console.log("SOmething went wrong")
  }

};

export const updateData = async (data) => {
  //simulate updating data.
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 1000); // Simulate a 1-second delay for updating
  });
};
