---
sidebar_position: 288
---
# sysfs-class-net-janz-ican3

### ファイル情報

- パス: `linux-v6.12/Documentation/ABI/testing/sysfs-class-net-janz-ican3`

### コンテンツ

```txt
What:		/sys/class/net/<iface>/termination
Date:		May 2010
KernelVersion:	2.6.35
Contact:	Ira W. Snyder <ira.snyder@gmail.com>
Description:
		Value representing the can bus termination

		Default: 1 (termination active)
		Reading: get actual termination state
		Writing: set actual termination state (0=no termination, 1=termination active)

What:		/sys/class/net/<iface>/fwinfo
Date:		May 2015
KernelVersion:	3.19
Contact:	Andreas Gröger <andreas24groeger@gmail.com>
Description:
		Firmware stamp of ican3 module
		Read-only: 32 byte string identification of the ICAN3 module
		(known values: "JANZ-ICAN3 ICANOS 1.xx", "JANZ-ICAN3 CAL/CANopen 1.xx")

```
