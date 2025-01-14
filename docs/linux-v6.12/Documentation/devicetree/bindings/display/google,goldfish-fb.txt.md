---
sidebar_position: 41
---
# google,goldfish-fb.txt

### ファイル情報

- パス: `linux-v6.12/Documentation/devicetree/bindings/display/google,goldfish-fb.txt`

### コンテンツ

```txt
Android Goldfish framebuffer

Android Goldfish framebuffer device used by Android emulator.

Required properties:

- compatible : should contain "google,goldfish-fb"
- reg        : <registers mapping>
- interrupts : <interrupt mapping>

Example:

	display-controller@1f008000 {
		compatible = "google,goldfish-fb";
		interrupts = <0x10>;
		reg = <0x1f008000 0x100>;
	};

```
