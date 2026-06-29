import * as registrationService from "../services/registrationService.js";

export const register = async (req, res, next) => {
  try {

    const registration =
      await registrationService.registerForEvent(
        req.user.id,
        req.params.id
      );

    res.status(201).json({
      success: true,
      message: "Registered successfully",
      data: registration,
    });

  } catch (error) {
    next(error);
  }
};

export const getParticipants = async (req, res, next) => {
  try {

    const participants =
      await registrationService.getParticipants(
        req.params.id
      );

    res.status(200).json({
      success: true,
      data: participants,
    });

  } catch (error) {
    next(error);
  }
};