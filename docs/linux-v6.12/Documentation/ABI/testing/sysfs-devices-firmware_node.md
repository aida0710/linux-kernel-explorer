---
sidebar_position: 337
---
# sysfs-devices-firmware_node

### ファイル情報

- パス: `linux-v6.12/Documentation/ABI/testing/sysfs-devices-firmware_node`

### コンテンツ

```txt
What:		/sys/devices/.../firmware_node/
Date:		September 2012
Contact:	<>
Description:
		The /sys/devices/.../firmware_node directory contains attributes
		allowing the user space to check and modify some firmware
		related properties of given device.

What:		/sys/devices/.../firmware_node/description
Date:		September 2012
Contact:	Lance Ortiz <lance.ortiz@hp.com>
Description:
		The /sys/devices/.../firmware/description attribute contains a string
		that describes the device as provided by the _STR method in the ACPI
		namespace.  This attribute is read-only.  If the device does not have
		an _STR method associated with it in the ACPI namespace, this
		attribute is not present.

```
