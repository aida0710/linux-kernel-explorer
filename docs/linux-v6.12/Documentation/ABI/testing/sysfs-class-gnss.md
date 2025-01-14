---
sidebar_position: 261
---
# sysfs-class-gnss

### ファイル情報

- パス: `linux-v6.12/Documentation/ABI/testing/sysfs-class-gnss`

### コンテンツ

```txt
What:		/sys/class/gnss/gnss<N>/type
Date:		May 2018
KernelVersion:	4.18
Contact:	Johan Hovold <johan@kernel.org>
Description:
		The GNSS receiver type. The currently identified types reflect
		the protocol(s) supported by the receiver:

			======		===========
			"NMEA"		NMEA 0183
			"SiRF"		SiRF Binary
			"UBX"		UBX
			======		===========

		Note that also non-"NMEA" type receivers typically support a
		subset of NMEA 0183 with vendor extensions (e.g. to allow
		switching to a vendor protocol).

```
