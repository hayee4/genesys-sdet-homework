import { expect, test } from '@playwright/test';
import type { User } from '../../types/json-placeholder/types';

test('REST API testing: GET /users', { tag: ['@api', '@json-placeholder'] }, async ({ request }) => {
    // === Send GET request to /users endpoint ===
    const response = await request.get('https://jsonplaceholder.typicode.com/users');
    expect(response.status()).toBe(200);

    // === Parse the JSON response ===
    const users: User[] = await response.json();

    // === Log only the names and emails of the users ===
    // e.g. "Leanne Graham | Sincere@april.biz"
    console.log('\n=== Users List ===');
    users.forEach((user: User) => {
        console.log(`${user.name} | ${user.email}`);
    });

    // === Verify the first email address contains '@' ===
    expect(users[0].email).toContain('@');
});
