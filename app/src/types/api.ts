/** ブログのコンテンツ型 */
export type Content = {
  id: string;
  title?: string;
  content?: string;
  createdAt?: string;
  updatedAt?: string;
};

/** microCMSのリスト形式APIのレスポンス型 */
export type ListResponse<T> = {
  contents: T[];
  totalCount: number;
  offset: number;
  limit: number;
};
