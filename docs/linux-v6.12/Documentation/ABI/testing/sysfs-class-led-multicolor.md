---
sidebar_position: 273
---
# sysfs-class-led-multicolor

### ファイル情報

- パス: `linux-v6.12/Documentation/ABI/testing/sysfs-class-led-multicolor`

### コンテンツ

```txt

What:		/sys/class/leds/<led>/multi_index
Date:		March 2020
KernelVersion:	5.9
Contact:	Dan Murphy <dmurphy@ti.com>
Description:	read
		The multi_index array, when read, will output the LED colors
		as an array of strings as they are indexed in the
		multi_intensity file.

		For additional details please refer to
		Documentation/leds/leds-class-multicolor.rst.

What:		/sys/class/leds/<led>/multi_intensity
Date:		March 2020
KernelVersion:	5.9
Contact:	Dan Murphy <dmurphy@ti.com>
Description:	read/write
		This file contains array of integers. Order of components is
		described by the multi_index array. The maximum intensity should
		not exceed /sys/class/leds/<led>/max_brightness.

		For additional details please refer to
		Documentation/leds/leds-class-multicolor.rst.

```
