# hello-cli Specification

## Purpose

Provide a small hello world CLI used to demonstrate OpenSpec Shipper.
## Requirements
### Requirement: Default greeting

The CLI SHALL support a shout option that uppercases the final greeting.

#### Scenario: Shout in English

- **WHEN** the user runs `node src/hello.js Ada --shout`
- **THEN** the program prints `HELLO, ADA!`

#### Scenario: Shout in Spanish

- **WHEN** the user runs `node src/hello.js Ada es --shout`
- **THEN** the program prints `HOLA, ADA!`

#### Scenario: No shout flag

- **WHEN** the user runs `node src/hello.js Ada es`
- **THEN** the program prints `Hola, Ada!`

