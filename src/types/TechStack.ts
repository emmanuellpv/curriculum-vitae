export interface ITechnology {
  name: string;
  path: string;
}

export interface ITechStack {
  title: string;
  technologies: ITechnology[];
}
