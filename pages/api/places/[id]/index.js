import dbConnect from "@/db/connect";
import Place from "@/db/models/Place";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  if (request.method === "GET") {
    try {
      const place = await Place.findById(id);
      response.status(200).json(place);
      if (!place) {
        return response.status(404).json({ status: "Not found" });
      }
      response.status(200).json(place);
    } catch (error) {
      console.error(error);
      return response.status(400).json({ error: error.message });
    }
  }

  if (request.method === "PUT") {
    try {
      const placeData = request.body;
      await Place.findByIdAndUpdate(id, placeData);
      response
        .status(200)
        .json({ message: "Place ${id} successfully updated" });
    } catch (error) {
      console.log(error);
      response.status(400).json({ error: error.message });
    }
  }

  if (request.method === "DELETE") {
    try {
      await Place.findByIdAndDelete(id);
      response
        .status(200)
        .json({ message: "Place ${id} successfully deleted" });
    } catch (error) {
      console.error(error);
      return response.status(400).json({ error: error.message });
    }
  } else {
    return response.status(405).json({ message: "Method not allowed" });
  }
}
