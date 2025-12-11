export interface IBrandResponse {
  results: number;
  metadata: {
    currentPage: number;
    limit: number;
    numberOfPages: number;
  };
  data: IBrand[];
}

export interface IBrand {
  image: string;
  name: string;
  slug: string;
  _id: string;
  createdAt: string;
  updatedAt: string;
}