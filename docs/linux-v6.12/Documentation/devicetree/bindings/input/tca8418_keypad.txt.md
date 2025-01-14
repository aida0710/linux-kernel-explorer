---
sidebar_position: 71
---
# tca8418_keypad.txt

### ファイル情報

- パス: `linux-v6.12/Documentation/devicetree/bindings/input/tca8418_keypad.txt`

### コンテンツ

```txt
This binding is based on the matrix-keymap binding with the following
changes:

keypad,num-rows and keypad,num-columns are required.

Required properties:
- compatible: "ti,tca8418"
- reg: the I2C address
- interrupts: IRQ line number, should trigger on falling edge
- linux,keymap: Keys definitions, see keypad-matrix.

```
