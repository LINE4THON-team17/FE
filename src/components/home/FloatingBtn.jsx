import { useNavigate } from "react-router-dom";
import plus from "../../assets/icons/plus.svg";
export const FloatingBtn = () => {
  const navigate = useNavigate();
  return (
    <div
      className="z-20 absolute bottom-5 right-[15px] bg-pink p-[15px] rounded-full cursor-pointer"
      onClick={() => navigate(`/routemake`)}
    >
      <img src={plus} alt="+" />
    </div>
  );
};
