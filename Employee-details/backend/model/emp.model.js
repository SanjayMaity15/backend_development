import mongoose from "mongoose";

const empSchema = new mongoose.Schema(
  {
    empName: {
      type: String,
      required: true,
    },
    empAge: {
      type: Number,
      required: true,
    },
    empDesignation: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);


const Emp = mongoose.model("Emp", empSchema);
export default Emp