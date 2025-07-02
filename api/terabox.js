export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const url = searchParams.get("url");
  const rename = searchParams.get("rename");

  if (!url) {
    return Response.json({ status: "error", message: "URL kosong" }, { status: 400 });
  }

  // Simulasi response sukses (belum scraping beneran)
  const filename = rename || "Contoh_File.mp4";
  return Response.json({
    status: "success",
    data: {
      name: filename,
      size: "12 MB",
      download: "https://download.contoso.com/files/video123.mp4"
    }
  });
}
