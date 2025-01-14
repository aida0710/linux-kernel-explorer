---
sidebar_position: 278
---
# sysfs-class-led-trigger-usbport

### ファイル情報

- パス: `linux-v6.12/Documentation/ABI/testing/sysfs-class-led-trigger-usbport`

### コンテンツ

```txt
What:		/sys/class/leds/<led>/ports/<port>
Date:		September 2016
KernelVersion:	4.9
Contact:	linux-leds@vger.kernel.org
		linux-usb@vger.kernel.org
Description:
		Every dir entry represents a single USB port that can be
		selected for the USB port trigger. Selecting ports makes trigger
		observing them for any connected devices and lighting on LED if
		there are any.

		Echoing "1" value selects USB port. Echoing "0" unselects it.
		Current state can be also read.

```
