---
sidebar_position: 12
---
# sysfs-driver-hid-roccat-lua

### ファイル情報

- パス: `linux-v6.12/Documentation/ABI/obsolete/sysfs-driver-hid-roccat-lua`

### コンテンツ

```txt
What:		/sys/bus/usb/devices/<busnum>-<devnum>:<config num>.<interface num>/control
Date:		October 2012
Contact:	Stefan Achatz <erazor_de@users.sourceforge.net>
Description:	When written, cpi, button and light settings can be configured.
		When read, actual cpi setting and sensor data are returned.
		The data has to be 8 bytes long.
Users:		http://roccat.sourceforge.net

```
