---
sidebar_position: 335
---
# sysfs-devices-coredump

### ファイル情報

- パス: `linux-v6.12/Documentation/ABI/testing/sysfs-devices-coredump`

### コンテンツ

```txt
What:		/sys/devices/.../coredump
Date:		December 2017
Contact:	Arend van Spriel <aspriel@gmail.com>
Description:
		The /sys/devices/.../coredump attribute is only present when the
		device is bound to a driver, which provides the .coredump()
		callback. The attribute is write only. Anything written to this
		file will trigger the .coredump() callback.

		Available when CONFIG_DEV_COREDUMP is enabled.

```
