# Be sure to restart your server when you modify this file.

# Your secret key is used for verifying the integrity of signed cookies.
# If you change this key, all old signed cookies will become invalid!

# Make sure the secret is at least 30 characters and all random,
# no regular words or you'll be exposed to dictionary attacks.
# You can use `rake secret` to generate a secure secret key.

# Make sure your secret_key_base is kept private
# if you're sharing your code publicly.
Journal::Application.config.secret_key_base = 'e49002af9a6a4075e12b3e81c5f8b48c3699c3ab4e3bc25c0c37ffa19c7f3f11dff8d4771dd2df47bbbe0556285ea2f413fc7d53563705defb0241c2ebbdb3ca'
