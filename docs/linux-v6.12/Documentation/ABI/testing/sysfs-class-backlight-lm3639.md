---
sidebar_position: 242
---
# sysfs-class-backlight-lm3639

### ファイル情報

- パス: `linux-v6.12/Documentation/ABI/testing/sysfs-class-backlight-lm3639`

### コンテンツ

```txt
sysfs interface for Texas Instruments lm3639 backlight + flash led driver chip
------------------------------------------------------------------------------

What:		/sys/class/backlight/<backlight>/bled_mode
Date:		Oct, 2012
KernelVersion:	v3.10
Contact:	dri-devel@lists.freedesktop.org
Description:
		(WO) Write to the backlight mapping mode. The backlight current
		can be mapped for either exponential (value "0") or linear
		mapping modes (default).

```
