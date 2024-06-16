// campaign
const Campaign = require('../models/campaign');

// GET /api/campaigns
const getCampaigns = async (req, res) => {
  try {
    const campaigns = await Campaign.find();
    res.json(campaigns);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET /api/campaigns/:id
const getCampaign = async (req, res) => {
  try {
    const campaign = await Campaign.findById(req.params.id);
    if (campaign == null) {
      return res.status(404).json({ message: 'Campaign not found' });
    }
    res.json(campaign);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// POST /api/campaigns
const createCampaign = async (req, res) => {
  
  try {
    const campaign =  Campaign.create({
        owner: req.body.owner,
        title: req.body.title,
        description: req.body.description,
        target: req.body.target,
        deadline: req.body.deadline,
        image: req.body.image
      });
      console.log(campaign);  
      if (campaign) {
        res.status(201).json({
          data: campaign,
          message: "Item added successfully",
        });
      }
 
    // res.status(201).json(campaign);
  } 
  catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// PUT /api/campaigns/:id

const updateCampaign = async (req, res) => {
    try {
        const campaign = await Campaign.findById(req.params.id);
        if (campaign == null) {
        return res.status(404).json({ message: 'Campaign not found' });
        }
    
        if (req.body.owner != null) {
        campaign.owner = req.body.owner;
        }
        if (req.body.title != null) {
        campaign.title = req.body.title;
        }
        if (req.body.description != null) {
        campaign.description = req.body.description;
        }
        if (req.body.target != null) {
        campaign.target = req.body.target;
        }
        if (req.body.deadline != null) {
        campaign.deadline = req.body.deadline;
        }
        if (req.body.image != null) {
        campaign.image = req.body.image;
        }
    
        const updatedCampaign = await campaign.save();
        res.json(updatedCampaign);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
    };

// DELETE /api/campaigns/:id
const deleteCampaign = async (req, res) => {
  try {
    const campaign = await Campaign.findById(req.params.id);
    if (campaign == null) {
      return res.status(404).json({ message: 'Campaign not found' });
    }
    await campaign.remove();
    res.json({ message: 'Campaign deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
    getCampaigns,
    getCampaign,
    createCampaign,
    updateCampaign,
    deleteCampaign
    };