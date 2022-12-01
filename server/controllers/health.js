const healthCheck = async (req, res) => {
  return res.json({
    uptime: process.uptime(),
  });
};

export default {healthCheck};
