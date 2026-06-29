import * as registrationService from "../services/registrationService.js";

export const register = async (req, res) => {
  try {

    const registration = await registrationService.register(
      req.user.id,
      req.params.id
    );

    res.status(201).json({
      success: true,
      message: "Registered successfully",
      data: registration
    });

  } catch (err) {

    res.status(400).json({
      success: false,
      message: err.message
    });

  }
};

export const getParticipants = async (req, res) => {

  try {

    const participants = await registrationService.getParticipants(req.params.id);

    res.status(200).json({
      success: true,
      data: participants
    });

  } catch (err) {

    res.status(500).json({
      success: false,
      message: err.message
    });

  }

};