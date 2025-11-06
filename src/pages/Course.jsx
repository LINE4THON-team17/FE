// import { useParams } from "react-router-dom";
import { Layout } from "../components/layout/layout";
import { BottomSheet } from "../components/home/BottomSheet";
import { MapArea } from "../components/home/MapArea";

export const Course = () => {
  // const { id } = useParams();
  return (
    <Layout type="back" text="코스이름">
      <MapArea />
      <BottomSheet></BottomSheet>
    </Layout>
  );
};
