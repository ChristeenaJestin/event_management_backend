import * as eventService from "../services/eventService.js";

export const createEvent = async (req, res, next) => {
  try {

    const event = await eventService.createEvent(
      req.body,
      req.user.id
    );

    res.status(201).json({
      success: true,
      message: "Event created successfully",
      data: event,
    });

  } catch (error) {
    next(error);
  }
};

export const getAllEvents = async (req, res, next) => {
  try {

    const events = await eventService.getAllEvents();

    res.status(200).json({
      success: true,
      data: events,
    });

  } catch (error) {
    next(error);
  }
};

export const getEventById = async (req, res, next) => {
  try {

    const event = await eventService.getEventById(
      req.params.id
    );

    res.status(200).json({
      success: true,
      data: event,
    });

  } catch (error) {
    next(error);
  }
};

export const updateEvent = async (req, res, next) => {
  try {

    const event = await eventService.updateEvent(
      req.params.id,
      req.body
    );

    res.status(200).json({
      success: true,
      message: "Event updated successfully",
      data: event,
    });

  } catch (error) {
    next(error);
  }
};

export const deleteEvent = async (req, res, next) => {
  try {

    await eventService.deleteEvent(req.params.id);

    res.status(200).json({
      success: true,
      message: "Event deleted successfully",
    });

  } catch (error) {
    next(error);
  }
};