export interface PredictionResult {
  label: string;
  confidence: number;
  threat: string;
  description: string;
  model: string;
  inference_time_ms: number;
  image?: string;
}

export interface DatasetInfo {
  name: string;
  source: string;
  total_images: number;
  classes: string[];
  resolution_distribution: Record<string, number>;
  split: Record<string, number>;
  samples: Array<{
    id: number;
    filename: string;
    label: string;
    split: string;
  }>;
}
