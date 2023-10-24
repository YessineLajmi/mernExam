const order = require("../model/order");

module.exports.getAllorders = async (req, res) => {
  try {
    const orders = await order.find();
    return res.status(200).json(orders);
  } catch (e) {
    return res.status(400).json({ message: e.message });
  }
};

module.exports.createorder = (req, res) => {
  const { pizza, sizes, deliveryTime, notes } = req.body;

  const neworder = new order({
    pizza,
    sizes,
    deliveryTime,
    notes,
  });

  neworder
    .save()
    .then(() => {
      return res.status(200).json({ message: "order added" });
    })
    .catch((e) => {
      return res.status(500).json({ message: e.message });
    });
};

module.exports.update = async (req, res) => {
  const { id } = req.params;
  const theorder = await order.findById(id);
  theorder.isdeliverd = !theorder.isdeliverd;

  theorder
    .save()
    .then(() => {
      return res.json({ message: "order updated" });
    })
    .catch((e) => {
      return res.json({ message: e.message });
    });
};

module.exports.remove = async (req, res) => {
  const { id } = req.params;
  order
    .findByIdAndRemove(id)
    .then(() => {
      return res.json({ message: "order updated" });
    })
    .catch((e) => {
      return res.json({ message: e.message });
    });
};

module.exports.getallundeliveredorders = async (req, res) => {
  try {
    const orders = await order.find({ isdeliverd: false });
    return res.status(200).json(orders);
  } catch (e) {
    return res.status(400).json({ message: e.message });
  }
};

module.exports.getalldeliveredorders = async (req, res) => {
  try {
    const orders = await order.find({ isdeliverd: true });
    return res.status(200).json(orders);
  } catch (e) {
    return res.status(400).json({ message: e.message });
  }
};

module.exports.isAble = async (req, res) => {
  try {
    const orders = await order.find({ isdeliverd: false });
    return res.send(orders.length < 10);
  } catch (e) {
    return res.status(400).json({ message: e.message });
  }
};
