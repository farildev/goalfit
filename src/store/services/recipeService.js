import { API_KEY } from '@/constants/BaseUrl';
import api from '../api';

const recipeService = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllRecipes: builder.query({
      query: (params) => ({
        url: '/recipes/complexSearch',
        params: {
          ...params,
          apiKey: API_KEY,
          addRecipeNutrition: true,
        },
      }),
      providesTags: ['RECIPES'],
    }),
  }),
  overrideExisting: true,
});

export const { useGetAllRecipesQuery } = recipeService;
export default recipeService;
