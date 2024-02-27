const { createLoginModel, createHeaderModel, createMyProfileModel, createListModel, createFullScreenModel} = require('../models/DataModel');

const loginModel = createLoginModel();
const headerModel = createHeaderModel();
const myprofileModel = createMyProfileModel();
const listModel = createListModel();
const fullscreenModel = createFullScreenModel();

exports.getloginData = async (req, res) => {
  try {
    const data = await loginModel.find();
    console.log('Header Data:', data);
    if (!data) {
      throw new Error('Header data not found');
    }
    res.json(data);
  } catch (error) {
    console.error('Error fetching header data:', error);
    res.status(500).json({ error: 'Error fetching header data' });
  }
};

exports.getheaderData = async (req, res) => {
  try {
    const data = await headerModel.find();
    console.log('Header Data:', data);
    if (!data) {
      throw new Error('Header data not found');
    }
    res.json(data);
  } catch (error) {
    console.error('Error fetching header data:', error);
    res.status(500).json({ error: 'Error fetching header data' });
  }
};

exports.getmyprofileData = async (req, res) => {
  try {
    const data = await myprofileModel.find();
    console.log('Header Data:', data);
    if (!data) {
      throw new Error('Header data not found');
    }
    res.json(data);
  } catch (error) {
    console.error('Error fetching header data:', error);
    res.status(500).json({ error: 'Error fetching header data' });
  }
};

exports.getlistData = async (req, res) => {
  try {
    const data = await listModel.find();
    console.log('Header Data:', data);
    if (!data) {
      throw new Error('Header data not found');
    }
    res.json(data);
  } catch (error) {
    console.error('Error fetching header data:', error);
    res.status(500).json({ error: 'Error fetching header data' });
  }
};

exports.getfullscreenData = async (req, res) => {
  try {
    const data = await fullscreenModel.find();
    console.log('Header Data:', data);
    if (!data) {
      throw new Error('Header data not found');
    }
    res.json(data);
  } catch (error) {
    console.error('Error fetching header data:', error);
    res.status(500).json({ error: 'Error fetching header data' });
  }
};