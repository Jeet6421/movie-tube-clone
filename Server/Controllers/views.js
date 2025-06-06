import videofile from "../Models/videofile.js";
import mongoose from "mongoose";

export const viewcontroller = async (req, res) => {
  const { id: _id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send("video unavailable..");
  }
  try {
    const file = await videofile.findById(_id);
    const Views = file.views;
    const updateview = await videofile.findByIdAndUpdate(_id, {
      $set: { views: Views + 1 },
    });
    res.status(200).json(updateview);
  } catch (error) {
    res.staus(400).json("error", error);
  }
};
