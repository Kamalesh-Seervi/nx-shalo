import { test, expect } from '@playwright/test';
import { execSync } from 'child_process';

test('shalo CLI should display ASCII art', async () => {
    const result = execSync('node dist/index.js').toString();
    expect(result).toContain('shalo'); // Verify ASCII art contains 'shalo'
});
