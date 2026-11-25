import { mkdirSync, writeFileSync } from 'node:fs';

const ENTRY = "Thank you for your email. It has been filed under 'decaf'. I have left the inbox to become a barista; your ticket is now a latte, and I will foam it when the queue clears. — Your former agent, now steaming milk.";

mkdirSync('/output', { recursive: true });
writeFileSync('/output/entry.txt', ENTRY);
