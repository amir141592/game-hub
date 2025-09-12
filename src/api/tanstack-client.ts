import { QueryClient } from "@tanstack/react-query";

// const defaultQueryFn: QueryFunction = async <T = unknown>({ queryKey }: QueryFunctionContext): Promise<T> => {
// 	const response: AxiosResponse<T> = await axiosClient.get(`/${queryKey[0]}`);
// 	return response.data;
// };

// const defaultMutationFn = <dataType = unknown>({
// 	method,
// 	url,
// 	data,
// 	headers,
// 	params,
// 	transformRequest,
// 	transformResponse,
// }: {
// 	method: "post" | "patch" | "put" | "delete";
// 	url: string;
// 	data?: dataType;
// 	headers?: AxiosHeaders;
// 	params?: Record<string, string | number | boolean>;
// 	transformRequest?: AxiosRequestTransformer;
// 	transformResponse?: AxiosResponseTransformer;
// }) => axios.create({})[method]<dataType>(url, data, { headers, params, transformRequest, transformResponse, withCredentials });

export const tanStackClient = new QueryClient();