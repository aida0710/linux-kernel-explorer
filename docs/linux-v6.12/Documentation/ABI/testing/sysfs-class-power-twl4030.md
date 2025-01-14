---
sidebar_position: 302
---
# sysfs-class-power-twl4030

### ファイル情報

- パス: `linux-v6.12/Documentation/ABI/testing/sysfs-class-power-twl4030`

### コンテンツ

```txt
What: /sys/class/power_supply/twl4030_usb/mode
Description:
	Changing mode for USB port.
	Writing to this can disable charging.

	Possible values are:

		=============	===========================================
		"auto"		draw power as appropriate for detected
				power source and battery status.
		"off"		do not draw any power.
		"continuous"	activate mode described as "linear" in
				TWL data sheets.  This uses whatever
				current is available and doesn't switch off
				when voltage drops.

				This is useful for unstable power sources
				such as bicycle dynamo, but care should
				be taken that battery is not over-charged.
		=============	===========================================

What: /sys/class/power_supply/twl4030_ac/mode
Description:
	Changing mode for 'ac' port.
	Writing to this can disable charging.

	Possible values are:

		======	===========================================
		"auto"	draw power as appropriate for detected
			power source and battery status.
		"off"	do not draw any power.
		======	===========================================

```
