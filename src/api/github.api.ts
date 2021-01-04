import axios, { AxiosResponse } from "axios";

import { Release } from "@/model/github-release.model";

export class GithubApi {
  static getRepoInfo(
    repo: string,
    owner: string
  ): Promise<AxiosResponse<Release>> {
    return axios.get<Release>(
      `https://api.github.com/repos/${owner}/${repo}/releases/latest`
    );
  }
}
