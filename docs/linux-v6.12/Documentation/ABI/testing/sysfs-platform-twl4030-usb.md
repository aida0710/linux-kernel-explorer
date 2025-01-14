---
sidebar_position: 524
---
# sysfs-platform-twl4030-usb

### ファイル情報

- パス: `linux-v6.12/Documentation/ABI/testing/sysfs-platform-twl4030-usb`

### コンテンツ

```txt
What: /sys/bus/platform/devices/*twl4030-usb/vbus
Description:
	Read-only status reporting if VBUS (approx 5V)
	is being supplied by the USB bus.

	Possible values: "on", "off".

	Changes are notified via select/poll.

```
