const express = require("express");
const router = express.Router();


const {getCampaigns, getCampaign, createCampaign, updateCampaign} = require('../controllers/campaignController');

// GET /api/campaigns

router.get('/campaigns', getCampaigns);

// GET /api/campaigns/:id

router.get('/campaign/:id', getCampaign);

// POST /api/campaigns

router.post('/campaign', createCampaign);

// PUT /api/campaigns/:id

router.put('campaign/:id', updateCampaign);

module.exports = router;