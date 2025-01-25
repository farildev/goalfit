import api from "../api";

const recipeService = api.injectEndpoints({
  endpoints : (builder) => ({
    getRecipes : builder.query({
      query : (params) => ({
        url : '/recipes',
        params
      }),
      providesTags : ['RECIPES']
    }),
    getRecipeById : builder.query({
      query : (id) => ({
        url : `/recipes/${id}`,
      })
    }),
  }),
  overrideExisting : true
})

export const {useGetRecipesQuery, useGetRecipeByIdQuery} = recipeService;
export default recipeService;