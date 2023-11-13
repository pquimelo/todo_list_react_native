export interface ITarefa {
  idTask:number;
  name: string;
  complexity: number;
  stage: string;
}

export const stageActivity = {
  waiting: "esperando",
  doing: "fazendo",
  completed: "completo",
  remake: "refazer",
};
