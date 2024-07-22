import supabase from "./supabase";

export async function getRooms(room) {
  let query = supabase;
  if (room === "modern") query = query.from(room);
  if (room === "luxurious") query = query.from(room);
  if (room === "first-class") query = query.from(room);

  console.log(room);

  const { data, error } = await query.select("*");
  if (error) {
    console.error(error);
    throw new Error(
      `Sorry but ${room} rooms could not be fetched at the moment kindly check your network connection and try again`
    );
  }

  return data;
}

export async function getRoom({ room, id }) {
  let query = supabase;
  if (room === "modern") query = query.from(room);
  if (room === "luxurious") query = query.from(room);
  if (room === "first-class") query = query.from(room);

  const { data, error } = await query.select("*").eq("id", id).single();

  if (error) {
    console.error(error);
    throw new Error("data not found");
  }

  return data;
}
