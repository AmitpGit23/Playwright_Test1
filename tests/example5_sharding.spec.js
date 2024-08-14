// const { exec } = require('child_process');
// const fs = require('fs');

// const files = fs.readdirSync('tests');
// const shardSize = Math.ceil(files.length / 3);

// for (let i = 0; i < 3; i++) {
//   const shardTests = files.slice(i * shardSize, (i + 1) * shardSize);
//   exec(`npx playwright test ${shardTests.join(' ')}`, (err, stdout, stderr) => {
//     if (err) {
//       console.error(`Error running shard ${i + 1}: ${stderr}`);
//     } else {
//       console.log(`Shard ${i + 1} output: ${stdout}`);
//     }
//   });
// }
