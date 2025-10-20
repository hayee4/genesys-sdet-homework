const SWAG_LABS_ITEMS = {
    BACKPACK: 'Sauce Labs Backpack',
    FLEECE_JACKET: 'Sauce Labs Fleece Jacket',
    BIKE_LIGHT: 'Sauce Labs Bike Light',
    BOLT_TSHIRT: 'Sauce Labs Bolt T-Shirt',
    ONESIE: 'Sauce Labs Onesie',
    RED_TSHIRT: 'Test.allTheThings() T-Shirt (Red)',
};

export const CUSTOMER_INFO = {
    VALID_CUSTOMER: {
        firstName: 'John',
        lastName: 'Doe',
        zipCode: '12345',
    },
};

export const EXPECTED_MESSAGES = {
    ORDER_SUCCESS: {
        header: 'Thank you for your order!',
        confirmation: 'Your order has been dispatched',
    },
    ERROR_MESSAGES: {
        MISSING_CREDENTIALS: 'Epic sadface: Username is required',
    },
};

export const FOOTER_INFO = {
    YEAR: '2025',
    TERMS_OF_SERVICE: 'Terms of Service',
};

export const TEST_SCENARIOS = {
    TWO_ITEM_PURCHASE: {
        items: [SWAG_LABS_ITEMS.BACKPACK, SWAG_LABS_ITEMS.FLEECE_JACKET],
    },
};
