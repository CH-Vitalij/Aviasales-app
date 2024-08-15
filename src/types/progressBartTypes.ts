export interface ProgressBarState {
  progress: number;
}

export enum ProgressBarType {
  PROGRESS = "PROGRESS",
}

export interface ProgressBarAction {
  type: ProgressBarType.PROGRESS;
}