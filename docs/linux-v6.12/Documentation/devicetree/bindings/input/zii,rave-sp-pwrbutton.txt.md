---
sidebar_position: 78
---
# zii,rave-sp-pwrbutton.txt

### ファイル情報

- パス: `linux-v6.12/Documentation/devicetree/bindings/input/zii,rave-sp-pwrbutton.txt`

### コンテンツ

```txt
Zodiac Inflight Innovations RAVE Supervisory Processor Power Button Bindings

RAVE SP input device is a "MFD cell" device corresponding to power
button functionality of RAVE Supervisory Processor. It is expected
that its Device Tree node is specified as a child of the node
corresponding to the parent RAVE SP device (as documented in
Documentation/devicetree/bindings/mfd/zii,rave-sp.txt)

Required properties:

- compatible: Should be "zii,rave-sp-pwrbutton"

Example:

	rave-sp {
		compatible = "zii,rave-sp-rdu1";
		current-speed = <38400>;

		pwrbutton {
			compatible = "zii,rave-sp-pwrbutton";
		};
	}

```
