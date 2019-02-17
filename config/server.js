module.exports = {
  APPLICATION_ID:
    process.env.APPLICATION_ID ||
    "e21f336b8b140fb26c7125f80d7db79c0bf91e48c4e81d703db6275bfdcb3780",
  SECRET:
    process.env.SECRET ||
    "2db4d104cd8161410323ee14167269fc62dce19989ab7c34c1c5d10166950ed7",
  CALLBACK_URL: process.env.CALLBACK_URL || "http://localhost:3000"
};
