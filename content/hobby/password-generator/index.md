---
title: "Password Generator & Analyzer"
showSummary: true
showTaxonomies: true
showDate: false
---

The Phoenix-based [Password Generator & Analyzer](https://phoenix-password-generator.fly.dev/) is a simple password generator and password strength analysis tool.

{{< button href="https://phoenix-password-generator.fly.dev/" target="_blank" >}}
Visit Password Generator
{{< /button >}}

## Why?

Building a password generator tool seemed like a good way for me to learn Elixir. It started with a simple tool, [genevievecurry/elixir-password-generator](https://github.com/genevievecurry/elixir-password-generator), which can be run in an iex session.

After that, the next logical step was to extend it using [Phoenix LiveView](https://www.phoenixframework.org/) to build a simple 1-page website. Although Phoenix is far more powerful than is necessary for this task, it was a good introduction to the framework.

## Building it

The password generator uses the [1Password Strong Password Generator](https://1password.com/password-generator/) as inspiration for generating passwords, with a few modifications. The "memorable" passwords that my tool generates uses words from a [list of about ~5000 English words](https://github.com/first20hours/google-10000-english/blob/master/google-10000-english-usa-no-swears-medium.txt) that are between 5-8 characters.

The analysis uses [The Password Meter](http://www.passwordmeter.com/) as inspiration for the "common attributes" factors used to score passwords, with a few modifications. A strength rating of 100% is given to passwords that score 150 or higher. These are based loosely around the minimum requirements that many applications set for user accounts.

For "brute-force attack resistance", [zxcvbn](https://github.com/dropbox/zxcvbn) is used to test password strength against brute force attacks. I used an [elixir port](https://github.com/techgaun/zxcvbn-elixir) of this library for this project. [Dan Wheeler's essay on how to test for a strong password](https://dropbox.tech/security/zxcvbn-realistic-password-strength-estimation) is an interesting read. He notes that the following are also important factors in password security:

- Preventing online cracking with throttling or CAPTCHAs.
- Preventing offline cracking by selecting a suitably slow hash function with user-unique salts.
- Securing said password hashes.

## Screenshots

{{< figure
    src="password_generator.jpg"
    alt="A screenshot showing the Random password generation feature, which allows visitors to select character count and whether it includes numbers or symbols."
    caption="An example of a random 12-character password deemed to be 87% awesome."
    style="browser"
    >}}

{{< figure
    src="password_analysis.jpg"
    alt="A screenshot showing the Password Generator's password analysis functionality."
    caption="Password analysis, scoring each generated or submitted passwords strength and estimated time to crack in a brute-force attack."
    style="browser"
    >}}
