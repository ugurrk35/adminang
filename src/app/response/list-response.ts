import { ResponseModel } from "./response-model";
export interface ListResponse<T> extends ResponseModel {

  data:T[];
}
