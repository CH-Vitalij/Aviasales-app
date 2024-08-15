import { Progress } from "antd";
import { useAppSelector } from "../../hooks/useAppSelector";
import classes from "./ProgressBar.module.scss";

const ProgressBar = () => {
  const { progress } = useAppSelector((state) => state.progressBar);

  return (
    <div className={`${classes.progressBar}`}>
      Ищем авиабилеты
      <Progress percent={progress} size="small" />
    </div>
  );
};

export default ProgressBar;
