import { useState } from "react";
import { BottomSheet } from "../components/home/BottomSheet";
import { FloatingBtn } from "../components/home/FloatingBtn";
import { HomeCourseSection } from "../components/home/HomeCourseSection";
import { MapArea } from "../components/home/MapArea";
import { SeaechBar } from "../components/home/SearchBar";
import { Layout } from "../components/layout/layout";
import { axiosInstance } from "../api/axiosInstance";

export const Home = () => {
  const [places, setPlaces] = useState([]);

  const handleSearch = async (keyword) => {
    try {
      const res = await axiosInstance.get(`/place/search/places`, {
        params: { keyword },
      });
      console.log(">>", res.data.data);
      setPlaces(res.data.data);
    } catch (e) {
      console.error("검색 오류:", e);
    }
  };
  return (
    <>
      <Layout type="logo" text="">
        <div className="relative">
          <SeaechBar onSearch={handleSearch} />
          <MapArea places={places} />
          <BottomSheet>
            <HomeCourseSection />
          </BottomSheet>
          <FloatingBtn />
        </div>
      </Layout>
    </>
  );
};
