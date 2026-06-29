import * as eventService from "../services/eventService.js";

export const createEvent = async (req, res) => {
  try {
    const eventData = {
      ...req.body,
      created_by: req.user.id
    };

    const event = await eventService.createEvent(eventData);

    res.status(201).json({
      success: true,
      message: "Event created successfully",
      data: event
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message
    });
  }
};

export const getAllEvents = async (req, res) => {
  try {
    const events = await eventService.getAllEvents();

    res.status(200).json({
      success: true,
      data: events
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message
    });
  }
};

export const getEventById = async (req, res) => {
  try {
    const event = await eventService.getEventById(req.params.id);

    res.status(200).json({
      success: true,
      data: event
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: err.message
    });
  }
};

export const updateEvent = async (req, res) => {
  try {
    const event = await eventService.updateEvent(req.params.id, req.body);

    res.status(200).json({
      success: true,
      message: "Event updated successfully",
      data: event
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message
    });
  }
};

export const deleteEvent = async (req, res) => {
  try {
    await eventService.deleteEvent(req.params.id);

    res.status(200).json({
      success: true,
      message: "Event deleted successfully"
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message
    });
  }
};