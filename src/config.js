module.exports = {
  token: process.env.token || "MTM1ODczNzkzMDAwNDMzNjc2MQ.GybZBq.so8x4lkjN5XfkFEY_sh7y8dn-EX1XBbZmgsZq", // Your bot token
  channelId: process.env.channelId || "1359833054893572276", //Channel Id you want to send the message

  webMonitor: true, // Set to false if you don't want to use web-monitor
  expressPort: process.env.expressPort || 443, // Port for web monitor

  nodes: [
    {
      host: "Aiko",
      password: "",
      port: 2333,
      identifier: "",
      secure: true,
      reconnectTimeout: 300000,
      reconnectTries: 100,
    },
    {
      host: "",
      password: "",
      port: 2333,
      identifier: "",
      secure: true,
      reconnectTimeout: 300000,
      reconnectTries: 100,
    },
    {
      host: "",
      password: "",
      port: 2333,
      identifier: "",
      secure: true,
      reconnectTimeout: 300000,
      reconnectTries: 100,
    },
  ],
};
