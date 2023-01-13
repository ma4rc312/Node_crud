import { Task } from "../models/Task.js";

/////////////// Metodo GET Task ////////////////
export const getTasks = async (req, res) => {
  try {
    const tasks = await Task.findAll();
    res.json(tasks);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

///////////// Metodo GET por ID ////////////////
export const getTask = async (req, res) => {
    try {
        const { id } = req.params;
        const task = await Task.findOne({
            where: {
                id,
            },
        });

        if (!task) return res.status(404).json({ message: 'Task not found' });

        res.json(task);
    } catch (error) {
        return res.status(500).json({ message: error.message });
        
    }
}

/////////////// Metodo POST Task //////////////
export const createTask = async (req, res) => {
  const { name, done, projectId } = req.body;

  try {
    const newTask = await Task.create({
      name,
      done,
      projectId
    });

    res.json(newTask);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

////////////// Metodo PUT Task //////////////

export const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findOne({
       where: { id },
    });

    task.set(req.body);
    await task.save();

    return res.json(task);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

///////////// Metodo DELETE Task ////////////

export const deleteTask = async (req, res) => {
  const { id } = req.params;
  try {
    const results = await Task.destroy({
      where: { id },
    });

   console.log(results);
   return res.sendStatus(204)
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
