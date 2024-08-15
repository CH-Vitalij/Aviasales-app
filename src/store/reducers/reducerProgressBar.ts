import {
  ProgressBarState,
  ProgressBarAction,
  ProgressBarType,
} from "../../types/progressBartTypes";

const initialState: ProgressBarState = {
  progress: 0,
};

export const reducerProgressBar = (
  state = initialState,
  action: ProgressBarAction,
): ProgressBarState => {
  switch (action.type) {
    case ProgressBarType.PROGRESS: {
      const { progress } = state;
      return { progress: progress + 5 };
    }

    default:
      return state;
  }
};
