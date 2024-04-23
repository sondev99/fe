import axiosClient from "@/axios/apiConfig";
import { API_URL_REVIEW } from "@/constant/apiConstant";

const url = API_URL_REVIEW;

const reviewApi = {
  createReview: (review: ReviewRequest) => {
    return axiosClient.post(`${url}`, review);
  },
  getReviews: (offset: number, page_size: number, product_id: string) => {
    return axiosClient.get(
      `${url}/?offset=${offset}&page_size=${page_size}&product_id=${product_id}`
    );
  },
};

export default reviewApi;
