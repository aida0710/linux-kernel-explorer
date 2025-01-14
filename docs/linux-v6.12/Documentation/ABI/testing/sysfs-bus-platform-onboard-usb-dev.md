---
sidebar_position: 219
---
# sysfs-bus-platform-onboard-usb-dev

### ファイル情報

- パス: `linux-v6.12/Documentation/ABI/testing/sysfs-bus-platform-onboard-usb-dev`

### コンテンツ

```txt
What:		/sys/bus/platform/devices/<dev>/always_powered_in_suspend
Date:		June 2022
KernelVersion:	5.20
Contact:	Matthias Kaehlcke <matthias@kaehlcke.net>
		linux-usb@vger.kernel.org
Description:
		(RW) Controls whether the USB hub remains always powered
		during system suspend or not. This attribute is not
		available for non-hub devices.

```
