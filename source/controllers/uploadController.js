import { uploadToS3, deleteFromS3 } from "../services/s3Service.js";

export const uploadFile = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "No file uploaded.",
      });
    }

    const result = await uploadToS3(req.file);

    return res.status(200).json({
      success: true,
      message: "File uploaded successfully.",
      file: result,
    });
  } catch (error) {
    console.error("Upload Error:", error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const deleteFile = async (req, res) => {
  try {
    const { fileKey } = req.params;

    await deleteFromS3(fileKey);

    return res.status(200).json({
      success: true,
      message: "File deleted successfully.",
    });
  } catch (error) {
    console.error("Delete Error:", error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};