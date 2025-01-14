---
sidebar_position: 13
---
# sysfs-bus-w1

### ファイル情報

- パス: `linux-v6.12/Documentation/ABI/stable/sysfs-bus-w1`

### コンテンツ

```txt
What:		/sys/bus/w1/devices/.../w1_master_timeout_us
Date:		April 2015
Contact:	Dmitry Khromov <dk@icelogic.net>
Description:	Bus scanning interval, microseconds component.
		Some of 1-Wire devices commonly associated with physical access
		control systems are attached/generate presence for as short as
		100 ms - hence the tens-to-hundreds milliseconds scan intervals
		are required.

		see Documentation/w1/w1-generic.rst for detailed information.
Users:		any user space application which wants to know bus scanning
		interval

```
