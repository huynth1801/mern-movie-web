// src/types/express.d.ts
import { ParsedQs } from "qs";

export interface GetListQuery extends ParsedQs {
  page?: string;
}

export interface GetListParams {
  mediaType: string;
  mediaCategory: string;
}
