export interface IPost {
  id: number;
  title: string;
  content: string;
}

export type IGetPostRes = Omit<IPost, "content"> & { userId: number; body: string };

export interface IOption {
  id: number;
  value: string;
  label: string;
}
