const PANDA_PLAYER_BASE =
  "https://player-vz-e44552b5-7e2.tv.pandavideo.com.br/embed/";

export function pandaEmbedUrl(
  videoId: string,
  params: Record<string, string | boolean> = {},
) {
  const search = new URLSearchParams({ v: videoId });
  for (const [key, value] of Object.entries(params)) {
    search.set(key, String(value));
  }
  return `${PANDA_PLAYER_BASE}?${search.toString()}`;
}
