import { Score, DatasetSample } from "@empiricalrun/types";

export interface Scorer {
  (
    sample: DatasetSample,
    output: string | null | undefined,
    value?: string,
  ): Promise<Score>;
}
