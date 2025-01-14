---
sidebar_position: 106
---
# ulpi.txt

### ファイル情報

- パス: `linux-v6.12/Documentation/devicetree/bindings/usb/ulpi.txt`

### コンテンツ

```txt
ULPI bus binding
----------------

Phys that are behind a ULPI connection can be described with the following
binding. The host controller shall have a "ulpi" named node as a child, and
that node shall have one enabled node underneath it representing the ulpi
device on the bus.

EXAMPLE
-------

usb {
	compatible = "vendor,usb-controller";

	ulpi {
		phy {
			compatible = "vendor,phy";
		};
	};
};

```
