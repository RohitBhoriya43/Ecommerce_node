
let  payment = {
    id: 'ch_3PWIJ6Rw2lbvuC531JNrg5WH',
    object: 'charge',
    amount: 22000,
    amount_captured: 22000,
    amount_refunded: 0,
    application: null,
    application_fee: null,
    application_fee_amount: null,
    balance_transaction: 'txn_3PWIJ6Rw2lbvuC531Cjpdo9x',
    billing_details: {
      address: {
        city: null,
        country: null,
        line1: null,
        line2: null,
        postal_code: null,
        state: null
      },
      email: null,
      name: null,
      phone: null
    },
    calculated_statement_descriptor: 'Stripe',
    captured: true,
    created: 1719494652,
    currency: 'usd',
    customer: null,
    description: null,
    destination: null,
    dispute: null,
    disputed: false,
    failure_balance_transaction: null,
    failure_code: null,
    failure_message: null,
    fraud_details: {},
    invoice: null,
    livemode: false,
    metadata: {},
    on_behalf_of: null,
    order: null,
    outcome: {
      network_status: 'approved_by_network',
      reason: null,
      risk_level: 'normal',
      risk_score: 43,
      seller_message: 'Payment complete.',
      type: 'authorized'
    },
    paid: true,
    payment_intent: null,
    payment_method: 'card_1PWIJ6Rw2lbvuC53j6ovDN4W',
    payment_method_details: {
      card: {
        amount_authorized: 22000,
        brand: 'visa',
        checks: [Object],
        country: 'US',
        exp_month: 6,
        exp_year: 2025,
        extended_authorization: [Object],
        fingerprint: 'q4Xi1oK9R6f4eWy9',
        funding: 'credit',
        incremental_authorization: [Object],
        installments: null,
        last4: '4242',
        mandate: null,
        multicapture: [Object],
        network: 'visa',
        network_token: [Object],
        overcapture: [Object],
        three_d_secure: null,
        wallet: null
      },
      type: 'card'
    },
    receipt_email: null,
    receipt_number: null,
    receipt_url: 'https://pay.stripe.com/receipts/payment/CAcaFwoVYWNjdF8xUFdCczFSdzJsYnZ1QzUzKP3P9bMGMgYe1t3M8686LBZYEmI29Qgjs2cFDYCHyK-FBItvhwYLr5LXs28q5PQ3cA9SZUgfldewWfjz',
    refunded: false,
    review: null,
    shipping: null,
    source: {
      id: 'card_1PWIJ6Rw2lbvuC53j6ovDN4W',
      object: 'card',
      address_city: null,
      address_country: null,
      address_line1: null,
      address_line1_check: null,
      address_line2: null,
      address_state: null,
      address_zip: null,
      address_zip_check: null,
      brand: 'Visa',
      country: 'US',
      customer: null,
      cvc_check: 'pass',
      dynamic_last4: null,
      exp_month: 6,
      exp_year: 2025,
      fingerprint: 'q4Xi1oK9R6f4eWy9',
      funding: 'credit',
      last4: '4242',
      metadata: {},
      name: null,
      tokenization_method: null,
      wallet: null
    },
    source_transfer: null,
    statement_descriptor: null,
    statement_descriptor_suffix: null,
    status: 'succeeded',
    transfer_data: null,
    transfer_group: null
  }