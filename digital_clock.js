const promise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(new Date());
    }, 1000);
  });
};

const main = async () => {
  for (;;) {
    try {
      const now = await promise();
      const hours = String(now.getHours());
      const minutes = String(now.getMinutes());
      const seconds = String(now.getSeconds());

      console.log(`${hours}:${minutes}:${seconds}`);
    } catch (error) {
      console.log("error");
    }
  }
};

main();
