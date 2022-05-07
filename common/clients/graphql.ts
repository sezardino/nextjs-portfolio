import { gql, GraphQLClient } from "graphql-request";
import * as Queries from "@/common/queries";
import { IndexPageData, IndexPageResponse } from "@/common/types";

interface IApiClient {
  getIndexPageData(): Promise<IndexPageData | undefined>;
}

class ApiClient implements IApiClient {
  private readonly client: GraphQLClient;

  constructor(url: string | undefined) {
    this.client = new GraphQLClient(url || "");
  }

  private async get<T>(query: string): Promise<T> {
    return await this.client.request<T>(query);
  }

  async getIndexPageData(): Promise<IndexPageData | undefined> {
    const query = gql`
        query getData {
          ${Queries.meta}
          ${Queries.projects}
          ${Queries.skills}
          ${Queries.socials}
          ${Queries.author}
        }
    `;

    try {
      const response = await this.get<IndexPageResponse>(query);

      return this.indexPageMapper(response);
    } catch (error) {
      console.log(error);
    }
  }

  private indexPageMapper(data: IndexPageResponse): IndexPageData {
    return {
      ...data,
      metas: data.metas[0],
      socials: data.socials[0],
      authors: data.authors[0],
    };
  }
}

export const apiClient = new ApiClient(process.env.NEXT_PUBLIC_CONTENT_API);
