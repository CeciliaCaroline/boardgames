import React, { createContext, useEffect, useState } from "react";
import { fetchData, updateData } from "../API";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        // simulate fetching data
        const result = await fetchData();
        const newResresult = result.map((item, index) =>({
          ...item,  
          key: index 
        }))
        setData(newResresult);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  const editItem = async (key, newData) => {
    const updatedData = data.map(item =>
      item.key === key ? { ...item, ...newData } : item
    );

    // Simulate sending updated data to the server
    await updateData(updatedData);
    setData(updatedData);
    console.log(updatedData, "UPDATED DATA")
  };


  return (
    <DataContext.Provider value={{ data, loading, editItem }}>
      {children}
    </DataContext.Provider>
  );
};