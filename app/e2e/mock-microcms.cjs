// E2E用: microCMSへのfetchをダミーデータで置き換える（Next.jsサーバーの起動前に読み込む）
const originalFetch = globalThis.fetch;

const blog = (id) => ({
  id,
  title: `テスト記事${id}`,
  content: `<p>テスト本文${id}</p>`,
  createdAt: "2026-01-01T00:00:00.000Z",
  updatedAt: "2026-01-01T00:00:00.000Z",
});

globalThis.fetch = async (input, init) => {
  const url = String(input instanceof Request ? input.url : input);
  if (!url.includes("microcms.io")) return originalFetch(input, init);

  const detail = url.match(/\/blogs\/([^/?]+)/);
  const body = detail
    ? blog(detail[1])
    : {
        contents: [blog("a"), blog("b")],
        totalCount: 2,
        offset: 0,
        limit: 10,
      };

  return new Response(JSON.stringify(body), {
    headers: { "content-type": "application/json" },
  });
};
