---
sidebar_position: 496
---
# sysfs-platform-chipidea-usb2

### ファイル情報

- パス: `linux-v6.12/Documentation/ABI/testing/sysfs-platform-chipidea-usb2`

### コンテンツ

```txt
What:		/sys/bus/platform/devices/ci_hdrc.0/role
Date:		Mar 2017
Contact:	Peter Chen <peter.chen@nxp.com>
Description:
		When read, it returns string "gadget" or "host", indicating
		the current controller role.

		It will do role switch when "gadget" or "host" is written to it.
		Only controller at dual-role configuration supports writing.

```
