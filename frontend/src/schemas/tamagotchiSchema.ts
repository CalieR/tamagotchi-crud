import { z } from "zod";

const newTamagotchiSchema = z.object({
  name: z.string().min(1, "Name is required"),
  species: z.string().min(3, "Species is required"),
  owner: z.string(),
});

export default newTamagotchiSchema;