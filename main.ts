// Till Firmware Do Us Part — make.fun bounty entry (u-azazex-till-firmware-do-us-part-32172929)
//
// One funny, heartfelt sentence: a robot's own wedding vow, under 200
// characters. Written to /output/entry.txt by this program.
import { mkdirSync, writeFileSync } from "node:fs";

const vow =
  "I take you as my partner, my charger, and my favorite bug, and I vow to love you until my last byte of memory forgets everything except you.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", vow, "utf8");
console.log(`Wrote ${vow.length} characters to /output/entry.txt`);
