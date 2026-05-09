import { getDatabase } from "../database/database";
import { Gadget, NewGadget } from "../types/gadget";

export const gadgetService = {
  //CREATE
  async create(gadget: NewGadget): Promise<number> {
    const db = await getDatabase();
    const result = await db.runAsync(
      "INSERT INTO gadgets(name, brand, category, price, purchaseYear) VALUES (?, ?, ?, ?, ?)",
      [
        gadget.name,
        gadget.brand,
        gadget.category,
        gadget.price!,
        gadget.purchaseYear!,
      ],
    );
    return result.lastInsertRowId;
  },

  //READ (ALL)
  async getAll(): Promise<Gadget[]> {
    const db = await getDatabase();
    const gadgets = await db.getAllAsync<Gadget>(
      "SELECT * FROM gadgets ORDER BY name ASC",
    );
    return gadgets;
  },

  //READ (BY ID)
  async getById(id: number): Promise<Gadget | null> {
    const db = await getDatabase();
    const gadget = await db.getFirstAsync<Gadget>(
      "SELECT * FROM gadgets WHERE id = ?",
      [id],
    );
    return gadget ?? null;
  },

  //UPDATE
  async update(id: number, gadget: NewGadget): Promise<void> {
    const db = await getDatabase();
    await db.runAsync(
      "UPDATE gadgets SET name=?, brand=?, category=?, price=?, purchaseYear=? WHERE id=?",
      [
        gadget.name,
        gadget.brand,
        gadget.category,
        gadget.price!,
        gadget.purchaseYear!,
        id,
      ],
    );
  },

  //DELETE
  async delete(id: number): Promise<void> {
    const db = await getDatabase();
    await db.runAsync("DELETE FROM gadgets WHERE id = ?", [id]);
  },
};
